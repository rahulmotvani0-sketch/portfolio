"use client";

import { useState } from "react";
import { 
  X, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Layers, 
  Lock, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolioData";
import { GitHubIcon } from "./Navbar";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'architecture' | 'interview'>('case-study');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                {project.badgeText}
              </span>
              <span className="text-xs font-mono text-slate-400">• {project.role}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('case-study')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'case-study'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
            }`}
          >
            Visual Architecture Diagram
          </button>
          <button
            onClick={() => setActiveTab('interview')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTab === 'interview'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
            }`}
          >
            Technical Interview Q&A Deep-Dive
          </button>
        </div>

        {/* Modal Body Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 font-sans text-sm">
          
          {/* TAB 1: CASE STUDY OVERVIEW */}
          {activeTab === 'case-study' && (
            <div className="space-y-6">
              
              {/* Problem & Business Context Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                    <AlertTriangle className="w-4 h-4" /> The Problem
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                    <Cpu className="w-4 h-4" /> Business & Engineering Context
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.businessContext}
                  </p>
                </div>
              </div>

              {/* Implementation Steps */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> What I Personally Implemented
                </h3>
                <ul className="space-y-2">
                  {project.implementationSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security, Automation & Observability 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Security */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <Lock className="w-4 h-4" /> Security & DevSecOps
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.securityConsiderations.map((sec, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-mono">•</span>
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Automation */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                    <Zap className="w-4 h-4" /> Automation & IaC
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.automationHighlights.map((auto, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 font-mono">•</span>
                        <span>{auto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Observability */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                    <Activity className="w-4 h-4" /> SRE Observability
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.observabilitySetup.map((obs, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-mono">•</span>
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Root Cause Analysis (RCA) & Complex Problem Solved */}
              {project.challengesAndRCA.length > 0 && (
                <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-3">
                  <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Troubleshooting & Root Cause Analysis (RCA) Story
                  </h3>
                  {project.challengesAndRCA.map((item, i) => (
                    <div key={i} className="space-y-2 text-xs sm:text-sm">
                      <div className="text-slate-200">
                        <strong className="text-amber-300 font-mono">Engineering Incident:</strong> {item.challenge}
                      </div>
                      <div className="text-slate-300 pl-4 border-l-2 border-amber-500/50">
                        <strong className="text-emerald-400 font-mono">Remediation & Fix:</strong> {item.solution}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantifiable Results & Impact */}
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Measured Technical & Business Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.impactAndResults.map((result, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-emerald-500/30 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-xs font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: VISUAL ARCHITECTURE DIAGRAM */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" /> End-to-End System Topology
                </h3>
                <p className="text-xs text-slate-400">
                  {project.architectureDescription}
                </p>
              </div>

              {/* Visual Node Diagram Flow */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
                <div className="text-xs font-mono text-slate-400 text-center pb-2 border-b border-slate-800">
                  INTERACTIVE DATAFLOW TOPOLOGY & PIPELINE NODES
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {project.diagramNodes.map((node, i) => {
                    const nodeTypeColor = 
                      node.type === 'client' ? 'border-blue-500/40 text-blue-400 bg-blue-500/5' :
                      node.type === 'gateway' ? 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5' :
                      node.type === 'security' ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/5' :
                      node.type === 'compute' ? 'border-indigo-500/40 text-indigo-400 bg-indigo-500/5' :
                      node.type === 'database' ? 'border-amber-500/40 text-amber-400 bg-amber-500/5' :
                      'border-purple-500/40 text-purple-400 bg-purple-500/5';

                    return (
                      <div 
                        key={i} 
                        className={`p-4 rounded-xl border ${nodeTypeColor} flex flex-col justify-between space-y-2 relative group hover:scale-[1.02] transition-transform`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            STEP {i + 1}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 capitalize">
                            {node.type}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-slate-100 text-xs sm:text-sm">
                            {node.title}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {node.sub}
                          </div>
                        </div>
                        {i < project.diagramNodes.length - 1 && (
                          <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                            <ArrowRight className="w-4 h-4 text-emerald-500/60" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>🔒 Security Rule: Fail-closed quality gates</span>
                  <span>⚡ Telemetry: Prometheus Metrics Active</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TECHNICAL INTERVIEW DEEP DIVE */}
          {activeTab === 'interview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-200">
                  This section prepares for technical interview questions on architecture trade-offs, failure modes, cost engineering, and scaling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                    <HelpCircle className="w-4 h-4" /> Architecture Trade-Offs
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.interviewDeepDive.architectureTradeoffs}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                    <AlertTriangle className="w-4 h-4" /> Failure Scenario & Disaster Recovery
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.interviewDeepDive.failureScenarioAndRecovery}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                    <Zap className="w-4 h-4" /> Cost Optimization Strategy
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.interviewDeepDive.costOptimization}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <Layers className="w-4 h-4" /> Scaling & High-Availability Model
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.interviewDeepDive.scalingStrategy}
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            {project.technologies.slice(0, 5).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
