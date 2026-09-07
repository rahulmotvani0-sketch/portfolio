"use client";

import { useState } from "react";
import { 
  Award, 
  ShieldCheck, 
  ShieldAlert,
  Lock, 
  Network, 
  Cloud, 
  Trophy, 
  CheckCircle2, 
  ExternalLink,
  FileText,
  ArrowUpRight,
  Crosshair,
  Globe,
  Terminal
} from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS, CANDIDATE_INFO } from "@/data/portfolioData";
import CertificateModal, { CertificateModalData } from "./CertificateModal";

export default function CertificationsAndAchievements() {
  const [activeCertModal, setActiveCertModal] = useState<CertificateModalData | null>(null);

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-cyan-400" />;
      case 'Network': return <Network className="w-6 h-6 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'Target': return <Crosshair className="w-6 h-6 text-rose-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-emerald-400" />;
      default: return <Award className="w-6 h-6 text-emerald-400" />;
    }
  };

  const openTryHackMeQuickView = (startingSubIndex = 0) => {
    const thmCert = CERTIFICATIONS.find(c => c.id === "tryhackme-specializations");
    if (!thmCert || !thmCert.subCertificates) return;
    setActiveCertModal({
      ...thmCert,
      initialSubIndex: startingSubIndex
    });
  };

  return (
    <section id="certifications" className="py-20 bg-slate-900/60 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" /> Certifications & Security Achievements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Credentials & Security Milestones
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Verified certifications in Cloud Architecture, Practical Cyber Defense & PenTesting, Network Infrastructure, and DevSecOps. Click Quick View on any credential to inspect the verified certificate.
            </p>
          </div>
        </div>

        {/* TryHackMe Top 3% Highlight Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-cyan-500/10 border border-amber-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Trophy className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30 uppercase">
                  Global Security Ranking
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Top 3% Worldwide</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  6 Verified Credentials
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                TryHackMe — Top 3% Global Practical Security
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Ranked in the top 3% worldwide on TryHackMe, demonstrating hands-on proficiency across Jr Penetration Testing, Web Application Exploitation (OWASP), OT/ICS Industrial Security, and Linux Hardening.
              </p>

              {/* Quick Pills for the 6 THM Certs */}
              <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                {CERTIFICATIONS.find(c => c.id === "tryhackme-specializations")?.subCertificates?.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => openTryHackMeQuickView(sIdx)}
                    className="px-2 py-0.5 rounded bg-slate-900/90 hover:bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{sub.shortLabel || sub.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 relative z-10 flex flex-wrap sm:flex-col gap-2 w-full lg:w-auto">
            <button
              onClick={() => openTryHackMeQuickView(0)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group/btn"
            >
              <span>Quick View All 6 Certificates</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href={CANDIDATE_INFO.contact.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>TryHackMe Profile ↗</span>
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                    {getCertIcon(cert.badgeIcon)}
                  </div>
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {cert.category}
                  </span>
                  <h3 className="font-bold text-white text-sm sm:text-base mt-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Sub Certificates (e.g. Google Cloud Specialization Courses or TryHackMe Specialization Credentials) */}
                {cert.subCertificates && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {cert.subCertificates.length} {cert.id.includes("tryhackme") ? "Specialization Credentials" : "Specialization Courses"}:
                    </span>
                    <div className="space-y-1 max-h-52 overflow-y-auto pr-1 scrollbar-thin">
                      {cert.subCertificates.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setActiveCertModal({
                              ...cert,
                              initialSubIndex: sIdx,
                              subCertificates: cert.subCertificates
                            });
                          }}
                          className="w-full flex items-center justify-between gap-1 text-[11px] text-slate-300 hover:text-emerald-400 py-1 px-2 rounded bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 transition-colors text-left cursor-pointer"
                          title={sub.title}
                        >
                          <span className="truncate">{sub.shortLabel || sub.title}</span>
                          <ArrowUpRight className="w-3 h-3 text-emerald-400 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <button
                  onClick={() => setActiveCertModal(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group/btn"
                >
                  <span>Quick View</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                    title="Open certificate in new window"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Open Full</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Quick View Modal */}
      <CertificateModal
        cert={activeCertModal}
        onClose={() => setActiveCertModal(null)}
      />
    </section>
  );
}
