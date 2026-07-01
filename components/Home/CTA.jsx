import { ChevronRight } from "lucide-react";
import Link from "../../app/router";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">
            Ready to build?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Stop settling for average execution. Let&apos;s engineer something extraordinary together.
          </p>
          
          <form className="max-w-md mx-auto p-2 rounded-full flex transition-shadow justify-center">
            <Link href={'/contact'} type="button" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center gap-2">
              Get Started <ChevronRight className="w-4 h-4" />
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
