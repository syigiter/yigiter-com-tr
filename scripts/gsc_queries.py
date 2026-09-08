#!/usr/bin/env python3
# ponytail: throwaway. Queries for one page (contains-filter), last 28d, by clicks.
import sys, json
from urllib import request, parse
from datetime import date, timedelta

SITE = "https://www.yigiter.com.tr/"
PAGE_CONTAINS = sys.argv[1] if len(sys.argv) > 1 else "/urunler/genc-boya"

def post_json(url, data, headers=None, form=False):
    body = parse.urlencode(data).encode() if form else json.dumps(data).encode()
    h = {"Content-Type": "application/x-www-form-urlencoded" if form else "application/json"}
    h.update(headers or {})
    with request.urlopen(request.Request(url, body, h)) as r:
        return json.load(r)

tok = json.load(open(".gsc/token.json"))
at = post_json(tok["token_uri"], {
    "grant_type": "refresh_token", "client_id": tok["client_id"],
    "client_secret": tok["client_secret"], "refresh_token": tok["refresh_token"],
}, form=True)["access_token"]

end = date.today() - timedelta(days=1)
start = end - timedelta(days=27)
resp = post_json(
    f"https://www.googleapis.com/webmasters/v3/sites/{parse.quote(SITE, safe='')}/searchAnalytics/query",
    {"startDate": start.isoformat(), "endDate": end.isoformat(),
     "dimensions": ["query"], "rowLimit": 1000,
     "dimensionFilterGroups": [{"filters": [
         {"dimension": "page", "operator": "contains", "expression": PAGE_CONTAINS}]}]},
    headers={"Authorization": f"Bearer {at}"})

rows = sorted(resp.get("rows", []), key=lambda r: (r["clicks"], r["impressions"]), reverse=True)
tc = sum(r["clicks"] for r in rows); ti = sum(r["impressions"] for r in rows)
print(f"'{PAGE_CONTAINS}' iceren sayfa(lar) - son 28 gun ({start} -> {end})")
print(f"Toplam: {tc:.0f} tiklama, {ti:.0f} gosterim, {len(rows)} sorgu\n")
print(f"{'Tik':>4}{'Gost':>7}{'CTR':>7}{'Poz':>6}  Sorgu")
for r in rows[:30]:
    print(f"{r['clicks']:>4.0f}{r['impressions']:>7.0f}{r['ctr']*100:>6.1f}%{r['position']:>6.1f}  {r['keys'][0]}")
