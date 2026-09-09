# GITHUB AUDIT — Rahul Motvani
**Date: 2026-09-09**
**Profile:** github.com/rahulmotvani0-sketch

---

## REPOSITORY ASSESSMENT

### Tier A: Portfolio-Ready (Pin These)

#### 1. aws-serverless-secure-api
- **Rating:** A+
- **Content:** Complete Terraform IaC (API Gateway, Lambda ARM64, DynamoDB, WAFv2, IAM, observability), Python Lambda handler, CI/CD workflows, test suite, load testing script, threat model
- **README quality:** Professional — Mermaid architecture diagram, badges, comprehensive sections
- **DevOps relevance:** IaC, serverless, security, CI/CD, observability — hits all 5 target roles
- **Action:** Pin. This is the strongest project.

#### 2. devsecops-secure-cicd-template
- **Rating:** A+
- **Content:** 7 modular composite GitHub Actions (secret-scan, sast-scan, sca-scan, iac-scan, container-scan, sbom-generator, image-signer), complete pipeline workflow, tuned policy files, intentional vulnerability fixtures, adoption guide, hardened Dockerfile
- **README quality:** Professional — clear adoption instructions, tooling comparison
- **DevOps relevance:** Unique differentiator — most candidates don't have a reusable security pipeline template
- **Action:** Pin. Second strongest project.

#### 3. kubernetes-gitops-observability-platform
- **Rating:** A+
- **Content:** Kind multi-node cluster, ArgoCD App-of-Apps manifests, K8s manifests (frontend, backend, HPA, ingress, Redis), Prometheus Operator + custom rules, Grafana dashboard JSON, Loki log aggregation, 4 operational scripts, SRE runbook, interview demo script
- **README quality:** Professional — architecture diagram, setup instructions
- **DevOps relevance:** SRE and Platform Engineer showcase
- **Action:** Pin. Third pinned project.

### Tier B: Case Studies Only (No Public Repo)

#### 4. Bitbucket Migration
- **Evidence:** Documented in portfolio case study. 200+ repos migrated, PostgreSQL 10 to 15 upgrade, zero data loss.
- **Why no repo:** Professional/proprietary work
- **Portfolio treatment:** Case study with detailed architecture, challenges, and RCA. No GitHub link.

#### 5. Terraform Multi-Cloud IaC
- **Evidence:** Documented in portfolio. Modular Terraform for VPC, EKS, RDS, IAM across AWS/Azure/GCP.
- **Why no repo:** Professional/proprietary work
- **Portfolio treatment:** Case study. No GitHub link.

#### 6. SonarQube DevSecOps Pipeline
- **Evidence:** Documented in portfolio. Quality gates blocking CVSS > 7.0 vulnerabilities.
- **Why no repo:** Professional/proprietary work
- **Portfolio treatment:** Case study. No GitHub link.

### Tier C: Supporting Projects (No Public Repo)

#### 7. SARA-II (Personal Project)
- **Evidence:** Documented in portfolio. AI assistant infrastructure with vLLM, Ollama, FastAPI.
- **Status:** Personal project, no public repo
- **Portfolio treatment:** Marked "(Personal Project)" in title. No GitHub link.

#### 8. LeadPulse AI (Personal Project)
- **Evidence:** Documented in portfolio. B2B lead intelligence platform.
- **Status:** Personal project, no public repo
- **Portfolio treatment:** Marked "(Personal Project)" in title. No GitHub link.

---

## GITHUB PROFILE RECOMMENDATIONS

### Must Do
1. **Pin these 3 repos** (in this order):
   - aws-serverless-secure-api
   - devsecops-secure-cicd-template
   - kubernetes-gitops-observability-platform

2. **Repository descriptions** — ensure each repo's GitHub description matches its portfolio title:
   - aws-serverless-secure-api: "Secure serverless API on AWS with full Terraform IaC, WAFv2, OIDC keyless deploy, and CloudWatch SRE dashboard"
   - devsecops-secure-cicd-template: "Reusable DevSecOps CI/CD pipeline template with 7 modular security scanning stages"
   - kubernetes-gitops-observability-platform: "Kubernetes GitOps platform with ArgoCD, Prometheus, Grafana, and Loki observability"

3. **Repository topics** — add GitHub topics for discoverability:
   - aws-serverless: `terraform`, `aws`, `serverless`, `lambda`, `api-gateway`, `waf`, `iac`, `devsecops`
   - devsecops-template: `devsecops`, `github-actions`, `sast`, `sca`, `security`, `cicd`, `sbom`, `cosign`
   - k8s-gitops: `kubernetes`, `argocd`, `gitops`, `prometheus`, `grafana`, `loki`, `observability`, `sre`

### Should Do
4. **Create/update profile README** (github.com/rahulmotvani0-sketch/rahulmotvani0-sketch) with:
   - One-line positioning: "DevOps & DevSecOps Engineer | Building secure, automated cloud infrastructure"
   - Links to portfolio, LinkedIn
   - Brief tech stack badges
   - Pinned project highlights (brief, linking to repos)
   - Do NOT overclaim experience or fabricate metrics

5. **Contribution graph:** Ensure regular commits to the 3 pinned repos (README updates, config improvements, issue responses)

### Avoid
- Do NOT create empty/placeholder repos for professional projects (Bitbucket, SonarQube, Terraform)
- Do NOT add fake stars or fork counts
- Do NOT claim "production usage" in repo descriptions if projects are demo/local
