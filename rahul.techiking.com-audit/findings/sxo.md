# SXO Audit — https://rahul.techiking.com/

**SXO Gap Score: 36 / 100** (separate from, and not to be confused with, any technical SEO Health Score)

---

## Headline Finding: This Is Not (Primarily) a Content Problem — It's a Discoverability + Entity Problem

Before any page-type discussion: a `site:rahul.techiking.com` search returns **zero results**, and the
domain does not surface anywhere — not even on a page-9 basis — for its own name query
("Rahul Motvani DevOps Engineer") or any of the four generic target queries. `robots.txt` allows
Googlebot (`Allow: /`), there is no `<meta name="robots">` block, and a valid `sitemap.xml` exists
(`lastmod: 2026-09-02`) — so this is not a robots/noindex blocker. Combined with a `last-modified`
header of the same day as this audit, the most likely explanation is simply that **the site is too new
and has no inbound authority signal yet** (no backlinks were found pointing to it anywhere in the
searches performed, including a direct `"Rahul Motvani" techiking` query, which surfaced zero mentions
of the domain).

This matters because every page-type/content fix below is necessary but **not sufficient** — a
perfectly-optimized page with zero index presence and zero backlinks will not rank regardless of
on-page quality. Flagging this first because it reframes the rest of the audit: the page-type mismatches
found in Section 2 explain *why ranking will be hard even once indexed*; they do not explain the current
*complete absence* from the SERP, which is a crawl-equity/authority problem, not a content-quality one.

---

## 1. Target Page Profile (fetched via `render_page.py --mode always` + `parse_html.py`)

| Element | Value |
|---|---|
| Page type (structural) | Single-page personal Landing Page with embedded interactive widgets |
| Title tag | `Rahul Motvani \| DevOps & Cloud Infrastructure Engineer` |
| H1 | `Rahul Motvani` (name only — no role/keyword in H1) |
| Meta description | "DevOps, DevSecOps, and SRE Engineer with 4.5+ years of experience building secure, automated, and reliable cloud infrastructure on AWS, Azure, and GCP." |
| H2 count | 8 (all confirmed matching the brief) |
| Word count | 1,928 |
| Images (`<img>`) | **0** |
| Schema blocks (JSON-LD) | **0** |
| Internal links | 4 (all `#anchor` jumps — single URL site) |
| External links | 14 (LinkedIn, GitHub, TryHackMe, `mailto:`) |
| Sitemap URLs | 1 (`https://rahul.techiking.com/`) |
| `is_spa` (render diagnostic) | `False` — content is present in raw HTML pre-JS, good for crawlability |
| Indexation | Not found via `site:` search or any target-query search |

Strong points already in place: a resume PDF download (`/Rahul_Motvani_Resume.pdf`), a pre-filled
recruiter `mailto:` CTA (subject: "DevOps Opportunity - Recruiter (Direct)"), explicit anchor-nav
sections (`#recruiter-summary`, `#projects`, `#architecture`, `#skills`, `#experience`,
`#sre-sandbox`, `#certifications`, `#contact`), and two genuinely differentiated interactive
features (Architecture Flow selector, Incident Response/RCA Simulator) that almost no competing
portfolio in the SERP has.

---

## 2. SERP Backwards Analysis (5 target queries, taxonomy: `page-type-taxonomy.md`)

### Query 1: "Rahul Motvani DevOps Engineer" (branded/name query)
**Dominant type: Profile/Directory Listing** (not a taxonomy type — closest analogue: high-authority
entity profile pages) — **~80% consensus** (8 of 10 results)

Results: 7 LinkedIn profiles of *other* people named Rahul in DevOps roles, 1 GitHub profile
(Rahulkprajapati), 1 ZoomInfo directory listing, 2 Wikipedia disambiguation pages (unrelated Rahuls,
noise). **The target site did not appear at all.** Google is treating this as an entity/person-lookup
query and defaulting to high-DA network profiles (LinkedIn, GitHub, ZoomInfo) — not personal domains —
because it has no other signal to disambiguate "Rahul Motvani" against the dozen other DevOps-adjacent
Rahuls indexed.

**Mismatch severity: CRITICAL.** A brand-new personal subdomain with zero backlinks and zero `Person`
schema cannot out-rank LinkedIn/GitHub for a name query — this is a structural authority gap, not a
content gap.

### Query 2: "DevOps Engineer portfolio"
**Dominant type: Blog Post / Informational Guide** — **~40-50% consensus**

Results: Proxify knowledge-base article, Medium "how to build your projects portfolio" guide, 2 AI
portfolio-builder tool/template landing pages (Butternut AI, magic-self.dev), 1 GitHub template repo,
1 job listing (Built In) — and only **2 of 8** genuine competing personal portfolios
(`adityacprtm.dev/portfolio`, `foliox.me` — itself a listicle of portfolio examples, not a single
portfolio). Real, ranking personal portfolios exist here but are a minority; the majority intent is
"how do I build one" rather than "show me a specific engineer's portfolio."

**Mismatch severity: HIGH.** Individual portfolios can and do rank here (proof: `adityacprtm.dev`),
but the target page's current structure (single URL, no per-project GitHub/live links, no visual
proof-of-work) is thinner on the exact signals that the two ranking competitors use.

### Query 3: "Cloud Infrastructure Engineer portfolio"
**Dominant type: Blog Post / Educational Guide** — **~60-70% consensus** (4-5 of 7 results)

Results: GitHub repo, Medium "Cloud Resume Challenge" article, Syracuse iSchool career guide,
DataCamp project-ideas blog, BizTech College guide, and only **2 of 7** real personal portfolios
(`adityacprtm.dev` again, `djomegni.com`).

**Mismatch severity: HIGH** — same pattern as Query 2.

### Query 4: "DevSecOps Engineer India portfolio"
**Dominant type: Job Aggregator / Listing Page** — **100% consensus** (6 of 6 results)

Results: Indeed, Glassdoor (×3), LinkedIn Jobs — every single result is a job board aggregator page.
**Zero portfolio content, zero blog content, zero individual profiles** appear anywhere in this SERP.

**Mismatch severity: CRITICAL — and structurally unfixable via content changes.** Google has decided
"India" + "Engineer" overrides "portfolio" and interprets this entirely as a job-search query. No
personal portfolio page type can win this SERP; this keyword should likely be **dropped as a target**
rather than optimized against.

### Query 5: "Platform Engineer portfolio website"
**Dominant type: Blog Post / Listicle ("best examples of...")** — **100% consensus** (7 of 7 results)

Results: Wix guide, Sitepoint guide, GitHub Topics tag page, TripleTen blog, SiteBuilderReport "20+
examples" listicle, ProResumes "15 best" listicle, SitesPlaced guide. **Zero individual portfolios**
rank — the entire SERP is "how to build one" / "gallery of examples" content.

**Mismatch severity: CRITICAL — structurally unfixable.** Same conclusion as Query 4: this keyword's
intent is "teach me" / "show me a curated list," not "show me one specific person's site."

### SERP Consensus Summary

| Query | Dominant Type | Confidence | Mismatch |
|---|---|---|---|
| Rahul Motvani DevOps Engineer | Profile/Directory (LinkedIn/GitHub) | ~80% | CRITICAL |
| DevOps Engineer portfolio | Blog Post/Guide | ~45% (2/8 are real portfolios) | HIGH |
| Cloud Infrastructure Engineer portfolio | Blog Post/Guide | ~65% (2/7 are real portfolios) | HIGH |
| DevSecOps Engineer India portfolio | Job Aggregator | 100% | CRITICAL |
| Platform Engineer portfolio website | Blog Post/Listicle | 100% | CRITICAL |

**3 of 5 target queries (60%) have SERPs the page structurally cannot win regardless of content
quality.** Only Queries 2 and 3 have a realistic path, and only because two comparable competitor
portfolios (`adityacprtm.dev/portfolio`, `djomegni.com`) prove individual portfolios *can* rank there —
which sets a concrete competitive bar (see Section 5).

---

## 3. Page-Type Mismatch Detection

Target page classification (per taxonomy priority order): closest fit is **Landing Page** (hero +
single value prop + minimal/anchor-only nav) with secondary **Hybrid** signals (educational project
case-study depth) and **Tool** signals (Architecture Flow selector, Incident Simulator are functional
interactive widgets, which per taxonomy priority technically ranks classification as "Tool" first —
but these are supplementary engagement features, not the primary utility a searcher is seeking).

This classification is **reasonable and legitimate** for a portfolio's actual purpose. The mismatch is
not "wrong page type built" — it's that **the page type that should theoretically win (a well-built
personal landing page) is competing against page types the SERP currently favors** (profile networks,
job aggregators, listicle guides) that a single personal domain cannot outrank without: (a) far more
backlink authority, (b) `Person`/`ProfilePage` schema to aid entity disambiguation, and (c) content
restructured to match what the two proven competitors do (per-project verifiable links, visual proof).

**Overall mismatch severity: CRITICAL** (driven by 3 of 5 unwinnable SERPs) with **HIGH** on the two
winnable ones.

---

## 4. User Stories (derived per `user-story-framework.md`)

1. **As a technical recruiter sourcing DevOps candidates**, I want to verify a candidate's real name
   and current role quickly, because I have a req to fill this week, but I'm blocked by **an
   information gap**: Google surfaces seven *other* Rahuls' LinkedIn profiles before this candidate's
   own site, so I never discover it exists.
   *(Source: 7/10 results for "Rahul Motvani DevOps Engineer" are unrelated LinkedIn profiles; target
   site absent from results — awareness stage)*

2. **As a hiring manager doing pre-interview technical due diligence**, I want to see quantified
   outcomes and verifiable proof (repo links, screenshots) for each claimed project, because I need to
   defend my shortlist to my own manager, but I'm blocked by **a trust gap**: projects describe
   qualitative outcomes ("reduced deployment failure rates," "zero data loss") without linked evidence
   or numbers, and there is no per-project GitHub/demo link.
   *(Source: ranking competitor `adityacprtm.dev/portfolio` structures every project with GitHub +
   live-site links as its core differentiator — consideration stage)*

3. **As a peer engineer comparing candidates side by side**, I want to inspect actual code/IaC/pipeline
   configs, because tool names alone don't prove competence, but I'm blocked by **technical
   confusion/comparison fatigue**: only one generic GitHub *profile* link exists site-wide, with no
   mapping from a specific project description to its specific repository.
   *(Source: competing portfolios `adityacprtm.dev` and `djomegni.com` both link individual repos per
   project — consideration/decision stage)*

4. **As a job seeker researching "how do I build a DevOps portfolio"**, I want examples and a
   replicable process, because I'm building my own career page, but I'm blocked by **an information
   gap**: this page is a finished product with no "how I built this" narrative or reusable template,
   so it offers no value to this segment even though it ranks in the same conceptual space.
   *(Source: "DevOps Engineer portfolio" and "Platform Engineer portfolio website" SERPs are 45-100%
   dominated by how-to guides and "best examples" listicles, not individual portfolios — awareness
   stage; explains why generic keywords are largely unwinnable)*

5. **As an HR/ATS screener doing keyword matching**, I want to confirm role-relevant tooling coverage
   fast, because I'm triaging a stack of candidates, because I need to move to the next candidate
   quickly, but I'm blocked by **a structured-data gap**: keyword coverage is excellent in visible text
   ("Key Skills & ATS Keyword Index — Match Rate: High" section exists) but there is no machine-readable
   `Person`/skills schema for automated tools to parse.
   *(Source: page's own self-declared ATS section proves author already targets this persona; zero
   JSON-LD schema found on the rendered page — decision stage)*

Stories span **awareness** (1, 4), **consideration** (2, 3), and **decision** (5) stages, each citing
an observed signal rather than an assumption.

---

## 5. Gap Analysis — 7 Dimensions (100 pts total)

| Dimension | Score | Evidence |
|---|---|---|
| **Page Type** | 6 / 15 | Landing-page structure is a legitimate choice, but 3/5 target SERPs are dominated by page types (profile networks, job aggregators, listicle guides) this page cannot become; single-URL architecture (sitemap has exactly 1 URL) also forfeits multi-page topical surface area that competitors use. |
| **Content Depth** | 10 / 15 | 1,928 words, 5 detailed projects, 9 competency domains, full experience/certs sections — genuinely deep. Capped because it's confined to one URL with no per-project permalinks/case-study pages, and outcome claims are largely unquantified ("reduced deployment failure rates" with no %). |
| **UX Signals** | 10 / 15 | Two genuinely differentiated interactive features (Architecture Flow, Incident/RCA Simulator), pre-filled recruiter `mailto:` CTA, resume PDF download, clear anchor nav. Capped by 0 images creating a text-dense experience in the 9-domain skills matrix and project write-ups, and a name-only H1 that carries no keyword signal. |
| **Schema** | 0 / 15 | Zero JSON-LD blocks found (`structured_data.block_count: 0`). No `Person`, `ProfilePage`, `CreativeWork`/project, or `BreadcrumbList` schema — the single highest-leverage fix for a name-query-dependent page. |
| **Media** | 1 / 15 | Zero `<img>` tags site-wide — no headshot, no architecture diagrams as static images, no Grafana/dashboard screenshots, no certification badge images. Nothing indexable via Google Images, no alt text anywhere. Interactive widgets appear to be SVG/canvas-rendered, which earns UX credit but zero crawlable-media credit. |
| **Authority** | 1 / 15 | No confirmed index presence (`site:` search returns 0 results); no backlinks found pointing to the domain in any search performed, including a direct name+domain query; brand-new custom subdomain. |
| **Freshness** | 8 / 10 | `last-modified` header and sitemap `lastmod` both within the last 24-48 hours — actively maintained, strong freshness signal once discovered. |
| **Total** | **36 / 100** | |

---

## 6. Persona Scoring (per `persona-scoring.md`)

| Persona | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|
| Recruiter/Sourcer | 20/25 | 16/25 | 15/25 | 20/25 | **71/100** | Good |
| Hiring Manager (due diligence) | 22/25 | 15/25 | 12/25 | 18/25 | **67/100** | Good |
| Peer/Technical Evaluator | 20/25 | 14/25 | 8/25 | 15/25 | **57/100** | Needs Work |
| HR/ATS Screener | 23/25 | 18/25 | 12/25 | 15/25 | **68/100** | Good |
| Aspiring Job Seeker (mismatched audience) | 8/25 | 10/25 | 10/25 | 5/25 | **33/100** | Critical Mismatch |

### Weakest (intended) Persona: Peer/Technical Evaluator (57/100)
**Top issue:** Trust dimension (8/25) — no per-project GitHub repo or live-demo links; only one
generic profile-level GitHub link exists site-wide, so nothing described in the 5 featured projects
can be independently verified.
**Recommended fix:** Add a "View Repo →" and, where applicable, "View Live →" link directly inside
each of the 5 project cards (SARA-II, LeadPulse AI, Bitbucket Migration, SonarQube Migration, Terraform
Multi-Cloud), pointing to the specific repository/demo for that project — mirroring the pattern used
by both ranking competitors (`adityacprtm.dev/portfolio`, `djomegni.com`).

### Systemic Issue Across All Personas
**Trust** is the lowest-scoring dimension for every persona except HR/ATS (avg ~11.4/25) — driven by
the combined absence of schema, per-project verification links, quantified metrics, and any visual
proof (screenshots/diagrams). This is the single biggest lever across the entire persona set.

### Priority Actions
1. Add per-project GitHub/live-demo links to all 5 project cards (targets weakest persona: Peer/Technical
   Evaluator).
2. Add `Person` schema (name, jobTitle, `sameAs`: LinkedIn/GitHub/TryHackMe URLs) and `ProfilePage`
   schema site-wide (targets systemic Trust gap + the CRITICAL name-query mismatch in Section 2/3).
3. Quantify project outcomes with real numbers (e.g., "reduced deployment failure rate by X%," "MTTR
   reduced from Y to Z") to strengthen Hiring Manager Trust (12/25 → target 18+/25).
4. Add at least 3-5 real images (architecture diagram exports, Grafana dashboard screenshots,
   certification badge images, professional headshot) with descriptive alt text — currently 0/15 on
   Media dimension.

---

## 7. Why Well-Optimized Content Might Still Fail to Rank — Synthesis

Four independent, compounding causes were identified, layered from most to least fundamental:

1. **No index presence at all.** `site:rahul.techiking.com` returns zero results; the domain does not
   appear for any of its 5 target queries, including its own name. Robots.txt and meta-robots are not
   blocking; the likely cause is simple newness combined with zero inbound authority — Google has not
   yet crawled/trusted the domain enough to rank it for anything, so on-page optimization quality is
   currently irrelevant to outcomes.

2. **Zero entity/structured-data signal for a name-dependent query.** The single highest-value query
   ("Rahul Motvani DevOps Engineer") is an entity-disambiguation problem — Google must decide which
   "Rahul + DevOps" web presence is authoritative. With 0 schema blocks and no `sameAs` links declared
   in machine-readable form, the page gives Google nothing to connect this domain to the LinkedIn/GitHub/
   TryHackMe profiles it already trusts for this person.

3. **3 of 5 target SERPs are structurally unwinnable by any personal portfolio.** "DevSecOps Engineer
   India portfolio" resolves 100% to job aggregators; "Platform Engineer portfolio website" resolves
   100% to how-to guides/listicles. No amount of on-page optimization changes what page type Google
   has decided serves those queries — these keywords should be deprioritized in favor of queries where
   individual portfolios demonstrably can rank (Queries 2 and 3, where `adityacprtm.dev` and
   `djomegni.com` prove it's possible).

4. **Where competing portfolios do win, they win on verifiability, not word count.** The target page's
   1,928 words are comparable in depth to the two ranking competitor portfolios found, but those
   competitors differentiate on per-project GitHub/live-demo links, screenshots, and (per WebFetch
   analysis of `adityacprtm.dev/portfolio`) explicit certification/badge visuals — exactly the Media,
   Schema, and Trust dimensions this page scores lowest on (1/15, 0/15, ~11/25 avg respectively).

---

## Limitations

- The `WebSearch` tool used for SERP analysis returns AI-summarized organic titles/snippets; it does
  **not** expose raw PAA (People Also Ask) boxes, ad copy, related-search chips, or featured-snippet
  formatting. User stories and persona derivation were built from result-type composition and query
  semantics rather than direct PAA/ad signal extraction — flagged per the framework's signal-source
  methodology, but this is a materially thinner signal set than a full manual SERP screenshot review
  would provide.
- Only organic results were assessable; presence/absence of AI Overview, ads, or a local pack for
  these queries could not be confirmed.
- Backlink/authority assessment relied on WebSearch mention-checking only (no access to Ahrefs/Semrush/
  Search Console); "zero backlinks found" reflects "zero backlinks discoverable via search," not a
  definitive backlink-index audit.
- Actual Google Search Console index-coverage status (indexed / crawled-not-indexed / discovered-not-
  crawled) could not be confirmed directly — the `site:` search result is a strong proxy but not
  equivalent to GSC data.
- Competitor page analysis (`adityacprtm.dev/portfolio`) used `WebFetch`, which summarizes rendered
  content rather than providing raw HTML/schema inspection — its "no schema markup" finding should be
  treated as indicative, not exhaustively verified.

---

## Cross-Skill Recommendations

- **E-E-A-T / entity gaps** (no schema, no quantified outcomes, no verifiable proof-of-work): run
  `/seo content` for deep author/entity analysis.
- **Missing schema types** (`Person`, `ProfilePage`, `CreativeWork` per project): run `/seo schema` to
  generate implementation-ready JSON-LD.
- **Thin single-page architecture** limiting long-tail/project-level rankings: run `/seo page` for a
  page-level structural audit.
- No local intent detected in any target SERP — `/seo local` is not applicable here.

Generate a PDF report? Use `/seo google report`.
