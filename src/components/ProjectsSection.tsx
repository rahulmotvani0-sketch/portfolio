"use client";

import { useState } from "react";
import {
  FolderGit2,
  ArrowUpRight,
  Layers,
  Cpu,
  Terminal,
  FileText
} from "lucide-react";
import Link from "next/link";
import { PROJECTS, ProjectCaseStudy } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectCaseStudy | null>(null);

  const categories = ["All", "AI Infrastructure", "DevSecOps", "Migration", "IaC & SRE"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <FolderGit2 className="w-4 h-4" /> Production Engineering Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Infrastructure & DevSecOps Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Each project represents real-world architectural design, security scanning, container orchestration, IaC automation, or data migration.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl"
            >
              <div className="p-6 space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                    {project.badgeText}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Key Engineering Deliverable:
                  </div>
                  <p className="text-slate-300 text-[11px] line-clamp-2 leading-relaxed font-sans">
                    {project.implementationSteps[0]}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer CTAs */}
              <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Quick View<span className="sr-only"> for {project.title}</span></span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Full Case Study</span>
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.diagramNodes.length} Nodes</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm">Need deep technical architectural details?</div>
              <div className="text-xs text-slate-400">Click any case study to view architecture diagrams, failure scenarios, and code snippets.</div>
            </div>
          </div>
          <a
            href="#architecture"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold border border-slate-700 transition-colors shrink-0"
          >
            Explore Interactive Architecture Flow →
          </a>
        </div>

      </div>

      {/* Project Case Study Drawer Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
