# Performance (Core Web Vitals) Audit — rahul.techiking.com

**Audited URL:** https://rahul.techiking.com/  
**Audit date:** 2026-09-03  
**Method:** Lab-only measurements (no CrUX/field data — Google API not configured)

---

## Performance Score: 65 / 100 (Needs Improvement)

---

## 1. TTFB (Time to First Byte)

| Metric | Value | Rating |
|--------|-------|--------|
| DNS Lookup | 137ms | Moderate |
| TCP Connect | 204ms | Moderate |
| TLS Handshake | 224ms | Moderate |
| **TTFB** | **729ms** | **Needs Improvement** |
| Full Download | 1,087ms | — |

**Assessment:** TTFB of ~730ms is above the 800ms "good" threshold recommended by Google but borderline. The double-CDN stack (Cloudflare → GitHub Pages/Fastly) adds latency compared to a single CDN. The page also serves 174KB of HTML uncompressed.

**Recommendation:** Consider enabling Cloudflare "Cache Everything" page rule for the homepage with a reasonable TTL, or explore Cloudflare Pages instead of GitHub Pages to eliminate the double-CDN hop.

---

## 2. LCP (Largest Contentful Paint)

**Likely LCP Element:** Hero text paragraph ("Architecting, securing, and operating production cloud infrastructure across AWS, Azure, and GCP...")

Since the page has zero raster images, the LCP element is text. Factors affecting text LCP:

| Factor | Status | Impact |
|--------|--------|--------|
| Font preloading | 2 woff2 fonts preloaded | Positive |
| `next/font` optimization | Active (next-size-adjust meta) | Positive |
| Render-blocking CSS | 1 stylesheet (70KB) | Moderate blocker |
| HTML document size | 174KB | Large for text-only |

**Estimated LCP:** ~1.5-2.5s (based on TTFB + CSS blocking + font load + render)

**Why it's slow:** The hero text can't paint until:
1. HTML is downloaded (174KB)
2. CSS is parsed (70KB render-blocking stylesheet)
3. Fonts are loaded (two preloaded woff2 at 47KB + 36KB = 83KB)

The "element render delay" (time between font available and paint) appears large (~1.7s based on agent analysis), suggesting significant layout computation from the Tailwind CSS classes.

---

## 3. INP (Interaction to Next Paint)

**Total JavaScript payload:** 822KB (uncompressed, across 7 chunks)

| Chunk | Size | Notes |
|-------|------|-------|
| 07sc1ychx4p8t.js | 196KB | Likely React + Next.js runtime |
| 06c3ie4c43rfe.js | 222KB | Main app bundle |
| 09cbpt.7iv2c0.js | 140KB | Page component code |
| 03~yq9q893hmn.js | 110KB | Shared chunks |
| 0tgqc2azdedah.js | 57KB | Additional code |
| 0umk1g62etmt_.js | 17KB | Small chunk |
| turbopack-*.js | 10KB | Turbopack runtime |

**Assessment:** 822KB total JS is **heavy** for a static portfolio page. Even with Brotli compression (~3:1 ratio), that's ~270KB transferred. All scripts are `async`, which is good, but hydration still blocks interactivity.

**Risk factors:**
- Client-side hydration of the full page (animated elements, interactive architecture diagrams, SRE sandbox)
- Multiple `useState`/`useEffect` hooks for filters, tabs, and animations
- `animate-ping` CSS animations in the hero "control plane" section

**Recommendation:** Consider lazy-loading below-fold interactive sections (Architecture Explorer, SRE Sandbox) to reduce initial hydration cost.

---

## 4. CLS (Cumulative Layout Shift)

**Low risk** — the main CLS sources are well-controlled:

| Factor | Risk | Status |
|--------|------|--------|
| Font loading | Low | `next/font` with `next-size-adjust` meta prevents layout shift |
| Images | None | No raster images to cause shift |
| Dynamic content | Low | Content is server-rendered (SSG) |
| Ads/embeds | None | No third-party embeds |
| CSS transitions | Low | Tailwind transitions are CSS-only |

**Estimated CLS:** < 0.1 (Good)

---

## 5. Resource Summary

| Resource Type | Count | Uncompressed Size | Compressed (est.) |
|---------------|-------|-------------------|--------------------|
| HTML | 1 | 174KB | ~45KB (Brotli) |
| CSS | 1 | 70KB | ~15KB |
| JavaScript | 7 | 822KB | ~270KB |
| Fonts (woff2) | 14 total (2 preloaded) | 321KB | ~321KB (already compressed) |
| Images | 0 | 0 | 0 |
| **Total** | | **~1.4MB** | **~650KB** |

### Font Bloat Analysis

14 font files at 321KB total is excessive:
- Only 2 are preloaded (the Inter and Fira Code primary subsets)
- The other 12 are likely additional character subsets loaded by `next/font`
- For an English-only portfolio, many of these subsets may be unnecessary

---

## 6. Third-Party Impact

| Third Party | Present? | Impact |
|-------------|----------|--------|
| Analytics (GA, GTM) | No | Positive (no tracking overhead) |
| Chat widgets | No | Positive |
| Social embeds | No | Positive |
| External scripts | No | Positive |
| External CSS | No | Positive |
| External images | 2 (Wikipedia SVGs) | Negligible |

**Assessment:** Excellent — zero third-party JavaScript. The only external requests are 2 SVG images from Wikipedia for certification logos.

---

## 7. Compression & Caching

| Aspect | Status | Assessment |
|--------|--------|------------|
| Brotli compression | Active | Good |
| HTML cache | max-age=600 (10 min) | Reasonable |
| Static assets | CDN-cached | Good |
| Font caching | Long-lived (hashed filenames) | Good |
| JS caching | Long-lived (hashed filenames) | Good |

---

## Prioritized Recommendations

### High Impact
1. **Reduce JavaScript bundle size** (822KB → target <400KB): Tree-shake unused code, lazy-load interactive sections (Architecture Explorer, SRE Sandbox, project modals), and consider dynamic imports for below-fold components
2. **Reduce HTML document size** (174KB): The SSG output includes all project data inline — consider a lighter initial shell with client-side data loading for case study details

### Medium Impact
3. **Audit font subsets**: 14 woff2 files (321KB) for an English-only site suggests unused character subsets. Review `next/font` configuration to limit to Latin subset only
4. **Consider Cloudflare Pages** instead of GitHub Pages to eliminate the double-CDN latency hop and improve TTFB
5. **Add resource hints**: `<link rel="dns-prefetch">` for external domains (Wikipedia SVGs), though with only 2 images this is minimal impact

### Low Impact
6. **Add `fetchpriority="high"` to the LCP element** (hero text container) if feasible with the component structure
7. **Enable Cloudflare Early Hints** (103 status code) to push critical resources before HTML finishes

---

## Summary

The site has excellent fundamentals (zero third-party scripts, Brotli compression, font preloading, server-rendered content) but suffers from:
- **Oversized JS bundle** (822KB) for what is essentially a static portfolio
- **Large HTML document** (174KB) containing all content inline
- **Excessive font files** (14 woff2 files, 321KB total)
- **Borderline TTFB** (~730ms) due to double-CDN architecture

CLS is likely excellent (no images, `next/font` optimization). LCP is the main concern at an estimated 1.5-2.5s, driven by the cumulative weight of HTML + CSS + font loading before the hero text can paint.
