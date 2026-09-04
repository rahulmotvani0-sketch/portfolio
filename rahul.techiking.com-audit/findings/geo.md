# GEO / AI Search Readiness Audit — rahul.techiking.com

**Audited URL:** https://rahul.techiking.com/
**Audit date:** 2026-09-03
**Method:** Live HTTP fetch of `/robots.txt`, `/llms.txt`, `/sitemap.xml`, `render_page.py --mode auto` (raw fetch, `is_spa: false`, HTTP 200, no Playwright needed) + source inspection at `/home/rahul/PROJECT'S/portfolio-new/`
**Stack:** Next.js static export (`output: "export"`) → `out/` → GitHub Pages → Cloudflare CDN (custom domain via `public/CNAME`)
**Related report:** `/home/rahul/PROJECT'S/portfolio-new/rahul.techiking.com-audit/findings/schema.md` covers structured-data (JSON-LD) recommendations in depth — this report references it rather than duplicating the JSON-LD code blocks.

---

## GEO Readiness Score: 44 / 100 (Needs Improvement)

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 55/100 | 13.75 |
| Structural Readability | 20% | 60/100 | 12.00 |
| Multi-Modal Content | 15% | 35/100 | 5.25 |
| Authority & Brand Signals | 20% | 40/100 | 8.00 |
| Technical Accessibility | 20% | 25/100 | 5.00 |
| **Total** | 100% | | **44.0** |

The site is technically well-built (fast, static-rendered, real content in the initial HTML) and has genuinely strong underlying content (verifiable certs, quantified project outcomes, real GitHub/LinkedIn links). It scores low primarily because **the four most important AI answer-engine crawlers are being blocked at the edge** and because there is no llms.txt, no structured data, and no image/video presence — all fixable without a content rewrite.

---

## 1. AI Crawler Access Status (robots.txt)

**Critical finding: the live robots.txt is NOT the file in the repo.** The repo's `public/robots.txt` is 3 lines (`Allow: /` + sitemap). The live site serves a much longer file with an explicit AI-bot blocklist injected by **Cloudflare's edge-managed "Content Signals" / AI Crawl Control feature** (marked `# BEGIN Cloudflare Managed content` / `# END Cloudflare Managed Content` in the response). This means the blocking was very likely turned on via a Cloudflare dashboard toggle (Security → Bots → AI Scrapers and Crawlers, or the Content Signals beta), not written intentionally into the codebase. **No code change is needed to fix this — only a Cloudflare dashboard setting.**

Live `robots.txt` also declares: `Content-Signal: search=yes, ai-train=no, use=reference` under the wildcard user-agent — a legally-flavored (EU DSM Article 4) reservation of rights that says "you may index this for search and reference it, but you may not use it to train models," independent of the per-bot Allow/Disallow rules below.

| Crawler | Purpose | Status | Impact |
|---|---|---|---|
| **GPTBot** (OpenAI) | Training / broad retrieval corpus for ChatGPT | **Blocked** (explicit `Disallow: /`) | ChatGPT cannot ingest this site into its retrieval corpus |
| **ClaudeBot** (Anthropic) | Crawling for Claude's training & web-grounded answers | **Blocked** (explicit `Disallow: /`) | Claude cannot cite or ground answers in this site's content at all |
| **Google-Extended** | Governs use of content in Gemini / Google AI features (separate from core Search indexing, which uses plain Googlebot) | **Blocked** (explicit `Disallow: /`) | Content excluded from Gemini and Google's newer generative AI features; does **not** remove the page from classic Google Search indexing since Googlebot itself is unaffected |
| **CCBot** (Common Crawl) | Feeds the dataset many LLMs train on | **Blocked** (explicit `Disallow: /`) | Consistent with the `ai-train=no` Content-Signal — reasonable to keep blocked |
| **meta-externalagent** (Meta AI) | Llama / Meta AI training & grounding | **Blocked** (explicit `Disallow: /`) | Excluded from Meta AI answers |
| **Amazonbot, Applebot-Extended, Bytespider (TikTok/ByteDance), CloudflareBrowserRenderingCrawler** | Various AI/training crawlers | **Blocked** (explicit `Disallow: /`) | Excluded from those ecosystems |
| **OAI-SearchBot** (OpenAI's live-browsing/citation crawler for ChatGPT search) | Real-time citation in ChatGPT | **Allowed** (no specific rule; falls under wildcard `Allow: /`) | ChatGPT *can* still browse and cite this page live in conversations with browsing/search enabled — the gap is the training/retrieval corpus (GPTBot), not real-time citation |
| **PerplexityBot** | Real-time citation in Perplexity answers | **Allowed** (no specific rule; wildcard `Allow: /`) | Perplexity can crawl and cite the site today |
| **Bingbot / Microsoft Copilot** | Bing index → Copilot answers | **Allowed** (not listed, wildcard `Allow: /`) | Accessible |

**Net effect:** the two crawlers most consequential for this audit's own platform (Claude) and for OpenAI's broader corpus (GPTBot) are fully blocked, while Perplexity and ChatGPT's live-search bot are not. This is an inconsistent, almost certainly unintentional posture — it doesn't match a deliberate "allow search, block training" policy, since ClaudeBot and GPTBot's Disallow blocks *all* access including real-time answer grounding, not just training.

### Recommended robots.txt posture (respecting the owner's `ai-train=no` preference)

| Bot | Recommended | Rationale |
|---|---|---|
| GPTBot | **Allow** | Needed for ChatGPT visibility; OpenAI does not offer a separate "search-only, no-train" bot for GPTBot itself, so allowing it trades off against the `ai-train=no` preference — flag this as an explicit decision for the owner |
| ClaudeBot | **Allow** | Same tradeoff as above; currently fully invisible to Claude |
| OAI-SearchBot | Keep Allow | Already correct |
| PerplexityBot | Keep Allow | Already correct |
| Google-Extended | **Allow** (or leave blocked if the owner specifically wants to opt out of Gemini/AI-feature use — does not affect core Search ranking either way) | Owner's call; lower priority since Googlebot itself already indexes the site |
| CCBot, anthropic-ai, Bytespider, meta-externalagent, Amazonbot, Applebot-Extended | Keep **Disallow** | These are training-focused crawlers with no real-time answer-engine use case; blocking them is fully consistent with `ai-train=no` and costs nothing in visibility |

This is a **dashboard-only fix** (Cloudflare → the zone's Bot Management / AI Crawl Control / Content Signals settings) — the repo's own `public/robots.txt` does not need to change, since it already correctly says `Allow: /` for everyone and the edge is overriding it.

---

## 2. llms.txt Status: **Missing (404)**

`https://rahul.techiking.com/llms.txt` returns `404`. There is no `llms.txt` in `public/` and nothing in `src/app/` generates one. There is also no RSL 1.0 licensing file/reference anywhere on the site (the closest analog is the informal `Content-Signal` header text in `robots.txt`, which is not machine-readable RSL).

**Recommendation:** add `public/llms.txt` (static export means this just needs to be a plain text file in `public/`, no route handler required) following the llms.txt spec: an H1 with the site/person name, a one-line summary, and grouped markdown links to the key facts an LLM would want to retrieve in one shot — condensed skills summary, the 5 project case studies, certifications with verification links, resume PDF, LinkedIn, and GitHub. This is one of the highest-leverage, lowest-effort fixes available (a single static file, no build changes) and directly compensates for the site being a single-URL SPA-style page with no per-topic canonical pages to link to individually.

---

## 3. Passage-Level Citability

Extracted the boilerplate-stripped body text (`extracted_text`, 8,779 characters / ~118 non-empty lines) via trafilatura and analyzed it against the 134–167-word optimal-citation-length target.

**Finding: content is almost entirely too short to be independently citable.** The page is written as marketing bullet points and short labels, not as self-contained answer paragraphs:

- Median line length in the extracted body text is well under 30 words; the longest continuous passages (e.g., the hero description, "DevOps & DevSecOps Engineer with 4.5+ years of hands-on experience...") top out around 35–40 words.
- Almost every claim lives in a single bullet fragment (e.g., "Proven track record migrating legacy database & VCS platforms (Bitbucket Data Center, PostgreSQL) with zero data loss.") — factually strong and quantified, but too short and too dependent on surrounding list context to be lifted as a standalone citable passage by an LLM.
- There is **no FAQ section and no question-phrased content anywhere**, so there's nothing shaped like the query patterns users actually type into ChatGPT/Perplexity ("What cloud platforms does Rahul Motvani have experience with?", "Has Rahul Motvani migrated a Bitbucket Data Center instance?").
- Numeric/quantified claims exist and are a real strength: "4.5+ years," "Top 3% Global" (TryHackMe), "zero data loss," "zero-downtime migration" — these are exactly the kind of specific, extractable statistics AI answer engines prefer to quote. They just aren't currently wrapped in enough surrounding context to stand alone (e.g., no explanation of *why* zero data loss was achievable, what the migration scope was, when it happened) within a single citable block.

### Headings audit (from source, `grep -rn "<h1\|<h2\|<h3"` across live components)

- The live page (rendered from `Hero.tsx`, `AboutSection.tsx`, `ProjectsSection.tsx`, `ArchitectureExplorer.tsx`, `SkillsSection.tsx`, `ExperienceSection.tsx`, `SreSandbox.tsx`, `CertificationsAndAchievements.tsx`, `ContactSection.tsx` per `src/app/page.tsx`) has a clean, logical H1 → H2 → H3 hierarchy with one H1 (`Hero.tsx`).
- All H2/H3 headings are **label-style, not question-style**: "Featured Infrastructure & DevSecOps Projects," "Key Skills & ATS Keyword Index," "Engineering Competencies & Tooling," "Work Experience & Infrastructure Impact." None are phrased as the natural-language questions recruiters or AI systems would ask.
- Note for the dev team: `src/components/sections/*.tsx` (a second `Hero.tsx`, `Certifications.tsx`, `Projects.tsx`, `Experience.tsx`, `Skills.tsx`, `Contact.tsx`) also contain H1/H2/H3 markup but are **not imported by `page.tsx`** (which imports from `@/components/*`, not `@/components/sections/*`) — this appears to be unused/dead code from an earlier layout iteration, not a duplicate-H1 issue on the live page. Worth a cleanup pass but not a GEO issue today.

**Recommendation:** rewrite the highest-value sections (About/Hero summary, top 2–3 project case studies, and a new "why hire" recap) as 134–167-word self-contained paragraphs that open with a direct answer in the first 40–60 words, keep the specific stats, and add a short FAQ block with question-phrased H2/H3s (e.g., "What is Rahul Motvani's cloud infrastructure experience?", "What DevSecOps tools has Rahul Motvani implemented in CI/CD pipelines?"). This turns already-good factual content into extractable answer blocks without changing the underlying facts.

---

## 4. Authority & Brand Signal Analysis

| Signal | Status | Detail |
|---|---|---|
| **LinkedIn** | Present | `linkedin.com/in/rahul-motvani-720b8b18a/` linked from Hero, Navbar, ContactSection, Footer — consistent, real profile |
| **GitHub** | Present | `github.com/rahulmotvani0-sketch` linked from multiple components and per-project `githubUrl` fields in `portfolioData.ts` |
| **YouTube mentions** (strongest correlation, ~0.737, per GEO research) | **Absent** | No video content, no YouTube channel/profile link anywhere in source |
| **Reddit presence** | **Absent** | No Reddit links or evidence of community discussion/mentions |
| **Wikipedia entity** | **Absent** | No Wikipedia entity for Rahul Motvani (unrelated: two `wikimedia.org` image URLs are used only as GCP/Cisco *logo* image sources in `Certifications.tsx`, not an entity signal) |
| **Domain Rating / backlinks** (weakest correlation, ~0.266) | Not assessed (requires external backlink tooling) | Personal portfolio on a subdomain of a custom domain — likely low DR by default; low-priority given the weak correlation |
| **Third-party verification links** | Partial | `Certification` records in `portfolioData.ts` have a `credentialUrl?` field, but it is **unset on all 4 certifications** (CNSS, two Cisco certs, Google Cloud/Coursera) — no outbound verification links currently render on the page (also flagged in `schema.md`) |
| **Author/entity markup** | **Absent** | No `Person` JSON-LD, no `author` meta beyond the plain-text `authors: [{ name: "Rahul Motvani" }]` in Next.js metadata (renders as a non-machine-readable `<meta name="author">` tag only) — see `schema.md` for the recommended `Person`/`ProfilePage` JSON-LD |
| **Recency signals** | Weak | `sitemap.xml` has `<lastmod>2026-09-02</lastmod>` for the one URL; no visible "last updated" date in on-page content itself, no dated blog/article trail |

**Assessment:** the two links that exist (LinkedIn, GitHub) are real and consistent, which is good baseline entity grounding, but the single highest-correlation signal in GEO research (YouTube presence, ~0.737) is completely absent, and there's no Wikipedia or Reddit footprint at all. For a DevOps/Cloud engineer, plausible low-effort ways to build these signals: publish a short screen-recorded walkthrough of one project (e.g., the Terraform multi-cloud IaC repo or the SonarQube/Snyk pipeline) to YouTube and link it from the relevant project card; contribute answers on r/devops or r/kubernetes with a profile link where contextually appropriate (not spam); ensure the GitHub repos referenced by `githubUrl` are public, well-READMEd, and link back to the portfolio (backlink + GitHub is itself a moderately trusted entity source for AI crawlers).

---

## 5. Technical Accessibility for AI Crawlers

**Rendering: good.** `next.config.ts` sets `output: "export"` — this is a fully static export (`out/` directory), served from GitHub Pages behind Cloudflare. Live fetch confirms `is_spa: false` — a plain, non-JS-executing HTTP GET already returns the fully populated content (all section text, headings, project details) in the initial HTML. This means any AI crawler that *is* allowed through robots.txt does not need JavaScript execution to read the page — a meaningful advantage over CSR/hydration-dependent SPAs, and correctly implemented despite `page.tsx` being marked `"use client"` (Next.js still statically pre-renders the client component tree at build time for `output: "export"`).

**Response headers:** `HTTP/2 200`, `cf-cache-status`, `Cache-Control: max-age=600`, `access-control-allow-origin: *` — no anti-bot challenge pages, no JS-challenge interstitial observed on the raw fetch. Good baseline for crawler friendliness once robots.txt is fixed.

**Structural limitation: single URL for all content.** `src/app/page.tsx` renders every section (Hero, Projects, Architecture, Skills, Experience, SRE Sandbox, Certifications, Contact) on one route, and `sitemap.xml` lists exactly one `<loc>` (`https://rahul.techiking.com/`). There are no per-project, per-certification, or per-topic canonical URLs. This isn't a crawler-blocking issue, but it is a **citability ceiling**: AI answer engines strongly prefer citing a URL that maps tightly to a specific claim ("this URL is about the Bitbucket migration project") over a single URL that mixes 9 different topics — every citation from this site, no matter which fact is used, points to the same generic homepage, diluting topical relevance signals per section.

**Missing:** favicon (no `<link rel="icon">` anywhere in rendered `<head>` — also flagged in `schema.md`), `og:image`/`twitter:image` (absent from `layout.tsx` metadata object entirely, confirmed via `grep`), and no `apple-touch-icon`.

**Recommendation (medium-term, larger effort):** consider splitting the 5 project case studies into individually routable pages (e.g., static `/projects/[slug]` pages generated at build time, still compatible with `output: "export"`) each with their own metadata, canonical URL, and sitemap entry. This is the single highest-leverage structural change for citability but is a real development effort, not a quick fix — flagged here for prioritization but not counted in the "top 5 quick wins" below.

---

## 6. Multi-Modal Content

- **Images:** only 2 external `<img>` references found in the (unused) `components/sections/Certifications.tsx` (Google Cloud and Cisco logos hot-linked from `upload.wikimedia.org`), plus no local images in `public/` beyond `grid.svg` (a decorative background) — no headshot, no screenshots of dashboards/architecture diagrams, no downloadable infographic assets.
- **Video:** none.
- **Interactive content:** `ArchitectureExplorer.tsx` and `SreSandbox.tsx` provide interactive architecture-diagram and incident-simulation UI — good for human engagement, but these render as SVG/DOM interactions with no accompanying static image export, so an AI crawler (even if allowed) only sees the surrounding text labels, not a citable visual artifact.
- **Downloadable documents:** `Rahul_Motvani_Resume.pdf` and `Rahul_Motvani_Resume.docx` are in `public/` and linked from the Resume modal — this is a genuine plus, since PDFs are directly text-extractable by crawlers that can reach them (subject to the same robots.txt blocking above), giving a second, densely-factual document surface beyond the HTML page.
- **og:image / twitter:image:** absent (see §5 and `schema.md` §5) — this also suppresses how the page previews when shared/cited in chat UIs that render link cards (e.g., ChatGPT and Perplexity often show a preview card for cited sources).

---

## 7. Platform-Specific Visibility Assessment

| Platform | Est. Score | Basis |
|---|---|---|
| **Google AI Overviews** | ~45/100 | Classic Googlebot indexing unaffected (not in the block list); `Google-Extended` blocked limits use in Gemini/newer AI-feature grounding specifically; no structured data to aid entity/answer extraction; short passages reduce Overview-snippet extractability |
| **ChatGPT** | ~50/100 | `OAI-SearchBot` (live browsing/citation) is allowed — real-time citation is technically possible; `GPTBot` (broader retrieval/training corpus) is blocked, so the site won't be part of ChatGPT's standing knowledge outside live search; no llms.txt to guide retrieval; short passages hurt extractability |
| **Perplexity** | ~55/100 | `PerplexityBot` fully allowed — best-positioned platform today from a pure-access standpoint; still held back by lack of llms.txt, short passages, and no schema/entity markup |
| **Bing Copilot / Microsoft Copilot** | ~55/100 | Not explicitly blocked (wildcard `Allow: /`), relies on standard Bing indexing; same content-quality gaps apply |
| **Claude** | ~10/100 | `ClaudeBot` explicitly `Disallow: /` — Claude cannot crawl, ground, or cite this site at all today. This is the platform most affected by the current robots.txt posture. |

**11% overlap caveat:** research shows only ~11% of domains get cited by both ChatGPT and Google AI Overviews — this site's inconsistent bot-blocking (some platforms allowed, others fully blocked) makes that overlap even less likely than average, since it isn't optimized uniformly across engines.

---

## Top 5 Highest-Impact Changes

| # | Change | Effort | Impact | Where |
|---|---|---|---|---|
| 1 | **Unblock GPTBot, ClaudeBot (and decide on Google-Extended) in Cloudflare's AI Crawl Control / Content Signals dashboard setting** — no code change needed, the repo's own `public/robots.txt` is already correct | **Low** (~5–10 min, dashboard toggle only) | **Critical** — currently the single biggest blocker; Claude and ChatGPT's training/retrieval corpus have zero access | Cloudflare dashboard, zone: rahul.techiking.com |
| 2 | **Add `public/llms.txt`** summarizing identity, skills, the 5 projects, certifications (with real verification links once populated), and links to resume/LinkedIn/GitHub in the llms.txt markdown spec format | **Low** (~30–45 min, static file, no build/route changes) | **High** — directly compensates for the single-URL structure by giving crawlers a condensed, structured retrieval target | `public/llms.txt` (new file) |
| 3 | **Add `Person` + `ProfilePage` + `WebSite` JSON-LD** per the full spec already drafted in `schema.md` §4 | **Medium** (~1–2 hrs) | **High** — establishes machine-readable entity grounding ("who is Rahul Motvani") for Knowledge Panel eligibility and AI entity resolution | `src/app/layout.tsx` + new `src/lib/schema.ts` |
| 4 | **Rewrite the About/Hero summary and top project case studies into 134–167-word self-contained answer paragraphs with direct-answer openers, and add question-phrased subheadings** (e.g., "What is Rahul Motvani's DevSecOps experience?") plus a short FAQ block | **Medium** (~2–4 hrs content work) | **High** — content and stats are already strong; this makes them independently extractable/citable rather than requiring surrounding list context | `src/data/portfolioData.ts`, `AboutSection.tsx`, `ProjectsSection.tsx` |
| 5 | **Add a 1200×630 `og:image`, `twitter:image`, and favicon**, and populate the empty `credentialUrl` fields on all 4 certifications | **Low** (~30–60 min once an image asset exists) | **Medium** — improves link-card previews in chat UIs (ChatGPT/Perplexity citation cards) and social shares; verification links strengthen authority signals cheaply | `src/app/layout.tsx` metadata, `public/`, `src/data/portfolioData.ts` |

### Beyond the top 5 (longer-term / strategic)

- **Split project case studies into individually routable pages** (`/projects/[slug]`, still static-export-compatible) so each project has its own canonical URL — the highest-leverage *structural* fix for citability, but real development effort, not a quick win.
- **Build YouTube/Reddit/community presence** — the strongest brand-mention correlation with AI citations (~0.737 for YouTube) is currently at zero; a single project walkthrough video linked from the relevant project card would be a meaningful, low-cost start.
- **Clean up unused `src/components/sections/*.tsx`** dead code (duplicate Hero/Certifications/etc. not imported by `page.tsx`) — not a GEO issue today, but worth removing to avoid future accidental duplicate-heading regressions.

---

## Summary

- **AI crawler access:** Inconsistent and mostly blocked at the Cloudflare edge (not in source) — GPTBot, ClaudeBot, Google-Extended, CCBot, meta-externalagent, Amazonbot, Applebot-Extended, Bytespider, CloudflareBrowserRenderingCrawler all `Disallow: /`; OAI-SearchBot, PerplexityBot, and Bingbot remain allowed via the wildcard rule.
- **llms.txt:** Missing (404), no RSL 1.0 licensing present.
- **Structured data:** Zero (confirmed live and in source) — full recommendation already drafted in `schema.md`.
- **Citability:** Content is factually strong (quantified, specific claims; zero-downtime/zero-data-loss migrations, Top 3% TryHackMe ranking) but structurally too short and list-fragmented to be independently citable; no question-phrased headings, no FAQ.
- **Authority/brand:** Real LinkedIn + GitHub presence; zero YouTube, Reddit, or Wikipedia footprint (the three signals research correlates most strongly with AI citation).
- **Technical accessibility:** Strong (static export, real content in initial HTML, no JS-execution dependency, no bot-challenge pages) but limited to a single URL for all content, and missing og:image/favicon.
- **Overall GEO Health Score: 44/100** — the fastest, lowest-risk win is fixing the Cloudflare-managed robots.txt/AI Crawl Control setting (item #1 above), since it requires no code deployment and directly restores access for the two most-blocked platforms (Claude and ChatGPT's broader corpus).
