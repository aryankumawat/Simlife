#!/usr/bin/env bash
# Pushes the Vivien BioTherapy rebrand to origin/main.
# Run from any terminal: `bash /Users/aryankumawat/Simlife/push-vivien.sh`
# or: `cd ~/Simlife && bash push-vivien.sh`

set -e
cd "$(dirname "$0")"

# Clear the stale lock created by the sandbox session, if any
[ -f .git/index.lock ] && rm -f .git/index.lock && echo "Cleared stale .git/index.lock"

git add -A
git commit -m "Rebrand to Vivien BioTherapy — full ecommerce redesign

- Design system: plum/champagne/cream palette + Cormorant Garamond + Poppins
- New ecommerce structure: Shop catalogue + dynamic product detail pages
- New routes: /shop, /shop/[slug], /science, /journal
- Rewritten /about, /contact, /returns for Vivien BioTherapy brand
- Premium Header with sticky nav, cart, mobile drawer
- New Footer with newsletter, sitemap, wordmark band
- 4 Coming Soon products: Cellular Renewal, Cognitive Clarity, Recovery Matrix, Vitality Foundations
- Replaces legacy SimLife dark/monochrome design"

git push origin main

echo ""
echo "✓ Vivien BioTherapy redesign pushed to origin/main"
echo "  Repo: https://github.com/aryankumawat/Simlife"
