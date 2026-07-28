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
const services = [
  {
    title: "Native App Development",
    detail:
      "Build high-performance applications for iOS and Android that deliver fast, responsive, and reliable user experiences.",
  },
  {
    title: "Cross-Platform Development",
    detail:
      "Develop applications using modern frameworks that reduce development time while maintaining excellent performance across multiple platforms.",
  },
  {
    title: "Business Mobile Solutions",
    detail:
      "Create custom applications for internal operations, customer management, booking systems, inventory management, and business automation.",
  },
  {
    title: "Maintenance & Updates",
    detail:
      "Keep your application secure, compatible, and up to date with continuous improvements, performance optimisation, and feature enhancements.",
  },
];
const tech = [
  "React Native",
  "Flutter",
  "Android",
  "iOS",
  "Firebase",
  "REST APIs",
  "Node.js Backend",
  "MongoDB",
  "Push Notifications",
  "Cloud Integration",
  "App Store Deployment",
  "Google Play Publishing",
];
const whyMobile = [
  {
    title: "Reach More Customers",
    detail:
      "Give customers instant access to your services through intuitive mobile experiences available on their smartphones and tablets.",
  },
  {
    title: "Improve Customer Engagement",
    detail:
      "Use push notifications, personalised experiences, and seamless interactions to build stronger customer relationships.",
  },
  {
    title: "Increase Business Efficiency",
    detail:
      "Automate workflows, simplify communication, and provide employees with mobile tools that improve productivity.",
  },
  {
    title: "Scale with Your Business",
    detail:
      "Our applications are designed with scalability in mind, allowing new features and integrations as your business grows.",
  },
];

export default function MobileDev() {
  return (
    <PageShell>
      
      {/* HERO */}
      <PageHero eyebrow="Mobile Applications" title="Apps that feel fast and native." icon={Smartphone}>
        Technology Craft designs and develops high-performance mobile applications for iOS and Android that deliver exceptional user experiences, streamline business operations, and help companies connect with customers wherever they are.
      </PageHero>

      {/* INTRO */}
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

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Mobile Solutions"
            title="Custom mobile applications built for performance and growth."
          >
            Technology Craft develops modern mobile applications that help businesses
            connect with customers, streamline operations, and deliver exceptional
            digital experiences across iOS and Android devices.
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
            title="Modern technologies for mobile application development."
          >
            We use trusted frameworks, programming languages, and cloud technologies
            to build secure, scalable, and high-performance mobile applications.
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

      {/* WHY MOBILE DEV */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Business Benefits"
            title="Mobile applications that create lasting business value."
          >
            A professionally developed mobile application improves customer
            engagement, strengthens brand loyalty, and provides convenient access to
            your products and services anytime, anywhere.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {whyMobile.map((item) => (
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

      {/* CTA */}
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
