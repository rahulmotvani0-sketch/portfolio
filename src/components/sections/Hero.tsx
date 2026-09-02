import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { Button } from "@/components/ui/Button";
import { Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
              Senior DevOps & Cloud Engineer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">secure</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">automated</span>, and reliable cloud infrastructure.
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              I design and automate cloud infrastructure, CI/CD platforms, and DevSecOps workflows with a focus on reliability, security, and operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cyan" size="lg" asChild>
                <a href="#projects">Explore My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Rahul_Motvani_Resume.pdf" download="Rahul_Motvani_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.linkedin.com/in/rahul-motvani-720b8b18a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/rahulmotvani0-sketch" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:rahulmotvani8@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl blur-3xl -z-10"></div>
            <TerminalBlock 
              command="kubectl get nodes -o wide"
              output={`NAME               STATUS   ROLES    AGE   VERSION   INTERNAL-IP   EXTERNAL-IP
ip-10-0-1-23.aws   Ready    <none>   45d   v1.28.2   10.0.1.23     <none>
ip-10-0-2-45.aws   Ready    <none>   45d   v1.28.2   10.0.2.45     <none>
ip-10-0-3-67.aws   Ready    <none>   45d   v1.28.2   10.0.3.67     <none>`}
            />
            <div className="mt-4">
              <TerminalBlock 
                command="terraform apply -auto-approve"
                output={`Apply complete! Resources: 14 added, 0 changed, 0 destroyed.

Outputs:

cluster_endpoint = "https://E5C6B7...gr7.us-east-1.eks.amazonaws.com"
load_balancer_dns = "internal-prod-api-lb-8123.us-east-1.elb.amazonaws.com"`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
