"use client";

import { useState } from "react";
import { 
  Cloud, 
  FileCode, 
  Box, 
  GitBranch, 
  ShieldCheck, 
  Activity, 
  Network, 
  Terminal, 
  Database, 
  Search, 
  CheckCircle2,
  Cpu
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory } from "@/data/portfolioData";

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-emerald-400" />;
      case 'Box': return <Box className="w-5 h-5 text-indigo-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Network': return <Network className="w-5 h-5 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.useCase.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => {
    const matchesCategoryFilter = selectedCategory === "All" || cat.categoryName === selectedCategory;
    return matchesCategoryFilter && cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" /> Core Technical Identity
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Competencies & Tooling
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Organized into 9 key engineering domains with real-world production use cases.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-6 md:mt-0 relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill or use case..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-emerald-500 text-slate-950 font-bold"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            All 9 Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryName}
              onClick={() => setSelectedCategory(cat.categoryName)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.categoryName
                  ? "bg-emerald-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.categoryName}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Category Title & Icon */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {category.categoryName}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                          {skill.featured && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === 'Expert' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono pl-2 border-l border-slate-800 leading-normal">
                        {skill.useCase}
                      </p>
                    </div>
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
