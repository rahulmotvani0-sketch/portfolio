# On-Page SEO Audit — rahul.techiking.com

**Audited URL:** https://rahul.techiking.com/  
**Audit date:** 2026-09-03

---

## 1. Title Tag

**Current:** `Rahul Motvani | DevOps & Cloud Infrastructure Engineer`  
**Length:** 57 characters (within 50-60 char recommended range)  
**Assessment:** Good

- Includes personal name + primary role — ideal for branded portfolio queries
- Pipe separator is standard
- Contains target keywords: "DevOps", "Cloud Infrastructure Engineer"
- **Suggestion:** Consider adding "Portfolio" or "Hire" for commercial-intent queries (e.g., "Rahul Motvani | DevOps & Cloud Infrastructure Engineer — Portfolio")

---

## 2. Meta Description

**Current:** "DevOps, DevSecOps, and SRE Engineer with 4.5+ years of experience building secure, automated, and reliable cloud infrastructure on AWS, Azure, and GCP."  
**Length:** 153 characters (within 150-160 char sweet spot)  
**Assessment:** Good

- Contains key roles: DevOps, DevSecOps, SRE
- Includes experience level (4.5+ years)
- Mentions major cloud platforms (AWS, Azure, GCP)
- **Missing:** No call-to-action (e.g., "Available for remote roles" or "View portfolio")
- **Missing:** "Remote" or availability signal not in meta description

---

## 3. Heading Structure

| Level | Count | Assessment |
|-------|-------|------------|
| H1 | 1 | Correct — "Rahul Motvani" |
| H2 | 8 | Good — one per major section |
| H3 | 20+ | Good — subsections within H2s |
| H4-H6 | 0 | None used (acceptable for this depth) |

**Issues:**
- H3 "Rahul Motvani" inside the recruiter summary section is redundant with the H1
- H2 headings are descriptive but long — could benefit from being more keyword-focused

---

## 4. Internal Linking

| Metric | Value |
|--------|-------|
| Unique internal links | 8 (all anchor links: #recruiter-summary, #projects, #architecture, #skills, #experience, #sre-sandbox, #certifications, #contact) |
| Unique external links | 5 (LinkedIn, GitHub, TryHackMe ×2, email) |
| Internal pages linked | 0 (single-page site) |
| Orphaned pages | N/A |

**Assessment:** Critical gap — single-page architecture means zero internal linking signals for search engines.

**Recommendation:** Create distinct URL routes for:
- `/projects/` — projects listing
- `/projects/sara-ii/` — individual project case studies
- `/resume/` — resume/about page
- `/contact/` — contact page

This would create internal link structure, enable keyword-targeted pages, and allow search engines to index specific content.

---

## 5. URL Structure

- **Homepage:** `https://rahul.techiking.com/` — clean, no parameters
- **Only assets:** `/Rahul_Motvani_Resume.pdf`, `/_next/static/*`, `/grid.svg`
- **No URL-based navigation** — everything is anchored on one page

---

## 6. Open Graph & Twitter Cards

### Present
| Tag | Value | Status |
|-----|-------|--------|
| og:title | Rahul Motvani \| DevOps & Cloud Infrastructure Engineer | OK |
| og:description | DevOps, DevSecOps, and SRE Engineer building secure... | OK |
| og:url | https://rahul.techiking.com | OK (missing trailing slash) |
| og:site_name | Rahul Motvani Portfolio | OK |
| og:locale | en_US | OK |
| og:type | website | OK |
| twitter:card | summary_large_image | **PROBLEM** |
| twitter:creator | @rahulmotvani | OK |
| twitter:title | (same as og:title) | OK |
| twitter:description | (same as og:description) | OK |

### Missing (Critical)
| Tag | Status | Impact |
|-----|--------|--------|
| **og:image** | Missing | LinkedIn, Twitter/X, Slack, iMessage previews show no image |
| **twitter:image** | Missing | Declared `summary_large_image` but no image to show |
| og:image:width | Missing | Recommended: 1200 |
| og:image:height | Missing | Recommended: 630 |
| og:image:alt | Missing | Accessibility for social previews |

**Impact:** Every social share of this portfolio renders as a text-only card. For a job-seeking engineer, this is a significant missed opportunity — LinkedIn shares (where recruiters see this) will look bare.

---

## 7. Canonical Tag

**Current:** `<link rel="canonical" href="https://rahul.techiking.com"/>`  
**Assessment:** Present but has trailing-slash mismatch with sitemap (`sitemap.xml` lists `https://rahul.techiking.com/`)

**Recommendation:** Standardize on one form (with or without trailing slash) and redirect the other via Cloudflare edge rule.

---

## 8. Image Optimization

### Current State
- **Total images in HTML:** 0 raster images, 0 Next.js `<Image>` components
- **External images:** 2 SVG logos from Wikipedia (Cisco, Google Cloud) in Certifications section
- **SVG icons:** All UI icons are inline SVGs from Lucide React (no image requests)
- **Background:** `/grid.svg` (214 bytes) used as CSS background-image

### Findings

| Finding | Severity |
|---------|----------|
| **Zero raster images on entire site** | Medium |
| No profile photo/avatar anywhere | Medium |
| No project screenshots or diagrams | Low |
| No OG image for social sharing | **High** |
| No favicon.ico or apple-touch-icon | **High** |
| External Wikipedia SVGs could break if Wikipedia CDN changes | Low |
| No `<img>` alt text issues (because there are no images) | N/A |

### Recommendations
1. **Add OG image** (1200×630px) — professional headshot or branded graphic with name/role overlay
2. **Add favicon** — at minimum favicon.ico (32×32) + apple-touch-icon (180×180)
3. **Consider adding**: Profile photo in hero section, project architecture screenshots/diagrams as images (currently text-only interactive components that search engines may not fully parse)

---

## 9. Miscellaneous On-Page Signals

| Signal | Status |
|--------|--------|
| `lang="en"` | Present on `<html>` |
| viewport meta | Correct: `width=device-width, initial-scale=1` |
| keywords meta | Present (12 keywords) — low SEO value but not harmful |
| author meta | Present: "Rahul Motvani" |
| creator meta | Present: "Rahul Motvani" |
| Font preloading | 2 woff2 fonts preloaded correctly |
| CSS delivery | Single bundled stylesheet, render-blocking but small |
| JS delivery | 7 async chunks — good non-blocking pattern |

---

## Summary

| Area | Score | Notes |
|------|-------|-------|
| Title Tag | 8/10 | Good, could add "Portfolio" or CTA |
| Meta Description | 8/10 | Good, missing availability/CTA |
| Heading Structure | 9/10 | Excellent, minor redundancy |
| Internal Linking | 2/10 | Critical gap — single-page architecture |
| Open Graph | 5/10 | Text tags good, but missing image is a deal-breaker |
| Images | 3/10 | Zero raster images, no favicon, no OG image |
| Canonical | 7/10 | Present but trailing-slash inconsistency |
| **On-Page Overall** | **6/10** | |
