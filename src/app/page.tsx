"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterMatrix from "@/components/RecruiterMatrix";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsAndAchievements from "@/components/CertificationsAndAchievements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';

const ArchitectureExplorer = dynamic(() => import('@/components/ArchitectureExplorer'), { ssr: false });
const SreSandbox = dynamic(() => import('@/components/SreSandbox'), { ssr: false });
const ResumeModal = dynamic(() => import('@/components/ResumeModal'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/FAQSection'));

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Navbar */}
      <div className="print:hidden">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Main Content Sections */}
      <main className="relative print:hidden">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <RecruiterMatrix onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <ArchitectureExplorer />
        <SkillsSection />
        <ExperienceSection />
        <SreSandbox />
        <CertificationsAndAchievements />
        <FAQSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <div className="print:hidden">
        <Footer />
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
