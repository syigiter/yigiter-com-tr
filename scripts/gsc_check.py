#!/usr/bin/env python3
"""Generate a read-only Google Search Console follow-up report.

This script reads URL Inspection, Search Analytics, and sitemap status data from
the Google Search Console API and writes a Markdown report for Sprint 2.5.
It never submits indexing requests and only uses the webmasters.readonly scope.
"""

from __future__ import annotations

import argparse
import csv
import json
import sys
from collections import defaultdict
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Any

try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
except ModuleNotFoundError as exc:
    missing = exc.name or "Google API dependency"
    print(
        f"ERROR: Missing Python dependency: {missing}. "
        "Install with `python3 -m pip install -r requirements-gsc.txt`.",
        file=sys.stderr,
    )
    raise SystemExit(2) from exc


SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
SCOPES = [SCOPE]


@dataclass(frozen=True)
class DateRange:
    label: str
    start_date: str
    end_date: str


def parse_args() -> argparse.Namespace:
    today = date.today()
    default_output = f"reports/gsc-sprint-2-5-{today.isoformat()}.md"

    parser = argparse.ArgumentParser(
        description="Generate a Sprint 2.5 Google Search Console Markdown report."
    )
    parser.add_argument("--config", default="config/gsc_urls.json", help="Path to GSC URL config JSON.")
    parser.add_argument("--output", default=default_output, help="Markdown report output path.")
    parser.add_argument("--csv-output", default=None, help="Optional Search Analytics CSV output path.")
    parser.add_argument("--credentials", default="credentials.json", help="OAuth client credentials JSON path.")
    parser.add_argument("--token", default=".gsc/token.json", help="Local OAuth token cache path.")
    parser.add_argument("--raw-output", default=None, help="Optional raw JSON output path for debugging.")
    parser.add_argument("--end-date", default=None, help="Search Analytics end date, YYYY-MM-DD. Defaults to yesterday.")
    parser.add_argument("--row-limit", type=int, default=25000, help="Search Analytics row limit per page query.")
    return parser.parse_args()


def load_config(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"Config file not found: {path}")
    with path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)

    required_keys = ("property", "inspectionUrls", "performancePages")
    missing = [key for key in required_keys if key not in data]
    if missing:
        raise ValueError(f"Config is missing required key(s): {', '.join(missing)}")

    if not data["property"].startswith(("http://", "https://", "sc-domain:")):
        raise ValueError("Config property must be a URL-prefix property or sc-domain property.")

    return data


def get_credentials(credentials_path: Path, token_path: Path) -> Credentials:
    if not credentials_path.exists():
        raise FileNotFoundError(
            f"OAuth credentials file not found: {credentials_path}. "
            "Create a Google Cloud OAuth Desktop client and download it as credentials.json."
        )

    credentials: Credentials | None = None
    if token_path.exists():
        credentials = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if credentials and credentials.expired and credentials.refresh_token:
        try:
            credentials.refresh(Request())
        except Exception as exc:
            raise RuntimeError(f"Token refresh failed. Delete {token_path} and re-authorize. Error: {exc}") from exc

    if not credentials or not credentials.valid:
        flow = InstalledAppFlow.from_client_secrets_file(str(credentials_path), SCOPES)
        credentials = flow.run_local_server(port=0)

    token_path.parent.mkdir(parents=True, exist_ok=True)
    token_path.write_text(credentials.to_json(), encoding="utf-8")
    return credentials


def build_services(credentials: Credentials) -> tuple[Any, Any]:
    searchconsole = build("searchconsole", "v1", credentials=credentials, cache_discovery=False)
    webmasters = build("webmasters", "v3", credentials=credentials, cache_discovery=False)
    return searchconsole, webmasters


def make_date_ranges(end_date_text: str | None) -> list[DateRange]:
    end = date.fromisoformat(end_date_text) if end_date_text else date.today() - timedelta(days=1)
    return [
        DateRange("son 7 gün", (end - timedelta(days=6)).isoformat(), end.isoformat()),
        DateRange("son 28 gün", (end - timedelta(days=27)).isoformat(), end.isoformat()),
    ]


def api_error_message(exc: HttpError) -> str:
    try:
        payload = json.loads(exc.content.decode("utf-8"))
        message = payload.get("error", {}).get("message")
        if message:
            return message
    except Exception:
        pass
    return str(exc)


def inspect_urls(searchconsole: Any, site_url: str, urls: list[str]) -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    for url in urls:
        row: dict[str, Any] = {"url": url, "error": ""}
        try:
            response = (
                searchconsole.urlInspection()
                .index()
                .inspect(
                    body={
                        "inspectionUrl": url,
                        "siteUrl": site_url,
                        "languageCode": "tr-TR",
                    }
                )
                .execute()
            )
            inspection = response.get("inspectionResult", {})
            index_status = inspection.get("indexStatusResult", {})
            mobile_status = inspection.get("mobileUsabilityResult", {})

            row.update(
                {
                    "verdict": index_status.get("verdict", ""),
                    "coverageState": index_status.get("coverageState", ""),
                    "indexingState": index_status.get("indexingState", ""),
                    "pageFetchState": index_status.get("pageFetchState", ""),
                    "lastCrawlTime": index_status.get("lastCrawlTime", ""),
                    "userCanonical": index_status.get("userCanonical", ""),
                    "googleCanonical": index_status.get("googleCanonical", ""),
                    "robotsTxtState": index_status.get("robotsTxtState", ""),
                    "mobileUsabilityVerdict": mobile_status.get("verdict", ""),
                }
            )
        except HttpError as exc:
            row["error"] = api_error_message(exc)
        except Exception as exc:
            row["error"] = str(exc)
        results.append(row)
    return results


def query_search_analytics(
    webmasters: Any,
    site_url: str,
    pages: list[str],
    ranges: list[DateRange],
    row_limit: int,
) -> dict[str, list[dict[str, Any]]]:
    results: dict[str, list[dict[str, Any]]] = {}
    for range_item in ranges:
        rows: list[dict[str, Any]] = []
        for page_url in pages:
            body = {
                "startDate": range_item.start_date,
                "endDate": range_item.end_date,
                "dimensions": ["page", "query", "country", "device"],
                "rowLimit": row_limit,
                "dimensionFilterGroups": [
                    {
                        "filters": [
                            {
                                "dimension": "page",
                                "operator": "equals",
                                "expression": page_url,
                            }
                        ]
                    }
                ],
            }
            try:
                response = webmasters.searchanalytics().query(siteUrl=site_url, body=body).execute()
                for item in response.get("rows", []):
                    keys = item.get("keys", ["", "", "", ""])
                    rows.append(
                        {
                            "range": range_item.label,
                            "page": keys[0] if len(keys) > 0 else page_url,
                            "query": keys[1] if len(keys) > 1 else "",
                            "country": keys[2] if len(keys) > 2 else "",
                            "device": keys[3] if len(keys) > 3 else "",
                            "clicks": item.get("clicks", 0),
                            "impressions": item.get("impressions", 0),
                            "ctr": item.get("ctr", 0),
                            "position": item.get("position", 0),
                        }
                    )
            except HttpError as exc:
                rows.append(
                    {
                        "range": range_item.label,
                        "page": page_url,
                        "query": "",
                        "country": "",
                        "device": "",
                        "clicks": 0,
                        "impressions": 0,
                        "ctr": 0,
                        "position": 0,
                        "error": api_error_message(exc),
                    }
                )
            except Exception as exc:
                rows.append(
                    {
                        "range": range_item.label,
                        "page": page_url,
                        "query": "",
                        "country": "",
                        "device": "",
                        "clicks": 0,
                        "impressions": 0,
                        "ctr": 0,
                        "position": 0,
                        "error": str(exc),
                    }
                )
        results[range_item.label] = rows
    return results


def fetch_sitemaps(webmasters: Any, site_url: str) -> list[dict[str, Any]]:
    try:
        response = webmasters.sitemaps().list(siteUrl=site_url).execute()
        return response.get("sitemap", [])
    except HttpError as exc:
        return [{"error": api_error_message(exc)}]
    except Exception as exc:
        return [{"error": str(exc)}]


def md_escape(value: Any) -> str:
    text = "" if value is None else str(value)
    return text.replace("|", "\\|").replace("\n", " ")


def format_number(value: Any, digits: int = 2) -> str:
    try:
        return f"{float(value):.{digits}f}"
    except (TypeError, ValueError):
        return "0.00"


def canonical_match(user_canonical: str, google_canonical: str) -> str:
    if not user_canonical or not google_canonical:
        return "Unknown"
    return "Yes" if user_canonical == google_canonical else "No"


def is_www_canonical(url: str) -> str:
    if not url:
        return "Unknown"
    return "Yes" if url.startswith("https://www.yigiter.com.tr/") else "No"


def summarize_page_rows(rows: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    summary: dict[str, dict[str, Any]] = {}
    by_page: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in rows:
        if row.get("error"):
            continue
        by_page[row.get("page", "")].append(row)

    for page_url, page_rows in by_page.items():
        clicks = sum(float(row.get("clicks", 0)) for row in page_rows)
        impressions = sum(float(row.get("impressions", 0)) for row in page_rows)
        weighted_position_sum = sum(
            float(row.get("position", 0)) * float(row.get("impressions", 0)) for row in page_rows
        )
        avg_ctr = clicks / impressions if impressions else 0
        avg_position = weighted_position_sum / impressions if impressions else 0
        queries = [row.get("query", "") for row in sorted(page_rows, key=lambda r: r.get("impressions", 0), reverse=True)]

        country_totals: dict[str, float] = defaultdict(float)
        device_totals: dict[str, float] = defaultdict(float)
        for row in page_rows:
            country_totals[row.get("country", "")] += float(row.get("impressions", 0))
            device_totals[row.get("device", "")] += float(row.get("impressions", 0))

        summary[page_url] = {
            "clicks": clicks,
            "impressions": impressions,
            "ctr": avg_ctr,
            "position": avg_position,
            "queries": [query for query in queries if query][:5],
            "countries": dict(sorted(country_totals.items(), key=lambda item: item[1], reverse=True)),
            "devices": dict(sorted(device_totals.items(), key=lambda item: item[1], reverse=True)),
        }
    return summary


def build_risks(
    inspections: list[dict[str, Any]],
    analytics: dict[str, list[dict[str, Any]]],
) -> list[str]:
    risks: list[str] = []
    latest_rows = next(iter(analytics.values()), [])
    page_impressions: dict[str, float] = defaultdict(float)
    page_clicks: dict[str, float] = defaultdict(float)
    foreign_impressions = 0.0
    foreign_clicks = 0.0

    for row in latest_rows:
        if row.get("error"):
            continue
        page_impressions[row.get("page", "")] += float(row.get("impressions", 0))
        page_clicks[row.get("page", "")] += float(row.get("clicks", 0))
        if row.get("country") and row.get("country") != "tur":
            foreign_impressions += float(row.get("impressions", 0))
            foreign_clicks += float(row.get("clicks", 0))

    for item in inspections:
        url = item.get("url", "")
        if item.get("error"):
            risks.append(f"{url}: URL Inspection error - {item['error']}")
            continue
        coverage = item.get("coverageState", "")
        verdict = item.get("verdict", "")
        indexing = item.get("indexingState", "")
        fetch_state = item.get("pageFetchState", "")
        user_canonical = item.get("userCanonical", "")
        google_canonical = item.get("googleCanonical", "")

        if verdict and verdict.upper() not in {"PASS"}:
            risks.append(f"{url}: index verdict is {verdict}")
        if "Discovered" in coverage or "Keşfedildi" in coverage:
            risks.append(f"{url}: discovered but not indexed state may exist")
        if "Crawled" in coverage or "Tarandı" in coverage:
            risks.append(f"{url}: crawled but not indexed state may exist")
        if indexing and "NOINDEX" in indexing.upper():
            risks.append(f"{url}: noindex-related indexing state detected ({indexing})")
        if fetch_state and fetch_state.upper() not in {"SUCCESSFUL"}:
            risks.append(f"{url}: page fetch state is {fetch_state}")
        if user_canonical and google_canonical and user_canonical != google_canonical:
            risks.append(f"{url}: canonical mismatch, user={user_canonical}, google={google_canonical}")
        if google_canonical and google_canonical.startswith("https://yigiter.com.tr/"):
            risks.append(f"{url}: Google selected no-www canonical")
        if page_impressions.get(url, 0) == 0:
            risks.append(f"{url}: no Search Analytics impressions in the latest range")

    if foreign_impressions > 0 and foreign_clicks == 0:
        risks.append("International impressions exist but clicks are zero in the latest range")

    return risks or ["No major risk detected from available API data."]


def sprint_26_recommendation(
    inspections: list[dict[str, Any]],
    analytics: dict[str, list[dict[str, Any]]],
    performance_pages: list[str],
) -> str:
    latest_rows = next(iter(analytics.values()), [])
    foreign_impressions = 0.0
    foreign_clicks = 0.0
    page_totals: dict[str, float] = defaultdict(float)
    page_clicks: dict[str, float] = defaultdict(float)

    for row in latest_rows:
        if row.get("error"):
            continue
        page = row.get("page", "")
        impressions = float(row.get("impressions", 0))
        clicks = float(row.get("clicks", 0))
        page_totals[page] += impressions
        page_clicks[page] += clicks
        if row.get("country") and row.get("country") != "tur":
            foreign_impressions += impressions
            foreign_clicks += clicks

    indexed_count = sum(1 for item in inspections if str(item.get("verdict", "")).upper() == "PASS")
    canonical_mismatch = any(
        item.get("userCanonical") and item.get("googleCanonical") and item["userCanonical"] != item["googleCanonical"]
        for item in inspections
    )
    product_pages_with_impressions = [
        page for page in performance_pages[:7] if page_totals.get(page, 0) > 0
    ]

    if foreign_impressions > 0 and foreign_clicks == 0:
        return "Recommend Sprint 2.6: build /en/interior-door-components/ for export-oriented traffic."
    if indexed_count >= 5 and product_pages_with_impressions:
        leaders = sorted(product_pages_with_impressions, key=lambda page: page_totals[page], reverse=True)[:3]
        return "Recommend Sprint 2.6: deepen the best-performing product pages: " + ", ".join(leaders)
    if canonical_mismatch:
        return "Recommend Sprint 2.6: canonical follow-up before new content expansion."
    if page_totals.get("https://www.yigiter.com.tr/subeler/", 0) > 0 or page_totals.get(
        "https://www.yigiter.com.tr/iletisim/", 0
    ) > 0:
        return "Recommend Sprint 2.6: local/corporate SEO expansion based on /subeler/ or /iletisim/ signals."
    return "Recommend Sprint 2.6: wait for stronger GSC signals; re-check internal links, sitemap and indexing status."


def write_csv(path: Path, analytics: dict[str, list[dict[str, Any]]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["range", "page", "query", "country", "device", "clicks", "impressions", "ctr", "position", "error"],
        )
        writer.writeheader()
        for rows in analytics.values():
            for row in rows:
                writer.writerow({key: row.get(key, "") for key in writer.fieldnames})


def render_report(
    config: dict[str, Any],
    ranges: list[DateRange],
    inspections: list[dict[str, Any]],
    analytics: dict[str, list[dict[str, Any]]],
    sitemaps: list[dict[str, Any]],
) -> str:
    lines: list[str] = []
    report_date = date.today().isoformat()
    ranges_text = ", ".join(f"{item.label}: {item.start_date} - {item.end_date}" for item in ranges)

    lines.extend(
        [
            "# Sprint 2.5 Search Console Takip Raporu",
            "",
            "## 1. Genel durum",
            "",
            f"- Property: `{config['property']}`",
            f"- Rapor tarihi: `{report_date}`",
            f"- Tarih aralığı: {ranges_text}",
            f"- Kullanılan scope: `{SCOPE}`",
            f"- URL Inspection sayısı: `{len(config['inspectionUrls'])}`",
            "- Search Analytics sorgu aralıkları: son 7 gün ve son 28 gün",
            "- Not: Bu script read-only çalışır; dizine ekle talebi veya sitemap submit işlemi yapmaz.",
            "",
            "## 2. 7 ürün SEO sayfası index tablosu",
            "",
            "| URL | Verdict | Coverage state | Indexing state | Page fetch state | Last crawl time | User canonical | Google canonical | Canonical match | Mobile usability verdict | Not |",
            "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |",
        ]
    )

    for item in inspections:
        user_canonical = item.get("userCanonical", "")
        google_canonical = item.get("googleCanonical", "")
        lines.append(
            "| "
            + " | ".join(
                [
                    md_escape(item.get("url", "")),
                    md_escape(item.get("verdict", "")),
                    md_escape(item.get("coverageState", "")),
                    md_escape(item.get("indexingState", "")),
                    md_escape(item.get("pageFetchState", "")),
                    md_escape(item.get("lastCrawlTime", "")),
                    md_escape(user_canonical),
                    md_escape(google_canonical),
                    md_escape(canonical_match(user_canonical, google_canonical)),
                    md_escape(item.get("mobileUsabilityVerdict", "")),
                    md_escape(item.get("error", "")),
                ]
            )
            + " |"
        )

    for range_item in ranges:
        rows = analytics.get(range_item.label, [])
        lines.extend(
            [
                "",
                f"## 3. Search Analytics - {range_item.label}",
                "",
                "| Page | Query | Country | Device | Clicks | Impressions | CTR | Position | Not |",
                "| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |",
            ]
        )
        if rows:
            for row in rows[:200]:
                lines.append(
                    "| "
                    + " | ".join(
                        [
                            md_escape(row.get("page", "")),
                            md_escape(row.get("query", "")),
                            md_escape(row.get("country", "")),
                            md_escape(row.get("device", "")),
                            md_escape(row.get("clicks", 0)),
                            md_escape(row.get("impressions", 0)),
                            format_number(row.get("ctr", 0), 4),
                            format_number(row.get("position", 0), 2),
                            md_escape(row.get("error", "")),
                        ]
                    )
                    + " |"
                )
        else:
            lines.append("| No data |  |  |  | 0 | 0 | 0.0000 | 0.00 |  |")

    latest_label = ranges[0].label
    summary = summarize_page_rows(analytics.get(latest_label, []))
    lines.extend(["", "## 5. Sayfa bazlı özet", ""])
    if summary:
        for page_url in config["performancePages"]:
            item = summary.get(page_url)
            if not item:
                lines.append(f"### {page_url}")
                lines.append("")
                lines.append("- Toplam gösterim: `0`")
                lines.append("- Toplam tıklama: `0`")
                lines.append("- Ortalama CTR: `0.0000`")
                lines.append("- Ortalama pozisyon: `0.00`")
                lines.append("- İlk görünen sorgular: Yok")
                lines.append("- Ülke dağılımı: Yok")
                lines.append("- Cihaz dağılımı: Yok")
                lines.append("")
                continue
            lines.append(f"### {page_url}")
            lines.append("")
            lines.append(f"- Toplam gösterim: `{int(item['impressions'])}`")
            lines.append(f"- Toplam tıklama: `{int(item['clicks'])}`")
            lines.append(f"- Ortalama CTR: `{format_number(item['ctr'], 4)}`")
            lines.append(f"- Ortalama pozisyon: `{format_number(item['position'], 2)}`")
            lines.append(f"- İlk görünen sorgular: {', '.join(item['queries']) if item['queries'] else 'Yok'}")
            lines.append(
                "- Ülke dağılımı: "
                + (", ".join(f"{country}: {int(value)}" for country, value in item["countries"].items()) or "Yok")
            )
            lines.append(
                "- Cihaz dağılımı: "
                + (", ".join(f"{device}: {int(value)}" for device, value in item["devices"].items()) or "Yok")
            )
            lines.append("")
    else:
        lines.append("Search Analytics verisi dönmedi veya takip sayfaları için gösterim yok.")

    lines.extend(["", "## 6. Canonical değerlendirmesi", ""])
    for item in inspections:
        google_canonical = item.get("googleCanonical", "")
        user_canonical = item.get("userCanonical", "")
        lines.append(
            f"- `{item.get('url', '')}`: user canonical www uyumu `{is_www_canonical(user_canonical)}`, "
            f"Google canonical www uyumu `{is_www_canonical(google_canonical)}`, "
            f"eşleşme `{canonical_match(user_canonical, google_canonical)}`"
        )

    lines.extend(["", "## Sitemap durumu", ""])
    if sitemaps:
        lines.append("| Path | Last submitted | Last downloaded | Warnings | Errors | Not |")
        lines.append("| --- | --- | --- | ---: | ---: | --- |")
        for sitemap in sitemaps:
            lines.append(
                "| "
                + " | ".join(
                    [
                        md_escape(sitemap.get("path", "")),
                        md_escape(sitemap.get("lastSubmitted", "")),
                        md_escape(sitemap.get("lastDownloaded", "")),
                        md_escape(sitemap.get("warnings", "")),
                        md_escape(sitemap.get("errors", "")),
                        md_escape(sitemap.get("error", "")),
                    ]
                )
                + " |"
            )
    else:
        lines.append("Sitemap verisi dönmedi.")

    risks = build_risks(inspections, analytics)
    lines.extend(["", "## 7. Riskler", ""])
    for risk in risks:
        lines.append(f"- {risk}")

    lines.extend(
        [
            "",
            "## 8. Sprint 2.6 önerisi",
            "",
            sprint_26_recommendation(inspections, analytics, config["performancePages"]),
            "",
        ]
    )
    return "\n".join(lines)


def main() -> int:
    args = parse_args()
    config_path = Path(args.config)
    output_path = Path(args.output)
    credentials_path = Path(args.credentials)
    token_path = Path(args.token)

    try:
        config = load_config(config_path)
        ranges = make_date_ranges(args.end_date)
        credentials = get_credentials(credentials_path, token_path)
        searchconsole, webmasters = build_services(credentials)

        inspections = inspect_urls(searchconsole, config["property"], config["inspectionUrls"])
        analytics = query_search_analytics(
            webmasters,
            config["property"],
            config["performancePages"],
            ranges,
            args.row_limit,
        )
        sitemaps = fetch_sitemaps(webmasters, config["property"])

        output_path.parent.mkdir(parents=True, exist_ok=True)
        report = render_report(config, ranges, inspections, analytics, sitemaps)
        output_path.write_text(report, encoding="utf-8")

        if args.csv_output:
            write_csv(Path(args.csv_output), analytics)

        if args.raw_output:
            raw_path = Path(args.raw_output)
            raw_path.parent.mkdir(parents=True, exist_ok=True)
            raw_path.write_text(
                json.dumps(
                    {"inspections": inspections, "analytics": analytics, "sitemaps": sitemaps},
                    ensure_ascii=False,
                    indent=2,
                ),
                encoding="utf-8",
            )

        print(f"Report written: {output_path}")
        if args.csv_output:
            print(f"CSV written: {args.csv_output}")
        return 0
    except FileNotFoundError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    except HttpError as exc:
        print(f"ERROR: Google API error: {api_error_message(exc)}", file=sys.stderr)
        return 3
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
