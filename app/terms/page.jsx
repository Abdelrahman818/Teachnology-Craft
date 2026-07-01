import { ClientMotionDiv } from "../../components/ClientMotion";
import { FileText } from "lucide-react";
import { PageHero, PageShell } from "../../components/InnerPage";
export { termsMetadata as metadata } from "../../lib/pageMetadata";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "These Terms and Conditions govern your use of the services provided by Technology Craft. By engaging us or accessing any of our services, you agree to be bound by these terms.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "Technology Craft provides digital services including web design, web development, digital marketing, graphic design, and IT solutions.",
      "The exact scope, deliverables, and timelines for each engagement are defined in a separate statement of work or proposal agreed upon by both parties.",
    ],
  },
  {
    title: "3. Payment Terms",
    body: [
      "Unless otherwise stated in the project proposal, 50% of the total project fee is due upon kickoff and the remaining 50% is due upon completion before final delivery.",
      "Ongoing retainer engagements are invoiced monthly in advance. Invoices are payable within 14 days of issue.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: [
      "Upon receipt of full payment, intellectual property rights in the final deliverables transfer to the client, excluding third-party materials and pre-existing Technology Craft assets.",
      "Technology Craft retains the right to use completed work as portfolio examples unless confidentiality is requested in writing.",
    ],
  },
  {
    title: "5. Confidentiality",
    body: [
      "Both parties agree to treat non-public information shared during the engagement as confidential. This obligation survives termination of the engagement.",
    ],
  },
  {
    title: "6. Revisions and Change Requests",
    body: [
      "Each project proposal includes a defined number of revision rounds. Requests that materially alter scope, timeline, or complexity may be invoiced as additional work.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Technology Craft's total liability for any claim related to the services shall not exceed the fees paid for the specific project giving rise to the claim.",
    ],
  },
  {
    title: "8. Termination",
    body: [
      "Either party may terminate an engagement by providing 14 days written notice. The client remains liable for all work completed up to the termination date.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms shall be governed by applicable law. Any disputes shall first be addressed through good-faith negotiation between both parties.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "If you have questions about these terms, contact us through the contact page before engaging our services.",
    ],
  },
];

export default function Terms() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms & Conditions" icon={FileText} meta="Last updated: June 2025">
        Clear expectations help projects move cleanly. These terms define the operating basics for our services.
      </PageHero>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <ClientMotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-4xl mx-auto rounded-2xl glass-panel p-6 md:p-10"
          >
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.title} className="border-b border-slate-800 last:border-b-0 pb-8 last:pb-0">
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-slate-400 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.title === "10. Contact" && (
                    <a href="/contact" className="inline-flex mt-4 text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4">
                      Open the contact page
                    </a>
                  )}
                </section>
              ))}
            </div>
          </ClientMotionDiv>
        </div>
      </section>
    </PageShell>
  );
}
