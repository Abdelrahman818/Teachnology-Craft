import Service from "../ui/service";

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
          <Service />
        </div>
      </div>
    </section>
  );
}
