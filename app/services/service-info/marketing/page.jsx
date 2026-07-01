import { ArrowRight, BarChart3, Megaphone, Search } from "lucide-react";
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

export default function Marketing() {
  return (
    <PageShell>
      <PageHero eyebrow="Marketing" title="Growth that is measurable and strategic." icon={Megaphone}>
        We connect campaigns, website performance, and analytics into a growth engine that is easy to track and improve.
      </PageHero>

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
