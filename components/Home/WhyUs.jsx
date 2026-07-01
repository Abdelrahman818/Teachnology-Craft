import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden border-y border-slate-800">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Built for velocity. <br/><span className="text-blue-400">Engineered for scale.</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We reject the slow, bloated agency model. Technology Craft operates like an elite strike team—shipping faster, cleaner, and with relentless focus on your business objectives.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Zero Technical Debt", desc: "Clean architecture from day one. We build systems that are easy to scale and maintain." },
                { title: "Elite Engineering", desc: "Senior talent only. No juniors learning on your dime." },
                { title: "Obsessive Polish", desc: "Every transition, every state, every pixel considered and perfected." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative reveal delay-200">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl glass-panel p-2 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="ml-4 text-xs font-mono text-slate-500">terminal ~ deploy</div>
              </div>
              <div className="p-6 font-mono text-sm sm:text-base text-slate-300 flex-1 overflow-hidden flex flex-col gap-2">
                <div className="flex gap-4"><span className="text-blue-500">$</span><span>tech-craft init</span></div>
                <div className="text-slate-500">Initializing project structure...</div>
                <div className="text-cyan-400">✓ Architecting database schema</div>
                <div className="text-cyan-400">✓ Setting up edge network</div>
                <div className="flex gap-4 mt-2"><span className="text-blue-500">$</span><span>tech-craft deploy --prod</span></div>
                <div className="text-slate-500">Compiling assets...</div>
                <div className="text-slate-500">Optimizing bundles...</div>
                <div className="text-green-400 font-bold mt-2">🚀 Deployed to 42 edge nodes in 1.2s</div>
                <div className="flex gap-4 mt-4"><span className="text-blue-500 animate-pulse">_</span></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600/30 rounded-full blur-[40px]" />
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}