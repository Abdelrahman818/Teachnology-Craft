import { ArrowRight, Server, Wifi, ShieldCheck } from "lucide-react";
import { PageHero, PageShell, PrimaryLink, SectionIntro } from "../../../../components/InnerPage";
import { ClientMotionDiv } from "../../../../components/ClientMotion";
export { itMetadata as metadata } from "../../../../lib/pageMetadata";

const itServices = [
  {
    title: "IT consulting",
    detail: "We evaluate your systems, identify gaps, and recommend infrastructure improvements that reduce risk and support growth.",
  },
  {
    title: "Device & network management",
    detail: "From fingerprint devices to printers, we configure reliable network access and keep your hardware connected and secure.",
  },
  {
    title: "Cloud hosting & deployment",
    detail: "We deploy scalable applications and manage hosting so your digital products stay online, fast, and accessible.",
  },
  {
    title: "Support & maintenance",
    detail: "Day-to-day support, issue response, and system health checks keep your team productive and your services stable.",
  },
];
const solutions = [
  {
    title: "Network Infrastructure",
    detail:
      "Design, configure, and maintain secure wired and wireless networks that provide reliable connectivity and high performance.",
  },
  {
    title: "Server Deployment",
    detail:
      "Install and manage physical and virtual servers for file sharing, applications, backups, and business-critical services.",
  },
  {
    title: "Cloud Integration",
    detail:
      "Connect your business with secure cloud platforms for collaboration, storage, hosting, and remote accessibility.",
  },
  {
    title: "IT Security",
    detail:
      "Protect your business with firewalls, endpoint security, access control, backup solutions, and proactive monitoring.",
  },
];
const tech = [
  "Windows Server",
  "Microsoft 365",
  "Linux Servers",
  "Networking Solutions",
  "Wi-Fi Solutions",
  "VPN Configuration",
  "Firewall Management",
  "Cloud Hosting",
  "Virtualization",
  "Backup Solutions",
  "Network Security",
  "IT Monitoring",
];
const whyIT = [
  {
    title: "Improve Productivity",
    detail:
      "Reliable systems minimise downtime and allow employees to work efficiently without unnecessary interruptions.",
  },
  {
    title: "Strengthen Cybersecurity",
    detail:
      "Protect sensitive business information through proactive monitoring, secure configurations, and modern security practices.",
  },
  {
    title: "Support Business Growth",
    detail:
      "Scalable IT infrastructure allows your business to expand confidently without replacing existing systems.",
  },
  {
    title: "Reduce Operational Costs",
    detail:
      "Prevent costly outages and unexpected failures through proactive maintenance and strategic IT planning.",
  },
];

export default function ITPage() {
  return (
    <PageShell>

      {/* HERO */}
      <PageHero eyebrow="IT Solutions" title="Infrastructure that keeps your business moving." icon={Server}>
        Practical IT services for businesses that need dependable networks, devices, hosting, and support with clear accountability.
      </PageHero>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro eyebrow="Operational IT" title="Systems that are easy to manage and secure.">
            We support the technology behind your day-to-day business so your people can focus on customer work, not infrastructure problems.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {itServices.map((item) => (
              <ClientMotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
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

      {/* SOLUTIONS */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Business IT Solutions"
            title="Comprehensive IT services for modern businesses."
          >
            Technology Craft provides reliable IT solutions that help businesses
            improve productivity, strengthen security, and maintain stable technology
            infrastructures. From small offices to enterprise environments, we deliver
            scalable solutions designed around your operational needs.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((item) => (
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
            eyebrow="Technology Expertise"
            title="Supporting the technologies your business depends on."
          >
            Our IT specialists work with modern networking equipment, operating
            systems, cloud services, and security solutions to keep your business
            running efficiently.
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

      {/* WHY IT */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionIntro
            eyebrow="Why IT Matters"
            title="Reliable technology is the foundation of every successful business."
          >
            Modern businesses rely on secure, stable, and scalable IT environments to
            support daily operations, improve collaboration, protect valuable data,
            and enable future growth.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {whyIT.map((item) => (
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
      
      {/* FEATRUE CARD */}
      <section className="py-24 bg-slate-900/70 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Trusted IT support for modern businesses.</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our IT team helps you adopt secure environments, keep devices patched, and solve issues before they interrupt customer work.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>Network planning and firewall setup for better security and visibility.</li>
                <li>Device onboarding, printer management, and biometric access support.</li>
                <li>Cloud deployment, uptime monitoring, and priority issue resolution.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-2xl bg-blue-600/15 p-3 text-blue-300">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Connected, secure, supported.</h3>
                  <p className="text-slate-400 mt-2">We make sure the systems your team depends on are visible, manageable, and protected from common failures.</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">Our goal is to treat IT like a service foundation — fast, dependable, and built so your operations stay stable as you grow.</p>
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
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">Need IT support that feels proactive?</h2>
            <p className="text-xl text-slate-400 mb-10">Let us give your team infrastructure that works quietly in the background, so you can keep moving forward.</p>
            <PrimaryLink href="/contact" icon={ArrowRight}>Request IT Support</PrimaryLink>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
