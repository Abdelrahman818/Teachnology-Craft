import { ArrowRight, Image, Palette, Video } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { designsMetadata as metadata } from "../../../../lib/pageMetadata";

const creativeAreas = [
  {
    title: "Brand identity",
    detail: "We create visual systems that make your brand more memorable and easier to apply across web, social, and campaigns.",
  },
  {
    title: "Graphic design",
    detail: "From social assets to sales materials, we help brands present a more professional and consistent visual story.",
  },
  {
    title: "Motion & video",
    detail: "Short motion clips, animated content, and edit-ready video help your brand stand out in feeds and product launches.",
  },
  {
    title: "AI-assisted creative",
    detail: "We use AI tools to accelerate concepting and production while keeping the final creative aligned with your brand voice.",
  },
];

export default function Designs() {
  return (
    <PageShell>
      <PageHero eyebrow="Design & Creative" title="Design that makes your brand easier to recognize." icon={Palette}>
        Visual experiences that create clarity, trust, and momentum across digital products, campaigns, and customer touchpoints.
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Creative services" title="Graphic and motion design with a business focus.">
            We create the visuals your product needs to feel polished, persuasive, and consistent across every screen and channel.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {creativeAreas.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Creative work that supports digital growth.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Your visuals should feel like part of the product, not an afterthought. We craft creative assets that align with your messaging and launch goals.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Brand identity, asset libraries, and visual system creation.</li>
                <li>Social content, presentation visuals, and product promotion materials.</li>
                <li>Motion design, video editing, and AI-assisted creative production.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Image className="w-5 h-5" alt="design icon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Design with consistency.</h3>
                  <p className="text-slate-400 mt-2">We help brands establish visual consistency so every digital interaction feels like the same company.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">The goal is to make your marketing, product, and support content look unified and easy to recognize.</p>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Creative assets made for digital teams.</h2>
            <p className="text-xl text-slate-400 mb-10">From brand systems to motion content, we help your company look sharper, more modern, and easier to remember.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Request Design Support</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
