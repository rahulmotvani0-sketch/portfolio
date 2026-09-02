"use client";

import { Terminal, Shield, Cpu, Activity } from "lucide-react";
import { CANDIDATE_INFO } from "@/data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-100 text-lg tracking-tight">
                {CANDIDATE_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-mono">
              DevOps, DevSecOps, SRE & Platform Engineering Portfolio. Architecting secure, automated, and reliable cloud systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={CANDIDATE_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={CANDIDATE_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CANDIDATE_INFO.contact.email}`}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 font-mono text-xs font-semibold border border-slate-800 transition-colors"
            >
              {CANDIDATE_INFO.contact.email}
            </a>
          </div>

        </div>

        {/* Navigation Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-slate-300">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2">Projects</span>
            <a href="#projects" className="block hover:text-emerald-400 py-1 transition-colors">Featured Case Studies</a>
            <a href="#architecture" className="block hover:text-emerald-400 py-1 transition-colors">Visual Architecture</a>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2">Skills & SRE</span>
            <a href="#skills" className="block hover:text-emerald-400 py-1 transition-colors">Technical Matrix</a>
            <a href="#sre-sandbox" className="block hover:text-emerald-400 py-1 transition-colors">SRE Incident Simulator</a>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2">Credentials</span>
            <a href="#experience" className="block hover:text-emerald-400 py-1 transition-colors">Career Timeline</a>
            <a href="#certifications" className="block hover:text-emerald-400 py-1 transition-colors">Certifications & THM</a>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2">Contact</span>
            <a href="#contact" className="block hover:text-emerald-400 py-1 transition-colors">Schedule Technical Call</a>
            <a href="#recruiter-summary" className="block hover:text-emerald-400 py-1 transition-colors">Recruiter Summary</a>
          </div>
        </div>

        {/* System Control Status Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-300">Control Plane Active • Production Status: Healthy</span>
          </div>

          <div>
            © {new Date().getFullYear()} Rahul Motvani. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
