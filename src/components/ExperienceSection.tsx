"use client";

import { 
  Briefcase, 
  CheckCircle2, 
  MapPin, 
  Cpu
} from "lucide-react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900/60 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" /> Professional Career History
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Infrastructure Impact
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              4.5+ years of hands-on technical progression across DevOps, DevSecOps, SRE, and Cloud Engineering.
            </p>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-800" />

          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="relative pl-0 md:pl-20 group">
              
              {/* Timeline Node Badge */}
              <div className="hidden md:flex absolute left-4 top-1.5 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-emerald-500 items-center justify-center text-emerald-400 font-bold text-xs shadow-lg z-10">
                <Cpu className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-5 shadow-2xl hover:border-slate-700 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400">
                    <span className="font-semibold text-slate-200 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-cyan-400" /> {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {item.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
