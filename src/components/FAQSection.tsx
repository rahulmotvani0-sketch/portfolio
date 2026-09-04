import { FAQS } from "@/data/portfolioData";

export default function FAQSection() {
  return (
    <section id="faqs" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Answers to common questions about my skills, experience, and availability.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                {faq.question}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
