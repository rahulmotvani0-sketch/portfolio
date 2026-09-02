"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterMatrix from "@/components/RecruiterMatrix";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureExplorer from "@/components/ArchitectureExplorer";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SreSandbox from "@/components/SreSandbox";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <RecruiterMatrix onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <ArchitectureExplorer />
        <SkillsSection />
        <ExperienceSection />
        <SreSandbox />
        <CertificationsAndAchievements />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
