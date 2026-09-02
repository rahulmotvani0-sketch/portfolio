import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
  description:
    "Senior DevOps, DevSecOps, and SRE Engineer with 4.5+ years of experience building secure, automated, and reliable cloud infrastructure on AWS, Azure, and GCP.",
  keywords: [
    "DevOps Engineer",
    "DevSecOps",
    "Site Reliability Engineer",
    "SRE",
    "Cloud Engineer",
    "Infrastructure as Code",
    "Terraform",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "CI/CD",
  ],
  authors: [{ name: "Rahul Motvani" }],
  creator: "Rahul Motvani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulmotvani.com", // Adjust as necessary
    title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
    description:
      "Senior DevOps, DevSecOps, and SRE Engineer building secure, automated, and reliable cloud infrastructure.",
    siteName: "Rahul Motvani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Motvani | DevOps & Cloud Infrastructure Engineer",
    description:
      "Senior DevOps, DevSecOps, and SRE Engineer building secure, automated, and reliable cloud infrastructure.",
    creator: "@rahulmotvani",
  },
  alternates: {
    canonical: "https://rahulmotvani.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
