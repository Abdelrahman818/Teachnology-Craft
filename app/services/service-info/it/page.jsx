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

export default function ITPage() {
  return (
    <PageShell>
      <PageHero eyebrow="IT Solutions" title="Infrastructure that keeps your business moving." icon={Server}>
        Practical IT services for businesses that need dependable networks, devices, hosting, and support with clear accountability.
      </PageHero>

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
