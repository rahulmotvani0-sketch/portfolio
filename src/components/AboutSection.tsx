"use client";

import { 
  User, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Activity, 
  CheckCircle2 
} from "lucide-react";
import { CANDIDATE_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <User className="w-4 h-4" /> Engineering Philosophy & Identity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Rahul Motvani
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              DevOps / DevSecOps Engineer with 4.5+ years of production cloud infrastructure and platform engineering experience.
            </p>
          </div>
        </div>

        {/* About Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" /> Infrastructure & Operational Focus
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a DevOps and DevSecOps Engineer specializing in architecting, automating, securing, and operating cloud infrastructure for production workloads. Currently at <strong className="text-emerald-400 font-semibold">Azilen Technologies Pvt Ltd</strong>, my focus centers on building resilient CI/CD pipelines, containerized Kubernetes platforms, Infrastructure as Code using Terraform, and shift-left security integration.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rather than treating security and operations as post-deployment afterthoughts, I integrate security code reviews (SonarQube) and vulnerability scanning (Snyk) directly into developer pipelines—ensuring that every commit is vetted before reaching staging or production.
              </p>
            </div>

            {/* 3 Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Pillar 1: Automation */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                  <Zap className="w-4 h-4" /> Approach to Automation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every manual task is a candidate for version-controlled code. I build parameterizable Terraform modules and automated shell/python tools to eliminate configuration drift.
                </p>
              </div>

              {/* Pillar 2: Security */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" /> Approach to Security
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Security is enforced through automated Quality Gates. CVSS &gt; 7.0 vulnerabilities, exposed secrets, or non-compliant IAM rules fail builds automatically.
                </p>
              </div>

              {/* Pillar 3: Reliability */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                  <Activity className="w-4 h-4" /> Approach to Reliability
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Observability first. Structured JSON logging, Prometheus metrics, circuit breakers, and blameless Root Cause Analysis (RCA) drive continuous uptime.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Profile Highlights Card */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-2xl">
            <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Candidate Technical Snapshot</span>
              <span className="text-xs font-mono text-emerald-400 font-normal">4.5+ Years Exp</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono">Current Position:</strong>
                  <span className="text-slate-300">DevOps / DevSecOps Engineer at Azilen Technologies Pvt Ltd</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono">Core Platforms:</strong>
                  <span className="text-slate-300">AWS, Azure, GCP, Kubernetes, Docker, Bitbucket, GitHub</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono">Security Expertise:</strong>
                  <span className="text-slate-300">SonarQube, Snyk, Gitleaks, Wazuh SIEM, TryHackMe Top 3%</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-mono">Target Remote Locations:</strong>
                  <span className="text-slate-300">{CANDIDATE_INFO.targetLocations}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
              <span className="text-emerald-400 font-bold">Email:</span> {CANDIDATE_INFO.contact.email}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
