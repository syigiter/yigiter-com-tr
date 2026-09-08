#!/usr/bin/env python3
# ponytail: throwaway. Top pages by clicks, last 28d. Reuses token flow from gsc_trend.
import json
from urllib import request, parse
from datetime import date, timedelta

SITE = "https://www.yigiter.com.tr/"
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
     "dimensions": ["page"], "rowLimit": 1000},
    headers={"Authorization": f"Bearer {at}"})

rows = sorted(resp.get("rows", []), key=lambda r: r["clicks"], reverse=True)
print(f"Son 28 gun ({start} -> {end}) - sayfalar (tiklamaya gore):\n")
print(f"{'Tik':>4}{'Gost':>7}{'CTR':>7}{'Poz':>6}  Sayfa")
for r in rows[:20]:
    p = r["keys"][0].replace("https://www.yigiter.com.tr", "") or "/"
    print(f"{r['clicks']:>4.0f}{r['impressions']:>7.0f}{r['ctr']*100:>6.1f}%{r['position']:>6.1f}  {p}")
print(f"\nToplam {len(rows)} sayfa tiklama/gosterim aldi.")
