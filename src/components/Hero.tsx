"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Terminal, 
  Download, 
  ArrowRight, 
  Server, 
  Activity, 
  Cpu, 
  Lock, 
  Layers, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { CANDIDATE_INFO } from "@/data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Navbar";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics'>('overview');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 border-b border-slate-800/80">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Experience & Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {CANDIDATE_INFO.totalExperience} Experience
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Azilen Technologies</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> DevSecOps & SRE Focus
              </span>
            </div>

            {/* Candidate Name & Titles */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                {CANDIDATE_INFO.name}
              </h1>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                DevOps Engineer | DevSecOps Engineer | SRE
              </div>
              <p className="text-sm font-mono text-slate-400">
                Target Roles: Platform Engineer • Cloud Infrastructure Engineer • Site Reliability Engineer
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Architecting, securing, and operating production cloud infrastructure across AWS, Azure, and GCP. 
              Specializing in <span className="text-emerald-400 font-semibold">Kubernetes</span>, <span className="text-cyan-400 font-semibold">Terraform IaC</span>, <span className="text-emerald-400 font-semibold">SonarQube & Snyk DevSecOps</span>, and high-availability SRE pipelines.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "AWS", "Azure", "GCP", "Kubernetes", "Terraform", 
                "Docker", "SonarQube", "Snyk", "Bitbucket", "PostgreSQL", "Prometheus"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download / View Resume</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={CANDIDATE_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={CANDIDATE_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Guarantee */}
            <div className="flex items-center gap-4 pt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Open for Remote International Roles
              </span>
              <span>•</span>
              <span>US / UK / EU / APAC / Middle East Timezones</span>
            </div>

          </div>

          {/* Right Hero Column: Interactive Cloud Infrastructure Health & Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl p-5 space-y-4 backdrop-blur-sm relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    PRODUCTION CLOUD CONTROL PLANE
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeTab === 'overview' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    STATUS
                  </button>
                  <button 
                    onClick={() => setActiveTab('metrics')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeTab === 'metrics' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    SLAs & CHECKS
                  </button>
                </div>
              </div>

              {activeTab === 'overview' ? (
                <div className="space-y-3 font-mono text-xs">
                  {/* Status Item 1: Kubernetes Cluster */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-slate-200 font-semibold">AWS EKS / K8s Cluster</div>
                        <div className="text-[10px] text-slate-400">3 Nodes • Calico CNI • Istio Mesh</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      HEALTHY (100%)
                    </span>
                  </div>

                  {/* Status Item 2: DevSecOps Quality Gate */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-slate-200 font-semibold">SonarQube & Snyk Gate</div>
                        <div className="text-[10px] text-slate-400">SAST/SCA • 0 Critical Bugs</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      PASSED
                    </span>
                  </div>

                  {/* Status Item 3: IaC State Locking */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="text-slate-200 font-semibold">Terraform Multi-Region IaC</div>
                        <div className="text-[10px] text-slate-400">AWS S3 + DynamoDB State Lock</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold border border-cyan-500/30">
                      SYNCED
                    </span>
                  </div>

                  {/* Status Item 4: Prometheus & Grafana */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-slate-200 font-semibold">SRE Observability</div>
                        <div className="text-[10px] text-slate-400">Prometheus • Log Aggregation</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      99.98% SLO
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-slate-300">
                      <span>Deployment Frequency</span>
                      <span className="text-emerald-400 font-bold">12+ / Day</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[92%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-slate-300">
                      <span>CI/CD Pipeline Build Time</span>
                      <span className="text-cyan-400 font-bold">6 Mins (Reduced from 22m)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[85%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-slate-300">
                      <span>Security Vulnerability MTTR</span>
                      <span className="text-emerald-400 font-bold">-55% Reduction</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[95%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-slate-300">
                      <span>TryHackMe Security Rank</span>
                      <span className="text-amber-400 font-bold">Top 3% Worldwide</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[97%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Console Footnote */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> System: Stable
                </span>
                <span>Location: Global Remote</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
