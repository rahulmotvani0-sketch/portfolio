import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { getProfilePageSchema, getWebSiteSchema, getFAQPageSchema } from "../lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul.techiking.com"),
  title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
  description:
    "DevOps and DevSecOps Engineer with 4+ years building secure, automated cloud infrastructure across Azure, AWS, and GCP — Terraform IaC, Kubernetes orchestration, CI/CD pipelines, shift-left security, and SRE observability.",
  keywords: [
    "DevOps Engineer",
    "Azure DevOps Engineer",
    "DevSecOps Engineer",
    "Site Reliability Engineer",
    "SRE",
    "Platform Engineer",
    "Cloud Infrastructure Engineer",
    "Infrastructure as Code",
    "Terraform",
    "Kubernetes",
    "AKS",
    "Docker",
    "Helm",
    "ArgoCD",
    "AWS",
    "Azure",
    "GCP",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "Cloud Security",
    "Container Security",
    "SonarQube",
    "Snyk",
    "Prometheus",
    "Grafana",
    "ELK",
  ],
  authors: [{ name: "Rahul Motvani" }],
  creator: "Rahul Motvani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahul.techiking.com",
    title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
    description:
      "DevOps and DevSecOps Engineer with 4+ years across Azure, AWS, and GCP — Terraform, Kubernetes, CI/CD, shift-left security, and SRE observability. Open to remote international roles.",
    siteName: "Rahul Motvani Portfolio",
    images: [
      {
        url: "https://rahul.techiking.com/profile.jpg",
        width: 400,
        height: 400,
        alt: "Rahul Motvani — DevOps & Cloud Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
    description:
      "DevOps and DevSecOps Engineer with 4+ years across Azure, AWS, and GCP — Terraform, Kubernetes, CI/CD, shift-left security, and SRE observability.",
    images: ["https://rahul.techiking.com/profile.jpg"],
  },
  alternates: {
    canonical: "https://rahul.techiking.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfilePageSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema()) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined') {
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  window.scrollTo(0, 0);
                  if (window.location.hash) {
                    history.replaceState(null, '', window.location.pathname);
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased text-slate-300 bg-[#0B0F19]`}>
        <div className="min-h-screen flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-100">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/grid.svg')" }}></div>
          {children}
        </div>
      </body>
    </html>
  );
}
