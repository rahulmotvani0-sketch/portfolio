# SEO Action Plan — rahul.techiking.com

**Generated:** 2026-09-03  
**Current SEO Health Score:** 55/100  
**Target Score:** 80+/100

---

## Phase 1: Critical Fixes (Week 1) — "Get Indexed & Secure"

*Goal: Achieve Google indexation, fix security gaps, and restore AI crawler access.*

### 1.1 Submit to Google Search Console (Priority: CRITICAL)
- **Action:** Verify domain in Google Search Console, submit sitemap.xml
- **Where:** https://search.google.com/search-console
- **Effort:** 10 minutes
- **Impact:** Triggers Google crawl and indexation of the site

### 1.2 Enable HTTPS Enforcement (Priority: CRITICAL)
- **Action:** Cloudflare → SSL/TLS → Edge Certificates → "Always Use HTTPS" → ON
- **Where:** Cloudflare dashboard
- **Effort:** 2 minutes
- **Impact:** Eliminates HTTP duplicate content, prevents protocol downgrade attacks

### 1.3 Enable HSTS (Priority: HIGH)
- **Action:** Cloudflare → SSL/TLS → Edge Certificates → HTTP Strict Transport Security → Enable
- **Settings:** max-age=86400 (initially), includeSubDomains=true
- **Effort:** 2 minutes

### 1.4 Unblock Key AI Crawlers (Priority: CRITICAL)
- **Action:** Cloudflare → Security → Bots → AI Scrapers and Crawlers → Unblock GPTBot, ClaudeBot, Google-Extended
- **Note:** Keep CCBot, Bytespider, meta-externalagent blocked (consistent with ai-train=no)
- **Where:** Cloudflare dashboard (NOT in your codebase's robots.txt)
- **Effort:** 5 minutes
- **Impact:** Restores ChatGPT, Claude, and Google AI feature visibility

### 1.5 Add Security Response Headers (Priority: HIGH)
- **Action:** Cloudflare → Rules → Transform Rules → Modify Response Header
- **Headers to add:**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Effort:** 15 minutes

### 1.6 Fix Canonical/Sitemap Trailing-Slash Mismatch (Priority: MEDIUM)
- **Action:** Update `public/sitemap.xml` — change `<loc>https://rahul.techiking.com/</loc>` to `<loc>https://rahul.techiking.com</loc>` to match the canonical tag
- **Effort:** 2 minutes
- **File:** `public/sitemap.xml`

---

## Phase 2: High-Impact Improvements (Weeks 2-3) — "Be Found & Shared"

*Goal: Add structured data, social sharing assets, and essential branding.*

### 2.1 Add JSON-LD Structured Data (Priority: CRITICAL)
- **Action:** Create `src/lib/schema.ts` with `ProfilePage`/`Person` and `WebSite` schemas, inject into `src/app/layout.tsx`
- **Schema types:** ProfilePage (wrapping Person with name, jobTitle, sameAs, knowsAbout, hasCredential) + WebSite
- **Effort:** 1-2 hours
- **Impact:** Enables Knowledge Panel eligibility, AI entity resolution

### 2.2 Create & Add OG Image (Priority: HIGH)
- **Action:** Design a 1200×630px branded image (name + role + professional headshot or branded graphic)
- **Add to:** `public/og-image.png`
- **Wire up:** Add `images` to `metadata.openGraph` and `metadata.twitter` in `src/app/layout.tsx`
- **Effort:** 1-2 hours (design + implementation)
- **Impact:** Every LinkedIn/Twitter share becomes visually compelling

### 2.3 Add Favicon & Apple Touch Icon (Priority: HIGH)
- **Action:** Create favicon.ico (32×32), favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png (180×180)
- **Add to:** `public/` directory
- **Wire up:** Add `<link rel="icon">` tags to layout (or use Next.js `app/favicon.ico` convention)
- **Effort:** 30 minutes

### 2.4 Add llms.txt (Priority: HIGH)
- **Action:** Create `public/llms.txt` with structured summary: identity, skills, projects, certifications, links
- **Effort:** 30-45 minutes
- **Impact:** Provides AI models a condensed retrieval target

### 2.5 Populate Certification Verification URLs (Priority: MEDIUM)
- **Action:** Add Credly/Coursera/Cisco verification links to each certification in `src/data/portfolioData.ts` (the `credentialUrl` field already exists but is empty)
- **Effort:** 30 minutes
- **Impact:** Strengthens trust signals and enables richer schema

### 2.6 Update Resume Date (Priority: MEDIUM)
- **Action:** Update "March 2025" to current date in `src/data/portfolioData.ts` (`resumeLastUpdated` field)
- **Effort:** 2 minutes

---

## Phase 3: Content & Authority Building (Month 2) — "Rank & Get Cited"

*Goal: Build backlinks, improve content structure for AI citation, expand URL footprint.*

### 3.1 Build Initial Backlink Profile (Priority: HIGH)
- **Action:**
  1. Add portfolio URL to GitHub profile README (pin it)
  2. Add to LinkedIn "Featured" section
  3. Link from each GitHub repo's description/README
  4. Submit to DevOps portfolio directories
  5. Contribute to r/devops, r/kubernetes with profile link in bio
- **Effort:** 2-3 hours total
- **Impact:** Essential for achieving Google indexation ranking

### 3.2 Rewrite Key Content as Citable Paragraphs (Priority: HIGH)
- **Action:** Expand hero summary and top 2-3 project descriptions into 134-167 word self-contained paragraphs with direct-answer openers
- **Add:** Question-phrased H2/H3 headings (e.g., "What is Rahul Motvani's cloud infrastructure experience?")
- **Add:** Short FAQ section with 3-5 questions that recruiters/AI would ask
- **Effort:** 2-4 hours content work
- **Impact:** Makes content independently extractable by AI answer engines

### 3.3 Create Individual Project Pages (Priority: MEDIUM)
- **Action:** Add static routes `/projects/[slug]` for each of the 5 case studies
- **Each gets:** Own title tag, meta description, canonical URL, sitemap entry
- **Effort:** 4-8 hours development
- **Impact:** Creates internal link structure, enables long-tail keyword targeting, improves per-topic citation precision

### 3.4 Reduce JavaScript Bundle (Priority: MEDIUM)
- **Action:** Lazy-load below-fold interactive sections (Architecture Explorer, SRE Sandbox, project modals) using `next/dynamic`
- **Target:** Reduce initial JS from 822KB to <400KB
- **Effort:** 2-4 hours
- **Impact:** Improves LCP and INP, better Core Web Vitals scores

### 3.5 Create a YouTube Project Walkthrough (Priority: MEDIUM)
- **Action:** Record a 5-10 minute screen recording walking through one project (e.g., Terraform multi-cloud IaC or SonarQube pipeline)
- **Link from:** Relevant project card on the portfolio
- **Effort:** 2-4 hours
- **Impact:** YouTube presence is the strongest brand signal (~0.737 correlation) for AI citations

---

## Phase 4: Monitoring & Iteration (Ongoing)

### 4.1 Set Up Google Search Console Monitoring
- Monitor indexation status, crawl errors, search performance
- Track impressions and clicks for target queries

### 4.2 Configure Moz API for Backlink Tracking
- Add free Moz API key to unlock DA/PA metrics and backlink monitoring
- Re-run backlink audit quarterly

### 4.3 Run Lighthouse/CrUX Monitoring
- Set up PageSpeed Insights monitoring after Phase 2 changes
- Target: LCP < 2.5s, INP < 200ms, CLS < 0.1

### 4.4 Capture SEO Drift Baseline
- Run `drift_baseline.py` after Phase 2 to establish a reference point
- Monitor for regressions on future deploys

### 4.5 Submit to Bing Webmaster Tools
- Verify domain and submit sitemap for Bing/Copilot visibility

### 4.6 IndexNow Integration
- Add IndexNow key file to `public/`
- Ping on each deploy for faster reindexing

---

## Effort Summary

| Phase | Estimated Effort | Expected Score Impact |
|-------|-----------------|----------------------|
| Phase 1 (Week 1) | ~1 hour | 55 → 65 |
| Phase 2 (Weeks 2-3) | ~6-8 hours | 65 → 78 |
| Phase 3 (Month 2) | ~15-25 hours | 78 → 88 |
| Phase 4 (Ongoing) | ~2 hours/quarter | Maintain 85+ |

---

## Priority Matrix

```
                    HIGH IMPACT
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
    │  GSC Submit       │  Project Pages    │
    │  HTTPS Enforce    │  YouTube Video    │
    │  AI Crawler Fix   │  JS Bundle Cut    │
    │  JSON-LD Schema   │                   │
    │  OG Image         │                   │
    │                   │                   │
LOW ├───────────────────┼───────────────────┤ HIGH
EFFORT│                 │                   │ EFFORT
    │  Favicon          │  Citable Content  │
    │  Sitemap Fix      │  FAQ Section      │
    │  llms.txt         │  Backlink Build   │
    │  Resume Date      │  Font Audit       │
    │  Cert URLs        │                   │
    │                   │                   │
    └───────────────────┼───────────────────┘
                        │
                    LOW IMPACT
```
