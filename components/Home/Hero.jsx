import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen animate-glow" />
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/10 rounded-[100%] blur-[80px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-blue-400 text-sm font-medium mb-8 reveal">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Engineering the Future
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 reveal delay-100">
            Precision code.<br />Electric impact.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed reveal delay-200">
            We build high-performance digital products for ambitious teams. Clean architecture, stunning interfaces, and flawless execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              Deploy with us <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/5 text-white font-medium text-lg transition-all flex items-center justify-center gap-2">
              Explore capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Abstract UI Elements */}
      <div className="hidden lg:block absolute top-32 left-10 p-4 glass-panel rounded-lg animate-float">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="w-48 h-2 bg-slate-800 rounded mb-2" />
        <div className="w-32 h-2 bg-blue-600 rounded" />
      </div>
      
      <div className="hidden lg:block absolute bottom-20 right-10 p-6 glass-panel rounded-xl">
        <div className="flex items-end gap-2 h-16">
          <div className="w-4 bg-blue-500/50 h-8 rounded-t" />
          <div className="w-4 bg-cyan-400/50 h-12 rounded-t" />
          <div className="w-4 bg-blue-600/50 h-6 rounded-t" />
          <div className="w-4 bg-blue-400 h-16 rounded-t shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
        </div>
        <div className="text-xs text-slate-400 mt-3 font-mono">SYS_PERFORMANCE: 99.9%</div>
      </div>
    </section>
  );
}
