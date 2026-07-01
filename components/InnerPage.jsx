import NavBar from "./NavBar";
import Footer from "./Footer";

export function PageShell({ children, withFooter = true }) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden selection:bg-blue-500/30">
      <NavBar />
      {children}
      {withFooter && <Footer />}
    </main>
  );
}

export function AmbientGlow() {
  return (
    <>
      <div className="absolute top-24 -left-32 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen animate-glow pointer-events-none" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen animate-glow pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-blue-900/10 rounded-[100%] blur-[80px] pointer-events-none" />
    </>
  );
}

export function PageHero({ eyebrow, title, children, icon: Icon, meta }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <AmbientGlow />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-blue-400 text-sm font-medium mb-8 reveal">
            {Icon ? <Icon className="w-4 h-4" /> : <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
            {eyebrow}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.08] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 reveal delay-100">
            {title}
          </h1>
          {children && (
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed reveal delay-200">
              {children}
            </p>
          )}
          {meta && <div className="mt-6 text-sm text-slate-500 font-mono reveal delay-300">{meta}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-12 md:mb-16 reveal`}>
      <div className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {children && <p className="mt-5 text-slate-400 text-lg leading-relaxed">{children}</p>}
    </div>
  );
}

export function PrimaryLink({ href, children, icon: Icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]"
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </a>
  );
}

export function GhostLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full glass-panel hover:bg-white/5 text-white font-medium transition-all"
    >
      {children}
    </a>
  );
}
