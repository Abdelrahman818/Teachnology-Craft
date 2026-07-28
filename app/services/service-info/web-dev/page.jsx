import { ArrowRight, Code } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionArticle, ClientMotionDiv } from "../../../../components/ClientMotion";
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
const services = [
  {
    title: "Business Websites",
    detail:
      "Professional corporate websites designed to showcase your brand, generate leads, and establish credibility in your industry.",
  },
  {
    title: "E-Commerce Development",
    detail:
      "Secure online stores with intuitive shopping experiences, payment integration, inventory management, and scalable architecture.",
  },
  {
    title: "Custom Web Applications",
    detail:
      "Tailor-made web applications built to automate workflows, manage business operations, and improve productivity.",
  },
  {
    title: "Website Maintenance",
    detail:
      "Keep your website secure, updated, and running smoothly with ongoing maintenance, monitoring, and performance optimisation.",
  },
];
const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Cloud Hosting",
  "SEO Optimisation",
  "Performance Optimisation",
];
const whyWeb = [
  {
    title: "Fast & Responsive",
    detail:
      "Every website is optimised for speed and delivers a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    title: "SEO-Ready Architecture",
    detail:
      "Clean code, structured content, and technical optimisation help your website perform better in search engine results.",
  },
  {
    title: "Secure & Scalable",
    detail:
      "We build secure websites that grow alongside your business and adapt easily to future requirements.",
  },
  {
    title: "Designed for Conversions",
    detail:
      "Strategic layouts, intuitive navigation, and clear calls to action help convert visitors into customers.",
  },
];

export default function WebDev() {
  return (
    <PageShell>

      {/* HERO */}
      <PageHero eyebrow="Web Development" title="Build web platforms that stay useful." icon={Code}>
        From high-speed brochure sites to full-featured e-commerce applications, we engineer experiences that perform and evolve with your business.
      </PageHero>

      {/* INTRO */}
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

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Web Development"
            title="Custom websites built for performance, scalability, and growth."
          >
            Technology Craft develops modern websites and web applications that help
            businesses establish a strong online presence, improve user experience,
            and achieve measurable business results through reliable, scalable
            solutions.
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

      {/* TECH */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Development Stack"
            title="Modern technologies for powerful web solutions."
          >
            We use trusted frameworks, programming languages, and cloud technologies
            to build secure, fast, and scalable websites that perform exceptionally
            across all devices.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((item) => (
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
      
      {/* WHY WEB */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Why Choose Us"
            title="Web development that delivers real business value."
          >
            A professionally developed website is more than an online presence. It is
            a powerful business tool that attracts customers, improves engagement,
            supports marketing efforts, and drives long-term growth.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {whyWeb.map((item) => (
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

      {/* CTA */}
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
