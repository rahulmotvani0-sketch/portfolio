# Schema / Structured Data Audit — rahul.techiking.com

**Audited URL:** https://rahul.techiking.com/
**Audit date:** 2026-09-03
**Source verified:** Live HTML (raw fetch, non-SPA, status 200) + repo source at `/home/rahul/PROJECT'S/portfolio-new/`
**Stack:** Next.js (static export) → `out/`, hosted on GitHub Pages, custom domain via `public/CNAME`

---

## 1. Detection Results

| Format | Found? | Evidence |
|---|---|---|
| JSON-LD (`<script type="application/ld+json">`) | **No** — 0 blocks | `structured_data.block_count: 0` from live fetch; `grep -c "application/ld+json" out/index.html` → `0` |
| Microdata (`itemscope`/`itemtype`/`itemprop`) | **No** | 0 matches in rendered HTML |
| RDFa (`vocab=`/`typeof=`) | **No** | 0 matches in rendered HTML |
| `<head>` meta tags | Partial | title, description, keywords, author, creator, canonical, OG (type/locale/url/title/description/site_name), Twitter card (card/creator/title/description) all present and correct |
| `og:image` / `twitter:image` | **No** | Not present in `layout.tsx` metadata object or rendered `<head>` |
| Favicon / `apple-touch-icon` | **No** | No `<link rel="icon">` of any kind in rendered `<head>` — only font preloads and stylesheet link |
| `robots.txt` / `sitemap.xml` | Yes | Present at `public/robots.txt` and `public/sitemap.xml`, both correctly reference the live domain |

**Confirmed: the site has zero structured data of any kind.** This matches the brief exactly — there is nothing to "fix," only opportunities to add.

Because Next.js renders this page server-side/statically (`is_spa: false`, raw fetch fully populated), any JSON-LD added via `layout.tsx` or `page.tsx` will be present in the initial HTML payload — no client-hydration risk for crawlers.

---

## 2. Validation Results

Not applicable — no schema blocks exist to validate. Validation checklist will apply to the recommended blocks below (see §4).

---

## 3. Missing Opportunities

This is a single-page personal portfolio (not a business, not an e-commerce/article site), so schema recommendations are scoped to what Google and AI/LLM crawlers can actually reconcile with the page content — no invented data, no placeholder text.

| Priority | Schema Type | Why |
|---|---|---|
| **Critical** | `Person` | Core entity of the page. Establishes Rahul Motvani as a known entity with job title, employer, skills, credentials, and social profiles (`sameAs`). Directly supports Knowledge Panel eligibility and AI/LLM entity grounding for "who is Rahul Motvani" queries. |
| **Critical** | `WebSite` | Standard single-entity site declaration; cheap to add, supports Sitelinks Searchbox eligibility (though no internal search exists here, so `potentialAction` is omitted — do not fabricate a SearchAction). |
| **High** | `ProfilePage` (wrapping the `Person`) | Google's recommended pattern for personal portfolio/profile pages is `ProfilePage` with `mainEntity` pointing to the `Person`. This is the correct container type — do not just float a bare `Person` at the top level of `WebPage`. |
| **High** | `BreadcrumbList` | Even a single-page site benefits from a one-item breadcrumb for consistent SERP display, but with only one page it's low-value here — **recommend skipping** unless the site adds more URLs (e.g., `/projects/[slug]` pages). Flagging as optional, not included in generated code below. |
| **Medium** | `EducationalOccupationalCredential` (nested in `Person.hasCredential`) | The four certifications (CNSS, Cisco Cybersecurity, Cisco Networking, Google Cloud/Coursera) and the TryHackMe Top 3% achievement are exactly what this property models. No dedicated rich result, but strengthens entity data for AI answer engines and Knowledge Graph. |
| **Medium** | `Organization` (nested as `Person.worksFor`) | Azilen Technologies Pvt Ltd as current employer. Minimal — name only, since no verified employer URL/logo is available in source; do not fabricate one. |
| **Low/Info** | `CreativeWork` / `SoftwareSourceCode` per project | The 5 project case studies (SARA-II, LeadPulse AI, Bitbucket Migration, SonarQube DevSecOps, Terraform IaC) could each be modeled, but they live in one `<section>` on one URL with no individual canonical URL or dedicated page — Google has no rich result for this pattern on a single-page site. **Not recommended as standalone top-level schema.** If you later split projects into individual pages/routes, revisit with `CreativeWork` + `about`/`softwareRequirements`.
| — | `FAQPage` | Not applicable — no FAQ content exists on the page, and even if it did, Google retired FAQ rich results for all sites (May 7, 2026). **Do not add.** |
| — | `HowTo` | Not applicable and deprecated (rich results removed Sept 2023) regardless. **Do not add.** |

### Explicitly rejected (would require fabricated data)
- **`Product`/`Offer`/`AggregateRating`** — this is a portfolio, not a product or service listing. No price, no reviews exist. Do not invent.
- **`Review`** — no testimonials/reviews present in source (checked `AboutSection.tsx`, `RecruiterMatrix.tsx`, `Hero.tsx`) — none found. Do not fabricate.
- **`ImageObject`/`og:image` reference in schema** — no profile photo or OG image asset exists in `public/` or referenced in any component. **Flag as a genuine gap** (see §5) but the JSON-LD below omits `Person.image` rather than invent a URL. Once an `og-image.png`/headshot is added to `public/`, add `image` to the `Person` and `og:image`/`twitter:image` meta tags together.
- **`JobPosting`** — not applicable, this is a candidate profile, not a job listing.

---

## 4. Recommended JSON-LD

Two blocks recommended: one `ProfilePage` (wrapping `Person`) and one `WebSite`. Both should be injected as `<script type="application/ld+json">` in `src/app/layout.tsx` (site-wide, since this is a single-page site) using Next.js's built-in JSON-LD pattern (a `<script>` tag with `dangerouslySetInnerHTML`, or the newer `Metadata`/`generateMetadata` script injection).

### 4a. `ProfilePage` + `Person` (Critical)

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
    "description": "DevOps & DevSecOps Engineer with 4.5+ years of hands-on experience designing, automating, securing, and operating cloud infrastructure across AWS, Azure, and GCP. Specializing in Kubernetes, Terraform IaC, DevSecOps pipeline integration (SonarQube/Snyk), and Site Reliability Engineering (SRE).",
    "email": "mailto:rahulmotvani8@gmail.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Azilen Technologies Pvt Ltd"
    },
    "knowsAbout": [
      "AWS", "Microsoft Azure", "Google Cloud Platform",
      "Terraform", "Kubernetes", "Docker", "Helm",
      "CI/CD", "DevSecOps", "SonarQube", "Snyk",
      "Site Reliability Engineering", "PostgreSQL", "Redis",
      "Prometheus", "Grafana", "Linux", "Bash", "Python",
      "Infrastructure as Code", "Cloud Security"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certified Network Security Specialist (CNSS)",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ICSI (International CyberSecurity Institute, U.K.)"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Introduction to Cybersecurity",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Cisco Networking Academy"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Networking Basics",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Cisco Networking Academy"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Cloud Certificate Course",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Coursera / Google Cloud"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/rahul-motvani-720b8b18a/",
      "https://github.com/rahulmotvani0-sketch",
      "https://tryhackme.com/p/rahulmotvani8gma"
    ]
  }
}
```

**Notes on this block:**
- `email` uses the `mailto:` scheme per Schema.org convention for `Person.email`.
- `dateCreated`/`dateModified` are placeholders in ISO 8601 format — replace `dateCreated` with the actual site launch date and keep `dateModified` synced with real content updates (currently set to match `sitemap.xml`'s `lastmod`).
- `worksFor.Organization` intentionally has no `url` — no employer URL is referenced anywhere in source; do not fabricate `https://azilen.com` without confirming it's correct and intended for public linking.
- `hasCredential` entries have no `url` since none of the 4 certifications in `portfolioData.ts` populate `credentialUrl` (the field exists in the `Certification` interface but is unset on all 4 records). **Recommend populating `credentialUrl` in `portfolioData.ts` for each cert** (e.g., Credly/Coursera/Cisco verification links) — this improves both the schema and the on-page UI (currently certs render with no outbound verification link).
- The TryHackMe "Top 3% Global Ranking" achievement is **not** modeled as a formal credential (no issuing body/verification URL structure fits `EducationalOccupationalCredential` cleanly) — it's better represented informally via `knowsAbout` (already covers cybersecurity domain) or omitted from schema entirely. Not included above to avoid overclaiming.
- No `image` property — see §3 rejected list. Add once a headshot/avatar exists in `public/`.

### 4b. `WebSite` (Critical)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://rahul.techiking.com",
  "name": "Rahul Motvani Portfolio",
  "description": "DevOps, DevSecOps, and SRE Engineer with 4.5+ years of experience building secure, automated, and reliable cloud infrastructure on AWS, Azure, and GCP.",
  "inLanguage": "en-US",
  "author": {
    "@type": "Person",
    "name": "Rahul Motvani"
  }
}
```

**Notes:**
- No `potentialAction`/`SearchAction` — the site has no internal search feature. Do not add a fake one.
- `name` matches `openGraph.siteName` from `layout.tsx` for consistency.
- `inLanguage` set to `en-US` matching `openGraph.locale: "en_US"`.

### Implementation pattern for Next.js (App Router)

Add both objects as separate `<script type="application/ld+json">` tags inside `RootLayout` in `src/app/layout.tsx`, e.g.:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
/>
```

Define `personSchema` and `websiteSchema` as constants (in `src/data/portfolioData.ts` or a new `src/lib/schema.ts`) so they stay in sync with `CANDIDATE_INFO`, `CERTIFICATIONS`, and `layout.tsx`'s `metadata` object rather than duplicating literals that can drift out of sync.

---

## 5. Additional Findings (Non-Schema, Flagged for Awareness)

These aren't JSON-LD issues but directly affect how the recommended schema (and the existing OG/Twitter tags) will render in search/social previews:

1. **Missing `og:image`/`twitter:image`** — confirmed absent in both `layout.tsx` metadata and rendered `<head>`. Social shares (LinkedIn, Twitter/X) and some AI crawlers will show no preview image. Recommend adding a 1200×630 OG image to `public/` and wiring it into `metadata.openGraph.images` / `metadata.twitter.images`, then adding `Person.image` to the JSON-LD above.
2. **Missing favicon** — no `<link rel="icon">` found anywhere in rendered `<head>`. Not a schema issue but worth flagging alongside since it affects the same "how does this page present in browser tabs/bookmarks/rich results" surface area.
3. **`hasCredential` verification links** — as noted in §4a, none of the 4 `CERTIFICATIONS` entries populate `credentialUrl`. This is a data-completeness gap in `src/data/portfolioData.ts`, not a schema-generation issue — the generated JSON-LD is correct given current data, but would be stronger with real verification URLs.

---

## Summary

- **Existing schema:** none (0 JSON-LD, 0 Microdata, 0 RDFa) — confirmed via live fetch and source `out/index.html`.
- **Validation:** N/A (nothing to validate).
- **Recommended additions:** `ProfilePage`/`Person` (Critical) + `WebSite` (Critical), both generated above from real `portfolioData.ts`/`layout.tsx` content — no placeholder text.
- **Explicitly not recommended:** `FAQPage` (no FAQ content + Google retired the rich result), `HowTo` (deprecated), `Product`/`Review`/`AggregateRating`/`JobPosting` (no underlying content), per-project `CreativeWork` (no dedicated URLs to anchor to on this single-page site).
