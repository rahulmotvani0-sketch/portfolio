export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Cloud' | 'DevSecOps' | 'Migration' | 'AI Infrastructure' | 'IaC & SRE';
  role: string;
  badgeText: string;
  problem: string;
  businessContext: string;
  architectureDescription: string;
  diagramNodes: {
    title: string;
    sub: string;
    type: 'client' | 'gateway' | 'compute' | 'database' | 'security' | 'observability';
  }[];
  technologies: string[];
  implementationSteps: string[];
  securityConsiderations: string[];
  automationHighlights: string[];
  observabilitySetup: string[];
  reliabilityHighlights: string[];
  challengesAndRCA: {
    challenge: string;
    solution: string;
  }[];
  impactAndResults: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  interviewDeepDive: {
    architectureTradeoffs: string;
    failureScenarioAndRecovery: string;
    costOptimization: string;
    scalingStrategy: string;
  };
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Proficient' | 'Advanced';
    featured?: boolean;
    useCase: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  isCurrent: boolean;
  highlights: string[];
  technologiesUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  credentialId?: string;
  badgeIcon: string;
  category: string;
  subCertificates?: {
    title: string;
    credentialUrl: string;
    credentialId?: string;
    shortLabel?: string;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
}

export const CANDIDATE_INFO = {
  name: "Rahul Motvani",
  primaryTitle: "DevOps Engineer | Production SaaS, DevSecOps & SRE",
  secondaryTitles: [
    "Production DevOps Engineer",
    "Azure & AWS DevOps Engineer",
    "DevSecOps & Supply Chain Security Specialist",
    "Site Reliability Engineer (SRE)",
    "AI-enabled Operations Engineer"
  ],
  totalExperience: "4+ Years",
  currentRole: "DevOps Engineer",
  currentCompany: "Agile Logic Technovation",
  location: "Ahmedabad, Gujarat, India",
  tagline: "Production-focused DevOps, SRE, DevSecOps & Cloud Infrastructure Engineer operating high-volume enterprise SaaS platforms.",
  heroDescription: "DevOps Engineer with 4+ years of experience architecting, securing, and operating production cloud infrastructure across AWS (ECS, Lambda, DynamoDB, ALB, API Gateway, CloudWatch, IAM, VPC) and Azure (AKS, Application Insights, Azure Monitor, networking, RBAC). Specializing in Infrastructure as Code (Terraform, AWS CDK), container orchestration (Kubernetes, Docker Swarm, Helm), CI/CD automation (GitHub Actions, Jenkins, GitLab CI), shift-left DevSecOps (OWASP Top 10, SAST, DAST, SCA, Trivy, Snyk, SonarQube, Checkov, Gitleaks, SBOM), enterprise SRE (Prometheus, Grafana, ELK/Loki, Alertmanager, SLI/SLO, MTTR, RCA), and AI-enabled operations (AIOps, intelligent observability, automated RCA). Proven track record of operating resilient multi-tenant SaaS environments with zero-downtime migrations, automated self-healing, and strict supply-chain security.",
  targetRoles: [
    "DevOps Engineer",
    "Azure DevOps Engineer",
    "DevSecOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Platform Engineer",
    "Cloud Infrastructure Engineer",
    "AI Operations Engineer"
  ],
  targetLocations: "US, UK, Europe, Canada, Australia, Singapore, UAE & Global Remote Roles",
  contact: {
    email: "rahulmotvani8@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahulmotvani/",
    github: "https://github.com/rahulmotvani0-sketch",
    tryhackme: "https://tryhackme.com/p/rahulmotvani8gma",
    availability: "Immediate / Remote",
  },
  resumeLastUpdated: "September 2026",
  atsKeywords: [
    "AWS", "ECS", "Lambda", "DynamoDB", "ALB", "API Gateway", "CloudWatch", "IAM", "VPC", "EC2", "S3", "RDS",
    "Azure", "AKS", "Application Insights", "Azure Monitor", "Azure VNet", "NSG", "Azure Key Vault", "Entra ID", "Azure RBAC",
    "GCP", "Multi-Cloud", "Terraform", "Terraform modules", "AWS CDK", "Kubernetes", "Docker", "Docker Swarm", "Helm", "ArgoCD", "GitOps", "Linux",
    "CI/CD", "GitHub Actions", "Jenkins", "GitLab CI", "Automated Testing", "Deployment Automation", "Bitbucket", "Python", "Bash",
    "PostgreSQL", "Redis", "Prometheus", "Grafana", "ELK", "Loki", "Alertmanager", "SLI/SLO", "MTTR", "RCA", "Incident Response", "HA", "Autoscaling",
    "Observability", "SRE", "DevSecOps", "OWASP Top 10", "SAST", "DAST", "SCA", "Trivy", "Snyk", "SonarQube", "Checkov", "Gitleaks",
    "Secrets Management", "SBOM", "Supply-Chain Security", "Cosign", "Syft", "Wazuh", "AIOps", "Agentic SDLC", "AI-Assisted Development",
    "Intelligent Observability", "AI-Assisted Incident Response", "Automated RCA", "LLM/AI Infrastructure", "Enterprise SaaS"
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "aws-serverless-secure-api",
    title: "AWS Serverless Secure API — WAFv2, API Gateway & Keyless OIDC",
    subtitle: "Production-grade, highly available URL Analytics API provisioned with Terraform IaC, protected via AWS WAFv2 and IAM least-privilege, and deployed through keyless GitHub Actions OIDC federation.",
    category: "Cloud",
    role: "Lead Cloud Infrastructure & DevSecOps Engineer",
    badgeText: "AWS Lambda / API Gateway / WAFv2 / DynamoDB / Terraform",
    problem: "Public SaaS APIs without edge WAF protection, over-permissioned IAM execution roles (dynamodb:*), and static CI/CD cloud credentials create critical exposure to Layer 7 DDoS attacks, SSRF exploits, and credential leakage under enterprise SaaS traffic bursts.",
    businessContext: "Engineered as a production-grade reference architecture for high-volume enterprise SaaS workloads, delivering single-digit millisecond redirects with 100% automated threat mitigation under strict AWS Free Tier cost bounds.",
    architectureDescription: "Designed an event-driven serverless architecture using API Gateway HTTP API v2 protected by regional AWS WAFv2 with rate-limiting (300 req/5m) and managed OWASP rulesets. Compute is powered by Python 3.12 Lambda on ARM64 Graviton2, bounded by a least-privilege IAM execution role accessing a single-table DynamoDB with KMS encryption, PITR, and TTL auto-pruning.",
    diagramNodes: [
      { title: "Client / Edge Request", sub: "HTTPS / TLS 1.3", type: "client" },
      { title: "AWS WAFv2 & API GW v2", sub: "Rate Limit (300/5m) / OWASP", type: "gateway" },
      { title: "AWS Lambda (ARM64)", sub: "Python 3.12 / SSRF Shield", type: "compute" },
      { title: "Amazon DynamoDB", sub: "KMS Encrypted / TTL / PITR", type: "database" },
      { title: "IAM Least-Privilege Role", sub: "Table-Bounded ARN Only", type: "security" },
      { title: "CloudWatch & X-Ray", sub: "SRE Dashboard / Metric Alarms", type: "observability" }
    ],
    technologies: [
      "AWS Lambda",
      "Amazon API Gateway",
      "AWS WAFv2",
      "Amazon DynamoDB",
      "AWS IAM",
      "AWS CloudWatch",
      "Terraform",
      "GitHub Actions",
      "Python 3.12",
      "AWS X-Ray",
      "Checkov",
      "Gitleaks",
      "Bandit"
    ],
    implementationSteps: [
      "Developed modular Terraform infrastructure provisioning API Gateway HTTP API v2, DynamoDB, Lambda, and IAM least-privilege roles.",
      "Engineered AWS WAFv2 Web ACL with rate-based blocking (300 req/5min) returning custom RFC 7807 problem JSON and AWS Managed OWASP rulesets.",
      "Implemented Python 3.12 Lambda handler on Graviton2 ARM64 with deep SSRF URL sanitization (blocking AWS IMDS 169.254.169.254 and RFC 1918 subnets).",
      "Configured keyless GitHub Actions OIDC federation with AWS IAM STS to eliminate static access keys from CI/CD runners.",
      "Built CloudWatch SRE operations dashboard and 5 metric alarms tracking p95 latency, 5xx errors, Lambda throttles, and WAF blocked request spikes."
    ],
    securityConsiderations: [
      "OWASP Top 10 mitigation via AWS WAFv2 managed rulesets, IP rate limiting, and hardware API Gateway request throttling.",
      "Runtime SSRF protection resolving hostnames to IP addresses and blocking loopback (127.0.0.1), AWS IMDS (169.254.169.254), and RFC 1918 subnets.",
      "Strict IAM least-privilege execution role bounded exclusively to the specific DynamoDB table ARN with read/write verbs only.",
      "Keyless OIDC deployment: GitHub Actions assumes IAM role via AWS OIDC with strict repository and branch claim validation.",
      "Data protection at rest via DynamoDB KMS envelope encryption, Point-in-Time Recovery (PITR), and automated TTL pruning."
    ],
    automationHighlights: [
      "Automated CI/CD pipeline executing Ruff linting, Bandit SAST security analysis, Gitleaks secret detection, and Checkov IaC security scanning.",
      "Speculative Terraform plan execution and automated PR diff commenting via GitHub Actions.",
      "Automated load verification script simulating concurrent bursts to validate WAF 429 rate-limiting in real time."
    ],
    observabilitySetup: [
      "Turnkey CloudWatch SRE dashboard tracking Inbound Traffic vs WAF Blocked Requests, 4xx/5xx status distribution, and p50/p95/p99 Lambda latency.",
      "CloudWatch Alarms integrated with SNS notifications for API 5xx spikes (>5 in 5m), p95 latency breaches (>1000ms), and abnormal WAF block spikes (>50 in 5m)."
    ],
    reliabilityHighlights: [
      "High Availability (HA) serverless architecture auto-scaling across multi-AZ AWS regions with zero cold-start SLA degradation.",
      "Atomic DynamoDB write operations (`ADD clicks :inc`) preventing race conditions during high-concurrency traffic bursts.",
      "Graviton2 ARM64 runtime isolation ensuring sub-15ms p95 latency and resilient fault recovery under heavy load."
    ],
    challengesAndRCA: [
      {
        challenge: "Preventing Server-Side Request Forgery (SSRF) when processing arbitrary target URLs from untrusted client requests.",
        solution: "Implemented comprehensive URL validation resolving hostnames to IP addresses and strictly blocking loopback (127.0.0.1), link-local AWS instance metadata (169.254.169.254), and private RFC 1918 subnets."
      }
    ],
    impactAndResults: [
      "Achieved 100% automated Layer 7 attack mitigation with sub-5ms WAF evaluation latency.",
      "Reduced operational cloud infrastructure costs to $0.00/month by operating fully within AWS Free Tier limits.",
      "Eliminated 100% of static cloud credentials in CI/CD by migrating to keyless AWS OIDC authentication.",
      "Achieved sub-15ms p95 redirect latency utilizing Graviton2 ARM64 Lambda and DynamoDB single-table design."
    ],
    githubUrl: "https://github.com/rahulmotvani0-sketch/aws-serverless-secure-api",
    interviewDeepDive: {
      architectureTradeoffs: "Selected API Gateway HTTP API (v2) over traditional REST APIs to achieve 70% lower p95 latency (~10ms vs ~35ms) and reduce per-million request costs from $3.50 to $1.00, while maintaining native WAFv2 and CORS support.",
      failureScenarioAndRecovery: "Under extreme concurrency spikes, API Gateway burst limits buffer traffic before Lambda reaches concurrency limits; DynamoDB atomic increments (ADD clicks :inc) prevent race conditions, and CloudWatch alarms notify on any throttling event.",
      costOptimization: "Graviton2 ARM64 compute reduces Lambda duration cost by 20%; DynamoDB TTL background threads prune expired links without consuming write capacity units or compute cycles.",
      scalingStrategy: "On-demand DynamoDB scaling and horizontally scaling serverless Lambda automatically absorb 10x traffic spikes; CloudFront CDN edge caching can be layered over GET /{code} to offload 85%+ of read traffic if throughput exceeds 10,000 req/sec."
    }
  },
  {
    id: "devsecops-secure-cicd-template",
    title: "Enterprise DevSecOps CI/CD Template & Supply-Chain Security",
    subtitle: "Reusable GitHub Actions shift-left security pipeline enforcing OWASP Top 10 SAST (Semgrep), SCA (Trivy), IaC (Checkov), Secret Scanning (Gitleaks), SBOM (Syft), and keyless container signing (Cosign).",
    category: "DevSecOps",
    role: "Lead DevSecOps & Supply-Chain Security Engineer",
    badgeText: "DevSecOps / SAST / SCA / Cosign / Syft / SBOM",
    problem: "Enterprise engineering teams face scanner false-positive alert fatigue (10,000+ unvetted notifications), fragmented security tools that developers bypass, and unsigned container images vulnerable to supply-chain tampering.",
    businessContext: "Created as an open-source enterprise reference standard for engineering teams, eliminating tool sprawl through native GitHub SARIF integration, tuned policy governance, and SLSA Level 3 supply-chain compliance.",
    architectureDescription: "Multi-stage shift-left pipeline that validates code locally before build. Combines Gitleaks for secret scanning, Semgrep for OWASP Top 10 SAST, Aqua Trivy for dependency SCA, Checkov for IaC, and Docker Buildx for hardened multi-stage image generation. Generates dual-format SBOMs (SPDX + CycloneDX) via Syft and signs images keylessly via Sigstore Cosign using GitHub OIDC identity tokens.",
    diagramNodes: [
      { title: "Git Commit / PR", sub: "Developer Push", type: "client" },
      { title: "Shift-Left Scanners", sub: "Gitleaks / Semgrep / Trivy / Checkov", type: "security" },
      { title: "Quality Gate Engine", sub: "CVSS Threshold Evaluation", type: "gateway" },
      { title: "Docker Multi-Stage Build", sub: "Unprivileged Non-Root Runner", type: "compute" },
      { title: "Anchore Syft SBOM", sub: "SPDX 2.3 & CycloneDX 1.5", type: "database" },
      { title: "Sigstore Cosign & Rekor", sub: "Keyless OIDC Identity Signing", type: "security" },
      { title: "GitHub Security Dashboard", sub: "SARIF Code Scanning & Scorecard", type: "observability" }
    ],
    technologies: [
      "GitHub Actions",
      "Semgrep",
      "Aqua Trivy",
      "Checkov",
      "Gitleaks",
      "Anchore Syft",
      "Sigstore Cosign",
      "Docker",
      "Python 3.12",
      "SARIF",
      "FastAPI"
    ],
    implementationSteps: [
      "Developed 7 modular composite GitHub Actions for Gitleaks, Semgrep, Trivy, Checkov, Syft, and Cosign.",
      "Configured tuned policy files (.gitleaks.toml, .trivyignore, .checkov.yaml) to eliminate false positive alert fatigue.",
      "Integrated native GitHub SARIF v2.1.0 reporting, rendering security findings directly inside pull request diffs.",
      "Implemented keyless container signing and in-toto SBOM attestations using Sigstore Fulcio and Rekor transparency log.",
      "Created deliberate vulnerability test fixtures and hardened counterparts to demonstrate quality gate pass/fail enforcement."
    ],
    securityConsiderations: [
      "OWASP Top 10 SAST coverage using Semgrep rulesets targeting SQL injection, XSS, and broken access control.",
      "Software Composition Analysis (SCA) via Aqua Trivy scanning open-source dependencies and container base images.",
      "Keyless signing: Zero long-lived private signing keys stored in CI; uses ephemeral GitHub OIDC tokens via Sigstore.",
      "Supply-chain attestations: Generated dual-format SBOMs (SPDX 2.3 + CycloneDX 1.5) and verified against Rekor transparency log.",
      "Container hardening: Multi-stage Docker builds running as unprivileged non-root user (UID 10001)."
    ],
    automationHighlights: [
      "Automated Unified DevSecOps Scorecard generated in $GITHUB_STEP_SUMMARY on every pipeline execution.",
      "3-line reusable workflow adoption allowing application repositories to inherit enterprise security standards instantly.",
      "Local pipeline simulator script allowing developers to run all quality gates prior to pushing Git commits."
    ],
    observabilitySetup: [
      "Native GitHub Code Scanning dashboard integration via SARIF uploads for centralized vulnerability tracking.",
      "Public Rekor transparency log verification of container image digests and signed supply-chain attestations."
    ],
    reliabilityHighlights: [
      "Automated Quality Gate enforcement blocking releases with CVSS > 7.0 vulnerabilities or unvetted secrets.",
      "Fail-closed execution policy preventing compromised or unsigned artifacts from reaching container registries.",
      "Tuned CVE suppression policy with mandatory review dates ensuring critical fixes are never silently bypassed."
    ],
    challengesAndRCA: [
      {
        challenge: "Balancing strict security enforcement without halting developer release velocity with thousands of false-positive alerts.",
        solution: "Implemented documented .trivyignore and .gitleaks.toml policies with compensating controls and mandatory review expiration dates, ensuring only actionable, high-confidence findings block deployments."
      }
    ],
    impactAndResults: [
      "Achieved SLSA Build Level 3 compliance and Executive Order 14028 supply-chain alignment.",
      "Reduced vulnerability triage MTTR by 68% by consolidating 5 scanner outputs into native GitHub SARIF PR alerts.",
      "Eliminated 100% of private signing key compromise risk through Sigstore keyless OIDC identity.",
      "Zero subscription cost: built entirely with open-source tooling on standard GitHub Actions runners."
    ],
    githubUrl: "https://github.com/rahulmotvani0-sketch/devsecops-secure-cicd-template",
    interviewDeepDive: {
      architectureTradeoffs: "Selected Semgrep OSS over SonarQube Community to achieve sub-minute AST scanning inside runner containers without maintaining an external SonarQube server; selected Aqua Trivy to unify both dependency SCA and container CVE scanning under a single tool.",
      failureScenarioAndRecovery: "If a high-severity zero-day CVE is discovered in an upstream base image, the pipeline fails the build; engineers review compensating controls, apply temporary suppressions in .trivyignore with mandatory expiration dates, or trigger base image patches.",
      costOptimization: "100% open-source tooling operating on standard GitHub-hosted runners ($0 licensing and infrastructure cost).",
      scalingStrategy: "Modular composite actions allow engineering organizations to scale standard security gates across hundreds of microservice repositories by referencing the central reusable workflow."
    }
  },
  {
    id: "kubernetes-gitops-observability-platform",
    title: "Kubernetes GitOps Observability Platform — ArgoCD, Prometheus & Loki",
    subtitle: "Reproducible 3-node Kubernetes platform featuring declarative ArgoCD GitOps (App-of-Apps), Prometheus & Loki SRE observability (RED metrics & distributed log tracing), and automated chaos self-healing.",
    category: "IaC & SRE",
    role: "Lead Platform Engineer & SRE",
    badgeText: "Kubernetes / GitOps / ArgoCD / Prometheus / Loki / Grafana / SRE",
    problem: "Single-node development environments and imperative kubectl deployments cause configuration drift across cluster environments, lack correlated RED metrics and distributed log tracing, and fail to simulate production multi-zone scheduling.",
    businessContext: "Engineered as an enterprise platform engineering standard enabling engineering teams to test multi-zone topologies, GitOps self-healing, and SLO alerting with zero cloud subscription spend.",
    architectureDescription: "Provisions a 3-node Kind cluster (1 control plane + 2 worker nodes) with NGINX Ingress Controller. The entire platform lifecycle is driven declaratively by ArgoCD using the App-of-Apps pattern with automated self-healing. Workloads include replicated frontend and API microservices backed by Redis with Horizontal Pod Autoscaling (HPA). Observability is powered by the full PLG stack: Prometheus Operator, Alertmanager, Grafana RED metrics dashboards (Rate, Errors, Duration), and Grafana Loki with Promtail DaemonSet for unified distributed logging.",
    diagramNodes: [
      { title: "Client / Browser", sub: "HostPort 80 / Ingress", type: "client" },
      { title: "NGINX Ingress Controller", sub: "Control Plane HostPort Binding", type: "gateway" },
      { title: "ArgoCD GitOps Plane", sub: "Root App-of-Apps / Self-Healing", type: "security" },
      { title: "CloudNative Store Apps", sub: "Replicated Microservices + HPA", type: "compute" },
      { title: "Redis Cache Tier", sub: "Worker Node Isolation", type: "database" },
      { title: "Prometheus & Alertmanager", sub: "ServiceMonitor & Alerting", type: "observability" },
      { title: "Loki & Promtail Logs", sub: "Distributed Log Ingestion Engine", type: "observability" },
      { title: "Grafana Unified UI", sub: "RED Metrics & LogQL Explore", type: "observability" }
    ],
    technologies: [
      "Kubernetes (AKS / Kind)",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Loki",
      "Promtail",
      "Alertmanager",
      "Helm",
      "NGINX Ingress",
      "Docker",
      "Redis",
      "Bash"
    ],
    implementationSteps: [
      "Architected 3-node Kind cluster configuration with multi-zone worker node topology and ingress port bindings.",
      "Configured ArgoCD GitOps engine implementing the Root App-of-Apps pattern with automated drift reconciliation.",
      "Deployed replicated microservices with PodAntiAffinity, rolling updates, and HorizontalPodAutoscalers.",
      "Built Prometheus Operator stack with pre-loaded Grafana RED metrics dashboards and custom PrometheusRules.",
      "Configured Grafana Loki and Promtail DaemonSet streaming container logs with direct Grafana Explore integration.",
      "Constructed automated chaos engineering scripts simulating traffic bursts, pod terminations, error spikes, and LogQL tracing."
    ],
    securityConsiderations: [
      "Unprivileged workload execution running as non-root users (UID 10001 / 999) with read-only root filesystems.",
      "Pull-based GitOps architecture eliminating cluster administrator credentials stored in external CI runners.",
      "Strict network isolation and namespace segregation between application workloads (prod) and monitoring infrastructure.",
      "RBAC role binding enforcing least privilege across service accounts and cluster roles."
    ],
    automationHighlights: [
      "Single-command bootstrap (`make up`) provisioning Kind, Ingress, ArgoCD, Prometheus, and Loki within 3 minutes.",
      "Automated GitOps self-healing: ArgoCD continuously reconciles and reverts unauthorized imperative cluster changes within 15s.",
      "Interactive chaos demonstration CLI script generating real-time error bursts and pod failure scenarios."
    ],
    observabilitySetup: [
      "Custom Grafana dashboard tracking Google Golden Signals / RED metrics (Request Rate, 5xx Error %, Latency percentiles).",
      "Grafana Loki distributed logging with Promtail DaemonSet and LogQL queries for correlated root cause analysis (RCA).",
      "Production Alertmanager rules tracking HighHttpErrorRate (>5% for 2m), PodCrashLooping, and HighMemorySaturation."
    ],
    reliabilityHighlights: [
      "High Availability (HA) workload topology utilizing PodAntiAffinity across worker nodes to survive node outages.",
      "Horizontal Pod Autoscaler (HPA) scaling microservices between 2 and 8 replicas based on CPU/memory thresholds.",
      "Sub-15 second automated recovery from simulated pod terminations and cluster infrastructure chaos."
    ],
    challengesAndRCA: [
      {
        challenge: "Simulating multi-node scheduling constraints and ingress routing within local containerized environments.",
        solution: "Configured Kind cluster extraPortMappings with ingress-ready node labels and pod anti-affinity topology keys, reproducing real multi-zone cloud behavior locally."
      }
    ],
    impactAndResults: [
      "100% reproducible platform spin-up in under 3 minutes with zero cloud subscription costs.",
      "Eliminated 100% of cluster configuration drift using declarative ArgoCD GitOps self-healing.",
      "Achieved sub-15 second automated recovery from simulated pod failures and infrastructure chaos.",
      "Standardized SRE visibility across microservices with turnkey RED metrics dashboards."
    ],
    githubUrl: "https://github.com/rahulmotvani0-sketch/kubernetes-gitops-observability-platform",
    interviewDeepDive: {
      architectureTradeoffs: "Selected Kind multi-node topology over Minikube to validate realistic pod anti-affinity and zone-aware scheduling locally; selected pull-based ArgoCD GitOps over push-based CI Helm charts to eliminate cluster credential storage in external runners.",
      failureScenarioAndRecovery: "When an active pod or deployment is deleted or tampered with, Kubernetes immediately reschedules replacement pods and ArgoCD detects the out-of-sync drift, automatically reconciling desired state from Git within 15 seconds.",
      costOptimization: "Operates 100% locally on standard Docker engines ($0 cloud cost), eliminating testing sandbox cloud expenses.",
      scalingStrategy: "Workload deployments utilize HorizontalPodAutoscalers (HPA) scaling between 2 and 8 replicas based on CPU/memory thresholds with a 120-second scale-down stabilization window to prevent flapping."
    }
  },
  {
    id: "terraform-iac-cloud",
    title: "Terraform Multi-Cloud IaC — AWS, Azure & GitOps Drift Automation",
    subtitle: "Modular Infrastructure as Code (IaC) framework automating multi-region AWS and Azure provisioning with remote state locking, Checkov security compliance, and drift detection.",
    category: "IaC & SRE",
    role: "Cloud Infrastructure & DevOps Architect",
    badgeText: "Terraform IaC / AWS / Azure / Checkov / GitOps",
    problem: "Manual cloud console resource creation led to severe configuration drift, inconsistent network routing & security group rules across environments (Dev, Staging, Prod), and lack of auditability in enterprise SaaS platforms.",
    businessContext: "The organization required a standardized, version-controlled mechanism to spin up secure cloud infrastructure across AWS and Azure with zero human manual intervention.",
    architectureDescription: "Designed and built a modular, reusable Terraform architecture. Infrastructure changes are managed via GitOps workflow: PR creation runs `terraform plan` via CI/CD, outputs diffs for peer review, and merge to main triggers `terraform apply` with encrypted remote state handling in S3 + DynamoDB.",
    diagramNodes: [
      { title: "Developer / IaC Repo", sub: "Terraform Modules", type: "client" },
      { title: "GitHub / Bitbucket CI", sub: "GitOps Plan Runner", type: "gateway" },
      { title: "TFLint & Checkov Scan", sub: "IaC Security Policy Check", type: "security" },
      { title: "Remote State Engine", sub: "AWS S3 + DynamoDB Lock", type: "database" },
      { title: "AWS Cloud VPC & EKS/ECS", sub: "Subnets, IAM, ALB, NAT Gateway", type: "compute" },
      { title: "Azure AKS & Blob", sub: "VNet, Resource Groups, RBAC", type: "compute" },
      { title: "Wazuh / CloudWatch", sub: "Audit Logging & Alerts", type: "observability" }
    ],
    technologies: [
      "Terraform",
      "Terraform Modules",
      "AWS CDK",
      "AWS (VPC, EKS, ECS, ALB, RDS, IAM)",
      "Azure (VNet, AKS, Azure Monitor, RBAC)",
      "Checkov",
      "TFLint",
      "GitOps",
      "Docker",
      "Bash",
      "Python"
    ],
    implementationSteps: [
      "Created modular Terraform repository structure decoupling networking (VPC/VNet), compute (EKS/ECS/AKS), database (RDS/PostgreSQL), and security (IAM/RBAC/Security Groups).",
      "Configured secure remote state backend using AWS S3 bucket with KMS AES-256 encryption and DynamoDB table for state locking.",
      "Integrated Checkov static code analyzer into CI pipeline to block IaC security misconfigurations (e.g. unencrypted storage, exposed 0.0.0.0/0 ingress).",
      "Wrote parameterizable Terraform modules used by development teams to self-service isolated environment creation.",
      "Built automated drift detection pipeline executing `terraform plan` on a 6-hour cron schedule and alerting on manual console modifications."
    ],
    securityConsiderations: [
      "Enforced CIS AWS & Azure Foundations Benchmark compliance across all Terraform modules.",
      "Zero plain-text secrets in code: AWS Secrets Manager and Azure Key Vault dynamic references used exclusively.",
      "Strict least-privilege IAM policies and Azure RBAC role assignments for Terraform execution roles.",
      "Enforced AES-256 encrypted storage at rest for all EBS volumes, S3 buckets, Azure Blob storage, and RDS instances."
    ],
    automationHighlights: [
      "Automated pull request comments displaying formatted `terraform plan` execution diffs directly inside Git PRs.",
      "Automated non-production resource teardown scripts eliminating idle compute charges.",
      "Automated 6-hour drift detection cron job identifying out-of-band manual cloud modifications."
    ],
    observabilitySetup: [
      "Terraform state drift alerts delivered in real-time via Slack webhook and email notifications.",
      "AWS CloudTrail & Azure Activity logs streaming to central security monitoring dashboard."
    ],
    reliabilityHighlights: [
      "Multi-region High Availability (HA) network topology with redundant NAT Gateways and cross-AZ subnets.",
      "DynamoDB state locking preventing concurrent execution race conditions and state corruption.",
      "Automated rollback strategy with versioned Terraform state snapshots for fast disaster recovery."
    ],
    challengesAndRCA: [
      {
        challenge: "Stale state lock files occurred when CI/CD runner processes timed out during large cluster deployments, blocking subsequent deployments.",
        solution: "Configured automated lock expiration policies, built a safe force-unlock utility script with audit logging, and optimized Terraform resource dependency ordering."
      }
    ],
    impactAndResults: [
      "Reduced infrastructure provisioning time from 3 days to under 15 minutes.",
      "Eliminated 100% of manual cloud configuration drift across Dev, Staging, and Production environments.",
      "Achieved 100% compliance with CIS AWS & Azure Foundations Benchmarks across all Terraform modules.",
      "Cut monthly cloud infrastructure expenses by 28% through automated non-production resource teardown."
    ],
    interviewDeepDive: {
      architectureTradeoffs: "Chose pure modular Terraform with native state backends over third-party abstractions to maintain complete vendor control and zero subscription overhead.",
      failureScenarioAndRecovery: "If an automated `terraform apply` fails mid-way, state locking prevents concurrent runs; engineers review execution logs, run targeted `terraform refresh`, and apply corrective module patches.",
      costOptimization: "Implemented auto-tagging for all resources (Owner, Environment, Expiry), enabling automated teardown of idle non-production resources, saving ~28% monthly cloud costs.",
      scalingStrategy: "Module architecture structured around reusable workspace environments (Dev, Staging, Prod) with centralized IAM policy governance."
    }
  },
  {
    id: "bitbucket-migration",
    title: "Bitbucket Infrastructure Migration — Zero-Downtime HA Modernization",
    subtitle: "Zero-downtime migration of enterprise Bitbucket platform, PostgreSQL major database engine upgrade (v10 to v15), and containerized HA modernization.",
    category: "Migration",
    role: "Lead DevOps & Infrastructure Migration Engineer",
    badgeText: "Bitbucket Data Center / PostgreSQL 15 / Docker Swarm / HA Migration",
    problem: "Legacy Bitbucket server suffered from host hardware degradation, an outdated PostgreSQL 10 database engine, deprecated Java 8 runtime dependencies, and high risk of source code data loss across 200+ mission-critical repositories.",
    businessContext: "Bitbucket hosted 200+ core software repositories for engineering teams. A failed migration would halt all development activity, risk source code loss, and disrupt enterprise CI/CD pipelines.",
    architectureDescription: "Planned and executed a multi-stage migration from legacy standalone host to a modern containerized Bitbucket HA setup on Docker Swarm / Compose with PostgreSQL 15 upgrade, automated backup snapshots, and updated Java 17 runtime.",
    diagramNodes: [
      { title: "Legacy Bitbucket Host", sub: "Bitbucket v6 / Java 8 / PG 10", type: "client" },
      { title: "Backup & Validation Engine", sub: "Rsync + PG Dump + Checksums", type: "gateway" },
      { title: "Staging Compatibility Lab", sub: "Schema Migration Testing", type: "security" },
      { title: "Containerized Bitbucket HA", sub: "Bitbucket v8 / Java 17 / Docker Swarm", type: "compute" },
      { title: "PostgreSQL 15 Container", sub: "Tuned WAL & Shared Buffers", type: "database" },
      { title: "Automated Backup & DR", sub: "S3 Encrypted Snapshots", type: "observability" }
    ],
    technologies: [
      "Bitbucket Data Center",
      "Docker",
      "Docker Swarm",
      "Docker Compose",
      "PostgreSQL (v10 to v15)",
      "Java 17",
      "Bash",
      "Linux",
      "Rsync",
      "Git"
    ],
    implementationSteps: [
      "Constructed a full mirror staging environment to dry-run database schema transformations and test Java 17 compatibility.",
      "Developed automated Bash migration tool to freeze legacy instance, execute `pg_dumpall` with custom parameters, and transfer artifacts via rsync over encrypted SSH tunnel.",
      "Upgraded PostgreSQL database engine from v10 to v15 using sequential major version upgrade scripts with schema sanity checks.",
      "Migrated Bitbucket data directory to high-performance SSD container volumes with optimized permissions.",
      "Configured automated, encrypted nightly backup cron jobs with automated restoration verification checks."
    ],
    securityConsiderations: [
      "All migration data in transit encrypted using SSH key pairs and TLS 1.3 tunnels.",
      "Database snapshots encrypted at rest with AES-256 before uploading to remote backup storage.",
      "Role-Based Access Control (RBAC) audited and synchronized with corporate Active Directory / LDAP."
    ],
    automationHighlights: [
      "Created one-click 8-minute rollback shell script capable of restoring legacy state if validation checks failed.",
      "Automated post-migration repository integrity verifier script comparing Git commit SHA hashes across all 200+ repos."
    ],
    observabilitySetup: [
      "Real-time migration progress logger outputting detailed timestamps and step statuses.",
      "Post-migration health check matrix verifying Git HTTP/SSH cloning, webhook triggers, and pull request workflows."
    ],
    reliabilityHighlights: [
      "Zero-downtime maintenance strategy achieving 100% data integrity with zero commit loss across 200+ repositories.",
      "Containerized High Availability (HA) Docker Swarm service topology with automated process restart policies.",
      "PostgreSQL 15 engine tuning: optimized WAL buffers and `shared_buffers` for fast recovery and throughput."
    ],
    challengesAndRCA: [
      {
        challenge: "During staging migration, large Git LFS repos caused Java heap space OutOfMemory errors on the new Bitbucket instance.",
        solution: "Adjusted Bitbucket JVM parameters (`-Xms4g -Xmx12g -XX:+UseG1GC`), optimized PostgreSQL `shared_buffers` and `max_connections`, and increased Git LFS buffer limits."
      }
    ],
    impactAndResults: [
      "100% data integrity verified across all 200+ repositories with zero commit loss.",
      "Completed live maintenance window in under 2 hours (1 hour ahead of scheduled maintenance window).",
      "Git clone and fetch operations accelerated by 40% due to updated PostgreSQL engine and Java 17 performance improvements."
    ],
    interviewDeepDive: {
      architectureTradeoffs: "Decided on a cold maintenance window migration instead of live active-active DB replication to guarantee absolute zero data corruption during major PostgreSQL schema translation.",
      failureScenarioAndRecovery: "Rollback strategy: Automated script was pre-configured to point DNS back to legacy server and restore write privileges within 8 minutes if verification SHA checks failed.",
      costOptimization: "Containerizing Bitbucket and PostgreSQL reduced host hardware footprint by 45% while enabling fast snapshotting.",
      scalingStrategy: "Docker Compose service parameters structured to allow fast migration to Kubernetes statefulsets when team size doubles."
    }
  },
  {
    id: "sonarqube-devsecops",
    title: "SonarQube & Snyk DevSecOps Quality Gate Pipeline",
    subtitle: "Shift-left DevSecOps automation integrating SonarQube SAST, Snyk dependency vulnerability scanning, and automated quality gates into enterprise CI/CD.",
    category: "DevSecOps",
    role: "DevSecOps Engineer",
    badgeText: "SonarQube / Snyk / Jenkins / GitLab CI / DevSecOps",
    problem: "Software engineering teams released microservices without systematic security analysis, causing accumulating security debt, unpatched CVE dependencies, and manual release QA bottlenecks.",
    businessContext: "Implementing DevSecOps principles required embedding security into developer workflows without blocking delivery velocity or frustrating engineering teams.",
    architectureDescription: "Designed an automated DevSecOps pipeline where every Git commit automatically triggers SonarQube static analysis (SAST) and Snyk dependency scanning (SCA). Enforced strict Quality Gates that prevent vulnerable code from merging or deploying.",
    diagramNodes: [
      { title: "Developer Commit", sub: "Git / Bitbucket Push", type: "client" },
      { title: "CI/CD Pipeline Runner", sub: "Jenkins / GitLab CI / Bitbucket", type: "gateway" },
      { title: "Snyk SCA Scanner", sub: "Dependency Vulnerabilities", type: "security" },
      { title: "SonarQube SAST Engine", sub: "Code Smells & OWASP Bugs", type: "security" },
      { title: "Quality Gate Decision", sub: "Pass / Fail Enforcement", type: "security" },
      { title: "Artifact Registry", sub: "Signed Container Image", type: "compute" },
      { title: "Kubernetes Staging", sub: "Automated Deploy", type: "compute" },
      { title: "Security Dashboard", sub: "Slack & Email Notifications", type: "observability" }
    ],
    technologies: [
      "SonarQube",
      "Snyk",
      "Jenkins",
      "GitLab CI",
      "Bitbucket Pipelines",
      "OWASP Top 10",
      "Gitleaks",
      "Docker",
      "PostgreSQL",
      "Bash",
      "Python"
    ],
    implementationSteps: [
      "Upgraded legacy SonarQube instance to latest Long-Term Support (LTS) version backed by dedicated PostgreSQL database.",
      "Created standardized reusable CI/CD pipeline code snippets for Node.js, Python, Java, and Go microservices.",
      "Defined organization-wide Quality Gate rules: 0 Blocker/Critical bugs, 0 Security Hotspots, >80% new code test coverage, and 0 Vulnerabilities with CVSS > 7.0.",
      "Integrated Snyk vulnerability CLI for scanning third-party packages during build phase.",
      "Automated secret detection using Gitleaks to block accidentally hardcoded credentials from reaching Git remotes."
    ],
    securityConsiderations: [
      "OWASP Top 10 SAST rule enforcement scanning for injection, broken authentication, and insecure deserialization.",
      "Software Composition Analysis (SCA) via Snyk identifying known CVE vulnerabilities in open-source dependencies.",
      "SonarQube API authentication token stored in encrypted CI/CD pipeline environment variables.",
      "Fail-closed pipeline policy: If security scans fail or timeout, the build is automatically rejected."
    ],
    automationHighlights: [
      "Created automated PR status check reporting: Developers receive instant feedback directly inside Bitbucket/GitHub Pull Requests.",
      "Built automated Slack notification bot alerting security leads when critical security hotspots are detected.",
      "Incremental scanner caching and branch-aware delta scanning reducing build pipeline scanning time to under 90 seconds."
    ],
    observabilitySetup: [
      "SonarQube Quality Gate metric webhooks integrated into Grafana dashboards to track technical debt metrics across teams over time.",
      "Weekly security posture summary generated via custom Python script parsing SonarQube REST API."
    ],
    reliabilityHighlights: [
      "Fail-safe build pipeline rules preventing unvetted code from reaching staging and production environments.",
      "PostgreSQL database connection pooling tuned to handle up to 50 concurrent build pipeline scans without dropping connections.",
      "Automated fallback alerting notifying DevSecOps leads if scanner servers become unreachable."
    ],
    challengesAndRCA: [
      {
        challenge: "Initial pipeline integration increased developer build times by 12 minutes due to repetitive full-repo SonarQube scans.",
        solution: "Implemented incremental SonarScanner caching, parallelized Snyk scans alongside unit testing jobs, and configured branch-aware delta scanning, reducing security scan time to under 90 seconds."
      }
    ],
    impactAndResults: [
      "Reduced Mean Time to Remediate (MTTR) security flaws by 55% across all engineering teams.",
      "100% of pull requests automatically evaluated against security quality gates before release.",
      "Eliminated 100% of hardcoded secrets from entering source code repositories."
    ],
    interviewDeepDive: {
      architectureTradeoffs: "Strict quality gates can slow down urgent releases if not managed properly; we added an emergency security bypass override requiring dual security lead approval with automatic audit logging.",
      failureScenarioAndRecovery: "If SonarQube server is temporarily offline, CI/CD pipeline retries 3 times before entering fail-safe mode with notification to DevSecOps team rather than silently allowing unvetted deployments.",
      costOptimization: "Optimized SonarScanner Java heap limits and scanner parameters to run on standard pipeline runners without requiring high-cost agent nodes.",
      scalingStrategy: "SonarQube PostgreSQL backend tuned with dynamic connection pooling to handle up to 50 concurrent build pipeline scans."
    }
  },
  {
    id: "sara-ii",
    title: "SARA-II — AI Infrastructure & AIOps Runtime Isolation",
    subtitle: "High-concurrency AI infrastructure platform supporting local (vLLM/Ollama) and cloud LLM runtime isolation, AIOps intelligent observability, and automated RCA.",
    category: "AI Infrastructure",
    role: "Cloud Platform & AI Infrastructure Engineer",
    badgeText: "AIOps / vLLM / Ollama / FastAPI / Intelligent Observability",
    problem: "Integrating LLM workloads into production exposed risks of unhandled API timeouts, high inference token latency, GPU memory fragmentation on local inference nodes, and unsafe prompt execution without strict egress security controls.",
    businessContext: "SARA-II serves enterprise automation workflows requiring strict safety guardrails, low-latency text-to-speech processing, multi-provider LLM failover, and total observability over inference token throughput.",
    architectureDescription: "Designed an asynchronous microservices topology separating public API requests from execution workers. Inbound client traffic hits an Nginx/API Gateway with rate limiting, passes through a custom Safety Runtime Filter, and delegates tasks to a Provider Registry with circuit breakers for OpenAI, Claude, and local vLLM/Ollama containers.",
    diagramNodes: [
      { title: "Client / Web UI", sub: "HTTPS / WebSockets", type: "client" },
      { title: "Nginx Gateway & Rate Limiter", sub: "TLS 1.3 / Auth Guard", type: "gateway" },
      { title: "Safety Runtime Engine", sub: "Prompt Filter & Guardrails", type: "security" },
      { title: "Provider Registry & Router", sub: "Circuit Breaker / Failover", type: "compute" },
      { title: "Local LLM / Cloud API Workers", sub: "vLLM, Ollama, OpenAI", type: "compute" },
      { title: "Qdrant Vector DB & Redis", sub: "Context Cache & Embeddings", type: "database" },
      { title: "TTS Pipeline & Asset Storage", sub: "Audio Streaming Engine", type: "compute" },
      { title: "Prometheus + Grafana AIOps", sub: "TTFT Metrics & Log Tracing", type: "observability" }
    ],
    technologies: [
      "vLLM",
      "Ollama",
      "FastAPI",
      "Docker",
      "Qdrant",
      "Redis",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Python",
      "AIOps",
      "Intelligent Observability"
    ],
    implementationSteps: [
      "Provisioned isolated Docker containers for vLLM local inference with dedicated container memory limits.",
      "Engineered an event-driven Provider Registry microservice measuring provider latency and dynamically routing requests based on real-time SLA rules.",
      "Integrated Redis caching layer to store vector embedding lookups, bypassing redundant LLM calls.",
      "Constructed a TTS audio generation microservice with streaming buffer endpoints to deliver sub-200ms audio response latency.",
      "Deployed Prometheus exporters tracking Time-To-First-Token (TTFT), request queue depth, and VRAM utilization."
    ],
    securityConsiderations: [
      "Egress network policy enforced preventing local model containers from initiating unauthorized outbound internet connections.",
      "Implemented runtime prompt injection sanitization to prevent prompt manipulation and sensitive data exfiltration.",
      "Non-root execution across all containerized AI services with immutable filesystem layers."
    ],
    automationHighlights: [
      "Automated container deployment and model volume mounting using Docker Compose and Bash initialization scripts.",
      "Built automated health-check watchdog that automatically restarts unresponsive model worker nodes."
    ],
    observabilitySetup: [
      "Prometheus AIOps metrics tracking Time-To-First-Token (TTFT), token generation speed (tokens/sec), and VRAM saturation.",
      "Structured JSON logging with correlation IDs passed through Gateway -> Safety Runtime -> LLM Worker."
    ],
    reliabilityHighlights: [
      "High Availability (HA) multi-provider fallback automatically shifting traffic from Cloud APIs to local vLLM nodes upon error detection.",
      "Circuit breaker opening within 3 failed requests to prevent cascading gateway timeouts during cloud API outages.",
      "Redis lock queues throttling model swapping to prevent GPU memory fragmentation."
    ],
    challengesAndRCA: [
      {
        challenge: "GPU VRAM memory fragmentation occurred during frequent switching between 7B and 13B local LLM models, causing 504 Gateway Timeouts.",
        solution: "Configured model pool pre-allocation in vLLM with worker thread pool isolation, and introduced Redis lock queues to throttle model swapping, reducing latency spikes by 74%."
      }
    ],
    impactAndResults: [
      "Achieved 99.9% inference pipeline availability across local and cloud LLM backends.",
      "Reduced Mean Time To First Token (TTFT) by 42% through vector lookup caching and provider routing.",
      "Saved 35% in API token costs by prioritizing optimized local container inference for standard tasks."
    ],
    interviewDeepDive: {
      architectureTradeoffs: "We prioritized local vLLM hosting over pure cloud API reliance to guarantee data privacy and lower token expenses, sacrificing slight peak throughput in exchange for predictable cost and zero data leakage.",
      failureScenarioAndRecovery: "If OpenAI or primary Cloud API experiences elevated HTTP 5xx errors, the circuit breaker opens within 3 failed requests, instantly shifting incoming prompt queues to the local vLLM node with graceful parameter fallback.",
      costOptimization: "Cached vector embeddings in Redis for frequent domain queries, eliminating 35% of external API calls.",
      scalingStrategy: "Horizontal worker scaling using Docker Compose replicas behind Nginx upstream load balancers with healthcheck pinging."
    }
  },
  {
    id: "leadpulse-ai",
    title: "LeadPulse AI — Multi-Agent Data Engine & Automated RCA",
    subtitle: "Multi-agent AI data engine built with FastAPI, PostgreSQL, Qdrant vector database, Redis queues, and DevSecOps automated pipelines.",
    category: "DevSecOps",
    role: "DevSecOps & Cloud Infrastructure Lead",
    badgeText: "FastAPI / Qdrant / Redis / PostgreSQL / DevSecOps",
    problem: "High-frequency data enrichment pipelines suffered from slow database queries (1,400ms), unindexed JSON payload CPU spikes (95%), and pipeline execution bottlenecks during concurrent multi-agent processing.",
    businessContext: "LeadPulse AI ingests B2B lead signals from multiple data streams, performs semantic vector matching via Qdrant, and generates personalized sales intelligence for target accounts.",
    architectureDescription: "Built a robust containerized architecture featuring React SPA, FastAPI multi-agent workers, PostgreSQL for transactional lead data, Qdrant for vector embeddings, and Redis for task queue management. Secured through Snyk dependency auditing and SonarQube static code quality gates.",
    diagramNodes: [
      { title: "React Frontend", sub: "Single Page Application", type: "client" },
      { title: "FastAPI Gateway", sub: "Async API Orchestrator", type: "gateway" },
      { title: "SonarQube & Snyk Gate", sub: "SAST / SCA Inspection", type: "security" },
      { title: "Multi-Agent Engine", sub: "Async Python Workers", type: "compute" },
      { title: "Qdrant Vector Engine", sub: "Semantic Lead Embeddings", type: "database" },
      { title: "Redis Distributed Queue", sub: "Task Buffering & Cache", type: "database" },
      { title: "PostgreSQL Database", sub: "Transactional Records", type: "database" },
      { title: "Wazuh & Logs", sub: "SIEM & Security Monitoring", type: "observability" }
    ],
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "Docker",
      "Docker Multi-Stage",
      "Snyk",
      "SonarQube",
      "Python",
      "Git"
    ],
    implementationSteps: [
      "Architected FastAPI backend services decoupled into API routing layer, agent task processing layer, and vector lookup layer.",
      "Configured Snyk CLI and SonarQube Scanner step inside CI/CD pipeline to analyze container images and code quality prior to deployment.",
      "Optimized PostgreSQL schema with custom GIN indexes on JSONB fields and optimized Qdrant vector collection payload indexing.",
      "Integrated Redis for background job queuing and API rate limiting.",
      "Created Docker multi-stage build files to minimize image footprint from 1.2GB down to 180MB."
    ],
    securityConsiderations: [
      "OWASP Top 10 SAST rule enforcement via SonarQube quality gates.",
      "Zero critical/high vulnerabilities allowed in production (enforced via Snyk Container + SCA scanner).",
      "API request authentication enforced via JWT with key rotation stored in secure environment variables.",
      "Database connection pooling configured with TLS encryption and strict network isolation."
    ],
    automationHighlights: [
      "Automated CI/CD workflow executing linting, unit testing, SAST analysis, vulnerability scan, and Docker image build in under 6 minutes.",
      "Automated database migration scripts using Alembic with rollback validation."
    ],
    observabilitySetup: [
      "Structured JSON application logs formatted for ingestion into central logging stack.",
      "Prometheus metrics tracking agent worker completion rates, queue latency, and database connection pool health."
    ],
    reliabilityHighlights: [
      "Horizontal worker auto-scaling triggered when Redis task queue depth exceeds 500 pending jobs.",
      "Redis queue connection fallback mechanism allowing FastAPI workers to buffer state locally during transient queue blips.",
      "99.95% system uptime under continuous multi-agent data ingestion workloads."
    ],
    challengesAndRCA: [
      {
        challenge: "Unindexed JSONB lead payloads in PostgreSQL caused heavy CPU spikes up to 95% during concurrent agent batch writes.",
        solution: "Analyzed execution plans using `EXPLAIN ANALYZE`, created GIN indexes on frequent payload paths, and implemented Redis write-behind caching, reducing query time from 1,400ms to 45ms."
      }
    ],
    impactAndResults: [
      "Zero security vulnerabilities introduced across 85+ production deployment cycles.",
      "CI/CD pipeline execution time cut from 22 minutes to 6 minutes via layer caching and multi-stage builds.",
      "Achieved 99.95% system uptime under continuous multi-agent workload.",
      "Query latency reduced from 1,400ms to 45ms after automated RCA and index tuning."
    ],
    interviewDeepDive: {
      architectureTradeoffs: "Utilized Qdrant for vector search while retaining PostgreSQL for relational data, accepting dual-database synchronization complexity in order to get native 10x vector query acceleration.",
      failureScenarioAndRecovery: "If Redis task queue drops connection, FastAPI workers automatically fall back to local disk state buffering and attempt exponential backoff reconnection without dropping active user API calls.",
      costOptimization: "Used Docker multi-stage builds to drop container memory overhead by 60%, allowing 3x more agent worker instances on the same host instances.",
      scalingStrategy: "Horizontal worker auto-scaling triggered when Redis queue depth exceeds 500 pending jobs."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "AWS & Cloud Infrastructure",
    description: "Designing, provisioning, securing, and operating production AWS cloud infrastructure for enterprise SaaS platforms.",
    iconName: "Cloud",
    skills: [
      { name: "AWS Core Compute & Serverless", level: "Expert", featured: true, useCase: "ECS, Lambda (ARM64), EC2, Fargate, Batch" },
      { name: "AWS Networking & Edge Security", level: "Expert", featured: true, useCase: "VPC, Subnets, ALB, API Gateway HTTP v2, WAFv2, Route53, CloudFront" },
      { name: "AWS Storage, DB & Observability", level: "Expert", featured: true, useCase: "DynamoDB, RDS PostgreSQL, S3, IAM, CloudWatch, X-Ray, Secrets Manager" }
    ]
  },
  {
    categoryName: "Azure & Cloud Platforms",
    description: "Architecting, managing, and securing Azure enterprise cloud environments and multi-cloud infrastructure.",
    iconName: "Cloud",
    skills: [
      { name: "Azure AKS & Containers", level: "Expert", featured: true, useCase: "Azure Kubernetes Service (AKS), Container Instances, ACR" },
      { name: "Azure Observability & Security", level: "Expert", featured: true, useCase: "Application Insights, Azure Monitor, Azure Key Vault, Entra ID, RBAC" },
      { name: "Azure Networking & GCP", level: "Proficient", featured: true, useCase: "Azure VNet, NSGs, Application Gateway, GCP GKE & Cloud Storage" }
    ]
  },
  {
    categoryName: "Infrastructure as Code (IaC)",
    description: "Automating cloud resource creation with version-controlled, modular IaC templates and policy-as-code enforcement.",
    iconName: "FileCode",
    skills: [
      { name: "Terraform & Terraform Modules", level: "Expert", featured: true, useCase: "Modular multi-cloud IaC, AWS S3 + DynamoDB remote state locking, workspace management" },
      { name: "AWS CDK & Cloud Automation", level: "Expert", featured: true, useCase: "TypeScript/Python CDK stacks, self-service infrastructure blueprints" },
      { name: "IaC Security & Drift Control", level: "Expert", featured: true, useCase: "Checkov, TFLint, automated 6-hour drift detection, policy-as-code" }
    ]
  },
  {
    categoryName: "Containers & Orchestration",
    description: "Packaging, deploying, scaling, and hardening microservices with high availability.",
    iconName: "Box",
    skills: [
      { name: "Docker & Docker Swarm", level: "Expert", featured: true, useCase: "Hardened multi-stage builds, unprivileged non-root runtime, Docker Swarm HA" },
      { name: "Kubernetes (EKS / AKS / Kind)", level: "Expert", featured: true, useCase: "Deployments, StatefulSets, NGINX Ingress, HPA, PodAntiAffinity, RBAC, Secrets" },
      { name: "Helm & GitOps Engine", level: "Expert", featured: true, useCase: "Helm v3 chart templating, ArgoCD App-of-Apps, declarative self-healing" }
    ]
  },
  {
    categoryName: "CI/CD & Deployment Automation",
    description: "Building fast, reliable deployment pipelines with automated testing, zero-downtime releases, and supply-chain security.",
    iconName: "GitBranch",
    skills: [
      { name: "GitHub Actions", level: "Expert", featured: true, useCase: "Modular composite actions, keyless OIDC federation, SARIF PR alerts, step summary scorecards" },
      { name: "Jenkins & GitLab CI", level: "Expert", featured: true, useCase: "Enterprise pipeline automation, parallel build runners, quality gate execution" },
      { name: "Deployment Automation & Testing", level: "Expert", featured: true, useCase: "Blue/Green, Canary releases, automated rollbacks, zero-downtime database upgrades" }
    ]
  },
  {
    categoryName: "Observability & Enterprise SRE",
    description: "Maintaining system reliability, real-time telemetry, structured logging, incident response, and blameless RCA.",
    iconName: "Activity",
    skills: [
      { name: "Prometheus, Grafana & Alertmanager", level: "Expert", featured: true, useCase: "RED/USE metrics, custom Grafana dashboards, Alertmanager routing, SLO/SLI tracking" },
      { name: "Logging & Tracing (ELK / Loki)", level: "Expert", featured: true, useCase: "Grafana Loki, Promtail, LogQL, ELK Stack, CloudWatch, Application Insights, span tracing" },
      { name: "Incident Response, RCA & MTTR", level: "Expert", featured: true, useCase: "Blameless Root Cause Analysis, MTTR reduction, incident runbooks, disaster recovery validation" }
    ]
  },
  {
    categoryName: "DevSecOps & Supply-Chain Security",
    description: "Embedding security controls, vulnerability scanners, and supply-chain compliance directly into CI/CD workflows.",
    iconName: "ShieldCheck",
    skills: [
      { name: "OWASP Top 10 & SAST (Semgrep / SonarQube)", level: "Expert", featured: true, useCase: "Static Application Security Testing, custom quality gates, code smell elimination" },
      { name: "SCA & Vulnerability Scanners (Snyk / Trivy)", level: "Expert", featured: true, useCase: "Software Composition Analysis, container base image CVE scanning, Trivy suppression policies" },
      { name: "Secrets & Supply-Chain (Gitleaks / Cosign / Syft)", level: "Expert", featured: true, useCase: "Gitleaks secret detection, Anchore Syft SBOM (SPDX/CycloneDX), Sigstore Cosign keyless signing" }
    ]
  },
  {
    categoryName: "AI-Enabled DevOps & Operations",
    description: "Leveraging AIOps, intelligent observability, AI-assisted development, and LLM infrastructure in production.",
    iconName: "Terminal",
    skills: [
      { name: "AIOps & Intelligent Observability", level: "Expert", featured: true, useCase: "Automated anomaly detection, AI-assisted log analysis, intelligent incident response" },
      { name: "LLM & AI Workload Infrastructure", level: "Expert", featured: true, useCase: "vLLM, Ollama runtime isolation, GPU VRAM optimization, TTFT latency tracking, vector DB (Qdrant)" },
      { name: "AI-Assisted SDLC & Development", level: "Expert", featured: true, useCase: "Agentic SDLC workflows, automated RCA, script generation, automated test creation" }
    ]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "agile-logic-technovation",
    company: "Agile Logic Technovation",
    title: "DevOps Engineer",
    period: "Dec 2025 – Present",
    location: "Ahmedabad, Gujarat, India",
    isCurrent: true,
    highlights: [
      "Architected and operated secure, highly available cloud infrastructure across AWS (ECS, Lambda, DynamoDB, ALB, API Gateway, CloudWatch, IAM, VPC) and Azure (AKS, Application Insights, Azure Monitor, networking, RBAC), supporting enterprise SaaS applications.",
      "Designed and optimized automated CI/CD deployment pipelines using GitHub Actions, Jenkins, and GitLab CI, accelerating release cycles with automated build, test, SAST/SCA security scanning, and zero-downtime deployment stages.",
      "Managed containerization and orchestration workflows using Docker, Kubernetes (EKS/AKS), Docker Swarm, and Helm, ensuring seamless scalability, HPA autoscaling, and high availability.",
      "Collaborated closely with software engineering and security teams to establish automated testing, Infrastructure as Code (Terraform, AWS CDK), and secure environment configurations across Dev, Staging, and Production.",
      "Implemented robust monitoring, centralized logging, and alerting systems using Prometheus, Grafana, Alertmanager, ELK, Loki, and Application Insights, enforcing SLI/SLO bounds and reducing MTTR.",
      "Embedded DevSecOps into every pipeline — integrating SAST (SonarQube, Semgrep), SCA (Snyk, Trivy), secret scanning (Gitleaks), container scanning, SBOM generation (Syft), and image signing (Cosign) as mandatory quality gates.",
      "Provisioned cloud networking including VPC/VNet, subnets, security groups, load balancers, Route53 DNS, SSL/TLS certificates, and NAT gateways, enforcing least-privilege access through IAM and RBAC.",
      "Authored reusable Terraform modules for networking, compute, Kubernetes clusters, and database layers, enabling consistent, reproducible infrastructure provisioning and automated 6-hour drift detection.",
      "Automated operational tasks — environment provisioning, backup verification, certificate rotation, and infrastructure health checks — using Python and Bash scripts, improving system reliability.",
      "Led root-cause analysis (RCA) on infrastructure, networking, and CI/CD incidents, implementing preventive automation and runbooks that reduced recurring issues and improved operational stability."
    ],
    technologiesUsed: [
      "AWS (ECS, Lambda, DynamoDB, ALB, API Gateway, CloudWatch, IAM, VPC)",
      "Azure (AKS, Application Insights, Azure Monitor, RBAC)",
      "Terraform",
      "AWS CDK",
      "Kubernetes",
      "Docker",
      "Docker Swarm",
      "Helm",
      "GitHub Actions",
      "Jenkins",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "Loki",
      "Alertmanager",
      "SonarQube",
      "Snyk",
      "Trivy",
      "Gitleaks",
      "Cosign",
      "Syft",
      "Python",
      "Bash"
    ]
  },
  {
    id: "azilen-technologies",
    company: "Azilen Technologies Pvt Ltd",
    title: "IT Technician",
    period: "Aug 2024 – Nov 2025",
    location: "Ahmedabad, Gujarat, India",
    isCurrent: false,
    highlights: [
      "Administered hybrid cloud and on-premises infrastructure — Windows/Linux servers and virtualization platforms — forming the operational foundation for cloud migration and DevOps automation initiatives.",
      "Automated repetitive provisioning and configuration tasks using shell scripting and Python, standardizing environment setup and improving deployment consistency.",
      "Collaborated with engineering teams to troubleshoot networking, access, and deployment issues, ensuring minimal downtime and maintaining service availability.",
      "Implemented infrastructure monitoring and documentation practices, improving system health visibility and enabling faster incident response."
    ],
    technologiesUsed: ["Hybrid Cloud", "Linux", "Windows Server", "Virtualization", "Python", "Shell Scripting", "Networking", "CI/CD"]
  },
  {
    id: "aruhat-technologies",
    company: "Aruhat Technologies Pvt Ltd",
    title: "Jr. Network Engineer",
    period: "Jun 2023 – Jul 2024",
    location: "Ahmedabad, Gujarat, India",
    isCurrent: false,
    highlights: [
      "Implemented network segmentation, firewall rules, and access controls across client infrastructure, reducing data breach risk by 30% through defense-in-depth strategies.",
      "Led a migration to redesigned network architecture — VLAN segmentation, redundant links, and improved routing — strengthening scalability and reliability for business-critical workloads.",
      "Maintained virtualization environments (VMware, Hyper-V) and Windows/Linux servers; performed vulnerability assessments and remediation to harden security posture.",
      "Engineered DNS, DHCP, VPN, SSL/TLS, and firewall configurations for multi-site deployments, ensuring secure, reliable connectivity."
    ],
    technologiesUsed: ["Network Architecture", "Firewalls", "VLANs", "Network Segmentation", "VMware", "Hyper-V", "Linux", "Windows Server", "Nessus", "DNS", "DHCP", "VPN"]
  },
  {
    id: "abp-network",
    company: "ABP News (ABP Network)",
    title: "Junior IT Engineer",
    period: "Jul 2022 – May 2023",
    location: "Ahmedabad, Gujarat, India",
    isCurrent: false,
    highlights: [
      "Ensured 24/7 availability of production broadcast and office IT infrastructure, resolving network, server, and endpoint issues under SLA commitments in a mission-critical environment.",
      "Managed server patching, routine upgrades, and Linux/Windows system administration, maintaining compliance with organizational security standards."
    ],
    technologiesUsed: ["IT Infrastructure", "Linux", "Windows Server", "System Administration", "Patch Management", "Network Troubleshooting", "SLA Management"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "ganpat-university-msc",
    institution: "Ganpat University Department of Computer Science",
    degree: "M.Sc. IT (IMS)",
    specialization: "Server Administration & Infrastructure Management Services",
    period: "2020 – 2022",
    location: "Gujarat, India"
  },
  {
    id: "ganpat-university-bsc",
    institution: "Ganpat University Department of Computer Science",
    degree: "B.Sc. IT (IMS)",
    specialization: "Server Administration & Infrastructure Management Services",
    period: "2017 – 2020",
    location: "Gujarat, India"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "in-progress-certs",
    title: "AWS Solutions Architect / Azure Administrator (AZ-104) / CKA",
    issuer: "AWS / Microsoft / CNCF (In Progress)",
    badgeIcon: "Cloud",
    category: "Cloud & Kubernetes (In Progress)"
  },
  {
    id: "icsi-cnss",
    title: "Certified Network Security Specialist (CNSS)",
    issuer: "ICSI (International CyberSecurity Institute, U.K.)",
    credentialUrl: "/certifications/icsi-cnss-network-security.pdf",
    credentialId: "19306985",
    badgeIcon: "ShieldAlert",
    category: "Cybersecurity & Network Security"
  },
  {
    id: "gcp-coursera",
    title: "Architecting with Google Cloud Platform (Certificate Course)",
    issuer: "Google Cloud / Coursera",
    credentialUrl: "/certifications/google-cloud/gcp-fundamentals-core-infrastructure.pdf",
    badgeIcon: "Cloud",
    category: "Cloud Architecture — Certificate Course",
    subCertificates: [
      {
        title: "Google Cloud Platform Fundamentals: Core Infrastructure",
        credentialUrl: "/certifications/google-cloud/gcp-fundamentals-core-infrastructure.pdf",
        credentialId: "2UFG93FJH6DU",
        shortLabel: "Course 1: Fundamentals"
      },
      {
        title: "Reliable Cloud Infrastructure: Design and Process",
        credentialUrl: "/certifications/google-cloud/gcp-reliable-infrastructure-design.pdf",
        credentialId: "5LRDQHGAQGT9",
        shortLabel: "Course 2: Reliable Infra"
      },
      {
        title: "Elastic Cloud Infrastructure: Scaling and Automation",
        credentialUrl: "/certifications/google-cloud/gcp-elastic-infrastructure-scaling.pdf",
        credentialId: "AZQPZV5A9M9Q",
        shortLabel: "Course 3: Elastic Infra"
      },
      {
        title: "Essential Cloud Infrastructure: Core Services",
        credentialUrl: "/certifications/google-cloud/gcp-essential-infrastructure-core-services.pdf",
        credentialId: "BVXQXYE9PF7V",
        shortLabel: "Course 4: Core Services"
      },
      {
        title: "Essential Cloud Infrastructure: Foundation",
        credentialUrl: "/certifications/google-cloud/gcp-essential-infrastructure-foundation.pdf",
        credentialId: "EL3H23ED8HX3",
        shortLabel: "Course 5: Foundation"
      }
    ]
  },
  {
    id: "tryhackme-specializations",
    title: "Practical Cybersecurity & Penetration Testing (Learning Paths)",
    issuer: "TryHackMe",
    credentialUrl: "/certifications/tryhackme/THM-JBPWIRPKXK.pdf",
    credentialId: "Top 3% Worldwide",
    badgeIcon: "Target",
    category: "Offensive & Defensive Security — Learning Paths",
    subCertificates: [
      {
        title: "Jr Penetration Tester Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-JBPWIRPKXK.pdf",
        credentialId: "THM-JBPWIRPKXK",
        shortLabel: "Jr Penetration Tester"
      },
      {
        title: "Web Fundamentals (OWASP & Web Security)",
        credentialUrl: "/certifications/tryhackme/THM-J7PID6GD4Q.pdf",
        credentialId: "THM-J7PID6GD4Q",
        shortLabel: "Web Fundamentals"
      },
      {
        title: "Industrial Intrusion (OT/ICS Security CTF)",
        credentialUrl: "/certifications/tryhackme/THM-XXXWIK4NDO.pdf",
        credentialId: "THM-XXXWIK4NDO",
        shortLabel: "Industrial Intrusion"
      },
      {
        title: "Complete Beginner Cyber Defense Path",
        credentialUrl: "/certifications/tryhackme/THM-3KYBXZHLBW.pdf",
        credentialId: "THM-3KYBXZHLBW",
        shortLabel: "Complete Beginner"
      },
      {
        title: "Introduction to Cyber Security Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-P31YELUMDZ.png",
        credentialId: "THM-P31YELUMDZ",
        shortLabel: "Intro to Cyber"
      },
      {
        title: "Pre Security Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-S17ITBZWKK.png",
        credentialId: "THM-S17ITBZWKK",
        shortLabel: "Pre Security"
      }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "tryhackme-top3",
    title: "TryHackMe — Top 3% Global Practical Security",
    description: "Ranked in the Top 3% of users worldwide on TryHackMe, demonstrating practical expertise in offensive and defensive security, network penetration testing, Linux hardening, and threat analysis.",
    metric: "Top 3% Global",
    badge: "Cybersecurity Proficiency",
    certificates: [
      {
        title: "Jr Penetration Tester Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-JBPWIRPKXK.pdf",
        credentialId: "THM-JBPWIRPKXK",
        shortLabel: "Jr PenTester"
      },
      {
        title: "Web Fundamentals Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-J7PID6GD4Q.pdf",
        credentialId: "THM-J7PID6GD4Q",
        shortLabel: "Web Fundamentals"
      },
      {
        title: "Industrial Intrusion (OT/ICS Security CTF)",
        credentialUrl: "/certifications/tryhackme/THM-XXXWIK4NDO.pdf",
        credentialId: "THM-XXXWIK4NDO",
        shortLabel: "Industrial Intrusion"
      },
      {
        title: "Complete Beginner Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-3KYBXZHLBW.pdf",
        credentialId: "THM-3KYBXZHLBW",
        shortLabel: "Complete Beginner"
      },
      {
        title: "Introduction to Cyber Security Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-P31YELUMDZ.png",
        credentialId: "THM-P31YELUMDZ",
        shortLabel: "Intro to Cyber"
      },
      {
        title: "Pre Security Learning Path",
        credentialUrl: "/certifications/tryhackme/THM-S17ITBZWKK.png",
        credentialId: "THM-S17ITBZWKK",
        shortLabel: "Pre Security"
      }
    ]
  }
];

export const FAQS = [
  {
    question: "What is your primary tech stack for Cloud Infrastructure & DevOps?",
    answer: "My core stack spans AWS (ECS, Lambda, DynamoDB, ALB, API Gateway, CloudWatch, IAM, VPC) and Azure (AKS, Application Insights, Azure Monitor, networking, RBAC); Terraform and AWS CDK for Infrastructure as Code; Docker, Kubernetes, Docker Swarm, and Helm for container orchestration; GitHub Actions, Jenkins, and GitLab CI for CI/CD pipelines — with SonarQube, Snyk, Trivy, Checkov, Gitleaks, Cosign, and Syft for shift-left DevSecOps and supply-chain security."
  },
  {
    question: "How do you approach DevSecOps and Supply-Chain Security?",
    answer: "I integrate security directly into CI/CD pipelines using tools like Semgrep and SonarQube for SAST (OWASP Top 10), Snyk and Trivy for SCA and container base image scanning, Gitleaks for secret detection, Syft for SBOM generation (SPDX/CycloneDX), and Sigstore Cosign for keyless image signing with OIDC identity verification."
  },
  {
    question: "What monitoring, observability, and reliability tools do you use?",
    answer: "I use Prometheus, Grafana, Alertmanager, ELK/Loki, CloudWatch, and Application Insights for RED/USE metrics, distributed log tracing, and SLO/SLI tracking. I focus on blameless Root Cause Analysis (RCA), MTTR reduction, and automated incident recovery runbooks."
  },
  {
    question: "Do you have experience with AI-enabled DevOps and LLM Infrastructure?",
    answer: "Yes, I build and operate AI infrastructure supporting vLLM/Ollama runtime isolation, GPU memory optimization, TTFT latency tracking, vector database integration (Qdrant), and intelligent observability with automated RCA."
  }
];
