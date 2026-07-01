import { ClientMotionDiv } from "../../components/ClientMotion";
import { ArrowRight, CheckCircle2, Heart, Shield, Users, Zap } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../components/InnerPage";
export { aboutMetadata as metadata } from "../../lib/pageMetadata";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    desc: "Every interface, system, and campaign is handled with care, precision, and pride in the details.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We work like an extension of your team, with clear communication and shared ownership of outcomes.",
  },
  {
    icon: Zap,
    title: "Momentum",
    desc: "We move quickly without trading away architecture, polish, or the maintainability your business needs.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Straight talk, transparent timelines, and practical recommendations guide every engagement.",
  },
];

const proof = [
  "Senior-led strategy from discovery to launch",
  "Design and engineering decisions tied to business goals",
  "Maintainable systems built for the next version, not just the first",
];

export default function About() {
  return (
    <PageShell>
      <PageHero eyebrow="About Us" title="Digital work deserves to be a craft." icon={Heart}>
        Technology Craft is a focused studio for businesses that need thoughtful strategy, sharp execution, and technology that can keep moving after launch.
      </PageHero>

      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ClientMotionDiv {...fadeUp}>
              <SectionIntro eyebrow="Our Story" title="Built by practitioners who care about the work.">
                We started as developers, designers, and operators who kept seeing teams pay for digital products that looked fine on day one but became hard to grow. We built Technology Craft to be the opposite: clear, durable, and exacting.
              </SectionIntro>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>
                  Today we cover web design, web development, marketing, graphic design, and IT infrastructure. The thread through all of it is simple: ship useful systems with real polish.
                </p>
                <p>
                  Our clients range from young startups to established teams that need a dependable partner for the next phase of growth.
                </p>
              </div>
            </ClientMotionDiv>

            <ClientMotionDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl glass-panel p-6 md:p-8 overflow-hidden">
                <div className="flex items-center gap-2 pb-5 border-b border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs font-mono text-slate-500">studio-principles.json</span>
                </div>
                <div className="pt-6 space-y-4">
                  {proof.map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-mono">0{index + 1}</div>
                        <p className="text-slate-200 font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600/30 rounded-full blur-[40px]" />
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px]" />
            </ClientMotionDiv>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/70 border-y border-slate-800 relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-50" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionIntro eyebrow="Our Mission" title="Make exceptional digital work accessible to ambitious businesses." centered>
            We bring senior-level thinking and careful execution to teams of every size, because a precise digital presence should be a practical advantage.
          </SectionIntro>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Our Values" title="The standards that shape the work." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ClientMotionDiv
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:to-cyan-500/5 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
                  </div>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Want to work with us?</h2>
            <p className="text-xl text-slate-400 mb-10">Tell us what you are building. We will help shape the cleanest path forward.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Start a Project</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
