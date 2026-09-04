import { CANDIDATE_INFO, CERTIFICATIONS } from '../data/portfolioData';

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntity": {
      "@type": "Person",
      "name": CANDIDATE_INFO.name,
      "url": "https://rahul.techiking.com",
      "image": "https://rahul.techiking.com/profile.jpg",
      "jobTitle": "DevOps / DevSecOps Engineer",
      "email": `mailto:${CANDIDATE_INFO.contact.email}`,
      "worksFor": {
        "@type": "Organization",
        "name": "Azilen Technologies Pvt Ltd"
      },
      "knowsAbout": CANDIDATE_INFO.atsKeywords,
      "hasCredential": CERTIFICATIONS.map(cert => ({
        "@type": "EducationalOccupationalCredential",
        "name": cert.title,
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": cert.issuer
        },
        ...(cert.credentialUrl ? { "url": cert.credentialUrl } : {})
      })),
      "sameAs": [
        CANDIDATE_INFO.contact.linkedin,
        CANDIDATE_INFO.contact.github,
        CANDIDATE_INFO.contact.tryhackme
      ]
    }
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://rahul.techiking.com",
    "name": "Rahul Motvani Portfolio",
    "description": CANDIDATE_INFO.heroDescription,
    "inLanguage": "en-US"
  };
}

export function getFAQPageSchema() {
  const { FAQS } = require('../data/portfolioData');
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq: { question: string, answer: string }) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
