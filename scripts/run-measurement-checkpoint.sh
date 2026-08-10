#!/usr/bin/env bash
# Kastamonu Entegre ölçüm planı — takip kontrolü koşucusu
# Plan: docs/kastamonu-entegre-measurement-plan.md md. 5
#
# Kullanım:
#   bash scripts/run-measurement-checkpoint.sh            # bugünün tarihiyle
#   bash scripts/run-measurement-checkpoint.sh 2026-08-10 # belirli tarihle
#
# Tüm çağrılar salt-okunurdur: dizine ekle talebi, sitemap submit veya
# deploy işlemi yapmaz. Adımlardan biri başarısız olursa diğerleri devam eder.

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

STAMP="${1:-$(date +%F)}"
LOG_DIR="reports/checkpoint-${STAMP}"
mkdir -p "$LOG_DIR"

QA_LOG="$LOG_DIR/qa-production.log"
GSC_MD="reports/gsc-kastamonu-${STAMP}.md"
GSC_CSV="reports/gsc-kastamonu-${STAMP}.csv"
GSC_LOG="$LOG_DIR/gsc.log"
VERCEL_MD="reports/vercel-analytics-kastamonu-${STAMP}.md"
VERCEL_LOG="$LOG_DIR/vercel.log"

declare -a RESULTS=()

step() {
  printf '\n\033[1m=== %s ===\033[0m\n' "$1"
}

record() {
  RESULTS+=("$1|$2")
}

# --- 1. Production QA ---------------------------------------------------------
step "1/3  Production QA  (npm run qa:kastamonu:production)"
if npm run qa:kastamonu:production 2>&1 | tee "$QA_LOG"; then
  record "Production QA" "BASARILI  -> $QA_LOG"
else
  record "Production QA" "BASARISIZ -> $QA_LOG"
fi

# --- 2. Google Search Console -------------------------------------------------
step "2/3  Google Search Console  (URL Inspection + Search Analytics + sitemap)"
GSC_PY="python3"
if [ -x ".gsc/venv/bin/python3" ]; then
  GSC_PY=".gsc/venv/bin/python3"
fi
echo "python: $GSC_PY"

if [ ! -f credentials.json ]; then
  echo "UYARI: credentials.json bulunamadi."
fi
if [ ! -f .gsc/token.json ]; then
  echo "UYARI: .gsc/token.json yok — tarayicida OAuth onayi istenecek."
fi

if "$GSC_PY" scripts/gsc_check.py \
      --output "$GSC_MD" \
      --csv-output "$GSC_CSV" 2>&1 | tee "$GSC_LOG"; then
  record "GSC raporu" "BASARILI  -> $GSC_MD"
else
  record "GSC raporu" "BASARISIZ -> $GSC_LOG"
fi

# --- 3. Vercel Analytics + Speed Insights ------------------------------------
step "3/3  Vercel Analytics / Speed Insights  (son 7 gun)"
if npx --yes --package=vercel@57.0.0 -- python3 scripts/vercel_analytics_report.py \
      --days 7 \
      --output "$VERCEL_MD" 2>&1 | tee "$VERCEL_LOG"; then
  record "Vercel raporu" "BASARILI  -> $VERCEL_MD"
else
  record "Vercel raporu" "BASARISIZ -> $VERCEL_LOG"
fi

# --- Ozet ---------------------------------------------------------------------
step "Ozet — $STAMP"
for row in "${RESULTS[@]}"; do
  printf '  %-16s %s\n' "${row%%|*}" "${row#*|}"
done

cat <<'EOF'

Kalan manuel adim (script disi):
  4. Microsoft Clarity dashboard -> Custom events
     catalog_download / quote_click / whatsapp_click / quote_submitted
     Her biri icin olay sayisi ve oturum sayisini not al.
     Onceki uyari: Clarity proje ayarlari nedeniyle veri toplamiyor olabilir;
     once "veri toplaniyor mu" durumunu dogrula.

Sonra: uretilen raporlari Claude'a ver, T+14 karsilastirma ve karar notu
docs/kastamonu-entegre-measurement-plan.md icine islensin.
EOF
