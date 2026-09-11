# PROFILE CONSISTENCY AUDIT — Rahul Motvani
**Date: 2026-09-09**

All sources must tell the same story. This document flags every inconsistency found and the recommended resolution applied.

---

## RESOLVED INCONSISTENCIES

| # | Source | Claim | Conflict | Resolution Applied |
|---|--------|-------|----------|-------------------|
| 1 | Portfolio, About, Hero, RecruiterMatrix, Experience | "4.5+ Years" | Date math: ~4y 2m total career, ~10m in DevOps title | Changed to "4+ years across infrastructure, networking, security, and DevOps" everywhere |
| 2 | llms.txt | Current employer: "Azilen Technologies Pvt Ltd" | Portfolio says "Agile logic Technovations" | Updated llms.txt to "Agile logic Technovations" |
| 3 | Portfolio (portfolioData.ts) | Aruhat title: "IT / Network & Systems Specialist" | Resume shows "Jr. Network Engineer" | Changed to "Junior Network Engineer" (matches resume) |
| 4 | Portfolio (portfolioData.ts) | ABP title: "IT Support Specialist" | Resume shows "Junior IT Engineer" | Changed to "Junior IT Engineer" (matches resume) |
| 5 | Portfolio (portfolioData.ts) | Azilen title: "Information Technology Engineer" | Resume shows "IT Technician" | Changed to "IT Infrastructure Engineer" (professional middle ground) |
| 6 | Portfolio (portfolioData.ts) | Education: single "Degree in IT (IMS)" 2017–2021 | Resume: B.Sc. (2020) + M.Sc. (2022) | Split into B.Sc. IT (2017–2020) and M.Sc. IT (2020–2022) |
| 7 | Sitemap | 5 project URLs | 8 projects exist, 3 code-backed repos missing | Added aws-serverless, devsecops-template, k8s-gitops to sitemap |
| 8 | Project GitHub links | SARA-II, LeadPulse, Bitbucket, SonarQube, Terraform linked to profile root | No actual repos for these | Removed misleading GitHub links for projects without public repos |
| 9 | Certifications | GCP courses categorized same as CNSS certification | Misleading — courses are not vendor certifications | Added "(Certificate Course)" label and category clarification |
| 10 | Certifications | TryHackMe paths listed as certifications | They are learning path completions | Added "(Learning Paths)" label and category clarification |

## ITEMS REQUIRING OWNER VERIFICATION

| # | Item | Why | Impact |
|---|------|-----|--------|
| 1 | Are "Agile logic Technovations" and "Azilen Technologies" the same company? | Portfolio uses both names for consecutive roles | Could affect how experience is presented (internal promotion vs. company change) |
| 2 | Official Azilen job title | Used "IT Infrastructure Engineer" as compromise between "IT Technician" and "Information Technology Engineer" | Verify against offer letter |
| 3 | Official Aruhat job title | Used "Junior Network Engineer" from resume | Verify against offer letter |
| 4 | Official ABP job title | Used "Junior IT Engineer" from resume | Verify against offer letter |
| 5 | M.Sc. vs B.Sc. dates | Used B.Sc. 2017–2020, M.Sc. 2020–2022 from resume screenshot | Verify against degree certificates |

## NOW CONSISTENT ACROSS

- [x] portfolioData.ts (all experience, education, certifications)
- [x] Hero component
- [x] About section
- [x] RecruiterMatrix
- [x] ExperienceSection
- [x] llms.txt
- [x] sitemap.xml
- [x] All 6 resume markdown versions
