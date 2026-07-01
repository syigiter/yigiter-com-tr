#!/usr/bin/env python3
"""Generate a local Vercel Analytics and Speed Insights Markdown report.

This script is read-only. It shells out to the already-authenticated Vercel CLI
and uses `vercel metrics ... --format json` to query aggregated production
Web Analytics and Speed Insights data.

Security notes:
- No token or secret is written to disk.
- Raw JSON is parsed in memory and is not saved.
- If VERCEL_TOKEN is configured, the script does not print it or persist it.
- Generated Markdown reports go under reports/, which is ignored by git.
"""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
from collections import OrderedDict
from datetime import date
from pathlib import Path
from typing import Any


PROJECT = "yigiter-com-tr"
REPORTS_DIR = Path("reports")

TRACKED_PATHS = [
    "/",
    "/en/interior-door-components",
    "/en/interior-door-components/",
    "/teklif-al",
    "/teklif-al/",
    "/teklif-al?urun=interior-door-components",
    "/ihracat",
    "/ihracat/",
    "/urunler",
    "/urunler/",
    "/urunler/kapi-pervazi/",
    "/urunler/kapi-kasasi/",
    "/urunler/melamin-kapi-yuzeyi/",
    "/urunler/pvc-film/",
    "/urunler/mdf/",
    "/urunler/mdflam/",
    "/urunler/kapi-paneli/",
    "/urunler/genc-boya/",
    "/urunler/kastamonu-entegre/",
]

COUNTRY_LABELS = {
    "": "Bilinmiyor",
    "US": "United States",
    "TR": "Türkiye",
    "GB": "United Kingdom",
    "DE": "Germany",
    "NL": "Netherlands",
    "CA": "Canada",
    "AE": "United Arab Emirates",
    "SA": "Saudi Arabia",
    "QA": "Qatar",
    "KW": "Kuwait",
    "BH": "Bahrain",
    "OM": "Oman",
}

GULF_COUNTRIES = {"AE", "SA", "QA", "KW", "BH", "OM"}
KEY_SPEED_PATHS = ["/", "/en/interior-door-components", "/teklif-al", "/urunler"]
SPEED_METRICS = [
    ("LCP", "vercel.speed_insights.lcp_ms", "ms"),
    ("INP", "vercel.speed_insights.inp_ms", "ms"),
    ("CLS", "vercel.speed_insights.cls", "score"),
    ("FCP", "vercel.speed_insights.fcp_ms", "ms"),
    ("TTFB", "vercel.speed_insights.ttfb_ms", "ms"),
]


class ReportError(RuntimeError):
    pass


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate a local Vercel Analytics / Speed Insights Markdown report."
    )
    parser.add_argument(
        "--days",
        type=int,
        default=7,
        help="Primary lookback window for the report summary. Default: 7.",
    )
    parser.add_argument(
        "--output",
        default=f"reports/vercel-analytics-{date.today().isoformat()}.md",
        help="Markdown output path. Default: reports/vercel-analytics-YYYY-MM-DD.md",
    )
    parser.add_argument(
        "--project",
        default=PROJECT,
        help=f"Vercel project name or ID. Default: {PROJECT}.",
    )
    return parser.parse_args()


def extract_json(stdout: str) -> Any:
    starts = [idx for idx in (stdout.find("{"), stdout.find("[")) if idx != -1]
    if not starts:
        raise ReportError(f"Vercel CLI did not return JSON:\n{stdout.strip()}")
    payload = stdout[min(starts) :]
    return json.loads(payload)


def run_vercel(args: list[str]) -> Any:
    if not shutil.which("vercel"):
        raise ReportError("Vercel CLI is not installed or not available in PATH.")

    command = ["vercel", *args]
    result = subprocess.run(command, text=True, capture_output=True, check=False)
    if result.returncode != 0:
        raise ReportError(
            "Vercel CLI command failed:\n"
            f"$ {' '.join(command)}\n"
            f"{result.stderr.strip() or result.stdout.strip()}"
        )
    return extract_json(result.stdout)


def metrics_query(
    metric: str,
    *,
    days: int,
    project: str,
    aggregation: str = "sum",
    group_by: str | None = None,
    filters: list[str] | None = None,
    limit: int = 10,
    granularity: str | None = None,
) -> dict[str, Any]:
    args = [
        "metrics",
        metric,
        "--project",
        project,
        "--prod",
        "--since",
        f"{days}d",
        "--format",
        "json",
        "--aggregation",
        aggregation,
    ]
    if group_by:
        args.extend(["--group-by", group_by, "--limit", str(limit)])
    if granularity:
        args.extend(["--granularity", granularity])
    for expression in filters or []:
        args.extend(["--filter", expression])
    return run_vercel(args)


def summary_value(result: dict[str, Any], key: str) -> int | float:
    rows = result.get("summary") or []
    if not rows:
        return 0
    value = rows[0].get(key, 0)
    return value or 0


def pageviews_total(days: int, project: str) -> int:
    result = metrics_query(
        "vercel.analytics_pageview.count",
        days=days,
        project=project,
        granularity="1d",
    )
    return int(summary_value(result, "vercel_analytics_pageview_count_sum"))


def grouped_pageviews(days: int, project: str, dimension: str, limit: int = 10) -> list[dict[str, Any]]:
    result = metrics_query(
        "vercel.analytics_pageview.count",
        days=days,
        project=project,
        group_by=dimension,
        limit=limit,
    )
    return result.get("summary") or []


def exact_path_pageviews(path: str, days: int, project: str) -> tuple[int, str]:
    normalized = path
    note = ""
    if "?" in normalized:
        normalized = normalized.split("?", 1)[0]
        note = "Vercel request_path query string'i ayrı kırılım olarak göstermiyor; ana path üzerinden okundu."
    if normalized != "/" and normalized.endswith("/"):
        normalized = normalized.rstrip("/")
        note = note or "Vercel request_path trailing slash olmadan tutulduğu için slash'sız path üzerinden okundu."

    result = metrics_query(
        "vercel.analytics_pageview.count",
        days=days,
        project=project,
        filters=[f"request_path eq '{normalized}'"],
    )
    return int(summary_value(result, "vercel_analytics_pageview_count_sum")), note


def collect_path_table(project: str) -> list[dict[str, Any]]:
    rows = []
    for path in TRACKED_PATHS:
        count_7, note_7 = exact_path_pageviews(path, 7, project)
        count_28, note_28 = exact_path_pageviews(path, 28, project)
        note = note_7 or note_28
        rows.append({"path": path, "7d": count_7, "28d": count_28, "note": note})
    return rows


def index_by_dimension(rows: list[dict[str, Any]], dimension: str) -> OrderedDict[str, int]:
    output: OrderedDict[str, int] = OrderedDict()
    for row in rows:
        key = str(row.get(dimension, ""))
        output[key] = int(row.get("vercel_analytics_pageview_count_sum") or 0)
    return output


def merge_dimension_rows(
    rows_7: list[dict[str, Any]],
    rows_28: list[dict[str, Any]],
    dimension: str,
    limit: int = 12,
) -> list[dict[str, Any]]:
    map_7 = index_by_dimension(rows_7, dimension)
    map_28 = index_by_dimension(rows_28, dimension)
    keys = list(OrderedDict.fromkeys([*map_7.keys(), *map_28.keys()]))
    merged = [
        {dimension: key, "7d": map_7.get(key, 0), "28d": map_28.get(key, 0)}
        for key in keys
    ]
    merged.sort(key=lambda item: (item["7d"], item["28d"]), reverse=True)
    return merged[:limit]


def speed_rows(project: str) -> list[dict[str, Any]]:
    rows = []
    for label, metric, unit in SPEED_METRICS:
        result = metrics_query(
            metric,
            days=7,
            project=project,
            aggregation="p75",
            group_by="request_path",
            limit=50,
        )
        values = {
            str(row.get("request_path", "")): row
            for row in result.get("summary", [])
        }
        value_key = metric.replace(".", "_") + "_p75"
        for path in KEY_SPEED_PATHS:
            row = values.get(path)
            value = row.get(value_key) if row else None
            rows.append({"metric": label, "path": path, "value": value, "unit": unit})
    return rows


def md_table(headers: list[str], rows: list[list[Any]]) -> str:
    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]
    for row in rows:
        lines.append("| " + " | ".join(str(cell) for cell in row) + " |")
    return "\n".join(lines)


def country_note(code: str, count_7: int) -> str:
    if code in GULF_COUNTRIES:
        return "Middle East / Gulf sinyali."
    if code == "US" and count_7 > 0:
        return "İngilizce ihracat sayfası için takip edilmeli."
    if code == "TR" and count_7 > 0:
        return "Türkiye iç pazar ilgisi."
    return ""


def referrer_note(referrer: str) -> str:
    if not referrer:
        return "Direct / boş referrer."
    if "google" in referrer:
        return "Google organik / arama sinyali olabilir."
    if "bing" in referrer:
        return "Bing arama sinyali olabilir."
    return ""


def format_count(value: Any) -> str:
    if value is None:
        return "-"
    if isinstance(value, float):
        return f"{value:.2f}".rstrip("0").rstrip(".")
    return str(value)


def build_report(project: str, primary_days: int) -> str:
    total_7 = pageviews_total(7, project)
    total_28 = pageviews_total(28, project)

    top_pages_7 = grouped_pageviews(7, project, "request_path", 10)
    top_pages_28 = grouped_pageviews(28, project, "request_path", 10)
    countries = merge_dimension_rows(
        grouped_pageviews(7, project, "country", 12),
        grouped_pageviews(28, project, "country", 12),
        "country",
    )
    referrers = merge_dimension_rows(
        grouped_pageviews(7, project, "referrer_hostname", 12),
        grouped_pageviews(28, project, "referrer_hostname", 12),
        "referrer_hostname",
    )
    devices = merge_dimension_rows(
        grouped_pageviews(7, project, "device_type", 10),
        grouped_pageviews(28, project, "device_type", 10),
        "device_type",
    )
    browsers = merge_dimension_rows(
        grouped_pageviews(7, project, "browser_name", 10),
        grouped_pageviews(28, project, "browser_name", 10),
        "browser_name",
    )
    operating_systems = merge_dimension_rows(
        grouped_pageviews(7, project, "os_name", 10),
        grouped_pageviews(28, project, "os_name", 10),
        "os_name",
    )
    path_rows = collect_path_table(project)
    speed = speed_rows(project)

    en_row = next(row for row in path_rows if row["path"] == "/en/interior-door-components")
    quote_row = next(row for row in path_rows if row["path"] == "/teklif-al")
    top_country = countries[0] if countries else {"country": "-", "7d": 0}
    top_referrer = referrers[0] if referrers else {"referrer_hostname": "-", "7d": 0}
    search_referrers = [
        row for row in referrers if "google" in row["referrer_hostname"] or "bing" in row["referrer_hostname"]
    ]

    opportunity = "Bekle ve ölç: İngilizce sayfa ilk trafik sinyalini aldı, ancak hacim düşük."
    if en_row["7d"] == 0 and top_country["country"] == "US":
        opportunity = "ABD trafiği var fakat İngilizce landing page henüz yakalamıyor."
    if quote_row["7d"] == 0:
        opportunity += " /teklif-al doğrudan ziyaret almıyor; CTA akışı izlenmeli."

    lines = [
        "# Vercel Analytics ve Speed Insights Raporu",
        "",
        f"- Tarih: {date.today().isoformat()}",
        f"- Proje: `{project}`",
        f"- Birincil pencere: Son {primary_days} gün",
        f"- Veri kaynağı: `vercel metrics` CLI, read-only",
        "- Raw JSON: Diske yazılmadı",
        "",
        "## 1. Yönetici Özeti",
        "",
        f"- Son 7 gün total pageviews: **{total_7}**",
        f"- Son 28 gün total pageviews: **{total_28}**",
        f"- En yüksek ülke: **{COUNTRY_LABELS.get(top_country['country'], top_country['country'] or 'Bilinmiyor')}** ({top_country['7d']})",
        f"- En yüksek referrer: **{top_referrer['referrer_hostname'] or 'direct / empty'}** ({top_referrer['7d']})",
        f"- `/en/interior-door-components/` ziyaret aldı mı: **{'Evet' if en_row['7d'] > 0 else 'Hayır'}** ({en_row['7d']})",
        f"- `/teklif-al/` ziyaret aldı mı: **{'Evet' if quote_row['7d'] > 0 else 'Hayır'}** ({quote_row['7d']})",
        f"- Dikkat çeken fırsat / risk: {opportunity}",
        "",
        "### En çok ziyaret edilen ilk 10 sayfa",
        "",
        md_table(
            ["Path", "Son 7 gün pageviews"],
            [
                [row.get("request_path", "") or "(empty)", row.get("vercel_analytics_pageview_count_sum", 0)]
                for row in top_pages_7
            ],
        ),
        "",
        "## 2. Sayfa performansı / ziyaret kırılımı",
        "",
        md_table(
            ["Path", "Son 7 gün pageviews", "Son 28 gün pageviews", "Not"],
            [[row["path"], row["7d"], row["28d"], row["note"]] for row in path_rows],
        ),
        "",
        "## 3. Ülke kırılımı",
        "",
        md_table(
            ["Ülke", "Son 7 gün pageviews", "Son 28 gün pageviews", "Not"],
            [
                [
                    COUNTRY_LABELS.get(row["country"], row["country"] or "Bilinmiyor"),
                    row["7d"],
                    row["28d"],
                    country_note(row["country"], row["7d"]),
                ]
                for row in countries
            ],
        ),
        "",
        "## 4. Referrer kırılımı",
        "",
        md_table(
            ["Referrer", "Son 7 gün pageviews", "Son 28 gün pageviews", "Not"],
            [
                [
                    row["referrer_hostname"] or "direct / empty",
                    row["7d"],
                    row["28d"],
                    referrer_note(row["referrer_hostname"]),
                ]
                for row in referrers
            ],
        ),
        "",
        "## 5. Cihaz / tarayıcı kırılımı",
        "",
        "### Cihaz",
        "",
        md_table(
            ["Device type", "Son 7 gün pageviews", "Son 28 gün pageviews"],
            [[row["device_type"] or "Bilinmiyor", row["7d"], row["28d"]] for row in devices],
        ),
        "",
        "### Tarayıcı",
        "",
        md_table(
            ["Browser", "Son 7 gün pageviews", "Son 28 gün pageviews"],
            [[row["browser_name"] or "Bilinmiyor", row["7d"], row["28d"]] for row in browsers],
        ),
        "",
        "### İşletim sistemi",
        "",
        md_table(
            ["OS", "Son 7 gün pageviews", "Son 28 gün pageviews"],
            [[row["os_name"] or "Bilinmiyor", row["7d"], row["28d"]] for row in operating_systems],
        ),
        "",
        "## 6. Speed Insights / Web Vitals",
        "",
        "p75 değerleri son 7 gün production verisinden okunmuştur. `-` değeri ilgili path için yeterli veri dönmediğini gösterir.",
        "",
        md_table(
            ["Metrik", "Path", "p75", "Birim"],
            [[row["metric"], row["path"], format_count(row["value"]), row["unit"]] for row in speed],
        ),
        "",
        "## 7. Yorum ve öneri",
        "",
        f"- ABD trafiği var mı: {'Evet' if any(row['country'] == 'US' and row['7d'] > 0 for row in countries) else 'Hayır'}.",
        f"- İngilizce sayfa bu trafiği yakalıyor mu: {'İlk sinyal var, hacim düşük.' if en_row['7d'] > 0 else 'Henüz belirgin yakalama yok.'}",
        f"- `/teklif-al/` ziyaret alıyor mu: {'Evet.' if quote_row['7d'] > 0 else 'Son 7 günde doğrudan path olarak görünmüyor.'}",
        f"- Google/Bing sinyali Vercel Analytics'te görünüyor mu: {'Evet.' if search_referrers else 'Hayır.'}",
        "- İngilizce sayfa için bekle ve ölç kararı devam etmeli mi: Evet; yeni iç linkleme sonrası 7-14 gün daha veri biriktirmek doğru olur.",
        "- Türkiye iç pazar için Genç Boya / Melamin / Kastamonu Entegre önceliği: Vercel path sinyalleri ve GSC sorguları birlikte izlenerek karar verilmeli.",
        "",
        "## 8. Sınırlamalar",
        "",
        "- Vercel Analytics `request_path` query string'i ayrı kırılım olarak göstermeyebilir; `/teklif-al?urun=interior-door-components` ana `/teklif-al` path'i üzerinden raporlanır.",
        "- Rapor Vercel CLI login veya uygun yerel token erişimi gerektirir.",
        "- Bu script deploy, env, sitemap veya site kodu üzerinde yazma işlemi yapmaz.",
        "",
    ]

    return "\n".join(lines)


def main() -> None:
    args = parse_args()
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    report = build_report(args.project, args.days)
    output.write_text(report, encoding="utf-8")
    print(f"Report written: {output}")


if __name__ == "__main__":
    main()
