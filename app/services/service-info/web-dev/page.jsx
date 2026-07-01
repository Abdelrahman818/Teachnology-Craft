import { ArrowRight, Code, Globe, Layers } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionArticle } from "../../../../components/ClientMotion";
export { webDevMetadata as metadata } from "../../../../lib/pageMetadata";

const servicePackages = [
  {
    tier: "Premium Web",
    price: "Enterprise-grade launch",
    features: [
      "Custom design system and brand-led experience",
      "Performance-first engineering with SSR/ISR support",
      "Advanced animation, SEO structure, and analytics setup",
      "Enterprise integrations and ongoing maintenance planning",
    ],
  },
  {
    tier: "Professional Web",
    price: "Growth-ready business site",
    features: [
      "Responsive marketing site with polished page templates",
      "Content management support and modular page blocks",
      "Performance and accessibility tuning",
      "Conversion flows for leads, signups, and product discovery",
    ],
  },
  {
    tier: "Basic Web",
    price: "Focused launch site",
    features: [
      "Fast, clean landing page or company website",
      "Modern responsive design and mobile-first UX",
      "SEO-ready page structure",
      "Reliable deployment with launch support",
    ],
  },
];

export default function WebDev() {
  return (
    <PageShell>
      <PageHero eyebrow="Web Development" title="Build web platforms that stay useful." icon={Code}>
        From high-speed brochure sites to full-featured e-commerce applications, we engineer experiences that perform and evolve with your business.
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Static or Dynamic" title="Choose the build model that fits your goals.">
            Static websites are ideal for brand, product, and marketing experiences. Dynamic platforms give your team content control, custom workflows, and product-driven growth.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-3">
            {servicePackages.map((pkg) => (
              <ClientMotionArticle
                key={pkg.tier}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold">{pkg.tier}</p>
                  <div className="rounded-full bg-blue-600/10 px-3 py-1 text-xs text-blue-200">Web</div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{pkg.price}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </ClientMotionArticle>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Static, dynamic, and e-commerce websites with modern craftsmanship.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We build websites that load fast, look polished, and make future updates easier. For content-driven marketing sites, product-led growth platforms, or stores, our development process starts with real business outcomes.
              </p>
              <ul className="grid gap-3 text-slate-300">
                <li className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">SEO-friendly architecture with clean HTML, schema data, and meta structure.</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">Accessibility-first interfaces with keyboard navigation and readable contrast.</li>
                <li className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">Performance tuning for Lighthouse scores, fast load times, and smooth interactions.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-10">
              <h3 className="text-xl font-bold text-white mb-4">Web development delivers</h3>
              <div className="space-y-4 text-slate-300">
                <p>Static sites with premium content hygiene for brand launches and marketing campaigns.</p>
                <p>Dynamic platforms with secure admin dashboards, project management systems, and CMS workflows.</p>
                <p>E-commerce experiences built for conversions, fast catalog browsing, and repeat customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Launch a website that can grow with your business.</h2>
            <p className="text-xl text-slate-400 mb-10">We keep your web product practical, measurable, and built for the next phase of growth.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Book a Web Discovery</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
