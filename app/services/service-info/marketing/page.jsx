import { ArrowRight, BarChart3, Megaphone } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { marketingMetadata as metadata } from "../../../../lib/pageMetadata";

const marketingWork = [
  {
    title: "SEO & content strategy",
    detail: "We build search-optimized page structures, target keywords that matter, and shape content that supports awareness and conversion.",
  },
  {
    title: "Paid campaigns",
    detail: "Our campaigns are designed to deliver measurable returns from search, social, and performance channels.",
  },
  {
    title: "Analytics and growth tracking",
    detail: "We set up tracking, funnels, and dashboards so you can measure campaign impact and product performance clearly.",
  },
];
const services = [
  {
    title: "Social Media Marketing",
    detail:
      "Build a stronger online presence through engaging content, campaign management, and audience-focused social media strategies.",
  },
  {
    title: "Search Engine Marketing",
    detail:
      "Increase website visibility using paid advertising and search marketing campaigns that attract high-intent customers.",
  },
  {
    title: "Content Marketing",
    detail:
      "Create valuable content that educates your audience, improves brand authority, and supports long-term business growth.",
  },
  {
    title: "Marketing Analytics",
    detail:
      "Track campaign performance, measure key metrics, and optimise marketing strategies using accurate data and reporting.",
  },
];
const channels = [
  "Facebook Marketing",
  "Instagram Marketing",
  "LinkedIn Marketing",
  "Google Ads",
  "Email Marketing",
  "Content Marketing",
  "SEO",
  "Remarketing",
  "YouTube Marketing",
  "Lead Generation",
  "Brand Awareness",
  "Marketing Analytics",
];
const whymarketing = [
  {
    title: "Increase Brand Awareness",
    detail:
      "Reach more potential customers through consistent messaging and targeted marketing campaigns.",
  },
  {
    title: "Generate Qualified Leads",
    detail:
      "Connect with people actively searching for your products or services and convert interest into enquiries.",
  },
  {
    title: "Improve Customer Engagement",
    detail:
      "Build stronger relationships through valuable content, social interaction, and personalised marketing experiences.",
  },
  {
    title: "Measure Every Campaign",
    detail:
      "Monitor performance using real data, helping you make informed marketing decisions and maximise return on investment.",
  },
];

export default function Marketing() {
  return (
    <PageShell>

      {/* HERO */}
      <PageHero eyebrow="Marketing" title="Growth that is measurable and strategic." icon={Megaphone}>
        We connect campaigns, website performance, and analytics into a growth engine that is easy to track and improve.
      </PageHero>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Performance marketing" title="Turn traffic into reliable business results.">
            Our marketing work is built on measurable goals, transparent reporting, and continuous improvement.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-3">
            {marketingWork.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
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
      
      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Marketing Services"
            title="Digital marketing strategies that drive measurable growth."
          >
            Technology Craft helps businesses reach the right audience through
            data-driven digital marketing strategies that increase brand awareness,
            generate qualified leads, and improve customer engagement across multiple
            online channels.
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

      {/* CHANNELS */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Marketing Channels"
            title="Reach your audience wherever they are."
          >
            Our digital marketing services are designed to connect your business with
            potential customers across the platforms that matter most.
          </SectionIntro>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((item) => (
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

      {/* WHY marketing */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Business Growth"
            title="Digital marketing helps businesses grow faster."
          >
            Effective digital marketing increases your online visibility, attracts
            qualified customers, builds trust in your brand, and creates measurable
            opportunities for long-term business growth.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {whymarketing.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Marketing with clarity, not just traffic.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We focus on campaigns and analytics that help your business make better decisions and grow with fewer distractions.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>SEO-friendly content and site structure for organic visibility.</li>
                <li>Paid media setup with conversion-focused landing pages.</li>
                <li>Performance measurement and actionable growth recommendations.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Measured growth.</h3>
                  <p className="text-slate-400 mt-2">We treat marketing as a product practice: iterating on the channels that deliver the highest impact.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">We set up the right analytics and align digital marketing to your business metrics from the first campaign.</p>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Build campaigns with measurable value.</h2>
            <p className="text-xl text-slate-400 mb-10">If you want marketing that moves the needle, we can help you align the channels, content, and product experience.
            </p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Talk Marketing Strategy</PrimaryLink>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
