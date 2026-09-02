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
                         │  portfolio repo     │
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
                         │    GitHub Pages     │
                         │   Static Hosting    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Cloudflare DNS    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ rahul.techiking.com │
                         │       HTTPS         │
                         └─────────────────────┘
```

The application is hosted on **GitHub Pages** via official GitHub Actions workflows (`actions/deploy-pages`) using Next.js Static Export (`output: 'export'`), mapped to the custom domain **`rahul.techiking.com`** via **Cloudflare DNS**.

---

## 🔧 Production Setup Guide

### 1. GitHub Repository Configuration
1. Go to **Settings -> Pages**.
2. Under **Build and deployment -> Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter `rahul.techiking.com` and click **Save**.

### 2. Cloudflare DNS Configuration
In Cloudflare Dashboard for domain `techiking.com`:
1. Go to **DNS -> Records**.
2. Create a **CNAME** record:
   - **Type:** `CNAME`
   - **Name:** `rahul`
   - **Target / Value:** `rahulmotvani0-sketch.github.io`
   - **Proxy Status:** DNS Only (Grey Cloud) initially to allow Let's Encrypt certificate issuance.
3. Once DNS propagates and GitHub Pages verifies domain ownership, check **Enforce HTTPS** in **Settings -> Pages**.

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Hosting:** GitHub Pages (Static Hosting, Automated GitHub Actions Workflow)
- **DNS & Domain Management:** Cloudflare DNS (`rahul.techiking.com`)
- **Styling & UI:** Tailwind CSS v4, Lucide React Icons
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
- Automatic HTTPS via GitHub Pages & Cloudflare DNS.
- Built for WCAG 2.2 AA accessibility principles and Lighthouse performance targets.
