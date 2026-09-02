import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, Terminal } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800 bg-[#0B0F19]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-500/10 mb-6">
          <Terminal className="h-8 w-8 text-cyan-400" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Let&apos;s Build Reliable Infrastructure
        </h2>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          I&apos;m currently open to remote opportunities in DevOps, DevSecOps, SRE, Platform Engineering, and Cloud Infrastructure roles.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="cyan" size="lg" asChild>
            <a href="mailto:rahulmotvani8@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/rahulmotvani" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-5 w-5 text-blue-400" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/rahulmotvani" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rahul Motvani. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            Systems Operational
          </div>
        </div>
      </div>
    </section>
  );
}
