"use client";

import { 
  Award, 
  ShieldCheck, 
  Lock, 
  Network, 
  Cloud, 
  Trophy, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS, CANDIDATE_INFO } from "@/data/portfolioData";

export default function CertificationsAndAchievements() {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-cyan-400" />;
      case 'Network': return <Network className="w-6 h-6 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-amber-400" />;
      default: return <Award className="w-6 h-6 text-emerald-400" />;
    }
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
              Verified certifications in Network Security, Cloud Infrastructure, and Practical Cyber Defense.
            </p>
          </div>
        </div>

        {/* TryHackMe Top 3% Highlight Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-cyan-500/10 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Trophy className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30 uppercase">
                  Global Security Ranking
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Top 3% Worldwide</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                TryHackMe — Top 3% Global Practical Security
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Ranked in the top 3% worldwide on TryHackMe, demonstrating hands-on experience in offensive and defensive cybersecurity, network protocol analysis, Linux system hardening, and threat mitigation.
              </p>
            </div>
          </div>

          <div className="shrink-0 relative z-10">
            <a
              href={CANDIDATE_INFO.contact.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>View TryHackMe Profile ↗</span>
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                  {getCertIcon(cert.badgeIcon)}
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
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
