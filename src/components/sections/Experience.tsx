import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Azilen Technologies Pvt Ltd",
    period: "Dec 2025 – Present",
    highlights: [
      "Designed and deployed multi-cloud infrastructure across AWS, Azure, and Google Cloud Platform using Terraform, enabling reproducible, version-controlled environments.",
      "Built and maintained CI/CD pipelines integrating automated SAST, DAST, and dependency scanning, shifting security left and reducing post-release vulnerabilities.",
      "Containerized applications with Docker and orchestrated production workloads on Kubernetes, improving deployment speed and resource utilization.",
      "Hardened cloud environments with IAM policies, network segmentation, secrets management, and vulnerability assessments.",
      "Supported MLOps workflows — containerizing ML models, deploying them on Kubernetes, and integrating model training and serving into CI/CD pipelines on AWS SageMaker and Azure ML."
    ],
    tech: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "DevSecOps", "MLOps"]
  },
  {
    role: "IT Technician",
    company: "Azilen Technologies Pvt Ltd",
    period: "Aug 2024 – Nov 2025",
    highlights: [
      "Supported hybrid cloud and on-prem infrastructure, administering Windows and Linux servers and managing virtualization platforms for development teams.",
      "Automated repetitive system tasks using shell scripting, reducing manual effort and improving provisioning consistency.",
      "Collaborated with engineering teams to troubleshoot networking, access, and deployment issues, ensuring minimal downtime."
    ],
    tech: ["Linux", "Windows Server", "Shell Scripting", "Networking", "Virtualization"]
  },
  {
    role: "Jr. Network Engineer",
    company: "Aruhat Technologies Pvt Ltd",
    period: "Jun 2023 – Jul 2024",
    highlights: [
      "Implemented network segmentation and access controls, reducing data breach risks by 30% across client infrastructure.",
      "Led a successful migration to a new network architecture, boosting scalability and reliability for business-critical workloads.",
      "Performed vulnerability assessments and remediation, strengthening the overall security posture."
    ],
    tech: ["Network Segmentation", "Firewalls", "Vulnerability Assessment", "Migration"]
  },
  {
    role: "Junior IT Engineer",
    company: "ABP News (ABP Network)",
    period: "Jul 2022 – May 2023",
    highlights: [
      "Monitored, maintained, and supported production broadcast and office IT infrastructure, ensuring 24x7 availability.",
      "Resolved network, server, and endpoint issues and assisted with routine system upgrades and patching."
    ],
    tech: ["IT Infrastructure", "Monitoring", "System Administration", "24x7 Support"]
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
