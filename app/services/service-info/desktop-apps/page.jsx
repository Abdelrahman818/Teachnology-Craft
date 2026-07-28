import {
  ArrowRight,
  Monitor,
  Code2,
} from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { itMetadata as metadata } from "../../../../lib/pageMetadata";

const desktopInfos = [
  {
    title: "Custom Desktop Software",
    detail: "We develop tailor-made desktop applications that match your business processes, providing reliable tools for daily operations without unnecessary complexity.",
  },
  {
    title: "Business Management Systems",
    detail: "From inventory and accounting to customer management and reporting, we build desktop solutions that simplify business management and improve productivity.",
  },
  {
    title: "Cross-Platform Development",
    detail: "Using modern technologies such as Electron and .NET, we create applications that deliver consistent performance across multiple operating systems.",
  },
  {
    title: "Maintenance & Upgrades",
    detail: "We provide continuous software maintenance, feature enhancements, performance optimisation, and technical support to keep your applications running smoothly.",
  },
];

const desktopDet = [
  {
    title: "Offline Productivity",
    detail:
      "Desktop applications continue working even without an internet connection, ensuring uninterrupted business operations.",
  },
  {
    title: "High Performance",
    detail:
      "Native desktop software delivers faster execution and better resource utilisation for demanding business tasks.",
  },
  {
    title: "Enhanced Security",
    detail:
      "Sensitive business data can remain within your organisation while integrating with enterprise security policies.",
  },
  {
    title: "Hardware Integration",
    detail:
      "Desktop applications communicate directly with printers, barcode scanners, biometric devices, POS systems, and industrial hardware.",
  },
]

export default function ITPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Desktop Applications" title="Custom desktop applications built for speed, reliability, and productivity." icon={Monitor}>
        Technology Craft develops secure, scalable desktop applications that streamline business operations, automate workflows, and deliver high performance for Windows and cross-platform environments.
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Desktop Software Development" title="Powerful applications designed around your business.">
            Our desktop application development services help businesses replace manual processes with intelligent software that improves efficiency, reduces errors, and supports long-term growth.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {desktopInfos.map((item) => (
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

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Why Desktop Software"
            title="Why businesses still rely on desktop applications."
          >
            Desktop software continues to play a critical role for organisations that
            require high performance, offline capabilities, advanced hardware
            integration, and secure local data processing.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {desktopDet.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">
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

      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Desktop software that grows with your business.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Whether you need an internal management system, automation software, or a complex enterprise application, our development process focuses on performance, security, and long-term scalability.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Secure desktop software with modern authentication and data protection.</li>
                <li>Fast and responsive applications designed for everyday business use.</li>
                <li>Integration with databases, APIs, printers, scanners, and business hardware.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Reliable software for everyday operations.</h3>
                  <p className="text-slate-400 mt-2">Our desktop applications are built to handle demanding workloads while maintaining excellent performance, stability, and ease of use.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">By combining clean architecture with intuitive user interfaces, we deliver desktop software that helps teams work more efficiently and businesses operate more effectively.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Need a custom desktop application?</h2>
            <p className="text-xl text-slate-400 mb-10">Partner with Technology Craft to build secure, high-performance desktop software tailored to your business requirements and future growth.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Start Your Project</PrimaryLink>
          </div>
        </div>
      </section>
      
    </PageShell>
  );
}
