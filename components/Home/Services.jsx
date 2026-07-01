
import { Code, Smartphone, Terminal, Megaphone, Layers, Search, Monitor, PenTool } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Capabilities</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            End-to-end technology solutions crafted by specialists. We don&apos;t just write code, we build scalable systems that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Web Development", desc: "High-performance React & Node.js architectures." },
            { icon: Smartphone, title: "Mobile App Development", desc: "Native-feeling iOS and Android experiences." },
            { icon: Layers, title: "Web Design / UI-UX", desc: "Interfaces that convert, designed with precision." },
            { icon: Terminal, title: "IT Solutions", desc: "Robust infrastructure and cloud deployments." },
            { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven campaigns that scale revenue." },
            { icon: Search, title: "SEO Optimization", desc: "Technical and content strategies for absolute visibility." },
            { icon: Monitor, title: "Desktop App Development", desc: "Powerful cross-platform desktop software." },
            { icon: PenTool, title: "Graphics Designing", desc: "Brand identities that demand attention." },
          ].map((service, i) => (
            <div 
              key={i}
              className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden reveal"
              style={{ animationDelay: `${(i % 4) * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:to-cyan-500/5 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
