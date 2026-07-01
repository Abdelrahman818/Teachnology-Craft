import { ArrowRight, Smartphone, ShieldCheck } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { mobileDevMetadata as metadata } from "../../../../lib/pageMetadata";

const appFocus = [
  {
    title: "Native feel with shared code",
    detail: "React Native gives your product a polished cross-platform experience while keeping development efficient and maintainable.",
  },
  {
    title: "Reliable deployment",
    detail: "We support app store submission, version updates, and ongoing releases so your product stays current and secure.",
  },
  {
    title: "Data-driven flows",
    detail: "Build mobile workflows around real user goals: onboarding, retention, commerce, and operational productivity.",
  },
];

export default function MobileDev() {
  return (
    <PageShell>
      <PageHero eyebrow="Mobile Applications" title="Apps that feel fast and native." icon={Smartphone}>
      </PageHero>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Cross-platform" title="React Native apps built for performance.">
            The mobile experience should feel polished and reliable. We structure apps to support smooth navigation, offline-ready data, and native device features.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-3">
            {appFocus.map((item) => (
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
              <h2 className="text-4xl font-bold text-white mb-6">Mobile products for everyday use and operational workflows.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Whether your app is customer-facing or supports internal teams, we build features that help users act with clarity and confidence.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Cross-platform native UI with device-native gestures and responsive layouts.</li>
                <li>Push notifications, offline caching, authentication, and secure data handling.</li>
                <li>App store guidance, analytics integration, and post-launch support.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Built for reliability.</h3>
                  <p className="text-slate-400 mt-2">Our mobile apps are designed to handle real-world conditions, with resiliency and maintainability baked into the architecture.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">We focus on clean state management, stable APIs, and user flows that keep friction low from onboarding to daily use.</p>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Let us help you bring your mobile vision to life.</h2>
            <p className="text-xl text-slate-400 mb-10">We pair design, engineering, and deployment support for a smooth app launch and a product that users want to keep using.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Start a Mobile Project</PrimaryLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
