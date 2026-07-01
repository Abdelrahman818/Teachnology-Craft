import { ArrowRight, Brush, LayoutGrid, PenTool, Sparkles } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { webDesignsMetadata as metadata } from "../../../../lib/pageMetadata";

const offerings = [
  {
    title: "Product UI & UX",
    details: "Design interfaces that guide users clearly, reduce friction, and improve conversion across devices.",
  },
  {
    title: "Design Systems",
    details: "Build reusable style systems, component libraries, and visual rules that keep your product consistent.",
  },
  {
    title: "Landing Pages",
    details: "Create high-impact launch pages with strong hierarchy, persuasive messaging, and conversion flows.",
  },
  {
    title: "Prototype & Testing",
    details: "Validate experience assumptions with clickable prototypes and user-focused feedback cycles.",
  },
];

export default function WebDesigns() {
  return (
    <PageShell>
      <PageHero eyebrow="UI / UX Design" title="Design systems that feel unforced." icon={LayoutGrid}>
        We shape products with clear information architecture, consistent visuals, and interactions that feel fast.
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Experience Design" title="Design that supports real user behavior.">
            Every screen, flow, and interaction is created to move users toward your business outcome with fewer questions and more confidence.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {offerings.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.details}</p>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/70 border-t border-b border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Design that connects the brand to the user journey.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our design process surfaces the simplest path through your product, then adds visual clarity so people can act without hesitation.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Research-informed experience design for websites and apps.</li>
                <li>Brand-aware visual systems for consistent digital identity.</li>
                <li>Usability-driven interface patterns for mobile and desktop.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">What we design</h3>
                  <p className="text-slate-400 mt-2">Landing pages, SaaS interfaces, admin tools, mobile screens, and cohesive systems for repeatable design work.</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>We deliver pixel-ready UI layouts, motion guidance, accessibility recommendations, and handoff-ready developer assets.</p>
                <p>When your product needs clarity, we keep every decision rooted to business goals and user behavior.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-blue-600/20 rounded-full pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Make your next product feel polished and intuitive.</h2>
            <p className="text-xl text-slate-400 mb-10">We help teams shape experiences that users understand instantly and want to return to.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Discuss a Design Project</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
