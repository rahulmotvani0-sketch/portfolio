import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Cloud, Server, Shield, Activity, GitBranch, Database, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"],
  },
  {
    title: "Infrastructure as Code & Containers",
    icon: Server,
    skills: ["Terraform", "Docker", "Kubernetes", "Helm", "CloudFormation"],
  },
  {
    title: "DevSecOps & Security",
    icon: Shield,
    skills: ["SonarQube", "Snyk", "Nessus", "Burp Suite", "Wazuh", "IAM", "Secrets Management"],
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["Git", "Bitbucket", "GitHub Actions", "GitLab CI", "Jenkins", "Bash", "Python"],
  },
  {
    title: "Observability & SRE",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Incident Response", "RCA", "Reliability Engineering"],
  },
  {
    title: "Databases & Networking",
    icon: Network,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TCP/IP", "DNS", "Load Balancing", "Firewalls"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Core Technical Identity" 
          subtitle="A comprehensive toolkit for designing, securing, and operating production infrastructure."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="bg-slate-900/80 border-slate-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="font-mono font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
