import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import SreSandbox from "@/components/SreSandbox";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-[#0B0F19]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-white">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span>Rahul<span className="text-cyan-400">.ops</span></span>
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#sre-sandbox" className="hover:text-cyan-400 transition-colors">SRE Sandbox</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <a 
            href="/Rahul_Motvani_Resume.docx" 
            download
            className="text-sm font-medium text-cyan-400 border border-cyan-500/50 rounded-md px-4 py-2 hover:bg-cyan-500/10 transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <SreSandbox />
      <Certifications />
      <Contact />
    </main>
  );
}
