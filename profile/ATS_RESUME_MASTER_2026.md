# RAHUL MOTVANI
**DevOps Engineer | Cloud Infrastructure, Kubernetes, Terraform & DevSecOps**  
Nijhar, Gujarat, India • +91 89807 80003 • rahulmotvani8@gmail.com  
[LinkedIn](https://www.linkedin.com/in/rahulmotvani/) • [GitHub](https://github.com/rahulmotvani0-sketch) • [Portfolio](https://rahul.techiking.com)

---

### PROFESSIONAL SUMMARY
DevOps and Cloud Infrastructure Engineer with 4+ years of experience across production cloud infrastructure, Kubernetes, Linux systems administration, enterprise networking, and automated delivery. Specializing in AWS and Azure, Terraform IaC, Docker, Kubernetes, Helm, and Argo CD GitOps. Deep background in practical cybersecurity (ICSI Certified Network Security Specialist, Top 3% globally on TryHackMe), embedding automated SAST/SCA security gates, container hardening, and secret rotation directly into CI/CD pipelines. Proven track record in establishing resilient SRE observability stacks (Prometheus, Grafana, Loki, Alertmanager) to enforce SLI/SLO bounds and reduce MTTR.

---

### TECHNICAL SKILLS
- **Cloud Providers**: AWS (EKS, ECS, Lambda, DynamoDB, RDS, S3, ALB, API Gateway, CloudWatch, IAM, VPC), Microsoft Azure (AKS, Azure Monitor, Key Vault, Virtual Networks, RBAC), GCP (Fundamentals)
- **Infrastructure as Code & GitOps**: Terraform, Ansible, Docker, Kubernetes, Helm, Argo CD, Docker Swarm
- **CI/CD & DevSecOps**: GitHub Actions, GitLab CI, Jenkins, SonarQube, Semgrep, Trivy, Snyk, Checkov, Gitleaks, Sigstore Cosign, Anchore Syft (SBOM), HashiCorp Vault, External Secrets Operator (ESO)
- **Observability & SRE**: Prometheus, Grafana, Loki, Alertmanager, ELK Stack (Elasticsearch, Logstash, Kibana), CloudWatch, SLIs/SLOs, Incident Management & Root Cause Analysis (RCA)
- **Systems & Networking**: Linux (Ubuntu, Debian, RHEL), Windows Server, TCP/IP, DNS, DHCP, VLANs, Firewalls, VPN, SSL/TLS Management, Shell/Bash Scripting, Python

---

### PROFESSIONAL WORK EXPERIENCE

#### **DevOps Engineer** | *Agile Logic Technovation* | Ahmedabad, India  
*Present*
- Architect and manage multi-cloud infrastructure across AWS and Azure utilizing modular Terraform with remote state locking, eliminating configuration drift across Dev, Staging, and Production.
- Deploy and maintain containerized microservices on Kubernetes (EKS/AKS) and ECS using Helm and Argo CD GitOps, implementing rolling deployment strategies, Horizontal Pod Autoscaling (HPA), and Pod Disruption Budgets to sustain 99.9% uptime.
- Design reusable, shift-left DevSecOps pipelines in GitHub Actions and Jenkins, enforcing automated secret scanning (Gitleaks), SAST (Semgrep), container vulnerability scanning (Trivy), and IaC checks (Checkov) as blocking PR quality gates.
- Instrument centralized telemetry stacks with Prometheus, Grafana, Loki, and Alertmanager, constructing golden signal dashboards, SLI/SLO tracking, and PagerDuty/Slack notification routing to expedite incident response.
- Harden IAM roles, security groups, and network access policies following the principle of least privilege, integrating HashiCorp Vault and External Secrets Operator for dynamic, zero-secrets-in-git credential delivery.
- Author Python and Bash automation scripts for automated backup verification, SSL certificate renewals, and cluster log rotation, reducing recurring operational toil by ~15 hours per week.

#### **IT Technician** | *Azilen Technologies Pvt Ltd* | Ahmedabad, India  
*Aug 2024 – Nov 2025*
- Administered 100+ hybrid Linux and Windows servers, virtualization hosts, and internal network segments supporting developer environments.
- Automated server lifecycle provisioning, system patching, and baseline configuration using Ansible playbooks and shell scripts, standardizing workstation and test server environments.
- Collaborated with engineering teams to configure CI/CD build agents, troubleshoot DNS/network routing issues, and resolve staging deployment blockers.
- Authored internal standard operating procedures (SOPs) and runbooks for incident resolution and system disaster recovery, streamlining technical onboarding.

#### **Junior Network Engineer** | *Aruhat Technologies Pvt Ltd* | Ahmedabad, India  
*Jun 2023 – Jul 2024*
- Configured and maintained enterprise network infrastructure, including VLAN segmentation, firewall access control lists (ACLs), DHCP, DNS, and site-to-site IPsec VPN tunnels across multi-office deployments.
- Implemented defense-in-depth network zoning to isolate production databases and video delivery pipelines, mitigating unauthorized lateral network movement.
- Conducted regular vulnerability assessments using Nessus and OpenVAS, identifying unpatched network services and assisting system administrators in remediation.
- Managed SSL/TLS wildcard certificate renewal lifecycles across production web origins and reverse proxies.

#### **Junior IT Engineer** | *ABP News (ABP Network)* | Ahmedabad, India  
*Jul 2022 – May 2023*
- Maintained 24/7 operational reliability for 50+ Linux and Windows broadcast production servers, resolving high-priority hardware, network, and application incidents within SLA limits.
- Executed monthly security patch management, kernel updates, and scheduled server maintenance windows to preserve 100% compliance with corporate IT security baselines.
- Authored incident triage runbooks and collaborated with the engineering team in diagnosing broadcast feed network latency and storage bottlenecks.

---

### FEATURED TECHNICAL PROJECTS

#### **DevSecOps Supply-Chain CI/CD Template** | [GitHub Repository](https://github.com/rahulmotvani0-sketch/devsecops-secure-cicd-template)
- Built an enterprise-ready, reusable GitHub Actions pipeline integrating Gitleaks, Semgrep SAST, Trivy SCA, and Checkov IaC scanning with consolidated SARIF reporting.
- Enforced cryptographic container signing using Sigstore Cosign via GitHub OIDC keyless federation and generated SPDX/CycloneDX SBOMs with Anchore Syft.
- Implemented automated quality gates blocking releases on Critical/High CVSS findings.

#### **Kubernetes GitOps & SRE Observability Platform** | [GitHub Repository](https://github.com/rahulmotvani0-sketch/kubernetes-gitops-observability-platform)
- Provisioned a reproducible multi-node Kubernetes cluster featuring Argo CD App-of-Apps pattern for declarative GitOps synchronization and self-healing.
- Integrated full observability stack: Prometheus Operator, Alertmanager, and Grafana with RED metrics and synthetic SLO alert rules.

#### **AWS Serverless Secure API with WAFv2 & Keyless OIDC** | [GitHub Repository](https://github.com/rahulmotvani0-sketch/aws-serverless-secure-api)
- Designed a serverless microservice on AWS Lambda (ARM64/Python 3.12) and DynamoDB, fronted by API Gateway with rate limiting and AWS WAFv2 managed OWASP rules.
- Automated infrastructure deployment with modular Terraform and keyless GitHub Actions OIDC federation, eliminating long-lived AWS IAM access keys.

#### **Zero-Secrets Kubernetes Architecture (Vault & ESO)** | [GitHub Repository](https://github.com/rahulmotvani0-sketch/vault-secrets-operator-k8s)
- Implemented automated dynamic PostgreSQL credential generation via HashiCorp Vault and Kubernetes External Secrets Operator (ESO), eliminating hardcoded secrets in GitOps.

---

### EDUCATION
- **Master of Science (M.Sc.) — Information Technology (IMS)** | Ganpat University | *2020 – 2022*  
  *CGPA: 9.8 / 10* — Specialization: Server Administration & Infrastructure Management Services
- **Bachelor of Science (B.Sc.) — Information Technology (IMS)** | Ganpat University | *2017 – 2020*  
  *CGPA: 8.6 / 10* — Specialization: Network & Systems Infrastructure

---

### CERTIFICATIONS & CREDENTIALS

#### Professional Credentials & Milestones
- **Certified Network Security Specialist (CNSS)** — ICSI (International CyberSecurity Institute, UK) | *Credential ID: 19306985*
- **TryHackMe — Top 3% Globally in Practical Cybersecurity** | *Badges: Jr. Penetration Tester, Web Fundamentals, Intro to Cyber*

#### Specialized Course Completions & Continuous Learning
- **DevOps Course — Certificate of Completion** — Tutedude | *Credential ID: TD-RAHU-DO-1923 (Issued: Nov 2026)*
- **Architecting with Google Cloud Platform Specialization** — Coursera / Google Cloud | *5-Course Specialization*
- **Linux System Administration (LFCS Curriculum)** — Practical hands-on coursework & lab proficiency in enterprise Linux, storage, networking, and systemd service management.

