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
  badgeIcon: string;
  category: string;
}

export const CANDIDATE_INFO = {
  name: "Rahul Motvani",
  primaryTitle: "DevOps Engineer | DevSecOps Engineer | SRE",
  secondaryTitles: ["Platform Engineer", "Cloud Infrastructure Engineer", "DevSecOps Specialist", "Site Reliability Engineer"],
  totalExperience: "4.5+ Years",
  currentRole: "DevOps / DevSecOps Engineer at Azilen Technologies Pvt Ltd",
  tagline: "Building secure, automated, and highly reliable cloud infrastructure & CI/CD platforms.",
  heroDescription: "DevOps & DevSecOps Engineer with 4.5+ years of hands-on experience designing, automating, securing, and operating cloud infrastructure across AWS, Azure, and GCP. Specializing in Kubernetes, Terraform IaC, DevSecOps pipeline integration (SonarQube/Snyk), and Site Reliability Engineering (SRE).",
  targetRoles: [
    "DevOps Engineer",
    "DevSecOps Engineer",
    "Site Reliability Engineer (SRE)",
    "Platform Engineer",
    "Cloud Infrastructure Engineer",
    "Cloud Engineer"
  ],
  targetLocations: "US, UK, Europe, Canada, Australia, Singapore, UAE & Global Remote Roles",
  contact: {
    email: "rahulmotvani8@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-motvani-720b8b18a/",
    github: "https://github.com/rahulmotvani0-sketch",
    tryhackme: "https://tryhackme.com/p/rahulmotvani8gma",
    availability: "Immediate / Remote",
  },
  resumeLastUpdated: "September 2026",
  atsKeywords: [
    "AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Helm", "Linux",
    "CI/CD", "Git", "Bitbucket", "Python", "Bash", "PostgreSQL", "Redis",
    "Monitoring", "Logging", "Observability", "SRE", "DevSecOps", "SAST",
    "DAST", "SCA", "Cloud Security", "Infrastructure as Code", "Automation",
    "Incident Response", "Root Cause Analysis", "High Availability", "Scalability"
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "sara-ii",
    title: "SARA-II — AI Assistant Infrastructure & Platform Engineering",
    subtitle: "High-concurrency, event-driven infrastructure platform supporting local and cloud LLM runtime isolation and TTS pipelines.",
    category: "AI Infrastructure",
    role: "Cloud Platform & Reliability Engineer",
    badgeText: "AI/LLM Infrastructure & SRE",
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
      { title: "Prometheus + Grafana Monitor", sub: "TTFT Metrics & Log Tracing", type: "observability" }
    ],
    technologies: ["Docker", "Python", "FastAPI", "vLLM", "Ollama", "Qdrant", "Redis", "Nginx", "Prometheus", "Grafana", "Bash"],
    implementationSteps: [
      "Provisioned isolated Docker containers for vLLM local inference with dedicated container memory limits.",
      "Engineered an event-driven Provider Registry microservice that measures provider latency and dynamically routes requests based on real-time SLA rules.",
      "Integrated Redis caching layer to store vector embedding lookups, bypassing redundant LLM calls.",
      "Constructed a TTS audio generation microservice with streaming buffer endpoints to deliver sub-200ms audio response latency.",
      "Deployed Prometheus exporters tracking Time-To-First-Token (TTFT), request queue depth, and VRAM utilization."
    ],
    securityConsiderations: [
      "Egress network policy enforced to prevent local model containers from initiating unauthorized outbound requests.",
      "Implemented prompt sanitization runtime to prevent prompt injection and data leakage.",
      "Non-root execution across all containerized AI services with immutable filesystem layers."
    ],
    automationHighlights: [
      "Automated container deployment and model volume mounting using Docker Compose and Bash initialization scripts.",
      "Built automated health-check watchdog that automatically restarts unresponsive model worker nodes."
    ],
    observabilitySetup: [
      "Custom Prometheus metrics tracking LLM inference duration per 1K tokens.",
      "Structured JSON logging with correlation IDs passed through Gateway -> Safety Runtime -> LLM Worker."
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
    githubUrl: "https://github.com/rahulmotvani0-sketch",
    interviewDeepDive: {
      architectureTradeoffs: "We prioritized local vLLM hosting over pure cloud API reliance to guarantee data privacy and lower token expenses, sacrificing slight peak throughput in exchange for predictable cost and zero data leakage.",
      failureScenarioAndRecovery: "If OpenAI or primary Cloud API experiences elevated HTTP 5xx errors, the circuit breaker opens within 3 failed requests, instantly shifting incoming prompt queues to the local vLLM node with graceful parameter fallback.",
      costOptimization: "Cached vector embeddings in Redis for frequent domain queries, eliminating 35% of external API calls.",
      scalingStrategy: "Horizontal worker scaling using Docker Compose replicas behind Nginx upstream load balancers with healthcheck pinging."
    }
  },
  {
    id: "leadpulse-ai",
    title: "LeadPulse AI — Autonomous B2B Revenue Intelligence Platform",
    subtitle: "Multi-agent AI data engine built with FastAPI, PostgreSQL, Qdrant, Redis, and DevSecOps automated pipelines.",
    category: "DevSecOps",
    role: "DevSecOps & Cloud Infrastructure Lead",
    badgeText: "DevSecOps & Multi-Agent Infra",
    problem: "High-frequency data enrichment pipelines suffered from slow database queries, lack of pipeline security controls, and build failure bottlenecks during multi-agent concurrent processing.",
    businessContext: "LeadPulse AI ingests B2B lead signals from multiple data streams, performs semantic vector matching via Qdrant, and generates personalized sales intelligence for target accounts.",
    architectureDescription: "Built a robust containerized architecture featuring React SPA, FastAPI multi-agent workers, PostgreSQL for transactional lead data, Qdrant for vector embeddings, and Redis for task queue management (Celery/RQ). Secured through Snyk dependency auditing and SonarQube static code quality gates.",
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
    technologies: ["FastAPI", "React", "PostgreSQL", "Qdrant", "Redis", "Docker", "Snyk", "SonarQube", "Python", "Git", "Bitbucket"],
    implementationSteps: [
      "Architected FastAPI backend services decoupled into API routing layer, agent task processing layer, and vector lookup layer.",
      "Configured Snyk CLI and SonarQube Scanner step inside CI/CD pipeline to analyze container images and code quality prior to staging deployment.",
      "Optimized PostgreSQL schema with custom GIN indexes on JSONB fields and optimized Qdrant vector collection payload indexing.",
      "Integrated Redis for background job queuing and API rate limiting.",
      "Created Docker multi-stage build files to minimize image footprint from 1.2GB down to 180MB."
    ],
    securityConsiderations: [
      "Zero critical/high vulnerabilities allowed in production (enforced via Snyk Container + SAST quality gate).",
      "API request authentication enforced via JWT with key rotation stored in secure environment variables.",
      "Database connection pooling configured with TLS encryption and strict firewall isolation."
    ],
    automationHighlights: [
      "Automated CI/CD workflow executing linting, unit testing, SAST analysis, vulnerability scan, and Docker image build in under 6 minutes.",
      "Automated database migration scripts using Alembic with rollback validation."
    ],
    observabilitySetup: [
      "Structured JSON application logs formatted for ingestion into central logging stack.",
      "Prometheus metrics tracking agent worker completion rates, queue latency, and database connection pool health."
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
      "Achieved 99.95% system uptime under continuous multi-agent workload."
    ],
    githubUrl: "https://github.com/rahulmotvani0-sketch",
    interviewDeepDive: {
      architectureTradeoffs: "Utilized Qdrant for vector search while retaining PostgreSQL for relational data, accepting dual-database synchronization complexity in order to get native 10x vector query acceleration.",
      failureScenarioAndRecovery: "If Redis task queue drops connection, FastAPI workers automatically fall back to local disk state buffering and attempt exponential backoff reconnection without dropping active user API calls.",
      costOptimization: "Used Docker multi-stage builds to drop container memory overhead by 60%, allowing 3x more agent worker instances on the same host instances.",
      scalingStrategy: "Horizontal worker auto-scaling triggered when Redis queue depth exceeds 500 pending jobs."
    }
  },
  {
    id: "bitbucket-migration",
    title: "Bitbucket Infrastructure Migration & Platform Modernization",
    subtitle: "Zero-downtime migration of enterprise Bitbucket platform, PostgreSQL database upgrade, and Java compatibility modernization.",
    category: "Migration",
    role: "Lead DevOps Migration Engineer",
    badgeText: "Enterprise Infrastructure Modernization",
    problem: "Legacy Bitbucket server suffered from hardware degradation, outdated PostgreSQL 10 database engine, deprecated Java 8 runtime dependencies, and high vulnerability risks.",
    businessContext: "Bitbucket hosted 200+ core software repositories for engineering teams. A failed migration would halt all development activity, risk source code loss, and disrupt CI/CD pipelines.",
    architectureDescription: "Planned and executed a multi-stage migration from legacy standalone host to a modern containerized Bitbucket HA setup on Docker Compose with PostgreSQL 15 upgrade, automated backup snapshots, and updated Java 17 runtime.",
    diagramNodes: [
      { title: "Legacy Bitbucket Host", sub: "Bitbucket v6 / Java 8 / PG 10", type: "client" },
      { title: "Backup & Validation Engine", sub: "Rsync + PG Dump + Checksums", type: "gateway" },
      { title: "Staging Compatibility Lab", sub: "Schema Migration Testing", type: "security" },
      { title: "Containerized Bitbucket HA", sub: "Bitbucket v8 / Java 17", type: "compute" },
      { title: "PostgreSQL 15 Container", sub: "Tuned WAL & Shared Buffers", type: "database" },
      { title: "Automated Backup & DR", sub: "S3 Encrypted Snapshots", type: "observability" }
    ],
    technologies: ["Bitbucket", "Docker", "Docker Compose", "PostgreSQL", "Java 17", "Bash", "Linux", "Rsync", "Git"],
    implementationSteps: [
      "Constructed a full mirror staging environment to dry-run database schema transformations and test Java 17 compatibility.",
      "Developed automated Bash migration tool to freeze legacy instance, execute `pg_dumpall` with custom parameters, and transfer artifacts via rsync over encrypted SSH tunnel.",
      "Upgraded PostgreSQL database engine from v10 to v15 using sequential major version upgrade scripts with schema sanity checks.",
      "Migrated Bitbucket data directory to high-performance SSD container volumes with optimized permissions.",
      "Configured automated, encrypted nightly backup cron jobs with automated restoration verification checks."
    ],
    securityConsiderations: [
      "All migration data in transit encrypted using SSH key pairs and TLS 1.3.",
      "Database snapshots encrypted at rest with AES-256 before uploading to remote backup storage.",
      "Role-Based Access Control (RBAC) audited and synchronized with corporate Active Directory / LDAP."
    ],
    automationHighlights: [
      "Created one-click rollback shell script capable of restoring legacy state within 10 minutes if validation checks failed.",
      "Automated post-migration repository integrity verification script that compared Git commit SHA hashes across all 200+ repos."
    ],
    observabilitySetup: [
      "Real-time migration progress logger outputting detailed timestamps and step statuses.",
      "Post-migration health check matrix verifying Git HTTP/SSH cloning, webhook triggers, and pull request workflows."
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
    githubUrl: "https://github.com/rahulmotvani0-sketch",
    interviewDeepDive: {
      architectureTradeoffs: "Decided on a cold maintenance window migration instead of live active-active DB replication to guarantee absolute zero data corruption during major PostgreSQL schema translation.",
      failureScenarioAndRecovery: "Rollback strategy: Automated script was pre-configured to point DNS back to legacy server and restore write privileges within 8 minutes if verification SHA checks failed.",
      costOptimization: "Containerizing Bitbucket and PostgreSQL reduced host hardware footprint by 45% while enabling fast snapshotting.",
      scalingStrategy: "Docker Compose service parameters structured to allow fast migration to Kubernetes statefulsets when team size doubles."
    }
  },
  {
    id: "sonarqube-devsecops",
    title: "SonarQube Migration & DevSecOps Quality Gate Pipeline",
    subtitle: "Shift-left DevSecOps automation integrating SonarQube SAST, Snyk vulnerability scanning, and automated quality gates.",
    category: "DevSecOps",
    role: "DevSecOps Engineer",
    badgeText: "DevSecOps & SAST/DAST Security",
    problem: "Software teams released features without systematic security code reviews, causing security debt, unpatched open-source dependencies, and manual QA bottlenecks.",
    businessContext: "Implementing DevSecOps principles required embedding security into developer workflows without blocking delivery velocity or frustrating engineering teams.",
    architectureDescription: "Designed an automated DevSecOps pipeline where every Git commit automatically triggers SonarQube static analysis (SAST) and Snyk dependency scanning (SCA). Enforced strict Quality Gates that prevent vulnerable code from merging or deploying.",
    diagramNodes: [
      { title: "Developer Commit", sub: "Git / Bitbucket Push", type: "client" },
      { title: "CI/CD Pipeline Runner", sub: "Bitbucket Pipelines / Git Actions", type: "gateway" },
      { title: "Snyk SCA Scanner", sub: "Dependency Vulnerabilities", type: "security" },
      { title: "SonarQube SAST Engine", sub: "Code Smells & Security Bugs", type: "security" },
      { title: "Quality Gate Decision", sub: "Pass / Fail Enforcement", type: "security" },
      { title: "Artifact Registry", sub: "Signed Container Image", type: "compute" },
      { title: "Kubernetes Staging", sub: "Automated Deploy", type: "compute" },
      { title: "Security Dashboard", sub: "Slack & Email Notifications", type: "observability" }
    ],
    technologies: ["SonarQube", "Snyk", "Bitbucket Pipelines", "Git", "Docker", "PostgreSQL", "Bash", "Python", "Linux"],
    implementationSteps: [
      "Upgraded legacy SonarQube instance to latest Long-Term Support (LTS) version backed by dedicated PostgreSQL database.",
      "Created standardized reusable CI/CD pipeline code snippets for Node.js, Python, Java, and Go microservices.",
      "Defined organization-wide Quality Gate rules: 0 Blocker/Critical bugs, 0 Security Hotspots, >80% new code test coverage, and 0 Vulnerabilities with CVSS > 7.0.",
      "Integrated Snyk vulnerability CLI for scanning third-party npm and pip packages during build phase.",
      "Automated secret detection using Gitleaks to block accidentally hardcoded credentials from reaching Git remotes."
    ],
    securityConsiderations: [
      "SonarQube API authentication token stored in encrypted CI/CD pipeline environment variables.",
      "Security scanning results accessible only via authenticated role-based dashboards.",
      "Fail-closed pipeline policy: If security scans fail or timeout, the build is automatically rejected."
    ],
    automationHighlights: [
      "Created automated PR status check reporting: Developers receive instant feedback directly inside Bitbucket/GitHub Pull Requests.",
      "Built automated Slack notification bot alerting security leads when critical security hotspots are detected."
    ],
    observabilitySetup: [
      "SonarQube Quality Gate metric webhooks integrated into Grafana dashboards to track technical debt metrics across teams over time.",
      "Weekly security posture summary generated via custom Python script parsing SonarQube REST API."
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
    githubUrl: "https://github.com/rahulmotvani0-sketch",
    interviewDeepDive: {
      architectureTradeoffs: "Strict quality gates can slow down urgent releases if not managed properly; we added an emergency security bypass override requiring dual security lead approval with automatic audit logging.",
      failureScenarioAndRecovery: "If SonarQube server is temporarily offline, CI/CD pipeline retries 3 times before entering fail-safe mode with notification to DevSecOps team rather than silently allowing unvetted deployments.",
      costOptimization: "Optimized SonarScanner Java heap limits and scanner parameters to run on standard pipeline runners without requiring high-cost agent nodes.",
      scalingStrategy: "SonarQube PostgreSQL backend tuned with dynamic connection pooling to handle up to 50 concurrent build pipeline scans."
    }
  },
  {
    id: "terraform-iac-cloud",
    title: "Terraform Multi-Cloud Infrastructure Automation & GitOps",
    subtitle: "Modular Infrastructure as Code (IaC) framework automating multi-region AWS, Azure, and GCP provisioning with state locking and security compliance.",
    category: "IaC & SRE",
    role: "Cloud & Infrastructure Architect",
    badgeText: "Terraform IaC & Cloud Automation",
    problem: "Manual cloud console resource creation led to severe configuration drift, inconsistent security group rules across environments (Dev, Staging, Prod), and lack of infrastructure auditability.",
    businessContext: "The organization needed a standardized, version-controlled method to spin up secure cloud infrastructure across AWS and Azure with zero human manual intervention.",
    architectureDescription: "Designed and built a modular, reusable Terraform architecture. Infrastructure changes are managed via GitOps workflow: PR creation runs `terraform plan` via CI/CD, outputs diffs for peer review, and merge to main triggers `terraform apply` with encrypted remote state handling in S3 + DynamoDB.",
    diagramNodes: [
      { title: "Developer / IaC Repo", sub: "Terraform Modules", type: "client" },
      { title: "GitHub / Bitbucket CI", sub: "GitOps Plan Runner", type: "gateway" },
      { title: "TFLint & Checkov Scan", sub: "IaC Security Policy Check", type: "security" },
      { title: "Remote State Engine", sub: "AWS S3 + DynamoDB Lock", type: "database" },
      { title: "AWS Cloud VPC & EKS", sub: "Subnets, IAM, NAT Gateway", type: "compute" },
      { title: "Azure AKS & Blob", sub: "VNet, Resource Groups", type: "compute" },
      { title: "Wazuh / CloudWatch", sub: "Audit Logging & Alerts", type: "observability" }
    ],
    technologies: ["Terraform", "AWS", "Azure", "GCP", "Kubernetes (EKS/AKS)", "Checkov", "TFLint", "GitOps", "Bash", "Python"],
    implementationSteps: [
      "Created modular Terraform repository structure decoupling networking (VPC/VNet), compute (EKS/AKS), database (RDS/PostgreSQL), and security (IAM/Security Groups).",
      "Configured secure remote state backend using S3 bucket with KMS AES-256 encryption and DynamoDB table for state locking.",
      "Integrated Checkov static code analyzer into CI pipeline to block IaC security misconfigurations (e.g. unencrypted storage, exposed 0.0.0.0/0 ingress).",
      "Wrote parameterizable Terraform modules used by development teams to self-service isolated environment creation.",
      "Built automated drift detection pipeline that executes `terraform plan` on a 6-hour cron schedule and alerts on manual console modifications."
    ],
    securityConsiderations: [
      "Least-privilege IAM policies used by Terraform execution roles.",
      "Zero plain-text secrets in code: AWS Secrets Manager / Azure Key Vault references used dynamically.",
      "Enforced encrypted storage at rest for all EBS volumes, S3 buckets, and RDS instances."
    ],
    automationHighlights: [
      "Automated pull request comments showing formatted `terraform plan` execution diffs.",
      "Automated teardown scripts for temporary preview environments to save cloud costs."
    ],
    observabilitySetup: [
      "Terraform state drift alerts delivered via Slack webhook.",
      "CloudTrail logs streaming to central security monitoring dashboard."
    ],
    challengesAndRCA: [
      {
        challenge: "Stale state lock files occurred when CI/CD runner processes timed out during large EKS cluster deployments, blocking subsequent deployments.",
        solution: "Configured automated lock expiration policies, built a safe force-unlock utility script with audit logging, and optimized Terraform resource dependency ordering."
      }
    ],
    impactAndResults: [
      "Reduced infrastructure provisioning time from 3 days to under 15 minutes.",
      "Eliminated 100% of manual cloud configuration drift across Dev, Staging, and Production environments.",
      "Achieved 100% compliance with CIS AWS Foundations Benchmarks across all Terraform modules."
    ],
    githubUrl: "https://github.com/rahulmotvani0-sketch",
    interviewDeepDive: {
      architectureTradeoffs: "Chose pure modular Terraform with native state backends over third-party abstractions to maintain complete vendor control and zero subscription overhead.",
      failureScenarioAndRecovery: "If an automated `terraform apply` fails mid-way, state locking prevents concurrent runs; engineers review execution logs, run targeted `terraform refresh`, and apply corrective module patches.",
      costOptimization: "Implemented auto-tagging for all resources (Owner, Environment, Expiry), enabling automated teardown of idle non-production resources, saving ~28% monthly cloud costs.",
      scalingStrategy: "Module architecture structured around reusable workspace environments (Dev, Staging, Prod) with centralized IAM policy governance."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Cloud Platforms",
    description: "Designing, provisioning, and operating production cloud infrastructure across major providers.",
    iconName: "Cloud",
    skills: [
      { name: "AWS (Amazon Web Services)", level: "Expert", featured: true, useCase: "EC2, EKS, S3, IAM, VPC, CloudWatch, Route53, RDS, CloudFront" },
      { name: "Microsoft Azure", level: "Proficient", featured: true, useCase: "AKS, Blob Storage, Virtual Networks, Key Vault, Resource Groups" },
      { name: "Google Cloud Platform (GCP)", level: "Proficient", featured: true, useCase: "GKE, Google Cloud Storage, VPC Networks, IAM" }
    ]
  },
  {
    categoryName: "Infrastructure as Code (IaC)",
    description: "Automating cloud resource creation with version-controlled, modular code templates.",
    iconName: "FileCode",
    skills: [
      { name: "Terraform", level: "Expert", featured: true, useCase: "Modular infrastructure, Remote State Locking, Workspace management, Drift detection" },
      { name: "Infrastructure Automation", level: "Expert", featured: true, useCase: "Automated cloud provisioning, modular topology, self-service stack templates" },
      { name: "Configuration Management", level: "Proficient", useCase: "Server provisioning, consistent state enforcement, automated configuration" }
    ]
  },
  {
    categoryName: "Containers & Orchestration",
    description: "Packaging, deploying, and scaling containerized applications with high availability.",
    iconName: "Box",
    skills: [
      { name: "Docker & Docker Compose", level: "Expert", featured: true, useCase: "Multi-stage builds, minimal image footprints, non-root runtime security" },
      { name: "Kubernetes (K8s)", level: "Expert", featured: true, useCase: "Deployments, StatefulSets, Ingress Controllers, ConfigMaps, RBAC, Secrets" },
      { name: "Helm", level: "Proficient", useCase: "Kubernetes package management, release templating, parameterization" }
    ]
  },
  {
    categoryName: "CI/CD & Automation",
    description: "Building fast, reliable deployment pipelines with automated testing and zero downtime.",
    iconName: "GitBranch",
    skills: [
      { name: "Git & GitHub Actions", level: "Expert", featured: true, useCase: "Workflow automation, automated testing, container publishing, GitOps" },
      { name: "Bitbucket & Bitbucket Pipelines", level: "Expert", featured: true, useCase: "Enterprise code hosting, pipeline runners, deployment environments" },
      { name: "Pipeline & Deployment Automation", level: "Expert", featured: true, useCase: "Blue/Green, Canary releases, automated rollbacks, quality gate checks" }
    ]
  },
  {
    categoryName: "DevSecOps & Security",
    description: "Embedding security controls, scanning tools, and vulnerability management into CI/CD.",
    iconName: "ShieldCheck",
    skills: [
      { name: "Snyk", level: "Expert", featured: true, useCase: "Software Composition Analysis (SCA), container vulnerability scanning" },
      { name: "SonarQube", level: "Expert", featured: true, useCase: "Static Application Security Testing (SAST), code smells, Quality Gate enforcement" },
      { name: "Wazuh SIEM & Security Scanning", level: "Proficient", useCase: "Host intrusion detection, log analysis, vulnerability management" },
      { name: "Nessus & Burp Suite", level: "Proficient", useCase: "Vulnerability assessment, dynamic security testing, network scanning" },
      { name: "Secure CI/CD & Secret Management", level: "Expert", featured: true, useCase: "Gitleaks, TruffleHog, secret rotation, TLS termination, RBAC policies" }
    ]
  },
  {
    categoryName: "Observability & SRE",
    description: "Maintaining system uptime, real-time monitoring, structured logging, and incident RCA.",
    iconName: "Activity",
    skills: [
      { name: "Monitoring & Alerting", level: "Expert", featured: true, useCase: "Prometheus, Grafana dashboard creation, alert threshold configuration" },
      { name: "Logging & Tracing", level: "Expert", useCase: "Structured JSON logging, central log aggregation, span correlation" },
      { name: "Incident Response & RCA", level: "Expert", featured: true, useCase: "Blameless Root Cause Analysis, incident runbooks, MTTR reduction" },
      { name: "Reliability Engineering", level: "Expert", useCase: "SLO/SLI definition, error budget tracking, disaster recovery validation" }
    ]
  },
  {
    categoryName: "Networking & Security",
    description: "Troubleshooting complex network routing, reverse proxies, and perimeter security.",
    iconName: "Network",
    skills: [
      { name: "TCP/IP & Linux Networking", level: "Expert", featured: true, useCase: "Packet analysis, routing tables, iptables, netstat, tcpdump" },
      { name: "Reverse Proxy & Load Balancing", level: "Expert", featured: true, useCase: "Nginx, Traefik, HAProxy, SSL/TLS termination, HTTP/2" },
      { name: "DNS, HTTP/HTTPS & Firewalls", level: "Expert", useCase: "DNS record propagation, certificate management (Cert-Manager/Let's Encrypt)" }
    ]
  },
  {
    categoryName: "Operating Systems & Scripting",
    description: "System administration and shell scripting for Linux automation.",
    iconName: "Terminal",
    skills: [
      { name: "Linux (Ubuntu / Debian / RHEL)", level: "Expert", featured: true, useCase: "System administration, kernel tuning, SSH hardening, systemd" },
      { name: "Bash Shell Scripting", level: "Expert", featured: true, useCase: "Automation scripts, CLI tools, cron jobs, log parser utilities" },
      { name: "Python Automation", level: "Proficient", useCase: "DevOps automation scripts, API integrations, data parsing scripts" }
    ]
  },
  {
    categoryName: "Databases & Storage Services",
    description: "Operating, optimizing, backing up, and migrating database engines.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Expert", featured: true, useCase: "Database admin, major version upgrades, query index tuning, backups" },
      { name: "Redis", level: "Expert", featured: true, useCase: "In-memory caching, task queuing, rate limiting, pub/sub" },
      { name: "MySQL & MongoDB", level: "Proficient", useCase: "Database maintenance, replication monitoring, dump verification" }
    ]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "azilen-tech",
    company: "Azilen Technologies Pvt Ltd",
    title: "DevOps / DevSecOps Engineer",
    period: "December 2025 – Present",
    location: "Remote / On-site",
    isCurrent: true,
    highlights: [
      "Leading cloud infrastructure automation, CI/CD pipeline modernization, and security integration across multi-cloud environments.",
      "Architecting DevSecOps workflows with SonarQube and Snyk to enforce automated Quality Gates, shifting security left and preventing critical vulnerabilities.",
      "Orchestrating containerized workloads using Kubernetes and Docker Compose to maintain high availability and optimized resource limits.",
      "Managing Bitbucket enterprise platform upgrades, PostgreSQL major version database migrations, and automated disaster recovery backups.",
      "Developing reusable, modular Infrastructure as Code (IaC) templates in Terraform for automated AWS and Azure provisioning."
    ],
    technologiesUsed: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "SonarQube", "Snyk", "Bitbucket", "PostgreSQL", "Linux", "Bash"]
  },
  {
    id: "previous-devops-roles",
    company: "DevOps & Infrastructure Engineering Progression",
    title: "DevOps & Cloud Systems Engineer",
    period: "2021 – November 2025 (4+ Years)",
    location: "Remote / Hybrid",
    isCurrent: false,
    highlights: [
      "Engineered automated CI/CD deployment pipelines that reduced release cycles and deployment failure rates.",
      "Implemented comprehensive Prometheus and Grafana monitoring stacks to measure application SLOs and minimize MTTR.",
      "Configured Nginx reverse proxies, SSL/TLS certificates, network firewalls, and DNS routing for high-traffic environments.",
      "Automated server administration tasks using Bash and Python scripts, improving operational efficiency.",
      "Managed PostgreSQL and MySQL database backups, WAL archiving, schema migrations, and performance index tuning."
    ],
    technologiesUsed: ["Docker", "Linux", "Bash", "Python", "Prometheus", "Grafana", "Nginx", "MySQL", "PostgreSQL", "Git", "Networking"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "icsi-cnss",
    title: "Certified Network Security Specialist (CNSS)",
    issuer: "ICSI (International CyberSecurity Institute, U.K.)",
    credentialUrl: "https://www.credly.com/placeholder-cnss",
    badgeIcon: "ShieldAlert",
    category: "Cybersecurity & Network Security"
  },
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    credentialUrl: "https://www.credly.com/placeholder-cisco-cyber",
    badgeIcon: "Lock",
    category: "Security Engineering"
  },
  {
    id: "cisco-networking",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    credentialUrl: "https://www.credly.com/placeholder-cisco-network",
    badgeIcon: "Network",
    category: "Network Infrastructure"
  },
  {
    id: "gcp-coursera",
    title: "Google Cloud Certificate Course",
    issuer: "Coursera / Google Cloud",
    credentialUrl: "https://coursera.org/verify/placeholder-gcp",
    badgeIcon: "Cloud",
    category: "Cloud Architecture"
  }
];

export const ACHIEVEMENTS = [
  {
    id: "tryhackme-top3",
    title: "TryHackMe — Top 3% Global Ranking",
    description: "Ranked in the Top 3% of users worldwide on TryHackMe, demonstrating advanced practical skills in offensive and defensive cybersecurity, network penetration testing, Linux system hardening, and threat analysis.",
    metric: "Top 3% Global",
    badge: "Cybersecurity Proficiency"
  }
];

export const FAQS = [
  {
    question: "What is your primary tech stack for Cloud Infrastructure?",
    answer: "My primary stack revolves around AWS and Azure for cloud providers, Terraform for Infrastructure as Code, Kubernetes and Docker for container orchestration, and GitLab CI or GitHub Actions for CI/CD pipelines."
  },
  {
    question: "Do you have experience with DevSecOps?",
    answer: "Yes, I integrate security directly into CI/CD pipelines using tools like SonarQube for Static Application Security Testing (SAST) and Snyk for Software Composition Analysis (SCA) to enforce strict quality and security gates before deployment."
  },
  {
    question: "Are you available for remote work?",
    answer: "Yes, I am highly experienced in remote collaboration and am available for remote DevOps and Cloud Infrastructure roles globally."
  },
  {
    question: "What monitoring and observability tools do you use?",
    answer: "I primarily use Prometheus and Grafana for metrics and dashboarding, along with centralized logging solutions to monitor infrastructure health, trace errors, and maintain high availability."
  }
];
