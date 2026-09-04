# Full SEO Audit Report — rahul.techiking.com

**Audit date:** 2026-09-03  
**URL:** https://rahul.techiking.com/  
**Business type:** Personal portfolio / Professional profile  
**Stack:** Next.js (static export) → GitHub Pages → Cloudflare CDN  
**Pages crawled:** 1 (single-page site)

---

## Executive Summary

### SEO Health Score: 55 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 68 | 14.96 |
| Content Quality | 23% | 70 | 16.10 |
| On-Page SEO | 20% | 60 | 12.00 |
| Schema / Structured Data | 10% | 0 | 0.00 |
| Performance (CWV) | 10% | 65 | 6.50 |
| AI Search Readiness | 10% | 44 | 4.40 |
| Images | 5% | 15 | 0.75 |
| **Total** | **100%** | | **54.71 ≈ 55** |

### Critical Discovery

**The site is NOT indexed in Google.** A `site:rahul.techiking.com` search returns zero results. The domain doesn't appear anywhere in Google's index despite having no technical indexing blocks. This is the #1 issue — every other fix is necessary but insufficient until the site achieves basic discoverability.

### Top 5 Critical Issues

1. **Zero Google indexation** — Site not found in any search engine results
2. **Zero structured data** — No JSON-LD, Microdata, or RDFa of any kind
3. **AI crawlers fully blocked** — Cloudflare edge injects robots.txt rules blocking ClaudeBot, GPTBot, CCBot, Google-Extended, and 5 more AI bots (not in the repo's robots.txt — Cloudflare dashboard setting)
4. **No og:image / twitter:image** — Social shares render with no preview image despite declaring `summary_large_image` card type
5. **No HTTPS enforcement** — `http://` serves full content (200 OK, no redirect to HTTPS); no HSTS header

### Top 5 Quick Wins

1. **Enable "Always Use HTTPS" in Cloudflare** (~2 min, dashboard toggle) — fixes HTTP duplicate content
2. **Unblock key AI crawlers in Cloudflare AI Crawl Control** (~5 min, dashboard) — restores ChatGPT/Claude visibility
3. **Add favicon** (~15 min) — create and add to `public/`
4. **Fix canonical trailing-slash mismatch** (~5 min) — update `sitemap.xml` to match canonical
5. **Submit sitemap to Google Search Console** (~10 min) — accelerate indexing

---

## Technical SEO — Score: 68/100

### What Works
- Fully server-rendered HTML (no JS required for content — `is_spa: false`)
- Valid sitemap.xml with correct lastmod date
- Proper 404 handling (HTTP 404 + `noindex` meta)
- Brotli compression active
- HTTP/2 enabled via Cloudflare
- Clean URL structure
- Responsive viewport meta tag
- 137+ Tailwind responsive breakpoint classes

### Findings

| Finding | Severity | Details |
|---------|----------|---------|
| No HTTPS enforcement | **Critical** | `http://rahul.techiking.com/` returns 200 OK instead of 301 redirect to HTTPS |
| No HSTS header | **High** | `Strict-Transport-Security` absent — vulnerable to protocol downgrade |
| Zero security headers | **High** | No CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, or Permissions-Policy |
| Canonical/sitemap trailing-slash mismatch | **Medium** | Canonical: `https://rahul.techiking.com` vs sitemap: `https://rahul.techiking.com/` |
| No favicon | **Medium** | `/favicon.ico` returns 404; no `<link rel="icon">` in HTML |
| No web app manifest | **Low** | `/manifest.json` and `/site.webmanifest` both 404 |
| No IndexNow integration | **Low** | No key file or deploy-time ping configured |
| No `theme-color` meta | **Low** | Minor mobile browser chrome gap |

### How to Fix
1. Cloudflare → SSL/TLS → Edge Certificates → Enable "Always Use HTTPS"
2. Cloudflare → SSL/TLS → Edge Certificates → Enable HSTS (start max-age=86400, add includeSubDomains)
3. Cloudflare → Rules → Transform Rules → Add Response Headers (CSP, X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Referrer-Policy: strict-origin-when-cross-origin)
4. Update `public/sitemap.xml` to use `<loc>https://rahul.techiking.com</loc>` (no trailing slash, matching canonical)

---

## Content Quality — Score: 70/100

### What Works
- Strong E-E-A-T signals: real experience (4.5+ years), specific metrics, verifiable certifications
- 5 detailed project case studies with problem/solution/impact narratives
- Interactive SRE Incident Simulator — genuinely differentiating feature
- Good heading hierarchy (1 H1, 8 H2s, logical H3 nesting)
- ~3,500-4,000 words of substantive content

### Findings

| Finding | Severity | Details |
|---------|----------|---------|
| Not indexed in Google | **Critical** | Zero authority/backlinks — site too new for Google to discover |
| Resume dated "March 2025" | **Medium** | 1.5 years old — raises freshness concerns |
| Keyword stuffing risk | **Medium** | ATS Keywords section displays 30 keyword badges — may trigger keyword-stuffing signals |
| Short, fragmented content | **Medium** | Content is in bullet-point fragments, not self-contained paragraphs for AI extraction |
| No FAQ section | **Medium** | No question-phrased headings for featured snippet/AI answer eligibility |
| No testimonials or endorsements | **Low** | Missing third-party social proof |
| GitHub links to profile, not repos | **Low** | All 5 projects link to the same general GitHub profile URL |

---

## On-Page SEO — Score: 60/100

### What Works
- Title tag: 57 characters, includes name + primary role keywords
- Meta description: 153 characters, includes key roles and cloud platforms
- Keywords meta tag present (12 keywords)
- Author/creator meta tags present

### Findings

| Finding | Severity | Details |
|---------|----------|---------|
| Missing og:image / twitter:image | **High** | Declared `summary_large_image` but no image — every social share shows blank |
| Single-page architecture | **High** | Zero internal linking signals; all content on one URL |
| No individual project pages | **Medium** | 5 detailed case studies have no dedicated URLs for long-tail keyword targeting |
| Meta description missing CTA | **Low** | No "Available for remote roles" or "View portfolio" call-to-action |
| H1 is name-only | **Low** | "Rahul Motvani" without role keyword — could be "Rahul Motvani — DevOps Engineer" |

---

## Schema / Structured Data — Score: 0/100

### Current State
**Zero structured data of any kind.** No JSON-LD, no Microdata, no RDFa. Confirmed both via live fetch and source code inspection.

### Recommended Schema (fully generated with real site data)

**1. ProfilePage + Person (Critical)**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2026-01-01",
  "dateModified": "2026-09-02",
  "mainEntity": {
    "@type": "Person",
    "name": "Rahul Motvani",
    "url": "https://rahul.techiking.com",
    "jobTitle": "DevOps / DevSecOps Engineer",
    "email": "mailto:rahulmotvani8@gmail.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Azilen Technologies Pvt Ltd"
    },
    "knowsAbout": ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "DevSecOps", "SonarQube", "Snyk", "SRE", "PostgreSQL", "Redis", "Prometheus", "Grafana", "Linux", "Bash", "Python", "Infrastructure as Code"],
    "hasCredential": [
      {"@type": "EducationalOccupationalCredential", "name": "Certified Network Security Specialist (CNSS)", "credentialCategory": "certification", "recognizedBy": {"@type": "Organization", "name": "ICSI (International CyberSecurity Institute, U.K.)"}},
      {"@type": "EducationalOccupationalCredential", "name": "Introduction to Cybersecurity", "credentialCategory": "certification", "recognizedBy": {"@type": "Organization", "name": "Cisco Networking Academy"}},
      {"@type": "EducationalOccupationalCredential", "name": "Networking Basics", "credentialCategory": "certification", "recognizedBy": {"@type": "Organization", "name": "Cisco Networking Academy"}},
      {"@type": "EducationalOccupationalCredential", "name": "Google Cloud Certificate Course", "credentialCategory": "certification", "recognizedBy": {"@type": "Organization", "name": "Coursera / Google Cloud"}}
    ],
    "sameAs": [
      "https://www.linkedin.com/in/rahul-motvani-720b8b18a/",
      "https://github.com/rahulmotvani0-sketch",
      "https://tryhackme.com/p/rahulmotvani8gma"
    ]
  }
}
```

**2. WebSite (Critical)**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://rahul.techiking.com",
  "name": "Rahul Motvani Portfolio",
  "description": "DevOps, DevSecOps, and SRE Engineer with 4.5+ years of experience building secure, automated, and reliable cloud infrastructure on AWS, Azure, and GCP.",
  "inLanguage": "en-US"
}
```

### Implementation
Add both as `<script type="application/ld+json">` in `src/app/layout.tsx`. See `findings/schema.md` for the full detailed recommendations.

---

## Performance (CWV) — Score: 65/100

### What Works
- Zero third-party JavaScript (no analytics, no chat widgets, no social embeds)
- Brotli compression active
- Font preloading for 2 primary woff2 fonts
- next/font optimization with `next-size-adjust`
- All JS chunks loaded async
- CDN caching via Cloudflare + Fastly

### Findings

| Finding | Severity | Details |
|---------|----------|---------|
| Oversized JS bundle | **High** | 822KB total (7 chunks) for a static portfolio — target <400KB |
| Large HTML document | **Medium** | 174KB — all content inline including full project data |
| Excessive font files | **Medium** | 14 woff2 files totaling 321KB — likely unnecessary character subsets |
| Borderline TTFB | **Medium** | ~730ms (double-CDN: Cloudflare → Fastly → GitHub Pages) |
| Estimated LCP ~1.5-2.5s | **Medium** | Hero text blocked by CSS (70KB) + font loading (83KB preloaded) |

### Resource Summary

| Resource | Count | Size (uncompressed) | Size (compressed est.) |
|----------|-------|---------------------|-----------------------|
| HTML | 1 | 174KB | ~45KB |
| CSS | 1 | 70KB | ~15KB |
| JavaScript | 7 | 822KB | ~270KB |
| Fonts | 14 | 321KB | ~321KB |
| Images | 0 | 0 | 0 |
| **Total** | | **~1.4MB** | **~650KB** |

---

## AI Search Readiness (GEO) — Score: 44/100

### Critical Discovery

**The AI crawler blocking is NOT in your codebase.** Your `public/robots.txt` correctly says `Allow: /`. Cloudflare's "AI Crawl Control" / "Content Signals" feature injects a much larger robots.txt at the edge that blocks 8 AI crawlers. **This is a Cloudflare dashboard fix, not a code change.**

### Blocked Crawlers (Cloudflare-injected)

| Crawler | Owner | Status | Impact |
|---------|-------|--------|--------|
| GPTBot | OpenAI | Blocked | ChatGPT training/retrieval corpus |
| ClaudeBot | Anthropic | Blocked | Claude cannot cite this site at all |
| Google-Extended | Google | Blocked | Excluded from Gemini/AI features |
| CCBot | Common Crawl | Blocked | LLM training datasets |
| meta-externalagent | Meta | Blocked | Llama/Meta AI |
| Amazonbot | Amazon | Blocked | Alexa/Amazon AI |
| Applebot-Extended | Apple | Blocked | Apple AI features |
| Bytespider | ByteDance | Blocked | TikTok AI |

### Allowed (via wildcard)
- OAI-SearchBot (ChatGPT live browsing) — can still cite in real-time
- PerplexityBot — best-positioned AI platform currently
- Bingbot / Microsoft Copilot — standard indexing

### Platform Visibility Estimates

| Platform | Score | Notes |
|----------|-------|-------|
| Google AI Overviews | ~45/100 | Googlebot OK, but Google-Extended blocked |
| ChatGPT | ~50/100 | Live browsing OK, training corpus blocked |
| Perplexity | ~55/100 | Fully allowed, best positioned |
| Bing Copilot | ~55/100 | Fully allowed |
| Claude | **~10/100** | **Fully blocked** |

### Additional GEO Gaps
- No `llms.txt` file (404)
- Content too fragmented for passage-level citation (bullet points, not paragraphs)
- No FAQ or question-phrased headings
- Zero YouTube/Reddit/Wikipedia brand signals
- Single-URL architecture limits per-topic citation precision

---

## Images — Score: 15/100

### Current State
**The site has effectively zero images.** No raster images (`<img>` tags), no profile photo, no project screenshots, no OG image, no favicon.

| Image Asset | Status |
|-------------|--------|
| Profile photo / headshot | Missing |
| OG image (1200×630) | Missing |
| Twitter image | Missing |
| Favicon (favicon.ico) | Missing (404) |
| Apple touch icon | Missing |
| Project screenshots | Missing |
| Architecture diagrams (static) | Missing (interactive-only, not crawlable) |

Only 2 images exist: external SVG logos from Wikipedia (Google Cloud, Cisco) used for certification icons, plus a decorative `grid.svg` background (214 bytes).

---

## Backlinks — Insufficient Data

Neither `rahul.techiking.com` nor the parent `techiking.com` appears in Common Crawl's web graph. No Moz or Bing API credentials configured for deeper analysis.

**Key context:** The SXO audit confirmed zero Google indexation and zero discoverable backlinks — this is the root cause of the site's invisibility.

### Recommended Link Building Actions
1. Add portfolio URL to GitHub profile README and repo descriptions
2. Add to LinkedIn "Featured" section
3. Populate certification verification URLs (Credly, Coursera, Cisco)
4. Publish a project walkthrough video on YouTube
5. Submit to DevOps portfolio directories and showcase sites
6. Submit sitemap to Google Search Console, Bing Webmaster Tools

---

## Search Experience (SXO) — Gap Score: 36/100

### SERP Analysis for Target Queries

| Query | Dominant SERP Type | Portfolio Viable? |
|-------|-------------------|-------------------|
| "Rahul Motvani DevOps Engineer" | LinkedIn/directory profiles (80%) | Yes — branded query, winnable |
| "DevOps Engineer portfolio" | How-to guides (60%), 2 real portfolios rank | **Yes** — proven winnable |
| "Cloud Infrastructure Engineer" | How-to/listicles (70%) | Moderate — very competitive |
| "DevSecOps Engineer India" | Job aggregators (100%) | **No** — structurally unwinnable |
| "Platform Engineer portfolio" | Listicles/guides (100%) | **No** — structurally unwinnable |

**3 of 5 target queries have SERPs no personal portfolio can win.** Focus on branded queries and "DevOps Engineer portfolio" as realistic ranking targets.

### Weakest Scoring Dimensions
- Schema: 0/15 (zero structured data)
- Media: 1/15 (zero images)
- Authority: 1/15 (no discoverable backlinks)
- Content depth: 10/15 (solid)
- UX/interactivity: 10/15 (Architecture Flow + SRE Simulator are differentiators)

---

## Complete Findings Index

| # | Finding | Severity | Category |
|---|---------|----------|----------|
| 1 | Site not indexed in Google (zero results) | **Critical** | Indexation |
| 2 | Zero structured data (JSON-LD/Microdata/RDFa) | **Critical** | Schema |
| 3 | AI crawlers blocked by Cloudflare (not in repo) | **Critical** | GEO |
| 4 | No HTTPS enforcement (HTTP serves 200 OK) | **Critical** | Security |
| 5 | Missing og:image / twitter:image | **High** | Social/SERP |
| 6 | No HSTS header | **High** | Security |
| 7 | Zero security response headers | **High** | Security |
| 8 | Oversized JS bundle (822KB) | **High** | Performance |
| 9 | Zero backlinks / domain authority | **High** | Authority |
| 10 | Single-page architecture (no internal links) | **High** | Structure |
| 11 | No favicon | **Medium** | Branding |
| 12 | Content too fragmented for AI citation | **Medium** | GEO |
| 13 | No llms.txt | **Medium** | GEO |
| 14 | Resume dated March 2025 (stale) | **Medium** | Freshness |
| 15 | Canonical/sitemap trailing-slash mismatch | **Medium** | Technical |
| 16 | Large HTML document (174KB) | **Medium** | Performance |
| 17 | Excessive font files (14 × 321KB) | **Medium** | Performance |
| 18 | Keyword stuffing risk (ATS keyword badges) | **Medium** | On-page |
| 19 | No certification verification URLs | **Low** | Trust |
| 20 | No privacy policy | **Low** | Trust |
| 21 | GitHub links to profile, not specific repos | **Low** | Authority |
| 22 | No FAQ section | **Low** | Content |
| 23 | No web app manifest | **Low** | Technical |
| 24 | No IndexNow integration | **Low** | Technical |
| 25 | No theme-color meta tag | **Low** | Mobile |

---

*Full specialist findings available in `findings/` directory:*
- `findings/technical.md` — Crawlability, indexability, security, URL structure
- `findings/content.md` — E-E-A-T, readability, content depth, keywords
- `findings/on-page.md` — Title, meta, headings, images, social tags
- `findings/schema.md` — Structured data detection, validation, JSON-LD recommendations
- `findings/performance.md` — Core Web Vitals, resource analysis, optimization
- `findings/geo.md` — AI crawler access, llms.txt, citability, brand signals
- `findings/backlinks.md` — Common Crawl metrics, link building recommendations
- `findings/sxo.md` — SERP analysis, page-type matching, persona scoring
