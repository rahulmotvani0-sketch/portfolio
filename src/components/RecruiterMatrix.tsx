"use client";

import { useState } from "react";
import { 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  Layers, 
  Zap,
  Filter
} from "lucide-react";
import { CANDIDATE_INFO } from "@/data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Navbar";

interface RecruiterMatrixProps {
  onOpenResume: () => void;
}

export default function RecruiterMatrix({ onOpenResume }: RecruiterMatrixProps) {
  const [selectedPerspective, setSelectedPerspective] = useState<'all' | 'devsecops' | 'sre' | 'iac'>('all');

  const highlights = {
    all: [
      "4.5+ years of hands-on experience in cloud infrastructure, container orchestration, IaC, and DevSecOps.",
      "Proven track record migrating legacy database & VCS platforms (Bitbucket Data Center, PostgreSQL) with zero data loss.",
      "Shift-left security integration: Automated SAST (SonarQube) and SCA (Snyk) into CI/CD pipelines.",
      "Modular multi-cloud IaC provisioning using Terraform across AWS, Azure, and GCP.",
      "Incident response & observability: Prometheus, Grafana, structured logging, and blameless RCA."
    ],
    devsecops: [
      "Automated Quality Gates blocking releases with CVSS > 7.0 or unvetted secrets (Gitleaks).",
      "Snyk container image auditing and open-source license risk verification.",
      "SonarQube static application security testing (SAST) integrated into Bitbucket & GitHub Actions.",
      "TryHackMe Top 3% global rank with practical network penetration testing & Linux hardening background.",
      "Compliance enforcement: CIS Benchmarks, non-root Docker runtime, and least-privilege IAM policies."
    ],
    sre: [
      "Prometheus & Grafana metric dashboards tracking SLOs, error budgets, and MTTR.",
      "Bitbucket Data Center high-availability container setup with zero-downtime database upgrades.",
      "Root Cause Analysis (RCA) expertise resolving complex PostgreSQL CPU spikes and GPU VRAM OOM errors.",
      "High-availability Kubernetes deployments with automated pod scaling and resource limits.",
      "Blameless post-mortems and automated incident recovery playbooks."
    ],
    iac: [
      "Modular Terraform framework for multi-region AWS and Azure resource provisioning.",
      "GitOps workflow: PR-driven `terraform plan` execution with Checkov static security analysis.",
      "Remote state locking and state management via AWS S3 and DynamoDB.",
      "Cloud cost optimization: Auto-tagging and scheduled non-production resource teardown (-28% savings).",
      "100% configuration drift elimination across Dev, Staging, and Production environments."
    ]
  };

  return (
    <section id="recruiter-summary" className="py-16 bg-slate-900/60 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" /> 30-Second Recruiter & Hiring Manager Executive Summary
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Hire Rahul Motvani for Your Infrastructure Team?
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <a
              href="/Rahul_Motvani_Resume.pdf"
              download="Rahul_Motvani_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Recruiter Matrix Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Quick Credentials & Role Compatibility Card */}
          <div className="lg:col-span-4 bg-slate-950/90 rounded-xl border border-slate-800 p-6 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                RM
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{CANDIDATE_INFO.name}</h3>
                <p className="text-xs text-emerald-400 font-mono font-medium">
                  {CANDIDATE_INFO.currentRole}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs border-t border-slate-800">
              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Total Experience:
                </span>
                <span className="font-bold text-white font-mono">{CANDIDATE_INFO.totalExperience}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" /> Availability:
                </span>
                <span className="font-semibold text-emerald-400 font-mono">Immediate / Remote</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Security Rank:
                </span>
                <span className="font-semibold text-amber-400 font-mono">TryHackMe Top 3%</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-purple-400" /> Resume Status:
                </span>
                <span className="text-slate-300 font-mono">Updated {CANDIDATE_INFO.resumeLastUpdated}</span>
              </div>
            </div>

            {/* Target Roles Checkbox List */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                Target Role Matches:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {CANDIDATE_INFO.targetRoles.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="flex gap-2 pt-2 border-t border-slate-800">
              <a
                href={CANDIDATE_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={CANDIDATE_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Role Compatibility Perspective & ATS Keywords */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Perspective Filter Tabs */}
            <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="text-xs font-mono text-slate-300 font-bold flex items-center gap-2">
                  <Filter className="w-4 h-4 text-emerald-400" /> Filter Impact by Technical Focus:
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {(['all', 'devsecops', 'sre', 'iac'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPerspective(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                        selectedPerspective === key
                          ? "bg-emerald-500 text-slate-950 font-bold shadow"
                          : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                      }`}
                    >
                      {key === 'all' && "All Core DevOps"}
                      {key === 'devsecops' && "DevSecOps Focus"}
                      {key === 'sre' && "SRE & Reliability"}
                      {key === 'iac' && "Cloud & IaC Focus"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtered Highlights */}
              <ul className="space-y-3 pt-2">
                {highlights[selectedPerspective].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-mono shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ATS Keywords & Skills Matrix */}
            <div className="bg-slate-950/80 rounded-xl border border-slate-800 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Key Skills & ATS Keyword Index
                </h4>
                <span className="text-[11px] font-mono text-slate-400">Match Rate: High</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CANDIDATE_INFO.atsKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
