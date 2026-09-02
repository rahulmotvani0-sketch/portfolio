"use client";

import { useState } from "react";
import { 
  Network, 
  GitBranch, 
  ShieldCheck, 
  Database, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Lock, 
  Layers
} from "lucide-react";

export default function ArchitectureExplorer() {
  const [activeDiagram, setActiveDiagram] = useState<'devsecops' | 'ai' | 'migration' | 'iac'>('devsecops');

  const diagramData = {
    devsecops: {
      title: "DevSecOps Shift-Left CI/CD Pipeline Architecture",
      subtitle: "Automated code quality gates, SAST (SonarQube), SCA (Snyk), and image security scanning before Kubernetes deployment.",
      nodes: [
        { label: "1. Developer Push", icon: GitBranch, sub: "Git / Bitbucket Branch", color: "border-blue-500/40 text-blue-400" },
        { label: "2. CI Pipeline Runner", icon: Server, sub: "Bitbucket Pipelines / Actions", color: "border-cyan-500/40 text-cyan-400" },
        { label: "3. SonarQube SAST", icon: Lock, sub: "Code Smells & Bug Analysis", color: "border-amber-500/40 text-amber-400" },
        { label: "4. Snyk SCA Audit", icon: ShieldCheck, sub: "Dependency Vulnerabilities", color: "border-emerald-500/40 text-emerald-400" },
        { label: "5. Quality Gate Check", icon: CheckCircle2, sub: "0 Blocker Bugs Policy", color: "border-purple-500/40 text-purple-400" },
        { label: "6. Container Registry", icon: Database, sub: "Signed Minimal Docker Image", color: "border-indigo-500/40 text-indigo-400" },
        { label: "7. K8s Cluster Deploy", icon: Cpu, sub: "EKS / AKS Pod Rollout", color: "border-emerald-500/40 text-emerald-400" }
      ],
      highlights: [
        "Fails build immediately if SonarQube quality gate rejects pull request.",
        "Snyk vulnerability database checked during every build execution.",
        "Gitleaks secret scanner prevents credentials from being committed."
      ]
    },
    ai: {
      title: "SARA-II AI Assistant Microservices Topology",
      subtitle: "Event-driven AI agent runtime with prompt safety controls, vector memory cache, and local/cloud LLM provider fallback.",
      nodes: [
        { label: "1. Client Frontend", icon: Server, sub: "HTTPS / WebSockets", color: "border-blue-500/40 text-blue-400" },
        { label: "2. Nginx API Gateway", icon: Network, sub: "Rate Limiter & TLS 1.3", color: "border-cyan-500/40 text-cyan-400" },
        { label: "3. Safety Runtime", icon: Lock, sub: "Prompt Sanitizer Filter", color: "border-rose-500/40 text-rose-400" },
        { label: "4. Provider Router", icon: Layers, sub: "Circuit Breaker Engine", color: "border-purple-500/40 text-purple-400" },
        { label: "5. Local vLLM / Cloud API", icon: Cpu, sub: "Model Worker Containers", color: "border-emerald-500/40 text-emerald-400" },
        { label: "6. Qdrant & Redis", icon: Database, sub: "Vector Memory & Cache", color: "border-amber-500/40 text-amber-400" },
        { label: "7. TTS Streamer", icon: Server, sub: "Audio Chunking Engine", color: "border-indigo-500/40 text-indigo-400" }
      ],
      highlights: [
        "Local containerized LLM eliminates cloud token costs for standard queries.",
        "Circuit breaker switches to local vLLM within 120ms if OpenAI API fails.",
        "Vector caching in Redis speeds up embedding lookups by 35%."
      ]
    },
    migration: {
      title: "Bitbucket Data Center & PostgreSQL Modernization Flow",
      subtitle: "Cold migration pipeline from legacy server to containerized high-availability Bitbucket + PostgreSQL 15.",
      nodes: [
        { label: "1. Legacy Host", icon: Server, sub: "Bitbucket v6 / PG 10 / Java 8", color: "border-rose-500/40 text-rose-400" },
        { label: "2. Backup Workflow", icon: Database, sub: "pg_dump + Rsync Transfer", color: "border-amber-500/40 text-amber-400" },
        { label: "3. Staging Lab", icon: ShieldCheck, sub: "Schema Transformation Matrix", color: "border-cyan-500/40 text-cyan-400" },
        { label: "4. PG 15 Upgrade", icon: Database, sub: "Tuned Shared Buffers & WAL", color: "border-emerald-500/40 text-emerald-400" },
        { label: "5. Bitbucket Container", icon: Cpu, sub: "Bitbucket v8 / Java 17 Runtime", color: "border-indigo-500/40 text-indigo-400" },
        { label: "6. Verification Suite", icon: CheckCircle2, sub: "200+ Repo SHA Checks", color: "border-emerald-500/40 text-emerald-400" }
      ],
      highlights: [
        "Executed in under 2 hours with zero data loss across 200+ repositories.",
        "JVM heap tuned (-Xmx12g) to eliminate Git LFS memory exhaustion.",
        "Automated rollback script configured for sub-10 minute recovery."
      ]
    },
    iac: {
      title: "Terraform Multi-Cloud GitOps Architecture",
      subtitle: "Modular IaC workflow with Checkov policy-as-code security scans, S3 remote state locking, and multi-cloud provisioning.",
      nodes: [
        { label: "1. IaC Repo PR", icon: GitBranch, sub: "Terraform Modules Commit", color: "border-blue-500/40 text-blue-400" },
        { label: "2. Checkov Scan", icon: Lock, sub: "Security Policy Check", color: "border-rose-500/40 text-rose-400" },
        { label: "3. State Locking", icon: Database, sub: "AWS S3 + DynamoDB Lock", color: "border-amber-500/40 text-amber-400" },
        { label: "4. Terraform Plan", icon: Server, sub: "Automated PR Diff Post", color: "border-cyan-500/40 text-cyan-400" },
        { label: "5. Merge & Apply", icon: CheckCircle2, sub: "Automated GitOps Rollout", color: "border-emerald-500/40 text-emerald-400" },
        { label: "6. Multi-Cloud Top", icon: Cpu, sub: "AWS VPC / EKS & Azure AKS", color: "border-purple-500/40 text-purple-400" }
      ],
      highlights: [
        "Complete elimination of manual cloud console modifications and drift.",
        "Checkov prevents exposed 0.0.0.0/0 security groups from provisioning.",
        "Automated teardown of idle dev environments reduces cloud spend by 28%."
      ]
    }
  };

  const current = diagramData[activeDiagram];

  return (
    <section id="architecture" className="py-20 bg-slate-900/60 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Network className="w-4 h-4" /> System Topology Explorer
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Technical Architecture Flow
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Select a system architecture below to inspect data flows, security controls, and step-by-step technical execution.
            </p>
          </div>

          {/* Diagram Selector Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'devsecops', label: 'DevSecOps CI/CD' },
              { id: 'ai', label: 'SARA-II AI Infra' },
              { id: 'migration', label: 'Bitbucket Migration' },
              { id: 'iac', label: 'Terraform GitOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDiagram(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeDiagram === tab.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Diagram Display Panel */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-2xl">
          
          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              {current.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {current.subtitle}
            </p>
          </div>

          {/* Flow Diagram Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 pt-2 relative">
            {current.nodes.map((node, idx) => {
              const IconComp = node.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border bg-slate-900/90 ${node.color} flex flex-col justify-between space-y-3 relative group hover:scale-[1.03] transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <IconComp className="w-5 h-5 shrink-0" />
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                      #{idx + 1}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-100 text-xs line-clamp-1">
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 line-clamp-1 mt-0.5">
                      {node.sub}
                    </div>
                  </div>
                  {idx < current.nodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Key Engineering Principles Grid */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Architectural Guarantees & Controls
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {current.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
