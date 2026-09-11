# PROJECT INVENTORY — Rahul Motvani
**Date: 2026-09-09**

---

## OVERVIEW

| # | Project | Type | Public Repo | Portfolio Order |
|---|---------|------|-------------|----------------|
| 1 | AWS Serverless Secure API | Code-backed | Yes | 1st |
| 2 | DevSecOps Secure CI/CD Template | Code-backed | Yes | 2nd |
| 3 | Kubernetes GitOps Observability Platform | Code-backed | Yes | 3rd |
| 4 | Terraform Multi-Cloud IaC | Professional case study | No | 4th |
| 5 | Bitbucket Server Migration & Upgrade | Professional case study | No | 5th |
| 6 | SonarQube DevSecOps Pipeline | Professional case study | No | 6th |
| 7 | SARA-II (Personal Project) | Personal project | No | 7th |
| 8 | LeadPulse AI (Personal Project) | Personal project | No | 8th |

---

## DETAILED INVENTORY

### 1. AWS Serverless Secure API

- **GitHub:** https://github.com/rahulmotvani0-sketch/aws-serverless-secure-api
- **Category:** Cloud
- **Technologies:** Terraform, AWS Lambda (ARM64), API Gateway, DynamoDB, WAFv2, IAM, CloudWatch, OIDC, Python, GitHub Actions
- **Key achievements:**
  - Full IaC with modular Terraform (api_gateway.tf, dynamodb.tf, iam.tf, lambda.tf, waf.tf, observability.tf)
  - OIDC keyless deployment — no static AWS credentials
  - WAFv2 with rate limiting and SSRF protection
  - CloudWatch SRE dashboard with p95 latency tracking
  - Automated test suite + load testing script
  - Threat model documentation
- **Best for roles:** DevOps, Cloud Infrastructure, SRE, DevSecOps
- **Interview talking points:** Architecture tradeoffs (API Gateway vs ALB), cost optimization ($0 free tier), security layers, OIDC vs access keys

### 2. DevSecOps Secure CI/CD Template

- **GitHub:** https://github.com/rahulmotvani0-sketch/devsecops-secure-cicd-template
- **Category:** DevSecOps
- **Technologies:** GitHub Actions (7 composite actions), SonarQube, Semgrep, Snyk, Trivy, Gitleaks, Checkov, Cosign, Syft, CycloneDX, Docker
- **Key achievements:**
  - 7 modular composite actions (secret-scan, sast-scan, sca-scan, iac-scan, container-scan, sbom-generator, image-signer)
  - Teams adopt with 3 lines of YAML
  - SLSA Level 3 supply chain compliance
  - Intentional vulnerability test fixtures + secure counterparts
  - Tuned policy files to reduce false positives
  - Multi-stage hardened Dockerfile (non-root, read-only)
- **Best for roles:** DevSecOps, DevOps, Platform Engineer
- **Interview talking points:** Shift-left philosophy, false positive tuning, SBOM supply chain, Cosign image signing, adoption friction reduction

### 3. Kubernetes GitOps Observability Platform

- **GitHub:** https://github.com/rahulmotvani0-sketch/kubernetes-gitops-observability-platform
- **Category:** IaC & SRE
- **Technologies:** Kubernetes (Kind), ArgoCD, Prometheus, Grafana, Loki, Helm, HPA, Redis, Nginx Ingress
- **Key achievements:**
  - Multi-node Kind cluster simulating production topology
  - ArgoCD App-of-Apps GitOps pattern
  - Full observability: Prometheus metrics + Loki logs + Grafana dashboards
  - HPA autoscaling with custom metrics
  - Chaos engineering simulation scripts
  - SRE runbook and interview demo script
- **Best for roles:** SRE, Platform Engineer, DevOps
- **Interview talking points:** GitOps vs push-based deploy, observability pyramid, chaos engineering methodology, HPA tuning, ArgoCD app-of-apps

### 4. Terraform Multi-Cloud IaC

- **GitHub:** None (professional/proprietary work)
- **Category:** IaC & SRE
- **Technologies:** Terraform, AWS (VPC, EKS, RDS, IAM), Azure (VNet, AKS), GCP (GKE), Checkov, TFLint, S3+DynamoDB remote state
- **Key achievements:**
  - Modular Terraform framework across 3 cloud providers
  - Remote state with locking (S3 + DynamoDB)
  - Drift detection and automated compliance checks
  - Checkov IaC security policy enforcement on every PR
- **Best for roles:** Cloud Infrastructure, DevOps, Platform Engineer
- **Interview talking points:** Multi-cloud module design, state management, drift detection workflow, Checkov policy-as-code

### 5. Bitbucket Server Migration & Upgrade

- **GitHub:** None (professional/proprietary work)
- **Category:** Migration
- **Technologies:** Bitbucket Server, PostgreSQL 10 to 15, Bash, migration scripting
- **Key achievements:**
  - Migrated 200+ repositories with zero data loss
  - PostgreSQL major version upgrade (10 to 15) with automated rollback
  - Zero-downtime migration strategy
- **Best for roles:** DevOps, SRE, Platform Engineer
- **Interview talking points:** Migration planning, rollback strategy, data integrity validation, PostgreSQL major version upgrade process

### 6. SonarQube DevSecOps Pipeline

- **GitHub:** None (professional/proprietary work)
- **Category:** DevSecOps
- **Technologies:** SonarQube, CI/CD integration, quality gates
- **Key achievements:**
  - Quality gates blocking releases with CVSS > 7.0 vulnerabilities
  - Integrated into team CI/CD workflows
- **Best for roles:** DevSecOps, DevOps
- **Interview talking points:** Quality gate thresholds, developer adoption, false positive management

### 7. SARA-II (Personal Project)

- **GitHub:** None
- **Category:** AI Infrastructure
- **Technologies:** vLLM, Ollama, FastAPI, Docker, Python
- **Note:** Personal project. Infrastructure and AI serving is genuine, but no production metrics are verifiable.
- **Best for roles:** Supporting evidence for ML infrastructure experience
- **Interview talking points:** Model serving architecture, vLLM vs Ollama tradeoffs

### 8. LeadPulse AI (Personal Project)

- **GitHub:** None
- **Category:** AI Infrastructure
- **Technologies:** Python, Docker, CI/CD, Snyk, SonarQube
- **Note:** Personal project. B2B lead intelligence platform.
- **Best for roles:** Supporting evidence for full-stack DevOps
- **Interview talking points:** End-to-end project delivery, DevSecOps integration in personal projects

---

## ROLE-TO-PROJECT MAPPING

Which projects to highlight for each target role:

| Role | Lead Project | Supporting Projects |
|---|---|---|
| DevOps Engineer | AWS Serverless | DevSecOps Template, K8s GitOps, Bitbucket Migration |
| DevSecOps Engineer | DevSecOps Template | AWS Serverless (WAFv2/IAM), SonarQube Pipeline, K8s GitOps |
| SRE | K8s GitOps | AWS Serverless (CloudWatch), Bitbucket Migration, Terraform IaC |
| Platform Engineer | K8s GitOps | DevSecOps Template, Terraform IaC, AWS Serverless |
| Cloud Infrastructure | AWS Serverless | Terraform IaC, K8s GitOps, Bitbucket Migration |
