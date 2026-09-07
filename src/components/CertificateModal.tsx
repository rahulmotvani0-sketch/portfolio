"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Award, 
  Layers 
} from "lucide-react";

export interface CertificateModalData {
  id: string;
  title: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
  credentialId?: string;
  subCertificates?: {
    title: string;
    credentialUrl: string;
  }[];
}

interface CertificateModalProps {
  cert: CertificateModalData | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(0);

  // Reset selected sub-cert index when modal opens for a new cert
  useEffect(() => {
    setSelectedSubIndex(0);
  }, [cert]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (cert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cert, onClose]);

  if (!cert) return null;

  const hasSubCerts = cert.subCertificates && cert.subCertificates.length > 0;
  
  const currentTitle = hasSubCerts 
    ? cert.subCertificates![selectedSubIndex].title 
    : cert.title;

  const currentUrl = hasSubCerts 
    ? cert.subCertificates![selectedSubIndex].credentialUrl 
    : cert.credentialUrl;

  const isImage = currentUrl?.toLowerCase().endsWith(".png") || currentUrl?.toLowerCase().endsWith(".jpg");

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30 uppercase">
                {cert.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                • {cert.issuer}
              </span>
              {cert.credentialId && (
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
              {currentTitle}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentUrl && (
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-md"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Full ↗</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Certificates Tab Bar (e.g. Google Cloud 5 Courses or TryHackMe) */}
        {hasSubCerts && (
          <div className="px-6 py-2.5 bg-slate-950/70 border-b border-slate-800 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-thin">
            <div className="flex items-center gap-1 text-xs font-mono text-slate-400 pr-2 shrink-0">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Specialization Courses ({cert.subCertificates!.length}):</span>
            </div>
            {cert.subCertificates!.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubIndex(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  selectedSubIndex === idx
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md"
                    : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                }`}
              >
                Course {idx + 1}
              </button>
            ))}
          </div>
        )}

        {/* Certificate Display Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-950/60 flex flex-col items-center justify-center min-h-[55vh]">
          {currentUrl ? (
            isImage ? (
              <div className="flex flex-col items-center justify-center w-full">
                <img
                  src={currentUrl}
                  alt={currentTitle}
                  className="max-h-[65vh] w-auto max-w-full rounded-xl border border-slate-800 shadow-2xl object-contain bg-slate-900"
                />
              </div>
            ) : (
              <div className="w-full h-[62vh] rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative">
                <iframe
                  src={`${currentUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full rounded-xl bg-white"
                  title={currentTitle}
                />
              </div>
            )
          ) : (
            <div className="p-10 text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto opacity-70" />
              <p className="text-sm font-mono text-slate-300">
                Verified Credential from {cert.issuer}
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                This certification is verified on record with {cert.issuer}.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs">
              Verified Credential • {cert.issuer}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {currentUrl && (
              <a
                href={currentUrl}
                download
                className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors font-mono text-[11px] sm:text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
