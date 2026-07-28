import {
  ArrowRight,
  Search,
  Globe,
} from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { itMetadata as metadata } from "../../../../lib/pageMetadata";

const intro = [
  {
    title: "Technical SEO",
    detail: "We optimise your website's structure, speed, indexing, crawlability, and Core Web Vitals to ensure search engines can efficiently understand and rank your content.",
  },
  {
    title: "On-Page SEO",
    detail: "Improve titles, meta descriptions, headings, internal linking, keyword targeting, and content structure to maximise search visibility and user engagement.",
  },
  {
    title: "Local SEO",
    detail: "Increase your visibility in local search results with Google Business Profile optimisation, local citations, and location-focused SEO strategies.",
  },
  {
    title: "SEO Audits & Monitoring",
    detail: "Identify technical issues, monitor keyword performance, and continuously improve your website through detailed SEO audits and ongoing optimisation.",
  },
];
const industries = [
  {
    title: "Corporate Websites",
    detail:
      "Improve search visibility, generate business enquiries, and strengthen your online authority with technical and content-focused SEO.",
  },
  {
    title: "E-Commerce Stores",
    detail:
      "Increase product visibility, optimise category pages, and drive more organic sales through search engine optimisation.",
  },
  {
    title: "Healthcare & Medical",
    detail:
      "Help patients discover healthcare providers by improving local search rankings and website performance.",
  },
  {
    title: "Education & Training",
    detail:
      "Reach students and learners through optimised educational content and structured website architecture.",
  },
];
const process = [
  {
    step: "01",
    title: "Website Audit",
    detail: "Identify technical issues and opportunities for improvement.",
  },
  {
    step: "02",
    title: "Keyword Research",
    detail: "Find valuable search terms based on your audience and goals.",
  },
  {
    step: "03",
    title: "Optimisation",
    detail: "Improve content, metadata, structure, and website performance.",
  },
  {
    step: "04",
    title: "Monitoring",
    detail: "Track rankings, traffic, and continuously refine the strategy.",
  },
];
const optimizations = [
  "Website Speed",
  "Core Web Vitals",
  "Mobile Responsiveness",
  "Meta Titles",
  "Meta Descriptions",
  "Schema Markup",
  "Image Optimisation",
  "Internal Linking",
  "XML Sitemap",
  "Robots.txt",
  "Structured Content",
  "Keyword Research",
];
const faq = [
  {
    question: "How long does SEO take?",
    answer:
      "Most websites begin to see measurable improvements within a few months, depending on competition and the current state of the website.",
  },
  {
    question: "Is SEO better than paid advertising?",
    answer:
      "SEO provides long-term organic visibility, while paid advertising offers immediate traffic. Many businesses benefit from using both together.",
  },
  {
    question: "Can SEO improve an existing website?",
    answer:
      "Yes. Technical improvements, better content, and strategic optimisation can significantly improve the performance of an existing website.",
  },
];

export default function ITPage() {
  return (
    <PageShell>

      {/* HERO */}
      <PageHero eyebrow="Search Engine Optimization" title="Improve your visibility and grow with professional SEO services." icon={Search}>
        Technology Craft helps businesses increase their online visibility through strategic search engine optimization, technical improvements, and content optimisation that attract more qualified visitors and drive long-term organic growth.
      </PageHero>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="SEO Services" title="Build a stronger online presence with data-driven SEO.">
            Our SEO specialists analyse your website, optimise its technical foundation, improve content quality, and implement proven strategies that help your business rank higher in search engine results.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {intro.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.detail}</p>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Our Process"
            title="A proven SEO workflow built around measurable results."
          >
            Search engine optimisation is an ongoing process. We follow a structured
            approach that combines research, technical improvements, and continuous
            optimisation.
          </SectionIntro>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <ClientMotionDiv
                key={item.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <span className="text-blue-400 text-4xl font-extrabold">
                  {item.step}
                </span>

                <h3 className="text-xl font-bold text-white mt-5 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Card */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">SEO strategies focused on sustainable business growth.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Search engine optimisation is more than rankings. We help businesses attract qualified traffic, improve user experience, and build long-term authority through ethical, data-driven SEO practices.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Technical website optimisation for better indexing and performance.</li>
                <li>Content strategies that target valuable keywords and user intent.</li>
                <li>Continuous monitoring, reporting, and optimisation based on real search data.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Optimised for search engines and users.</h3>
                  <p className="text-slate-400 mt-2">Our SEO process balances technical excellence with valuable content, ensuring your website performs well in search results while delivering an outstanding user experience.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">From technical audits to keyword strategy and performance monitoring, we provide comprehensive SEO services that support measurable business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Industries"
            title="SEO solutions for businesses across multiple industries."
          >
            Every industry has unique search behaviour and customer intent. We develop
            tailored SEO strategies that help businesses increase visibility, attract
            qualified traffic, and compete effectively in their market.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.detail}</p>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIMIZES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Optimisation Areas"
            title="Every part of your website contributes to SEO."
          >
            Our optimisation process covers both technical and content-related
            improvements to ensure your website performs well for users and search
            engines.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {optimizations.map((item) => (
              <ClientMotionDiv
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item}
                </h3>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Frequently Asked Questions"
            title="Common questions about SEO."
          >
            Search engine optimisation is a long-term investment. Here are answers to
            some of the questions businesses ask most often.
          </SectionIntro>

          <div className="space-y-6">
            {faq.map((item) => (
              <ClientMotionDiv
                key={item.question}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.question}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.answer}
                </p>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Ready to improve your search rankings?</h2>
            <p className="text-xl text-slate-400 mb-10">Partner with Technology Craft to build a stronger online presence, attract more qualified visitors, and grow your business through professional search engine optimisation.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Start Your SEO Project</PrimaryLink>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
