#!/usr/bin/env python3
# ponytail: throwaway trend check. Site-wide clicks/impressions by day, recent vs prior period.
# ponytail: pure-stdlib. google/cryptography .so'ları FortiClient taramasinda takiliyordu;
# refresh-token akisi + searchAnalytics zaten duz HTTPS POST, agir bagimliliga gerek yok.
import sys, time, json, socket
from urllib import request, parse
socket.setdefaulttimeout(45)
T = time.time()
def log(m): print(f"[{time.time()-T:5.1f}s] {m}", file=sys.stderr, flush=True)

from datetime import date, timedelta
SITE = "https://www.yigiter.com.tr/"

def post_json(url, data, headers=None, form=False):
    body = parse.urlencode(data).encode() if form else json.dumps(data).encode()
    h = {"Content-Type": "application/x-www-form-urlencoded" if form else "application/json"}
    h.update(headers or {})
    with request.urlopen(request.Request(url, body, h)) as r:
        return json.load(r)

tok = json.load(open(".gsc/token.json"))
log("refreshing access token...")
at = post_json(tok["token_uri"], {
    "grant_type": "refresh_token", "client_id": tok["client_id"],
    "client_secret": tok["client_secret"], "refresh_token": tok["refresh_token"],
}, form=True)["access_token"]
log("token ready")

end = date.today() - timedelta(days=1)
start = end - timedelta(days=89)
log(f"querying {start} -> {end} ...")
resp = post_json(
    f"https://www.googleapis.com/webmasters/v3/sites/{parse.quote(SITE, safe='')}/searchAnalytics/query",
    {"startDate": start.isoformat(), "endDate": end.isoformat(),
     "dimensions": ["date"], "rowLimit": 500},
    headers={"Authorization": f"Bearer {at}"})
log("query returned")

rows = {r["keys"][0]: r for r in resp.get("rows", [])}
days = sorted(rows)
if not days:
    print("No data returned for", start, "to", end); sys.exit(0)

def agg(dset):
    return (sum(rows[d]["clicks"] for d in dset), sum(rows[d]["impressions"] for d in dset))

last28 = [d for d in days if date.fromisoformat(d) > end - timedelta(days=28)]
prev28 = [d for d in days if end - timedelta(days=56) < date.fromisoformat(d) <= end - timedelta(days=28)]
lc, li = agg(last28); pc, pi = agg(prev28)
def pct(n, o): return f"{(n-o)/o*100:+.1f}%" if o else "n/a"

print(f"Veri araligi: {days[0]} -> {days[-1]} ({len(days)} gun veri)\n")
print(f"{'Donem':<22}{'Tiklama':>10}{'Gosterim':>12}")
print(f"{'Son 28 gun':<22}{lc:>10.0f}{li:>12.0f}")
print(f"{'Onceki 28 gun':<22}{pc:>10.0f}{pi:>12.0f}")
print(f"{'Degisim':<22}{pct(lc,pc):>10}{pct(li,pi):>12}\n")

print("Haftalik (son 12 hafta, hafta basi Pazartesi):")
print(f"{'Hafta':<14}{'Tiklama':>10}{'Gosterim':>12}")
w = {}
for d in days:
    wk = date.fromisoformat(d)
    key = (wk - timedelta(days=wk.weekday())).isoformat()
    a = w.setdefault(key, [0, 0]); a[0] += rows[d]["clicks"]; a[1] += rows[d]["impressions"]
for key in sorted(w)[-12:]:
    print(f"{key:<14}{w[key][0]:>10.0f}{w[key][1]:>12.0f}")
