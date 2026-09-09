# ATS TARGETING GUIDE — Rahul Motvani
**Date: 2026-09-09**

Target roles: DevOps Engineer, DevSecOps Engineer, SRE, Platform Engineer, Cloud Infrastructure Engineer

---

## CURRENT STATE

**ATS Score (before fixes): ~49/100**
**Target: 90+**

### Root Causes of Low Score

| ATS Category | Issue | Fix Applied |
|---|---|---|
| Summary | Dense, jargon-heavy, keyword dump, no clear value proposition | Rewritten per role variant — concise, achievement-oriented |
| Quantify Impact | Responsibility descriptions, not achievement statements; unverifiable metrics | X-Y-Z bullet formula; removed unverifiable claims; added defensible achievements |
| Bullet Structure | Weak verbs, repetition, no outcome orientation | Stronger action verbs, ACTION + TECH + PROBLEM + IMPACT |
| Growth | Career progression not articulated | Each role shows escalating scope |
| Repetition | "Docker", "AWS, Azure, GCP" repeated identically in every role | Technology mentions distributed appropriately per role |
| Contact | Full street address + incorrect location vs portfolio | Changed to "Ahmedabad, India - Open to Remote" |
| Section Headings | Non-standard names | Standardized: Professional Summary, Work Experience, Technical Skills, Education, Certifications |
| Experience Duration | "4.5+ years" overclaim | "4+ years across infrastructure, networking, security, and DevOps" |

---

## KEYWORD STRATEGY BY TARGET ROLE

### 1. DevOps Engineer
**Primary keywords:** CI/CD, Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes, Terraform, AWS, Infrastructure as Code, automation, deployment pipeline, containerization, Helm, ArgoCD
**Secondary keywords:** Python, Bash, Linux, PostgreSQL, monitoring, Prometheus, Grafana
**Resume variant:** `resumes/01_DevOps_Engineer.md`
**Lead with:** CI/CD pipeline engineering, IaC, container orchestration

### 2. DevSecOps Engineer
**Primary keywords:** SAST, SCA, shift-left security, SonarQube, Snyk, Trivy, Gitleaks, Checkov, DevSecOps, security scanning, vulnerability management, SBOM, supply chain security, Cosign
**Secondary keywords:** IAM, WAF, network segmentation, Nessus, CNSS, penetration testing
**Resume variant:** `resumes/02_DevSecOps_Engineer.md`
**Lead with:** Shift-left security integration, pipeline security gates, security background (CNSS, TryHackMe Top 3%)

### 3. Site Reliability Engineer (SRE)
**Primary keywords:** observability, Prometheus, Grafana, ELK, monitoring, alerting, Kubernetes, incident response, SLO, availability, reliability, autoscaling, chaos engineering
**Secondary keywords:** Terraform, Linux, networking, troubleshooting, runbooks
**Resume variant:** `resumes/03_SRE.md`
**Lead with:** Observability stack, K8s reliability, incident response experience from prior infrastructure roles

### 4. Platform Engineer
**Primary keywords:** developer experience, self-service, internal platform, GitOps, ArgoCD, Kubernetes, Terraform modules, CI/CD templates, reusable pipelines, Helm
**Secondary keywords:** Docker, observability, security gates, automation
**Resume variant:** `resumes/04_Platform_Engineer.md`
**Lead with:** Reusable pipeline templates, self-service Terraform modules, GitOps deployment platform

### 5. Cloud Infrastructure Engineer
**Primary keywords:** AWS, Terraform, multi-cloud, VPC, IAM, EC2, EKS, Lambda, S3, RDS, infrastructure provisioning, networking, security groups, KMS
**Secondary keywords:** Azure, GCP, Linux, Bash, Python, drift detection, compliance
**Resume variant:** `resumes/05_Cloud_Infrastructure_Engineer.md`
**Lead with:** Multi-cloud Terraform IaC, AWS depth, networking background

---

## RESUME VARIANT STRUCTURE

All 5 variants share:
- Same truthful work history (same employers, titles, dates)
- Same education and certifications
- Same contact information

Each variant differs in:
- Professional summary (tailored to role)
- Bullet emphasis and ordering within each job
- Skills section ordering (lead category matches target role)
- Key projects section (4 most relevant projects, ordered by role fit)

---

## KEYWORD GAPS (Honest Assessment)

These keywords appear frequently in target job descriptions but have **limited or no evidence** in Rahul's background:

| Keyword | Status | Recommendation |
|---|---|---|
| Ansible/Chef/Puppet | No evidence | Do not claim. Learn and add to a project if pursuing roles requiring it |
| Service mesh (Istio/Linkerd) | Not used | Do not claim |
| Production Kubernetes | Project uses Kind locally | Describe as "Kubernetes (local multi-node)" — do not imply production clusters |
| Datadog/New Relic/Splunk | Not used | Do not claim. Prometheus/Grafana/ELK is the honest stack |
| HashiCorp Vault | Not evidenced | Do not claim unless used professionally |
| On-call/PagerDuty | No specific evidence | ABP broadcast SLA experience is the closest; frame carefully |
| SLOs/SLIs/Error budgets | Demonstrated in project, not production | Mention in project context only |

---

## CERTIFICATION GAP

**Current certifications that help:**
- CNSS (ICSI, UK) — legitimizes security claims for DevSecOps roles
- TryHackMe Top 3% — strong signal for security aptitude

**Missing certifications that cost interviews:**
- AWS Solutions Architect Associate (SAA-C03) — table-stakes for AWS roles
- Certified Kubernetes Administrator (CKA) — table-stakes for K8s roles
- Azure AZ-104 or GCP ACE — for multi-cloud claims

**Recommended priority:**
1. AWS SAA-C03 (broadest applicability)
2. CKA (strongest signal for K8s/Platform/SRE roles)

---

## METRICS THAT CAN BE CLAIMED

Only verifiable achievements should appear on the resume:

| Achievement | Source | Verifiable? |
|---|---|---|
| Migrated 200+ repositories with zero data loss | Bitbucket project case study | Yes (can discuss in interview) |
| PostgreSQL major version upgrade (10 to 15) | Bitbucket project | Yes |
| Built reusable CI/CD template adopted in 3 lines of YAML | devsecops-template repo | Yes (code is public) |
| 7 modular security scanning stages | devsecops-template repo | Yes (code is public) |
| OIDC keyless deployment eliminating static credentials | aws-serverless repo | Yes (code is public) |
| Multi-node K8s with full observability + chaos engineering | k8s-gitops repo | Yes (code is public) |
| $0 infrastructure cost serverless API (AWS Free Tier) | aws-serverless repo | Yes (architecture is public) |

| Achievement | Source | Verifiable? |
|---|---|---|
| "Reduced data breach risks by 30%" | Old resume | **NO — removed** |
| "-28% cloud cost savings" | RecruiterMatrix | **NO — removed** |
| "100% configuration drift elimination" | RecruiterMatrix | **NO — removed** |
| "99.9% inference availability" | SARA-II project | **NO — personal project, no monitoring data** |
