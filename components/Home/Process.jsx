export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Process</h2>
          <p className="text-slate-400 text-lg">Predictable delivery. Transparent communication. Absolute precision.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -translate-y-1/2 z-0" />
          
          {[
            { step: "01", title: "Discovery", desc: "Deep dive into your architecture, goals, and constraints." },
            { step: "02", title: "Strategy", desc: "Technical spec, UX wireframes, and precise timelines." },
            { step: "03", title: "Execution", desc: "Agile sprints with weekly functional deliverables." },
            { step: "04", title: "Deployment", desc: "Rigorous testing, optimization, and seamless launch." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center reveal" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl font-bold text-blue-400 mb-6 shadow-[0_0_15px_rgba(15,23,42,1)]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
