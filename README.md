# Rahul Motvani — DevOps / DevSecOps / SRE Portfolio

Production-quality personal portfolio application for **Rahul Motvani**, positioning him for remote **DevOps Engineer**, **DevSecOps Engineer**, **Site Reliability Engineer (SRE)**, **Platform Engineer**, and **Cloud Infrastructure Engineer** roles across US, UK, EU, Canada, APAC, and Middle East markets.

---

## 🚀 Key Candidate Positioning

- **Name:** Rahul Motvani
- **Current Position:** DevOps / DevSecOps Engineer at Azilen Technologies Pvt Ltd
- **Experience:** 4.5+ years of hands-on cloud infrastructure, IaC, Kubernetes, CI/CD, DevSecOps, and SRE operations
- **Target Roles:** DevOps Engineer, DevSecOps Engineer, Site Reliability Engineer (SRE), Platform Engineer, Cloud Infrastructure Engineer
- **Security Recognition:** TryHackMe — Top 3% Global Ranking

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling & UI:** Tailwind CSS v4, Lucide React Icons
- **Database:** PostgreSQL via Drizzle ORM
- **Database Schema:** `contact_inquiries` table storing recruiter inquiries with instant API responses
- **SEO & Metadata:** Structured JSON-LD (`Person` schema), OpenGraph tags, `sitemap.xml`, `robots.txt`

---

## 📁 Key Features

1. **Recruiter & ATS Matrix:** 30-second executive summary tailored for technical recruiters with role-focused impact filters.
2. **Featured Case Studies:** Deep case studies for 5 priority projects:
   - SARA-II (AI Assistant Infrastructure & Platform Engineering)
   - LeadPulse AI (Autonomous B2B Revenue Intelligence Platform)
   - Bitbucket Infrastructure Migration & Platform Modernization
   - SonarQube Migration & DevSecOps Quality Gate Pipeline
   - Terraform Multi-Cloud Infrastructure Automation & GitOps
3. **Interactive System Topology Explorer:** Visual step-by-step architecture flow diagrams for DevSecOps, AI microservices, database migrations, and multi-cloud IaC.
4. **Interactive SRE Sandbox:** Real-time incident response simulator allowing recruiters to test Rahul's automated playbooks against 4 production failure scenarios.
5. **9 Categorized Skill Domains:** Organized tech matrix with real-world hands-on use cases for every technology.
6. **Live Resume Viewer:** Formatted printable resume modal with PDF print controls.
7. **PostgreSQL Recruiter Contact Form:** Connected to API route `/api/contact` persisting inquiries to PostgreSQL via Drizzle ORM.

---

## 💻 Local Development Setup

```bash
# Install dependencies
npm install

# Push database schema to PostgreSQL
npx drizzle-kit push

# Run development server
npm run dev
```

---

## 🔨 Validation & Build

```bash
# Typegen
npx next typegen

# Type check
npm exec tsc -- --noEmit

# Production Build
npm run build
```

---

## 🔒 Security & Performance

- Zero hardcoded credentials or exposed secrets.
- Environment variables configured via process.env.
- Built for WCAG 2.2 AA accessibility principles and Lighthouse performance targets.
