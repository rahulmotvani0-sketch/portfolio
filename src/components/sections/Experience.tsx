import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Agile logic Technovations",
    period: "Dec 2025 – Present (10 months)",
    highlights: [
      "Designed and deployed multi-cloud infrastructure across AWS, Azure, and GCP with Terraform, enabling reproducible, version-controlled environments.",
      "Built and maintained CI/CD pipelines (Jenkins / GitHub Actions / GitLab CI with Git & Bitbucket) integrating automated SAST, SCA, and dependency scanning.",
      "Containerized applications with Docker and orchestrated workloads on Kubernetes (with Helm), improving deployment consistency and resource utilization.",
      "Hardened cloud environments with IAM policies, network segmentation, secrets management, and vulnerability assessments (DevSecOps).",
      "Implemented monitoring, logging, and alerting with Prometheus, Grafana, and ELK to improve service visibility and shorten incident response.",
      "Supported MLOps workflows — containerizing and deploying ML models to Kubernetes and integrating model serving into CI/CD."
    ],
    tech: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Helm", "CI/CD", "DevSecOps", "MLOps"]
  },
  {
    role: "Information Technology Engineer",
    company: "Azilen Technologies",
    period: "Aug 2024 – Nov 2025 (1 year 4 months)",
    highlights: [
      "Administered hybrid cloud and on-prem infrastructure (Windows/Linux servers, virtualization) for development teams — establishing the operational foundation for later DevOps automation.",
      "Automated repetitive system tasks with shell scripting, improving provisioning consistency and cutting manual effort.",
      "Partnered with engineering teams to troubleshoot networking, access, and deployment issues, minimizing downtime."
    ],
    tech: ["Hybrid Cloud", "Linux", "Windows Server", "Virtualization", "Shell Scripting", "Networking"]
  },
  {
    role: "IT / Network & Systems Specialist",
    company: "Aruhat Technologies Pvt. Ltd.",
    period: "Jun 2023 – Jul 2024 (1 year 2 months)",
    highlights: [
      "Implemented network segmentation and access controls across client infrastructure, strengthening enterprise security posture.",
      "Led migration to a new network architecture, improving scalability and reliability for business-critical workloads.",
      "Administered virtualization environments and Windows/Linux servers; performed vulnerability assessments and remediation."
    ],
    tech: ["Network Architecture", "Network Segmentation", "Access Control", "Virtualization", "Linux", "Vulnerability Assessment"]
  },
  {
    role: "IT Support Specialist",
    company: "ABP Network",
    period: "Jul 2022 – May 2023 (11 months)",
    highlights: [
      "Delivered comprehensive technical assistance to ensure seamless operation of computer systems, networks, and software within broadcast media.",
      "Maintained hardware and software systems, supporting end-users with technical needs under tight operational SLAs.",
      "Prioritized timely problem resolution, system reliability, and user satisfaction to enhance overall productivity and business continuity."
    ],
    tech: ["IT Support", "Network Troubleshooting", "System Maintenance", "SLA Management", "High Availability"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Engineering Experience" 
          subtitle="A track record of building reliable systems and improving operational excellence."
        />
        
        <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-900" />
              
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <div className="text-lg text-cyan-400 font-medium">{exp.company}</div>
                    </div>
                    <Badge variant="outline" className="w-fit text-slate-300 border-slate-700 bg-slate-800/50">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-slate-300">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-500 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
