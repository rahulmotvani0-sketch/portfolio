# Rahul Motvani — DevOps / DevSecOps / SRE Portfolio

Production-quality personal portfolio application for **Rahul Motvani**, positioning him for remote **DevOps Engineer**, **DevSecOps Engineer**, **Site Reliability Engineer (SRE)**, **Platform Engineer**, and **Cloud Infrastructure Engineer** roles across US, UK, EU, Canada, APAC, and Middle East markets.

---

## 🌐 Production Domain

**Canonical Production URL:** [https://rahul.techiking.com](https://rahul.techiking.com)

---

## 🚀 Deployment Architecture

```text
                 ┌─────────────────────┐
                 │       GitHub        │
                 │   portfolio repo    │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   GitHub Actions    │
                 │                     │
                 │ Install             │
                 │ Lint                │
                 │ Build (Export)      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │    Cloudflare       │
                 │   Pages / Edge      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ rahul.techiking.com │
                 │       HTTPS         │
                 └─────────────────────┘
```

The application is deployed to **Cloudflare Pages** using Next.js Static Export (`output: 'export'`) automatically triggered by GitHub Actions on every push to `main`.

---

## 🔑 Required GitHub Actions Secrets

To enable automated deployments to Cloudflare Pages, set the following secrets in GitHub (`Settings -> Secrets and variables -> Actions`):

| Secret Name | Description | Example / Location |
| ----------- | ----------- | ------------------ |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token with Pages Edit permissions | Created in Cloudflare Dashboard -> My Profile -> API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account Identifier | Cloudflare Dashboard Account Overview (right sidebar) |

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Hosting:** Cloudflare Pages (Edge CDN, Automated Deployments)
- **Styling & UI:** Tailwind CSS v4, Lucide React Icons
- **Security Headers:** Managed via `public/_headers` (HSTS, NoSniff, FrameGuard)
- **SEO & Metadata:** Canonical URL (`https://rahul.techiking.com`), OpenGraph, `sitemap.xml`, `robots.txt`

---

## 📁 Key Features

1. **Recruiter & ATS Matrix:** Executive summary tailored for technical recruiters with role-focused impact filters.
2. **Featured Case Studies:** Deep case studies for 5 priority projects (SARA-II, LeadPulse AI, Bitbucket Migration, SonarQube DevSecOps, Terraform IaC).
3. **Interactive System Topology Explorer:** Visual architecture flow diagrams for DevSecOps, AI microservices, database migrations, and multi-cloud IaC.
4. **Interactive SRE Sandbox:** Real-time incident response simulator allowing recruiters to test Rahul's automated playbooks against 4 production failure scenarios.
5. **9 Categorized Skill Domains:** Organized tech matrix with real-world hands-on use cases.
6. **Live Resume Viewer:** Printable resume modal with PDF print controls (`/Rahul_Motvani_Resume.docx`).

---

## 💻 Local Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔨 Validation & Static Production Build

```bash
# Run linter
npm run lint

# Production Static Export (Outputs to out/)
npm run build
```

---

## 🔒 Security & Performance

- Zero hardcoded credentials or exposed secrets.
- Automatic HTTPS via Cloudflare SSL/TLS edge certificates.
- Built for WCAG 2.2 AA accessibility principles and Lighthouse performance targets.
