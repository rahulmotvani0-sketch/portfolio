"use client";

import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, MapPin } from "lucide-react";
import { CANDIDATE_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS, ACHIEVEMENTS, EXPERIENCE_TIMELINE, EDUCATION } from "@/data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Navbar";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
              OFFICIAL RESUME
            </span>
            <span className="text-xs font-mono text-slate-400">
              Last Updated: {CANDIDATE_INFO.resumeLastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <a
              href="/Rahul_Motvani_Resume.pdf"
              download="Rahul_Motvani_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href="/Rahul_Motvani_Resume.docx"
              download="Rahul_Motvani_Resume.docx"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download DOCX</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
              title="Print web version"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="printable-resume p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 text-slate-200 font-sans text-xs sm:text-sm bg-slate-950 print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {CANDIDATE_INFO.name}
                </h1>
                <p className="text-emerald-400 print:text-emerald-700 font-mono font-bold text-sm mt-0.5">
                  {CANDIDATE_INFO.primaryTitle}
                </p>
              </div>

              <div className="font-mono text-xs text-slate-400 print:text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center gap-1 sm:justify-end">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{CANDIDATE_INFO.contact.email}</span>
                </div>
                <div className="flex items-center gap-1 sm:justify-end">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{CANDIDATE_INFO.targetLocations}</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 print:text-slate-700 text-xs leading-relaxed font-normal pt-1">
              {CANDIDATE_INFO.heroDescription}
            </p>
          </div>

          {/* Core Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.categoryName} className="p-2 rounded bg-slate-900/60 print:bg-slate-100 border border-slate-800/80">
                  <strong className="text-slate-200 print:text-slate-900 font-mono text-[11px] block">
                    {cat.categoryName}:
                  </strong>
                  <span className="text-slate-400 print:text-slate-700 text-[11px]">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 pb-1">
              Professional Work Experience
            </h2>

            <div className="space-y-5">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-mono flex-wrap gap-1">
                    <strong className="text-white print:text-black font-bold text-sm">
                      {item.title}
                    </strong>
                    <span className="text-emerald-400 print:text-emerald-700 text-xs font-semibold">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-slate-400 print:text-slate-600 text-xs font-mono flex justify-between items-center">
                    <span className="font-semibold text-slate-300 print:text-slate-800">{item.company}</span>
                    <span className="text-[11px] text-slate-500">{item.location}</span>
                  </div>
                  <ul className="space-y-1 text-slate-300 print:text-slate-700 text-xs pt-1">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.technologiesUsed.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 print:bg-slate-200 text-slate-400 print:text-slate-700 border border-slate-800 print:border-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 pb-1">
              Education & Academic Foundation
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-2.5 rounded bg-slate-900/60 print:bg-slate-100 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-baseline font-mono flex-wrap gap-1">
                    <strong className="text-white print:text-black font-bold text-sm">
                      {edu.degree} · {edu.specialization}
                    </strong>
                    <span className="text-emerald-400 print:text-emerald-700 text-xs font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-slate-400 print:text-slate-600 text-xs font-mono flex justify-between items-center">
                    <span>{edu.institution}</span>
                    <span className="text-[11px] text-slate-500">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 pb-1">
              Key Engineering Projects & Case Studies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-2.5 rounded bg-slate-900/60 print:bg-slate-100 border border-slate-800 space-y-1">
                  <strong className="text-slate-200 print:text-black font-bold block">
                    {p.title}
                  </strong>
                  <p className="text-slate-400 print:text-slate-700 text-[11px]">
                    {p.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Security Rank */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 pb-1">
              Certifications & Global Security Rank
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <span key={c.id} className="px-2.5 py-1 rounded bg-slate-900 print:bg-slate-100 text-slate-300 print:text-black font-mono border border-slate-800">
                  {c.title} ({c.issuer})
                </span>
              ))}
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 print:text-amber-800 font-mono border border-amber-500/30 font-bold">
                TryHackMe Top 3% Global Security Rank
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0 print:hidden">
          <span className="text-xs font-mono text-slate-400">
            Official Portfolio Resume View
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
}
