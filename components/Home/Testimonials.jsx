export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Trusted by engineering leaders.</h2>
      </div>

      <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[
          { quote: 'Technology Craft didn\'t just build what we asked for—they challenged our assumptions and delivered a system that handles 10x our previous volume.', author: 'Sarah Jenkins', role: 'CTO, FinFlow', initial: 'S' },
          { quote: 'The sheer velocity of this team is terrifying. They shipped our entire mobile app rebuild in 8 weeks with zero critical bugs.', author: 'Marcus Thorne', role: 'VP Engineering, LogisTech', initial: 'M' },
          { quote: 'The first agency I\'ve worked with where the code quality actually matches the slick design presentation. Absolute professionals.', author: 'David Chen', role: 'Founder, Nexa Health', initial: 'D' },
          { quote: 'Our SEO traffic increased 300% in six months after their technical audit and restructure. The ROI is undeniable.', author: 'Elena Rodriguez', role: 'CMO, RetailScale', initial: 'E' },
          { quote: 'They brought a level of architectural rigor to our platform that we desperately needed before our Series B.', author: 'James Wilson', role: 'Head of Product, Synthetix', initial: 'J' }
        ].map((item, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[400px] snap-center glass-panel p-8 rounded-2xl reveal" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex text-blue-500 mb-6">
              {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
            </div>
            <p className="text-slate-300 text-lg mb-8 line-clamp-4">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-300 font-bold border border-blue-500/20">
                {item.initial}
              </div>
              <div>
                <h4 className="text-white font-bold">{item.author}</h4>
                <p className="text-slate-500 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}