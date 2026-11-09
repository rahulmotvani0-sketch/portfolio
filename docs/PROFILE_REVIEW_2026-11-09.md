# Rahul Motvani: profile review and improvement plan
Reviewed 9 November 2026.

## Assessment
Your strongest positioning is DevOps / Cloud Infrastructure Engineer with a security and systems background. AWS, Terraform, Kubernetes, CI/CD, Linux and incident response form a coherent core. Your biggest immediate opportunity is making claims consistent and demonstrable. More tool names will not solve this.

Reviewed: LinkedIn PDF export (Profile (1).pdf), supplied Sophos resume, local portfolio source, Tutedude certificate, and public README files for the four repositories linked below. The live portfolio and GitHub profile overview were inaccessible through the available web retrieval. Repository access succeeded through GitHub. This is a document and source review, not proof that projects deploy successfully or that employment metrics are independently verified. Resume layout and complete repository implementation were not audited.

## Resolve these discrepancies first
| Item | Evidence | Recommended action |
| --- | --- | --- |
| Experience | Employment starts July 2022 across IT operations, networking, and systems administration | Position as “4+ years of experience across production cloud infrastructure, Kubernetes, Linux systems administration, and networking.” |
| Location | LinkedIn and portfolio say Ahmedabad; resume says Raigadh, Nijhar | Use Nijhar, Gujarat, India for current residence. Keep employer office locations separate. |
| Azilen title | LinkedIn says Information Technology Engineer; resume says IT Technician | Match the official employment title across platforms; describe DevOps-related responsibilities in bullets. |
| Aruhat and ABP titles | LinkedIn uses generic “IT”; resume gives Junior Network Engineer and Junior IT Engineer | Use documented titles consistently. |
| Education | LinkedIn lists one 2017–2021 IT entry; resume lists B.Sc. 2020 and M.Sc. 2022; portfolio uses 2017–2020 and 2020–2022 | Verify against degree documents, then list both degrees separately with exact dates. Do not guess a correction. |
| Incident volume | LinkedIn says 50+ weekly at ABP; resume says 50+ monthly | Determine actual scope and period; correct both. |
| LFCS | Listed in resume without issuer, credential ID, date or supporting certificate in the supplied files | Confirm the exact earned credential and verification URL; distinguish training from passing the Linux Foundation exam. |
| Impact | Resume lists 30% lower MTTR, 60% faster deployments, 99.9% uptime, team leadership and many fleet counts | For every figure retain baseline, after-value, observation window, measurement source and personal contribution. Remove or qualify figures you cannot explain. |

Avoid absolute claims such as catching every vulnerability, 100% threat mitigation, or zero cold-start SLA degradation. Distinguish employment results, measured lab results, design targets and simulations.

## LinkedIn improvements
Use a focused headline: DevOps Engineer | AWS & Azure | Terraform, Kubernetes & CI/CD | Linux, Observability & DevSecOps.

Rewrite About in four short paragraphs: present role and background; two substantiated examples; core stack; remote-role interests. The export contains merged sentences and dense lists; inspect the actual page formatting before concluding that all spacing issues exist online.

Prioritize DevOps, AWS, Terraform, Kubernetes and CI/CD in skills. Feature three items: the strongest GitOps demo, secure CI/CD project, and current resume/portfolio. Add the Tutedude course using the exact details below. Keep AI infrastructure as secondary learning unless you can demonstrate operational depth.

## Resume improvements
Use a clear DevOps / Cloud Engineer headline. Keep actual job titles and reverse chronology. Give the current role 4–5 specific bullets and earlier roles 2–3 each. Reserve a small section for two linked projects: problem, implementation, validation, and your contribution. The supplied resume has no dedicated project section despite having relevant repositories.

Replace generic percentage-heavy bullets with defensible evidence. For deployment speed explain the previous and new elapsed time, sample size, and pipeline change. For uptime explain the service, SLI, monitoring window and exclusions. Avoid “100% security compliance” without a named control set and audit scope. Treat “reduced breach risk 30%” as unsubstantiated unless a defined risk model exists.

Group skills by actual capability; put unfamiliar or learning tools outside the primary skills list. Use a targeted AWS variant and an Azure variant rather than the same exhaustive multicloud summary for every opening.

## Portfolio changes made locally
- Added Tutedude DevOps course completion with ID, completion date, PDF and image preview.
- Removed the combined “AWS / AZ-104 / CKA in progress” card from earned credentials. Study plans should not appear in structured data as credentials held.
- Clarified the hero and metadata to distinguish total IT/infrastructure experience from dedicated DevOps tenure.
- Simplified the main headline and hero paragraph, corrected current residence to Nijhar, and used actual credential categories in structured data.
- Replaced blanket “verified certifications” language with document-review wording.

Remaining: audit hardcoded production claims in project cards, skill levels, metrics, FAQ and recruiter matrix. Replace “Expert” ratings with concrete capabilities. Label the SRE sandbox clearly as a simulation. Present three strong projects first and put one evidence link beside every result. Do not imply that a local Kind cluster is equivalent to multi-AZ production resilience.

## GitHub findings and next actions
Repositories inspected:
- https://github.com/rahulmotvani0-sketch/aws-serverless-secure-api
- https://github.com/rahulmotvani0-sketch/devsecops-secure-cicd-template
- https://github.com/rahulmotvani0-sketch/kubernetes-gitops-observability-platform
- https://github.com/rahulmotvani0-sketch/vault-secrets-operator-k8s

Strengths: focused project themes, diagrams, quickstarts, security rationale, runbooks and interview demos. These are good foundations for technical conversations.

1. Serverless API: README and portfolio describe direct regional WAF attachment to HTTP API v2. AWS's comparison documents WAF integration for REST APIs. Review Terraform and use a supported architecture, then update diagrams and tests. Do not merely rename the service in the portfolio. Review free-tier and price claims against actual billing; WAF, KMS, backups and logging require explicit assumptions. Replace illustrative load-test output with dated execution evidence and a commit SHA.
2. Secure CI/CD: validate reusable workflow adoption from a separate consumer repository. Demonstrate that an intentionally vulnerable fixture fails and a corrected fixture passes. A Cosign signature alone does not establish SLSA Level 3; map any assurance claim to actual provenance and build controls. Use real workflow badges rather than static “passed” badges as evidence.
3. Kubernetes platform: demonstrate bootstrap from a clean machine, HPA prerequisites, one rollback, one failure recovery, SLO alert and cleanup. Separate Kubernetes pod replacement from Argo CD configuration reconciliation. Measure recovery timing rather than promising instant repair.
4. Vault project: validate the dynamic-secret integration against the pinned ESO version. Prove that a rotated secret reaches the running application; updating a Kubernetes Secret alone does not prove application reload. Test lease expiry, renewal, database authentication after rotation, and revocation. Pod termination alone should not be assumed to revoke a shared ESO-managed lease.

For each repository add tested versions, prerequisites, reproducible commands, genuine CI results, known limitations and teardown. Pin the best three projects on GitHub after reviewing the actual profile pins; current pins were not accessible. Several READMEs use an older LinkedIn URL; standardize to https://www.linkedin.com/in/rahulmotvani/ after checking redirects.

## Employer requirements and certification order
Canonical's SRE description emphasizes Python, Linux, networking, cloud operations and Kubernetes. GitLab's Infrastructure Platforms role emphasizes original automation, code debugging, Terraform/Kubernetes, observability, incident response and async communication. These are skill benchmarks, not a claim of eligibility: the reviewed GitLab role is US/Canada-only.

Recommended order is my assessment of fit, not a universal employer requirement:
| Priority | Credential | Reason / evidence to pair with it |
| --- | --- | --- |
| 1 | AWS Certified Solutions Architect – Associate | Best first choice for your AWS positioning. Pair preparation with a deployable Terraform project, IAM rationale, recovery plan and measured costs. |
| 2 | Certified Kubernetes Administrator (CKA) | Strong match for Kubernetes/SRE work; a practical command-line exam. Pair with troubleshooting, networking, storage, upgrades and recovery demonstrations. |
| Conditional alternative | Microsoft Certified: Azure Administrator Associate (AZ-104) | Choose before AWS if your target job descriptions and hands-on work are predominantly Azure. Covers identity, storage, compute, networking and monitoring. |

Pursue one cloud certification first, then CKA. Defer additional certifications until these skills and project evidence are solid. Do not list any recommended credential as earned until awarded. None guarantees an interview or job.

Verified course entry: DevOps Course — Certificate of Completion; issuer Tutedude; completed 5 November 2026; ID TD-RAHU-DO-1923. No public verification URL was provided in the certificate; the portfolio links the supplied document.

## 30 / 60 / 90 day plan
Days 1–30: resolve identity, education and metrics discrepancies; update LinkedIn and resume; reproduce and correct the serverless architecture; publish one honest project walkthrough with evidence. Begin one cloud-certification study track.

Days 31–60: complete cloud labs and practice assessments; strengthen the Kubernetes repository with recovery and alert demonstrations; write an anonymized incident review. Book an exam based on readiness, not a fixed promise.

Days 61–90: pursue CKA readiness, add tested Python automation with error handling, and contribute a focused fix or documentation improvement upstream. Keep applying to India-eligible remote roles with a targeted resume and a short project demonstration.

## Primary references
- Canonical SRE: https://canonical.com/careers/4468036/site-reliability-engineer-remote
- GitLab requirements: https://job-boards.greenhouse.io/gitlab/jobs/8623389002
- AWS API types: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html
- ESO generators: https://external-secrets.io/latest/guides/generator/
- AWS certification: https://aws.amazon.com/certification/certified-solutions-architect-associate/
- CKA: https://www.cncf.io/training/certification/cka/
- Azure Administrator: https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/
