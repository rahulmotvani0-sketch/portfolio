# PROFILE AUDIT — Rahul Motvani
**Auditor: Senior Technical Recruiter / ATS Optimization Specialist / DevOps Hiring Manager**
**Date: 2026-09-09**
**Sources inspected: Portfolio source code, portfolioData.ts, resume PDFs, GitHub repos (3 local project repos), llms.txt, schema.ts, layout.tsx, all components, Claude outputs/, profile/, commit history, sitemap, robots.txt, existing ATS analysis (screenshot: 49/100)**

---

## EXECUTIVE SUMMARY

Rahul Motvani is a legitimate DevOps/DevSecOps engineer with real infrastructure experience spanning networking → systems → security → cloud automation. The portfolio website is well-architected (Next.js 16, Tailwind, static export to GitHub Pages). Three GitHub project repositories contain genuine, working code with professional READMEs. However, the resume and profile have **critical credibility problems** that suppress ATS scores and would raise flags with experienced hiring managers.

**Current ATS Score: ~49/100**
**Target: 90+**
**Achievable with truthful corrections: Yes**

The core issues are not lack of skill — they are **presentation, consistency, overclaiming, and structural ATS failures**.

---

## 1. CRITICAL ISSUES (Fix Immediately — These Cost Interviews)

### 1.1 Experience Duration Overclaim
- **Claim:** "4.5+ years" (used in Hero, About, RecruiterMatrix, ExperienceSection, llms.txt)
- **Actual timeline (from portfolioData.ts):**
  - ABP Network: Jul 2022 – May 2023 (11 months) — IT Support
  - Aruhat Technologies: Jun 2023 – Jul 2024 (14 months) — Network/Systems
  - Azilen Technologies: Aug 2024 – Nov 2025 (16 months) — IT Technician
  - Agile logic Technovations: Dec 2025 – Present (~10 months) — DevOps Engineer
- **Total career: ~4 years 2 months** (Jul 2022 to Sep 2026)
- **Time in an explicit DevOps title: ~10 months**
- **Problem:** "4.5+" overstates by several months and, critically, conflates IT support/network roles with DevOps. A hiring manager doing date math in the interview will catch this.
- **Fix:** Use "4+ years across infrastructure, networking, security, and DevOps" — honest, defensible, and still strong.

### 1.2 Education Data Conflicts
- **Resume (ATS screenshot):** Shows TWO degrees at Ganpat University:
  - M.Sc. IT, IMS — 9.8 (Jun 2022)
  - B.Sc. IT, IMS — 8.6 (Aug 2020)
  - Also shows Jay Ambe Vidhyalaya HSC 12th — 50% (Aug 2017)
- **Portfolio (portfolioData.ts):** Shows only ONE entry:
  - "Degree in IT (IMS)" — 2017–2021
- **Resume Master Playbook:** Recommends removing the HSC 12th (50%) score — correct advice, not yet implemented everywhere.
- **Problems:**
  1. Resume shows M.Sc. + B.Sc.; portfolio shows a single generic "Degree in IT" — which is it?
  2. The date ranges conflict: resume says B.Sc. completed Aug 2020, M.Sc. completed Jun 2022; portfolio says 2017–2021
  3. HSC 12th (50%) is still on the downloadable resume — actively harmful
- **Fix:** Verify actual degrees. Standardize across all sources. Remove HSC 12th everywhere.

### 1.3 Employer Name Inconsistencies
- **Current employer:**
  - Portfolio: "Agile logic Technovations"
  - llms.txt: "Azilen Technologies Pvt Ltd"
  - Resume (ATS screenshot): "Azilen Technologies Pvt Ltd" (appears as employer for DevOps role)
  - micro1 Application Pack: "Azilen Technologies" (for DevOps role)
- **Previous employer:**
  - Portfolio: "Azilen Technologies" (for IT Technician role)
  - Resume: "Azilen Technologies Pvt Ltd" (also appears for IT Technician role)
- **Problem:** It's unclear whether the user changed companies from Azilen to Agile logic Technovations, or whether these are the same company. The portfolio data shows they are different companies with different roles, but the resume appears to combine them under Azilen. This MUST be clarified before any edits.
- **[VERIFY BEFORE EDITING: Are Agile logic Technovations and Azilen Technologies separate companies, or did the company rename?]**

### 1.4 Job Title Inconsistencies
- **Aruhat Technologies:**
  - Portfolio: "IT / Network & Systems Specialist"
  - Resume (ATS screenshot): "Jr. Network Engineer"
  - micro1 pack: "Jr. Network Engineer"
- **ABP Network:**
  - Portfolio: "IT Support Specialist"
  - Resume (ATS screenshot): "Junior IT Engineer"
- **Azilen Technologies:**
  - Portfolio: "Information Technology Engineer"
  - Resume: "IT Technician"
- **Problem:** Titles must match exactly across resume, LinkedIn, and portfolio. Inconsistencies read as fabrication even when they're just carelessness.
- **[VERIFY: What are the actual official titles from offer letters/contracts?]**

---

## 2. RESUME-SPECIFIC ISSUES (ATS Score Killers)

### 2.1 Professional Summary (ATS Category: "Summary" — flagged)
- Current summary on the resume is dense, jargon-heavy, and reads like a keyword dump
- Mentions "DevSecOps and MLOps" plus "AIML workflows" — identity blur
- "Passionate about DevSecOps and MLOps" — empty filler phrase
- Missing: clear value proposition, measurable career narrative, target role signal

### 2.2 Quantification (ATS Category: "Quantify Impact" — flagged, +10 pts potential)
- Resume bullets are mostly responsibility descriptions, not achievement statements
- Very few numbers that are defensible:
  - "200+ repositories" (Bitbucket migration) — **verifiable from project data**
  - "reduced data breach risks by 30%" — **NOT verifiable, should be removed or rephrased**
- Several metrics in portfolioData.ts project case studies (e.g., "74% latency reduction", "42% TTFT improvement") but these appear to be from personal projects, not professional work
- **Fix:** Use the X-Y-Z formula. Only claim metrics you can defend in an interview.

### 2.3 Bullet Point Structure (ATS Category — flagged)
- Many bullets start with weak verbs: "Built and maintained", "Implemented", "Supported"
- Same verbs repeated across roles
- Bullets describe responsibilities, not outcomes
- Missing: WHAT you did + HOW + WHAT CHANGED

### 2.4 Growth Signals (ATS Category — flagged)
- Career progression is genuinely strong (IT Support → Network → Systems → DevOps) but not articulated
- Each role doesn't show increasing scope/ownership
- Missing: explicit escalation of technical complexity and responsibility

### 2.5 Repetition (ATS Category — flagged)
- "Docker" appears in nearly every bullet
- "AWS, Azure, and GCP" repeated identically across multiple roles
- Same tools listed in bullets AND skills section redundantly
- "DevSecOps" used as both a noun and adjective repeatedly

### 2.6 Contact Details (ATS Category — flagged)
- Resume (ATS screenshot) shows full street address: "Main Bajar Gali, Near Primary Healthcare Center, Raigad, Gujarat, 394370, India"
- This is a privacy risk AND contradicts the Ahmedabad location on LinkedIn/portfolio
- Phone number visible: +91 89807 80003
- **Fix:** Location should be "Ahmedabad, India · Open to Remote" only. Remove street address.

### 2.7 Section Headings
- Resume uses non-standard section names that ATS may not parse correctly
- Need standard: PROFESSIONAL SUMMARY, WORK EXPERIENCE, SKILLS, EDUCATION, CERTIFICATIONS

### 2.8 Spelling & Grammar
- "Agile logic Technovations" — inconsistent capitalization (lowercase "logic")
- Various minor issues flagged by ATS

---

## 3. PORTFOLIO AUDIT

### 3.1 Strengths
- **Strong technical architecture:** Next.js 16, React 19, Tailwind CSS 4, static export to GitHub Pages
- **Good SEO foundation:** Schema.org JSON-LD (ProfilePage, WebSite, FAQPage), sitemap.xml, robots.txt, CNAME, llms.txt, Google Search Console verified
- **Professional component structure:** Navbar, Hero, RecruiterMatrix, Projects, Architecture Explorer, Skills, Experience, SRE Sandbox, Certifications, FAQ, Contact, Footer
- **Project case studies are detailed:** Each has problem/solution/architecture/technologies/challenges/impact/interview deep-dive
- **Custom domain:** rahul.techiking.com
- **CI/CD:** Automatic deploy to GitHub Pages on push to main
- **Contact form:** FormSubmit AJAX integration

### 3.2 Issues

#### Identity & Positioning
- Hero says "4.5+ Years Experience" — overclaim (see 1.1)
- "DevSecOps & SRE Focus" badge in Hero — but only 10 months in a DevOps title; SRE is aspirational
- Secondary titles include "DevSecOps Specialist" — overstates current evidence
- "resumeLastUpdated: September 2026" — hardcoded, will go stale

#### Content Issues
- **AboutSection:** Still says "4.5+ years of production cloud infrastructure" — overclaim
- **RecruiterMatrix:** Uses "4.5+ years" and includes claims like "-28% savings" that point to project data, not verified professional metrics
- **ExperienceSection subtitle:** "4.5+ years of hands-on technical progression" — overclaim
- **llms.txt:** Lists current role as "Azilen Technologies Pvt Ltd" — inconsistent with portfolio's "Agile logic Technovations"
- **SARA-II and LeadPulse AI projects:** Link to github.com/rahulmotvani0-sketch (profile root), not to actual repos — these repos don't appear to exist publicly
- **Bitbucket Migration, SonarQube DevSecOps, Terraform IaC:** Also link to profile root, suggesting these are professional work documented as case studies but not publishable code

#### Sitemap Gaps
- Sitemap has 6 URLs but is missing 3 project pages that exist in the portfolio:
  - `/projects/aws-serverless-secure-api` — missing from sitemap
  - `/projects/kubernetes-gitops-observability-platform` — missing from sitemap
  - `/projects/devsecops-secure-cicd-template` — missing from sitemap
- These are the three strongest, most verifiable projects with actual GitHub repos

#### SEO Issues
- OG description is generic: "DevOps, DevSecOps, and SRE Engineer building secure, automated, and reliable cloud infrastructure."
- Missing: project-specific OG images for project pages
- Twitter handle `@rahulmotvani` may not exist/match

#### Performance Concerns
- framer-motion loaded on every page (animation library adds bundle weight)
- Multiple dynamic imports (good practice, but ArchitectureExplorer and SreSandbox may be heavy)
- Certificate PNG images are large (380KB–954KB each) — should be optimized

---

## 4. GITHUB AUDIT

### 4.1 Repository Assessment

#### A. STRONG PORTFOLIO PROJECTS (have actual code, professional READMEs)

**1. aws-serverless-secure-api** ⭐⭐⭐⭐⭐
- Complete Terraform IaC (api_gateway.tf, dynamodb.tf, iam.tf, lambda.tf, waf.tf, observability.tf)
- Working Python Lambda function (src/app.py)
- CI/CD workflows (.github/workflows/ci.yml, deploy.yml)
- Tests (tests/test_app.py)
- Load testing script (scripts/load_test.py)
- Threat model documentation
- Professional README with Mermaid architecture diagram, badges, and comprehensive sections
- **Verdict: Strongest project. Pin this.**

**2. devsecops-secure-cicd-template** ⭐⭐⭐⭐⭐
- 7 modular composite GitHub Actions (secret-scan, sast-scan, sca-scan, iac-scan, container-scan, sbom-generator, image-signer)
- Complete pipeline workflow (.github/workflows/devsecops-pipeline.yml)
- Tuned policy files (.gitleaks.toml, .trivyignore, .checkov.yaml)
- Intentional vulnerability test fixtures AND secure counterparts
- Adoption guide, tooling comparison documentation
- Dockerfile with multi-stage hardened build
- Local simulation script
- **Verdict: Unique differentiator. Pin this.**

**3. kubernetes-gitops-observability-platform** ⭐⭐⭐⭐⭐
- Kind multi-node cluster config
- ArgoCD App-of-Apps GitOps manifests
- Kubernetes manifests (frontend, backend, HPA, ingress, Redis, namespace)
- Prometheus Operator values, custom PrometheusRules, Grafana dashboard JSON
- Loki values for log aggregation
- 4 operational scripts (setup, teardown, load traffic, simulate chaos)
- Interview demo script and SRE runbook
- **Verdict: SRE showcase. Pin this.**

#### B. PROJECTS DOCUMENTED AS CASE STUDIES (no public repo)

**4. SARA-II** — Links to profile root. Described as AI assistant infrastructure. Technologies include vLLM, Ollama, FastAPI. Appears to be a personal/side project. No public repo visible.
- **Verdict: Useful supporting project, but unverifiable. Mark clearly as personal project.**

**5. LeadPulse AI** — Links to profile root. Described as B2B revenue intelligence platform. Claims Snyk/SonarQube integration.
- **Verdict: Cannot verify code. Professional work or personal project? [VERIFY]**

**6. Bitbucket Migration** — Links to profile root. Describes real professional work (200+ repos migrated).
- **Verdict: Strong case study of professional work. Cannot publish code (proprietary). Acceptable as documentation-only.**

**7. SonarQube DevSecOps** — Links to profile root. Describes professional DevSecOps pipeline setup.
- **Verdict: Professional work case study. Acceptable as documentation-only.**

**8. Terraform IaC** — Links to profile root. Describes multi-cloud Terraform modules.
- **Verdict: Professional work case study. Acceptable as documentation-only.**

#### C. GITHUB PROFILE ISSUES
- **Pinned repos:** Unknown (cannot check GitHub profile directly from filesystem)
- **Profile README:** Unknown — should have one
- **Repository descriptions:** Need to verify they match portfolio descriptions
- **Topics/tags:** Need to verify repos have proper GitHub topics for discoverability

---

## 5. CERTIFICATIONS AUDIT

| Certification | Issuer | Type | Verified? | Resume Category |
|---|---|---|---|---|
| CNSS (Certified Network Security Specialist) | ICSI, UK | Certification | PDF exists, credential ID 19306985 | Certification ✓ |
| Architecting with Google Cloud Platform (5 courses) | Google Cloud / Coursera | Certificate Course (NOT a GCP certification) | 5 PDFs exist with Coursera credential IDs | Certificate Course — must NOT be called "Google Cloud Certification" |
| TryHackMe Learning Paths (6 paths) | TryHackMe | Learning Path Completions | 4 PDFs + 2 PNGs exist | Learning Paths — must NOT be called "certifications" |
| Certified Cyber Warriors | Cyber Security Community | Certificate | PDF exists, credential ID 0041084 | Workshop Certificate |
| Networking & Engineering Workshop | Sigma Institute of Engineering | Workshop | PDF exists | Workshop Certificate |
| Introduction to Cybersecurity | Cisco Networking Academy | Course Completion | No PDF found | Course Completion |
| Networking Basics | Cisco Networking Academy | Course Completion | No PDF found | Course Completion |

### Certification Issues
- **No industry-standard DevOps/Cloud certifications:** Missing AWS SAA, CKA, AZ-104, or similar. This is the biggest credibility gap for senior DevOps roles.
- **GCP courses are listed alongside actual certifications** — could mislead. Must clearly label as "Certificate Course" not "Certification"
- **TryHackMe paths are learning paths**, not certifications. The "Top 3% Global" achievement is impressive and verifiable, but the individual paths should be labeled as "Learning Path Completions"
- **[RECOMMENDATION: Pursue at minimum AWS Solutions Architect Associate (SAA-C03) or CKA — these are table-stakes for the target roles]**

---

## 6. CROSS-CONSISTENCY ISSUES

| Source | Claim | Conflict | Recommended Version |
|---|---|---|---|
| Portfolio | Current employer: "Agile logic Technovations" | llms.txt + resume say "Azilen Technologies Pvt Ltd" | [VERIFY which is correct] |
| Portfolio | Total experience: "4.5+ Years" | Date math: ~4y 2m total, ~10m as DevOps | "4+ years across infrastructure, security, and DevOps" |
| Portfolio | Education: "Degree in IT (IMS)" 2017–2021 | Resume: B.Sc. (2020) + M.Sc. (2022) at same university | [VERIFY actual degrees and dates] |
| Portfolio | Aruhat title: "IT / Network & Systems Specialist" | Resume: "Jr. Network Engineer" | [VERIFY official title] |
| Portfolio | ABP title: "IT Support Specialist" | Resume: "Junior IT Engineer" | [VERIFY official title] |
| Portfolio | Azilen title: "Information Technology Engineer" | Resume: "IT Technician" | [VERIFY official title] |
| Portfolio | Agile logic period: "December 2025 – Present" | Resume: "Dec 2025 – Present" | Consistent ✓ |
| Sitemap | 5 project URLs listed | 8 projects exist in portfolio, 3 missing from sitemap | Add all 8 project URLs to sitemap |
| llms.txt | "4.5+ years" + "Azilen Technologies" | Portfolio has "Agile logic" + same overclaim | Sync with corrected data |

---

## 7. KEYWORD GAP ANALYSIS (vs. DevOps/SRE Job Descriptions)

### Strong Coverage (keywords present with evidence)
- AWS, Azure, GCP ✓
- Terraform ✓ (strong project evidence)
- Kubernetes ✓ (strong project evidence)
- Docker ✓
- CI/CD ✓ (Jenkins, GitHub Actions, GitLab CI, Bitbucket)
- DevSecOps ✓ (SonarQube, Snyk, Gitleaks, Checkov)
- Prometheus, Grafana ✓
- Linux, Bash ✓
- Python scripting ✓
- IAM, security ✓
- Infrastructure as Code ✓
- Git ✓

### Weak or Missing (commonly required, limited evidence)
- **Ansible/Chef/Puppet** — no evidence of configuration management tools
- **ECS/EKS managed clusters** — Terraform configs reference EKS but project uses Kind locally
- **Production Kubernetes** — project is local Kind, not cloud-managed K8s in production
- **Service mesh** (Istio/Linkerd) — not mentioned
- **Cloud cost optimization** — claimed in project data but [VERIFY METRIC: -28%]
- **On-call/incident management** — mentioned conceptually but no specific production incident evidence
- **SLOs/SLIs/Error budgets** — mentioned in skills but no specific implementation evidence beyond project demos
- **Datadog/New Relic/Splunk** — not present (enterprise observability tools)
- **ArgoCD in production** — project uses ArgoCD but on local Kind, not production
- **Vault/secrets management** — mentioned but no specific tool evidence (HashiCorp Vault, AWS Secrets Manager usage)

### Keywords to Add Only If Verifiable
- Ansible (only if actually used professionally)
- HashiCorp Vault (only if actually used)
- AWS EKS/ECS in production (only if actually deployed to)

---

## 8. POTENTIAL ACHIEVEMENT SIGNALS (from evidence)

### Verifiable from Project Code/Documentation
- Migrated 200+ repositories with zero data loss (Bitbucket migration project)
- PostgreSQL major version upgrade (10 → 15) with automated rollback capability
- Built reusable DevSecOps pipeline template adopted via 3 lines of YAML
- Implemented 7 modular security scanning stages in CI/CD
- Created multi-node Kubernetes platform with full observability stack
- Achieved $0 infrastructure cost for serverless API (AWS Free Tier architecture)
- Implemented keyless OIDC deployment eliminating static credentials

### Potentially Verifiable from Professional Work [VERIFY]
- Number of cloud environments managed
- Number of CI/CD pipelines maintained
- Number of services containerized
- Deployment frequency improvements
- Incident response time improvements
- Number of security vulnerabilities caught pre-release
- Build time optimizations

### NOT Verifiable — Do Not Claim
- "Reduced data breach risks by 30%" (from current resume — remove)
- "99.9% inference pipeline availability" (SARA-II project claim — personal project, unverifiable)
- "Saved 35% in API token costs" (SARA-II — unverifiable)
- Specific uptime percentages for professional environments (unless you have monitoring data)

---

## 9. RECOMMENDATIONS (Priority Order)

### P0 — Fix Before Any Application
1. **Correct experience duration** to "4+ years" everywhere
2. **Resolve employer name conflict** (Agile logic vs Azilen)
3. **Standardize job titles** across resume, portfolio, LinkedIn
4. **Verify and standardize education data** (one degree vs two, correct dates)
5. **Remove street address** from resume — use "Ahmedabad, India · Open to Remote"
6. **Remove HSC 12th (50%)** from resume
7. **Remove unverifiable metrics** ("30% breach risk reduction")

### P1 — Resume Rewrite for 90+ ATS
1. Rewrite professional summary — concise, achievement-oriented, no fluff
2. Rewrite all experience bullets using ACTION + TECH + PROBLEM + IMPACT
3. Structure skills section with clear categories
4. Show career growth narrative (IT Support → Network → Systems → DevOps)
5. Eliminate repetition (same verbs, same tech mentions)
6. Use stronger action verbs throughout
7. Properly categorize certifications vs. courses vs. learning paths
8. Create role-specific resume variants

### P2 — Portfolio Improvements
1. Update sitemap to include all 8 project pages
2. Fix SARA-II and LeadPulse AI GitHub links (point to profile, not actual repos)
3. Update llms.txt with correct employer and experience duration
4. Optimize certificate images (compress PNGs)
5. Improve project ordering: lead with the 3 repos that have actual code
6. Add missing projects to sitemap (aws-serverless, k8s-gitops, devsecops-template)

### P3 — GitHub Improvements
1. Pin the 3 strong repos (aws-serverless, devsecops-template, k8s-gitops)
2. Create/update GitHub profile README
3. Ensure all repos have proper topics/tags
4. Verify repo descriptions match portfolio

### P4 — Long-term Career
1. Pursue AWS SAA-C03 or CKA certification
2. Build production Kubernetes evidence (even on personal AWS/GCP account)
3. Contribute to open-source DevOps tools
4. Write technical blog posts demonstrating expertise

---

## 10. PROJECT STRENGTH RANKING

| Rank | Project | DevOps Relevance | Code Evidence | Pin? |
|---|---|---|---|---|
| 1 | AWS Serverless Secure API | ⭐⭐⭐⭐⭐ | Full Terraform + Lambda + CI/CD | YES |
| 2 | DevSecOps CI/CD Template | ⭐⭐⭐⭐⭐ | Full pipeline + 7 composite actions | YES |
| 3 | K8s GitOps Observability | ⭐⭐⭐⭐⭐ | Full K8s manifests + Prometheus + ArgoCD | YES |
| 4 | Bitbucket Migration | ⭐⭐⭐⭐ | Case study only (proprietary) | Feature on portfolio |
| 5 | Terraform Multi-Cloud | ⭐⭐⭐⭐ | Case study only (proprietary) | Feature on portfolio |
| 6 | SonarQube DevSecOps | ⭐⭐⭐⭐ | Case study only (proprietary) | Feature on portfolio |
| 7 | SARA-II | ⭐⭐⭐ | No public repo | Lower priority |
| 8 | LeadPulse AI | ⭐⭐⭐ | No public repo | Lower priority |

**Recommended portfolio order:** Lead with projects 1-3 (code-backed), then 4-6 (professional case studies), then 7-8 (supporting).

---

## NEXT STEPS

**Before proceeding with implementation, I need you to verify:**

1. Are "Agile logic Technovations" and "Azilen Technologies" the same company or different?
2. What are your OFFICIAL job titles (from offer letters) at each employer?
3. What degrees did you earn at Ganpat University? (B.Sc. only? B.Sc. + M.Sc.? Dates?)
4. Is there any professional metric you can verify? (environments managed, pipelines built, services deployed, uptime data)
5. Is SARA-II a personal project or professional work?
6. Is LeadPulse AI a personal project or professional work?

**Once verified, I will proceed with the full implementation across resume, portfolio, GitHub, and all deliverables.**
