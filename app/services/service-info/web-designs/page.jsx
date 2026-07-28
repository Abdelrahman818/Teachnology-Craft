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
const services = [
  {
    title: "User Experience Research",
    detail:
      "Understand user behaviour, business goals, and customer needs to create digital experiences that solve real problems.",
  },
  {
    title: "Wireframing & Prototyping",
    detail:
      "Visualise ideas with interactive wireframes and prototypes before development begins, reducing risk and improving project outcomes.",
  },
  {
    title: "User Interface Design",
    detail:
      "Design modern, responsive, and visually consistent interfaces that are easy to navigate across desktop, tablet, and mobile devices.",
  },
  {
    title: "Design Systems",
    detail:
      "Build scalable design systems with reusable components, typography, colours, and UI patterns that ensure consistency across every product.",
  },
];
const designs = [
  "Website UI Design",
  "Mobile App UI",
  "Dashboard Design",
  "SaaS Platforms",
  "Landing Pages",
  "Wireframes",
  "Interactive Prototypes",
  "User Flows",
  "Design Systems",
  "Responsive Design",
  "Accessibility Design",
  "UX Research",
];
const whyDesigns = [
  {
    title: "Improve User Satisfaction",
    detail:
      "Simple navigation and intuitive interfaces make it easier for users to achieve their goals quickly and confidently.",
  },
  {
    title: "Increase Conversion Rates",
    detail:
      "Well-designed user journeys encourage visitors to take action, whether it's making a purchase, requesting a quote, or contacting your business.",
  },
  {
    title: "Build Brand Trust",
    detail:
      "Professional, consistent design strengthens your brand image and creates positive first impressions with potential customers.",
  },
  {
    title: "Reduce Development Costs",
    detail:
      "Early research, wireframing, and prototyping help identify usability issues before development, saving time and resources.",
  },
];

export default function WebDesigns() {
  return (
    <PageShell>
      
      {/* HERO */}
      <PageHero eyebrow="UI / UX Design" title="Design systems that feel unforced." icon={LayoutGrid}>
        We shape products with clear information architecture, consistent visuals, and interactions that feel fast.
      </PageHero>

      {/* INTRO */}
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

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Design Services"
            title="User experiences designed to engage and convert."
          >
            Technology Craft creates intuitive user interfaces and seamless user
            experiences that improve usability, increase customer satisfaction, and
            help businesses achieve their digital goals through thoughtful,
            user-centred design.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((item) => (
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

      {/* DESIGNS */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Design Expertise"
            title="Creating interfaces for every digital platform."
          >
            Our UI/UX designers build engaging digital experiences for websites,
            mobile applications, desktop software, SaaS platforms, and enterprise
            systems with a focus on usability and accessibility.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designs.map((item) => (
              <ClientMotionDiv
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-white text-center">
                  {item}
                </span>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DESIGNS */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Why UI/UX"
            title="Better user experiences create better business results."
          >
            Great design goes beyond aesthetics. A well-designed interface improves
            usability, reduces friction, increases customer satisfaction, and helps
            businesses convert more visitors into loyal customers.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {whyDesigns.map((item) => (
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

      {/* FEATURED CARD */}
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

      {/* CTA */}
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
