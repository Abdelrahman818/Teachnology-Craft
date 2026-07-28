import { ArrowRight, Image, Palette } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { designsMetadata as metadata } from "../../../../lib/pageMetadata";

const services = [
  {
    title: "Brand Identity Design",
    detail: "Develop a consistent visual identity including logos, colour palettes, typography, and brand guidelines that represent your business professionally.",
  },
  {
    title: "Marketing Materials",
    detail: "Design brochures, flyers, business cards, company profiles, presentations, and promotional materials that effectively communicate your message.",
  },
  {
    title: "Social Media Graphics",
    detail: "Create engaging social media posts, banners, advertisements, and campaign visuals that capture attention and strengthen your online presence.",
  },
  {
    title: "Print & Digital Design",
    detail: "From packaging and signage to digital assets and promotional graphics, we design materials that work seamlessly across every platform.",
  },
];
const offers = [
  {
    title: "Logo & Brand Identity",
    detail:
      "Create memorable logos, colour palettes, typography, and complete brand identity systems that reflect your company's personality.",
  },
  {
    title: "Marketing Materials",
    detail:
      "Professionally designed brochures, flyers, company profiles, business cards, and promotional materials that leave a lasting impression.",
  },
  {
    title: "Social Media Graphics",
    detail:
      "Eye-catching posts, stories, banners, advertisements, and campaign creatives designed for every major social media platform.",
  },
  {
    title: "Print & Digital Design",
    detail:
      "From packaging and signage to digital banners and presentations, we create designs that look exceptional everywhere.",
  },
];
const designs = [
  "Logo Design",
  "Visual Identity",
  "Brand Guidelines",
  "Business Cards",
  "Company Profiles",
  "Brochures",
  "Flyers",
  "Packaging Design",
  "Presentation Design",
  "Website Graphics",
  "Advertising Banners",
  "Social Media Posts",
];
const whyDesigns = [
  {
    title: "Build Brand Recognition",
    detail:
      "Consistent visual branding makes your business more memorable and strengthens customer trust across every touchpoint.",
  },
  {
    title: "Improve Marketing Performance",
    detail:
      "Well-designed marketing materials attract attention, communicate messages clearly, and encourage customer engagement.",
  },
  {
    title: "Increase Professionalism",
    detail:
      "High-quality graphic design demonstrates credibility and creates a positive first impression for potential customers.",
  },
  {
    title: "Support Business Growth",
    detail:
      "Creative visual communication helps businesses stand out from competitors and build long-term customer relationships.",
  },
];

export default function Designs() {
  return (
    <PageShell>

      {/* HERO */}
      <PageHero eyebrow="Graphic Design" title="Creative graphic design that strengthens your brand identity." icon={Palette}>
        Technology Craft creates impactful graphic designs that communicate your message, strengthen your brand, and help businesses stand out across digital and print platforms.
      </PageHero>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Creative Design Services" title="Professional designs that leave a lasting impression.">
            Our graphic design services combine creativity with strategy to produce visually engaging designs that enhance brand recognition, improve communication, and support your business objectives.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((item) => (
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
            eyebrow="Creative Services"
            title="Professional graphic design solutions for every business."
          >
            Technology Craft provides creative graphic design services that help
            businesses communicate visually, strengthen their brand identity, and
            create memorable customer experiences across digital and print media.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((item) => (
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

      {/* WHAT WE DESIGN */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Design Expertise"
            title="Creative assets for digital, print, and branding."
          >
            Our graphic design team creates visual assets that help businesses
            communicate consistently, improve brand recognition, and support
            successful marketing campaigns.
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
            eyebrow="Why Graphic Design"
            title="Strong design creates stronger brands."
          >
            Professional graphic design helps businesses communicate more effectively,
            build trust, improve brand recognition, and create consistent customer
            experiences across every marketing channel.
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

      {/* FEATURE CARD */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Designs built to communicate, engage, and inspire.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Great graphic design goes beyond aesthetics. We focus on visual communication, consistency, and user engagement to help businesses build trust and create memorable experiences.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Consistent branding across digital and printed materials.</li>
                <li>Creative visuals designed for marketing, advertising, and communication.</li>
                <li>High-quality assets suitable for web, social media, and professional printing.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Image className="w-5 h-5" alt="design icon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Creative solutions for modern brands.</h3>
                  <p className="text-slate-400 mt-2">Every design is carefully crafted to reflect your brand personality while maintaining clarity, consistency, and professional quality.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">From concept development to final delivery, we create visual assets that help businesses communicate effectively and build stronger customer relationships.</p>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Creative assets made for digital teams.</h2>
            <p className="text-xl text-slate-400 mb-10">From brand systems to motion content, we help your company look sharper, more modern, and easier to remember.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Request Design Support</PrimaryLink>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
