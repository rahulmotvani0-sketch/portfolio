# Backlink Profile Audit — rahul.techiking.com

**Target:** https://rahul.techiking.com/
**Site type:** Single-page personal DevOps/Cloud Infrastructure Engineer portfolio (Next.js static export, GitHub Pages + Cloudflare)
**Date:** 2026-09-03
**Data source tier:** **Tier 0** — Common Crawl (public) + verification crawler only. No Moz API key, no Bing Webmaster API key configured (`backlinks_auth.py --check` confirms `tier: 0`, capabilities limited to "Common Crawl domain-level graph" and "Backlink verification crawler").

---

## 1. Backlink Health Score: INSUFFICIENT DATA

Per the Tier-0 scoring policy, a numeric 0–100 score is **not** produced. Of the 7 weighted scoring factors (referring domain count, domain quality distribution, anchor text naturalness, toxic link ratio, link velocity, follow/nofollow ratio, geographic relevance), **0 of 7 have any data source at this tier**. Referring-domain counts, anchor text, toxicity, link velocity, follow/nofollow, and geo data all require Moz, Bing, or DataForSEO — none of which are configured. Reporting a numeric score here would be misleading (confirmed by `validate_backlink_report.py`, which flags scores produced with <4/7 factors as an error; this report avoids that by not producing one).

**What would unlock scoring:** adding a free Moz API key (`MOZ_API_KEY` env var or `~/.config/claude-seo/backlinks-api.json`) would raise this to Tier 1 and enable DA/PA, spam score, referring domains, and anchor text — the single highest-leverage upgrade for this audit.

---

## 2. Common Crawl Web Graph Metrics

| Domain | In Crawl | In Rankings | PageRank | Harmonic Centrality | Source |
|---|---|---|---|---|---|
| `rahul.techiking.com` | No | No | null | null | Common Crawl (confidence: 0.50) |
| `techiking.com` (parent domain) | No | No | null | null | Common Crawl (confidence: 0.50) |

Release queried: `cc-main-2026-jan-feb-mar` (Common Crawl web graphs are published quarterly; source: https://commoncrawl.org/web-graphs). Neither the subdomain nor the parent domain appears in Common Crawl's most recent host-level graph.

**Correct interpretation (important — do not over-read this):** absence from Common Crawl does **not** mean "low authority" or "zero backlinks." It means CC's crawler has not indexed the domain in this release. Common causes for a site this size: the domain/subdomain is new or recently changed, it has low overall crawl volume/inbound link volume relative to CC's sampling threshold, or CC simply hasn't recrawled it since the current site went live. It is a **coverage gap in the data source**, not a confirmed authority signal. This distinction was explicitly checked by the report validator (`validate_backlink_report.py` → status `PASS`, 1 info note reiterating this exact caveat).

## 3. Backlink Verification (Known Links)

No known/claimed backlinks were supplied for this audit, so `verify_backlinks.py` was not run — there was no `--links` file to check against. **This is not the same as "zero backlinks confirmed."** It means no candidate list of inbound links exists yet to verify.

**Recommended next step:** if the site owner knows of specific pages linking to `rahul.techiking.com` (e.g., a GitHub README, a blog post mention, a directory listing, a conference speaker page), supply the URLs and re-run:
```
"$HOME/.claude/skills/seo/bin/claude-seo" run verify_backlinks.py --target https://rahul.techiking.com/ --links <file> --json
```

## 4. Anchor Text Distribution

**Not available at this tier.** Anchor text data requires Moz (`moz_api.py anchors`), Bing, or DataForSEO — none configured. No anchor text claims are made in this report.

## 5. Toxic / Spammy Links

**Not available at this tier.** Toxic-link/spam-score data requires Moz Spam Score or DataForSEO at minimum. No toxicity assessment can be made from Common Crawl domain-level metrics alone. No toxic links are reported — this is an absence of data, not a clean bill of health.

## 6. Referring Domain Diversity

**Not available at this tier.** Referring domain counts require Moz or DataForSEO (Common Crawl's public graph does not expose per-domain inbound link lists at this access tier, only aggregate PageRank/centrality scores, and even those returned null here since the domain isn't in the graph).

## 7. Parent Domain (techiking.com) Context

`techiking.com` was also queried on the theory that link equity or brand signals might exist at the parent/root domain even if the `rahul.` subdomain is new. **Result: `techiking.com` is also absent from Common Crawl** — same `in_crawl: false`, `in_rankings: false`, all metrics null. This does not distinguish whether `techiking.com` genuinely has no meaningful external backlink profile or whether it simply falls outside CC's current crawl/ranking threshold; it only rules out CC as a positive-evidence source for either domain in this release.

## 8. Owned Profile Links (Not Backlinks — Context Only)

The homepage JSON-LD `Person` schema declares `sameAs` links to:
- `https://www.linkedin.com/in/rahul-motvani-720b8b18a/`
- `https://github.com/rahulmotvani0-sketch`

These are **outbound, self-authored profile links**, not backlinks, and are not counted toward any inbound-link metric. They're noted only because they represent the most plausible near-term sources of real backlinks: a GitHub README that links to the portfolio, or LinkedIn profile traffic, would be genuine external signals worth pursuing. (Source: `rahul.techiking.com-audit/findings/schema.md`, parsed JSON-LD — confidence 0.95, direct observation, not inferred.)

---

## Priority Recommendations

| Priority | Recommendation |
|---|---|
| **High** | Configure a free Moz API key to unlock Tier 1 backlink scoring (DA/PA, spam score, referring domains, anchor text) — highest-leverage single action to move this audit from "insufficient data" to an actual scored profile. |
| **Medium** | Supply any known inbound links (GitHub, LinkedIn posts, directory listings, past employer/client mentions) for `verify_backlinks.py` to confirm live status and follow/nofollow. |
| **Medium** | Build genuine, low-effort backlink sources appropriate for a DevOps/Cloud engineer portfolio: pin the portfolio URL in the GitHub profile README and repo descriptions, add it to the LinkedIn "Featured" section, and link it from any conference/meetup speaker bios or guest technical posts. |
| **Low** | Re-run Common Crawl checks on the next quarterly release (`cc-main-2026-*`) once new inbound links exist — CC coverage may pick the domain up once genuine external links accumulate and get crawled. |
| **Low** | If DataForSEO becomes available, run `./extensions/dataforseo/install.sh` for premium-tier (confidence 1.00) cross-validation once a baseline link profile exists to validate. |

---

## Data Sources & Confidence Summary

| Source | Status | Confidence | Notes |
|---|---|---|---|
| Common Crawl domain graph | Queried successfully | 0.50 | Both `rahul.techiking.com` and `techiking.com` return `in_crawl: false` — coverage gap, not a negative authority signal |
| Verification crawler | Not run | n/a | No candidate backlink list supplied |
| Moz API | Unavailable | n/a | No API key configured (`MOZ_API_KEY` unset) |
| Bing Webmaster API | Unavailable | n/a | No API key configured (`BING_WEBMASTER_API_KEY` unset) |
| DataForSEO | Unavailable | n/a | Extension not installed |
| Schema `sameAs` (parsed) | Direct observation | 0.95 | From `findings/schema.md`; outbound owned-profile links only, not backlinks |

**Validation:** `validate_backlink_report.py` run against the collected Common Crawl data returned `status: PASS` (0 errors, 0 warnings, 1 info note — the CC "not in crawl ≠ low authority" caveat, which is reflected verbatim in Section 2 above).

**Cross-references:** For crawlability/sitemap/robots.txt context relevant to why CC coverage may be limited, see `findings/technical.md`. For E-E-A-T/content-quality analysis (separate skill), run `/seo content https://rahul.techiking.com/`. This report does not duplicate that analysis.
