import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { ArchitectureFlow } from "@/components/ui/ArchitectureDiagram";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "SARA-II — AI Assistant Infrastructure & Engineering Platform",
    role: "Lead DevOps & Platform Engineer",
    challenge: "Scaling an AI-driven multi-agent platform required robust, event-driven infrastructure capable of handling intensive local LLM inference, TTS generation, and task orchestration without latency bottlenecks or resource exhaustion.",
    architecture: [
      { id: "user", label: "Client Apps", icon: "user" as const },
      { id: "api", label: "FastAPI Gateway", icon: "app" as const, sublabel: "Rate Limiting & Auth" },
      { id: "queue", label: "Redis Pub/Sub", icon: "database" as const, sublabel: "Task Orchestration" },
      { id: "workers", label: "AI Worker Nodes", icon: "container" as const, sublabel: "Local LLM / TTS" },
      { id: "db", label: "PostgreSQL & Qdrant", icon: "database" as const, sublabel: "State & Vectors" },
    ],
    implementation: "Engineered a containerized microservices architecture using Docker. Implemented an event-driven task orchestration layer using Redis to decouple API requests from heavy LLM inferences. Standardized the deployment pipeline for both frontend and backend services.",
    security: "Enforced strict network policies isolating the AI worker nodes from public access. Implemented robust API authentication and secured the provider registry.",
    reliability: "Integrated comprehensive logging and observability to monitor worker node health and queue latency, ensuring high availability during traffic spikes.",
    tech: ["Docker", "FastAPI", "Redis", "PostgreSQL", "Qdrant", "Python", "LLM Infrastructure"],
  },
  {
    title: "Bitbucket Migration & Platform Modernization",
    role: "DevOps Engineer",
    challenge: "Migrating an enterprise Bitbucket instance with zero data loss while upgrading legacy infrastructure to a modern containerized stack, ensuring Java compatibility and addressing database constraints.",
    architecture: [
      { id: "legacy", label: "Legacy Bitbucket", icon: "server" as const, sublabel: "Bare Metal" },
      { id: "export", label: "Data Backup", icon: "database" as const, sublabel: "pg_dump & rsync" },
      { id: "compose", label: "Docker Compose", icon: "container" as const, sublabel: "New Infrastructure" },
      { id: "restore", label: "Data Restoration", icon: "database" as const, sublabel: "Validation" },
      { id: "prod", label: "Modernized Platform", icon: "app" as const, sublabel: "High Availability" },
    ],
    implementation: "Designed a comprehensive migration strategy. Containerized the Bitbucket application and PostgreSQL database using Docker Compose. Executed dry-run migrations to validate data integrity and rollback procedures.",
    troubleshooting: "Resolved complex Java versioning conflicts and database schema upgrade errors during the migration process.",
    result: "Achieved a 100% successful migration with near-zero downtime, improving platform stability and simplifying future upgrades through Infrastructure as Code principles.",
    tech: ["Bitbucket", "Docker", "Docker Compose", "PostgreSQL", "Linux Admin", "Migration Strategy"],
  },
  {
    title: "LeadPulse AI — Autonomous B2B Revenue Intelligence",
    role: "Platform Engineer",
    challenge: "Building secure and scalable infrastructure for a multi-agent AI platform ingesting massive amounts of B2B data while maintaining strict data isolation and rapid query performance.",
    implementation: "Architected the underlying infrastructure using FastAPI and React. Deployed Qdrant for vector search capabilities alongside PostgreSQL for relational data. Established automated data ingestion pipelines and robust API endpoints.",
    security: "Implemented secure data handling practices for sensitive B2B revenue data, integrating vulnerability scanning into the CI pipeline.",
    tech: ["React", "FastAPI", "Qdrant", "PostgreSQL", "Docker", "Data Ingestion", "AI Integration"],
  },
  {
    title: "Terraform-based Cloud Infrastructure Automation",
    role: "Cloud Infrastructure Engineer",
    challenge: "Eliminating manual infrastructure provisioning that led to configuration drift and security vulnerabilities across multi-cloud environments.",
    implementation: "Developed modular, reusable Terraform code to provision infrastructure across AWS, Azure, and GCP. Implemented strict state management using remote backends with state locking.",
    automation: "Integrated Terraform with CI/CD pipelines to automate infrastructure deployment, validation, and security scanning (tfsec).",
    result: "Reduced infrastructure provisioning time by 80% and eliminated configuration drift, ensuring all environments were identical and secure by default.",
    tech: ["Terraform", "AWS", "Azure", "GCP", "CI/CD", "Infrastructure as Code"],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Engineering Case Studies" 
          subtitle="Deep dives into complex infrastructure challenges, architectural decisions, and production outcomes."
        />
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/80 border-slate-800 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0">
                
                <div className="lg:col-span-7 p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                    <div className="text-cyan-400 font-medium mb-4">{project.role}</div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="font-mono text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-slate-300">
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-2 flex items-center">
                        <span className="text-cyan-500 mr-2">/</span> Challenge
                      </h4>
                      <p>{project.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-2 flex items-center">
                        <span className="text-green-500 mr-2">/</span> Implementation
                      </h4>
                      <p>{project.implementation}</p>
                    </div>
                    
                    {project.security && (
                      <div>
                        <h4 className="text-slate-100 font-semibold mb-2 flex items-center">
                          <span className="text-purple-500 mr-2">/</span> Security & Reliability
                        </h4>
                        <p>{project.security} {project.reliability}</p>
                      </div>
                    )}
                    
                    {project.troubleshooting && (
                      <div>
                        <h4 className="text-slate-100 font-semibold mb-2 flex items-center">
                          <span className="text-orange-500 mr-2">/</span> Troubleshooting & Result
                        </h4>
                        <p>{project.troubleshooting} {project.result}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View Repository
                    </Button>
                  </div>
                </div>
                
                <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-center">
                  <h4 className="text-slate-400 text-sm font-mono mb-6 text-center">System Architecture</h4>
                  {project.architecture ? (
                    <ArchitectureFlow 
                      nodes={project.architecture as any} 
                      direction="vertical" 
                      className="mx-auto"
                    />
                  ) : (
                    <div className="h-full min-h-[300px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl">
                      <p className="text-slate-500 font-mono text-sm">Architecture Diagram Restricted</p>
                    </div>
                  )}
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
