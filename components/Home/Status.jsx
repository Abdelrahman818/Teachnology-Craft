export default function Status() {
  return (
    <section className="py-10 border-y border-slate-800/50 bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "150+", label: "Projects Shipped" },
            { value: "45+", label: "Enterprise Clients" },
            { value: "10", label: "Years Experience" },
            { value: "0ms", label: "Downtime Focus" }
          ].map((stat, i) => (
            <div key={i} className="text-center reveal" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
