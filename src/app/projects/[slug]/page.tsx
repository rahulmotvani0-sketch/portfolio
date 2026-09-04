import { PROJECTS, CANDIDATE_INFO } from '@/data/portfolioData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code, Share2 } from 'lucide-react';
import { LinkedInIcon } from '@/components/Navbar';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return {};

  const url = `https://rahul.techiking.com/projects/${project.id}`;

  return {
    title: `${project.title} | Case Study | ${CANDIDATE_INFO.name}`,
    description: project.subtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.subtitle,
      url,
      type: 'article',
      siteName: 'Rahul Motvani Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Case Study`,
      description: project.subtitle,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.subtitle,
    "image": "https://rahul.techiking.com/opengraph-image",
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": CANDIDATE_INFO.name,
      "url": "https://rahul.techiking.com"
    },
    "publisher": {
      "@type": "Person",
      "name": CANDIDATE_INFO.name
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rahul.techiking.com/projects/${project.id}`
    },
    "keywords": project.technologies.join(", ")
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <header className="space-y-4 mb-12">
          <div className="inline-block px-3 py-1 rounded bg-slate-800 text-emerald-400 text-sm font-semibold mb-2">
            {project.badgeText}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-between items-center">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Code className="w-5 h-5" /> View on GitHub
                </a>
              )}
              {project.liveDemoUrl && (
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              )}
            </div>
            
            <div className="flex gap-3 border-l border-slate-800 pl-4">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rahul.techiking.com/projects/${project.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors" title="Share on LinkedIn">
                <LinkedInIcon className="w-4 h-4 fill-current" />
              </a>
              <a href={`https://twitter.com/intent/tweet?text=Check out this case study: ${project.title}&url=https://rahul.techiking.com/projects/${project.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-colors" title="Share on X (Twitter)">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-slate-300 leading-relaxed mb-6">{project.problem}</p>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Business Context</h3>
            <p className="text-slate-300 leading-relaxed">{project.businessContext}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Architecture & Solution</h2>
            <p className="text-slate-300 leading-relaxed mb-6">{project.architectureDescription}</p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded bg-slate-800 text-emerald-400 text-sm border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Implementation Steps</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-300">
              {project.implementationSteps.map((step, i) => (
                <li key={i} className="leading-relaxed">{step}</li>
              ))}
            </ul>
          </section>
          
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                {project.securityConsiderations.map((sec, i) => <li key={i}>{sec}</li>)}
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Observability</h3>
              <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
                {project.observabilitySetup.map((obs, i) => <li key={i}>{obs}</li>)}
              </ul>
            </div>
          </section>

          <section className="bg-emerald-950/20 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Impact & Results</h2>
            <ul className="space-y-4">
              {project.impactAndResults.map((impact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="leading-relaxed">{impact}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
