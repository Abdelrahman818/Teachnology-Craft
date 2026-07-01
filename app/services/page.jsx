import Link from "next/link";
import { ClientMotionDiv } from "../../components/ClientMotion";
import {
  ArrowRight,
  BarChart3,
  Code,
  Globe,
  Layers,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Search,
  Server,
} from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../components/InnerPage";
export { servicesMetadata as metadata } from "../../lib/pageMetadata";

const services = [
  {
    icon: Code,
    title: "Web Development",
    href: "/services/service-info/web-dev",
    tagline: "Software that works as hard as you do.",
    description:
      "From content sites to complex web applications, we engineer systems that are fast, maintainable, and built to scale.",
    features: ["Next.js and React applications", "APIs and dashboards", "E-commerce and payment flows", "Performance optimization"],
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Applications",
    href: "/services/service-info/mobile-dev",
    tagline: "Native-feeling products for iOS and Android.",
    description:
      "We build React Native applications with clean user flows, reliable data handling, and room to grow after launch.",
    features: ["React Native development", "Push notifications", "App store release support", "Cross-platform UI systems"],
  },
  {
    icon: Layers,
    title: "Web Design / UI-UX",
    href: "/services/service-info/web-designs",
    tagline: "Interfaces people understand quickly.",
    description:
      "We design responsive experiences, product flows, and design systems that help users act with confidence.",
    features: ["UX research and wireframes", "High-fidelity UI", "Landing page design", "Design systems"],
  },
  {
    icon: Server,
    title: "IT Solutions",
    href: "/services/service-info/it",
    tagline: "Infrastructure without the drama.",
    description:
      "We plan, deploy, and support the technical foundation your business relies on day to day.",
    features: ["Networking and devices", "Cloud and hosting", "Help desk support", "Windows and Linux administration"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    href: "/services/service-info/marketing",
    tagline: "Growth programs with measurable signal.",
    description:
      "We connect strategy, campaigns, content, analytics, and conversion work into one practical growth engine.",
    features: ["SEO and content", "Paid campaigns", "Analytics setup", "Conversion optimization"],
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    href: "/services/service-info/designs",
    tagline: "Visual systems that make the brand easier to remember.",
    description:
      "From identity to social assets, we create visuals that keep your brand consistent across every touchpoint.",
    features: ["Brand identity", "Social media graphics", "Motion graphics", "AI video support"],
  },
];

const steps = [
  { icon: Search, title: "Discovery", desc: "We map your business, audience, constraints, and goals before work begins." },
  { icon: Layers, title: "Strategy", desc: "We define the technical approach, user experience, and success metrics." },
  { icon: Globe, title: "Execution", desc: "Design, build, test, and review in focused delivery cycles." },
  { icon: BarChart3, title: "Launch & Grow", desc: "We ship, monitor, and keep improving the product after release." },
];

export default function Services() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="Everything your digital presence needs." icon={Server}>
        Five disciplines, one integrated team. Choose one service or bring us in as a full digital partner.
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Capabilities" title="Specialists for every layer of the system.">
            Strategy, design, engineering, infrastructure, and growth work better when they move together.
          </SectionIntro>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ClientMotionDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                  className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:to-cyan-500/5 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-blue-300 text-sm font-medium mb-4">{service.tagline}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                          <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </ClientMotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="How We Work" title="Predictable delivery. Transparent communication." centered>
            Every engagement follows a four-phase process designed to reduce surprises and protect quality.
          </SectionIntro>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -translate-y-1/2 z-0" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ClientMotionDiv
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 mx-auto flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_15px_rgba(15,23,42,1)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-slate-500 font-semibold mb-1">Step {index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </ClientMotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-blue-600/20 rounded-full pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Not sure where to start?</h2>
            <p className="text-xl text-slate-400 mb-10">That is exactly what a discovery call is for.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Book a Free Consultation</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
