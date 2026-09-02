"use client";

import { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Briefcase, 
  Globe
} from "lucide-react";
import { CANDIDATE_INFO } from "@/data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Navbar";

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "DevOps Engineer",
    remoteLocation: "",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: "",
          email: "",
          company: "",
          roleType: "DevOps Engineer",
          remoteLocation: "",
          message: ""
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage("Network error occurred. Please try reaching out directly on LinkedIn.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4" /> Recruiter & Hiring Manager Outreach
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Reliable Infrastructure
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              I am open to remote opportunities in DevOps, DevSecOps, SRE, Platform Engineering, and Cloud Infrastructure.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-2xl">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">Direct Connect</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send a direct message or schedule a technical interview. All submissions are processed instantly and delivered to my inbox.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono pt-2 border-t border-slate-800">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">DIRECT EMAIL</div>
                  <a href={`mailto:${CANDIDATE_INFO.contact.email}`} className="text-slate-100 font-bold hover:text-emerald-400 transition-colors">
                    {CANDIDATE_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">REMOTE AVAILABILITY</div>
                  <div className="text-emerald-400 font-bold">Immediate / International Remote</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px]">TARGET ROLES</div>
                  <div className="text-slate-200">DevOps • DevSecOps • SRE • Platform</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={CANDIDATE_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={CANDIDATE_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Right Column: PostgreSQL Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-bold border-b border-slate-800 pb-3">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>RECRUITER & TECHNICAL INQUIRY FORM</span>
            </div>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Rahul will review your message and reply via email within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs cursor-pointer mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CloudScale SaaS Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      Target Role Category
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="DevSecOps Engineer">DevSecOps Engineer</option>
                      <option value="Site Reliability Engineer (SRE)">Site Reliability Engineer (SRE)</option>
                      <option value="Platform Engineer">Platform Engineer</option>
                      <option value="Cloud Infrastructure Engineer">Cloud Infrastructure Engineer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-semibold block">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the role, tech stack, timezone, or schedule a technical call..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'loading' ? 'Submitting to DB...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
