# Technical SEO Audit — rahul.techiking.com

**Audit date:** 2026-09-03
**Site type:** Single-page personal portfolio, Next.js static export, hosted on GitHub Pages, fronted by Cloudflare CDN
**URL audited:** https://rahul.techiking.com/

## Technical Score: 68 / 100

The site is technically sound at its core (fully SSR/pre-rendered HTML, valid sitemap, clean JS-optional crawlability, custom 404 with correct noindex+404 status, Brotli compression). Score is held back by a completely missing security-header layer, no forced HTTPS/HSTS, a canonical/sitemap URL mismatch, and several missing discovery/branding assets (favicon, manifest, og:image, llms.txt).

---

## Category Results

| Category | Status |
|---|---|
| 1. Crawlability | PASS (minor issue) |
| 2. Indexability | PASS (minor issue) |
| 3. Security | **FAIL** |
| 4. URL Structure | PASS (minor issue) |
| 5. Mobile | PASS |
| 6. Core Web Vitals (source signals) | PASS (watch items) |
| 7. Structured Data | **FAIL** |
| 8. JavaScript Rendering | PASS |
| 9. IndexNow Protocol | FAIL (not implemented) |

---

## 1. Crawlability — PASS (minor issue)

- `robots.txt` (Cloudflare-managed, verified via `sitemap_discovery.py`): declares `Sitemap: https://rahul.techiking.com/sitemap.xml`, and the helper confirmed it resolves with **HTTP 200, valid `urlset`**. This is a genuine passing declaration, not a stale one.
- General crawler policy: `User-agent: *` → `Allow: /`. Correct for a public portfolio.
- AI-crawler blocking is deliberate and explicit: `Amazonbot`, `Applebot-Extended`, `Bytespider`, `CCBot`, `ClaudeBot`, `CloudflareBrowserRenderingCrawler`, `Google-Extended`, `GPTBot`, `meta-externalagent` are all disallowed, alongside `Content-Signal: search=yes, ai-train=no, use=reference`. This is a valid and increasingly common policy (opt out of AI training/crawling while remaining searchable) — flagged here only as a configuration note, not a defect.
- No `X-Robots-Tag` header and no `<meta name="robots">` tag on the homepage → defaults to `index,follow`, which is correct.
- 404 handling is correct: `/nonexistent-page-xyz` returns **HTTP 404** with a custom page containing `<meta name="robots" content="noindex"/>` — properly prevents soft-404 indexing.
- **Minor issue:** `sitemap_discovery.py` also probed common fallback paths (`sitemap_index.xml`, `sitemap-index.xml`, `wp-sitemap.xml`) — all correctly 404, no conflicting sitemap declarations found. No action needed, listed for completeness.

## 2. Indexability — PASS (minor issue)

- Sitemap contains exactly **1 URL** (homepage), `lastmod=2026-09-02`, `priority=1.0`, `changefreq=monthly`. Appropriate for a single-page site.
- **Issue — canonical/sitemap URL mismatch:** the sitemap lists `https://rahul.techiking.com/` (trailing slash) while the on-page `<link rel="canonical">` declares `https://rahul.techiking.com` (no trailing slash). Both variants return **HTTP 200 directly with no redirect between them** (verified: `curl -o /dev/null -w '%{http_code}' https://rahul.techiking.com` → 200, and with trailing slash → 200, no 3xx either way). This means two URL forms are live and self-serving without a canonicalizing 301, relying entirely on the `<link rel="canonical">` tag to consolidate signals. Low risk in practice (canonical tag is present and correct on the preferred version) but not best practice — should be enforced at the edge with a redirect.
- No `<meta name="robots">` blocking, no conflicting canonicals, no pagination/duplicate content risk (single page).
- No hreflang tags present — correct, since this is a single-language, single-region personal site (no international variants to declare).

## 3. Security — FAIL

HTTPS is available and correctly serves the site, but the security posture has real gaps:

- **No forced HTTPS redirect.** `curl -I http://rahul.techiking.com/` (plain HTTP, no `-L` follow) returns **`HTTP/1.1 200 OK`** with the full page served directly — not a 301/308 redirect to HTTPS. The site is fully accessible over unencrypted HTTP. This is both a security issue and a duplicate-content/indexation risk (search engines and crawlers can index the `http://` origin as a separate resource).
- **No HSTS.** `Strict-Transport-Security` header absent on the HTTPS response. Combined with the lack of a forced HTTPS redirect, this leaves the site fully exposed to protocol-downgrade / SSL-stripping style issues for any user or bot that requests it over HTTP.
- **No security headers at all** on the HTTPS response, confirmed via `curl -I`:
  - No `Content-Security-Policy`
  - No `X-Content-Type-Options` (should be `nosniff`)
  - No `X-Frame-Options` (clickjacking protection)
  - No `Permissions-Policy`
  - No `Referrer-Policy`
- `access-control-allow-origin: *` is set globally (wide-open CORS on the document response). For a static portfolio this is low-risk but unnecessary — it's typically an artifact of GitHub Pages' default config passed through Cloudflare, not an intentional choice.
- Response chain confirms the stack: `cloudflare` → Fastly (`x-served-by`, `x-fastly-request-id` — GitHub Pages' own CDN layer) → GitHub Pages origin (`x-github-request-id`). Every hop is a place headers could be injected; currently none are.

**Fix (Cloudflare-side, no code changes needed):**
1. Enable **Always Use HTTPS** and/or an Edge Rule redirecting `http://` → `https://` (301).
2. Enable **HSTS** in Cloudflare SSL/TLS → Edge Certificates (start with a modest max-age and `includeSubDomains` once verified, then increase; consider preload only after confirming stability).
3. Add missing headers via a Cloudflare Transform Rule / Response Header modification or a Worker: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` (or `SAMEORIGIN`), `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (deny unused features like camera/microphone/geolocation).

## 4. URL Structure — PASS (minor issue)

- Clean, single canonical hostname (`rahul.techiking.com`), no query-string cruft, no session IDs, no uppercase/underscore inconsistency.
- No `www` vs non-`www` conflict was testable (`www.rahul.techiking.com` does not resolve — connection failed, no DNS record). This is fine as long as no external links/backlinks point to a `www` variant; if any do, they will hard-fail rather than redirect. Low priority to add a `www` CNAME + redirect only if inbound links to that subdomain are expected.
- Trailing-slash inconsistency between canonical tag and sitemap — see Section 2 (same underlying issue, cross-referenced here as a URL-structure item).
- `/Rahul_Motvani_Resume.pdf` is a static, directly-crawlable, correctly `Content-Type: application/pdf` linked asset with sane caching (`max-age=14400`) — no issues.

## 5. Mobile — PASS

- Correct responsive viewport: `<meta name="viewport" content="width=device-width, initial-scale=1"/>` — no `maximum-scale` or `user-scalable=no` restrictions that would hurt accessibility/usability.
- Extensive Tailwind responsive breakpoint usage detected in the HTML — **137 occurrences** of `sm:`/`md:`/`lg:`/`xl:`/`2xl:` utility classes in the rendered markup, indicating a genuinely responsive (not just "viewport tag present") layout across breakpoints.
- No fixed-width layout containers or `px`-locked wrappers detected in the head/structure; layout uses `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container patterns, which scale correctly on small screens.
- No `theme-color` meta tag present — minor, affects mobile browser chrome theming (Android Chrome address bar color) but not a ranking or usability factor.

## 6. Core Web Vitals — Source-Level Signals — PASS (watch items)

No lab/field measurement was performed (out of scope for source inspection); the following are risk signals only:

- **LCP:** Two `woff2` webfonts are preloaded (`rel="preload" ... as="font"`), which is correct practice and should minimize font-swap delay for the likely LCP element (hero heading text). CSS is a single bundled file loaded via `<link rel="stylesheet">` with `data-precedence="next"` (Next.js font/CSS optimization) — render-blocking but small and CDN-cached (`cache-control: max-age=600` at the edge, Brotli-compressed). No `<img>` tags exist on the page at all (design is icon/SVG-based, no raster hero image), which removes a common LCP-image risk entirely.
- **CLS:** Font preloading + `font-display` handled by Next.js's `next/font` (inferred from the hashed font filenames and `next-size-adjust` meta tag, which Next.js injects specifically to reduce layout shift from font metric mismatches) is a positive signal for low CLS risk. No explicit `width`/`height`/`aspect-ratio` audit was possible since there are no images, removing the most common CLS source for this page type.
- **INP:** Total first-party JS shipped is **~223 KB uncompressed** across 7 chunks (`03~yq9q893hmn.js` 38.9KB, `07lhk_q6pmm3r.js` 70.0KB, `0dbhjjzl8qfwv.js` 13.6KB, `0ht900cau6_ur.js` 5.9KB, `0r8nt2o8muejo.js` 49.9KB, `16xrjxmmioy34.js` 35.2KB, `turbopack-...js` 4.0KB), served Brotli-compressed (`content-encoding: br`). Six of seven scripts load `async`; one is `preload as="script" fetchPriority="low"`. This is a moderate JS payload for a static portfolio — worth profiling actual hydration cost (e.g., animated background elements, `animate-ping` indicators seen in the header markup) since heavy client-side hydration/animation logic is the most common INP risk on Next.js sites that otherwise look simple.
- **Recommendation:** Run a live Lighthouse/PageSpeed Insights or CrUX check to get actual field/lab LCP, INP, and CLS numbers — source inspection can only flag risk, not measure actual values.

## 7. Structured Data — FAIL

- **No JSON-LD structured data detected anywhere in the HTML** (`grep -c 'application/ld+json'` → 0). For a personal portfolio/resume site, this is a missed opportunity:
  - `Person` schema (name, jobTitle, url, sameAs → LinkedIn/GitHub/TryHackMe profiles already present as external links) would enable richer knowledge-panel-style eligibility and reinforce entity association between the domain and Rahul Motvani.
  - `ProfilePage` or `WebSite` schema could reinforce the single-page nature and title/description already in meta tags.
- **Recommendation:** Add a `Person` JSON-LD block referencing the existing external profile links (github.com/rahulmotvani0-sketch, linkedin.com, tryhackme.com) as `sameAs` values, plus `jobTitle: "DevOps & Cloud Infrastructure Engineer"` and `url: "https://rahul.techiking.com"`. This is a straightforward addition to the Next.js `<head>` (e.g., via `metadata` API or a `<script type="application/ld+json">` in the layout).

## 8. JavaScript Rendering — PASS

- `render_page.py --mode auto` performed a **raw fetch only** (`mode_used: "raw"`) and did **not** need to fall back to Playwright rendering — the tool's own SPA heuristic reported **`is_spa: false`**.
- Confirmed manually: the raw HTML response body is **172,126 bytes** of fully server-rendered markup (headings, nav, section content, SVG icons all present in the initial payload) — this is a true static export (Next.js `output: "export"`), not a client-side-rendered shell that depends on JS execution for content to appear.
- This is a strong positive signal: content is available to any crawler regardless of JS execution support (including the many bots now blocked in robots.txt, if they ever bypass it, and any crawler that doesn't render JS at all).

## 9. IndexNow Protocol — FAIL (not implemented)

- No IndexNow key file found at the conventional location: `https://rahul.techiking.com/indexnow.txt` → **404**.
- No evidence of IndexNow ping integration in the deployment pipeline.
- **Recommendation:** For a low-frequency single-page site this is low priority, but since the site already updates `lastmod` on content changes (sitemap shows `2026-09-02`), wiring a simple IndexNow ping (Bing, Yandex, Naver) into the deploy workflow — generating a key file and pinging `https://api.indexnow.org/indexnow` on each deploy — would ensure faster reindexing after resume/content updates with near-zero ongoing cost.

---

## Additional Findings (not in the 9 core categories)

| Item | Status | Detail |
|---|---|---|
| Favicon | **Missing** | `/favicon.ico` → 404. No `<link rel="icon">` tag in `<head>` either. Affects browser tabs, bookmarks, and SERP favicon display. |
| Web App Manifest | Missing | `/manifest.json` and `/site.webmanifest` both → 404. Low priority for a non-PWA portfolio, but pairs with the missing favicon/apple-touch-icon gap. |
| Apple touch icon | Missing | No `<link rel="apple-touch-icon">` found. |
| `og:image` | **Missing** | Open Graph tags are otherwise complete (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale`, `og:type`, full Twitter Card set including `twitter:card=summary_large_image`) — but `twitter:card` is set to `summary_large_image` while **no `og:image` or `twitter:image` is present**. This means social shares (LinkedIn, Twitter/X, Slack previews) will render with no image at all, undermining the large-image card format that's already declared. **High-value, low-effort fix.** |
| `llms.txt` | Missing | `/llms.txt` → 404. Optional/emerging convention; not a ranking factor, but worth adding given the site already has an explicit AI-crawler policy in robots.txt — an `llms.txt` would let the owner state that policy in a format increasingly consumed by AI agents directly. |
| Compression | Pass | `content-encoding: br` confirmed on the HTML response — Brotli is active at the edge. |
| Caching | Pass | `cache-control: max-age=600` on HTML, `max-age=14400` on the resume PDF — reasonable for a rarely-changing static site. |
| CDN/origin chain | Informational | Cloudflare → GitHub Pages' own Fastly CDN (`x-served-by`, `x-fastly-request-id`) → GitHub Pages origin (`x-github-request-id`). Double-CDN setup (Cloudflare in front of GitHub Pages' native Fastly) — not a problem, but means two layers where cache purges/header rules must both be checked when debugging cache staleness. |

---

## Prioritized Recommendations

### Critical
- None. Nothing blocks crawling or indexing of the primary content today.

### High
1. **Force HTTPS + enable HSTS.** Currently `http://rahul.techiking.com/` serves the full site directly with HTTP 200 (no redirect), and no `Strict-Transport-Security` header exists on the HTTPS response. Fix via Cloudflare "Always Use HTTPS" + HSTS in SSL/TLS → Edge Certificates.
2. **Add missing security response headers** (`Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) via a Cloudflare Transform/Response Header Rule or Worker, since GitHub Pages itself cannot serve custom headers.
3. **Add `og:image` / `twitter:image`.** The Twitter Card is already declared as `summary_large_image` but has no image to show — this actively degrades every social share of the site.

### Medium
4. **Add `Person` JSON-LD structured data** referencing existing GitHub/LinkedIn/TryHackMe links as `sameAs`, to strengthen entity/knowledge-graph association for the name "Rahul Motvani."
5. **Reconcile canonical vs. sitemap trailing-slash mismatch** — either update the sitemap `<loc>` to drop the trailing slash to match the canonical tag, or add an edge redirect (Cloudflare rule) from the non-slash form to the slash form (or vice versa) so only one URL form is ever live, rather than relying on the canonical tag alone.
6. **Add a favicon** (`favicon.ico` + `<link rel="icon">`) and, ideally, an `apple-touch-icon` — currently 404, affecting browser tabs/bookmarks/SERP display.

### Low
7. Add a `theme-color` meta tag for mobile browser chrome theming.
8. Consider an `llms.txt` file to formally restate the AI-crawler policy already declared in robots.txt, in the format increasingly read directly by AI agents.
9. Implement IndexNow (Bing/Yandex/Naver) pings on deploy for faster reindexing after resume/content updates.
10. Verify actual Core Web Vitals field data via PageSpeed Insights/CrUX (this audit only reviewed source-level risk signals, not measured LCP/INP/CLS).
11. If any external backlinks might target `www.rahul.techiking.com`, add a DNS record + redirect (currently the subdomain does not resolve at all).

---

## Commands Used / Verification Trail

```
claude-seo run sitemap_discovery.py https://rahul.techiking.com/ --json
claude-seo run render_page.py https://rahul.techiking.com/ --mode auto --json
curl -sI https://rahul.techiking.com/
curl -sI http://rahul.techiking.com/               # confirms no HTTPS redirect
curl -s https://rahul.techiking.com/robots.txt
curl -s https://rahul.techiking.com/sitemap.xml
curl -s -o /dev/null -w "%{http_code}" https://rahul.techiking.com/favicon.ico   # 404
curl -s -o /dev/null -w "%{http_code}" https://rahul.techiking.com/llms.txt     # 404
curl -s -o /dev/null -w "%{http_code}" https://rahul.techiking.com/manifest.json  # 404
curl -s -o /dev/null -w "%{http_code}" https://rahul.techiking.com/indexnow.txt   # 404
curl -s -o /dev/null -w "%{http_code}" https://rahul.techiking.com/nonexistent-page-xyz  # 404, custom page + noindex
curl -sI -H "Accept-Encoding: br, gzip" https://rahul.techiking.com/   # content-encoding: br
```

**File written:** `/home/rahul/PROJECT'S/portfolio-new/rahul.techiking.com-audit/findings/technical.md`
