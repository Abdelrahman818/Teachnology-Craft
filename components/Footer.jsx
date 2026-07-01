import { Link } from "../app/router";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
            
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded flex items-center justify-center">
                <Image src={"/favicon.ico"} alt={"Favicon"} width={100} height={100} className="rounded-lg" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Technology Craft</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              A premium technology agency engineering high-performance digital products for the world&apos;s most ambitious companies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><Link href="/services/service-info/web-dev" className="hover:text-blue-400 transition-colors" text="Web Development" /></li>
              <li><Link href="/services/service-info/mobile-dev" className="hover:text-blue-400 transition-colors" text="Mobile Applications" /></li>
              <li><Link href="/services/service-info/web-designs" className="hover:text-blue-400 transition-colors" text="UX / UI Design" /></li>
              <li><Link href="/services/service-info/designs" className="hover:text-blue-400 transition-colors" text="Graphic & Motion Design" /></li>
              <li><Link href="/services/service-info/marketing" className="hover:text-blue-400 transition-colors" text="Marketing" /></li>
              <li><Link href="/services/service-info/it" className="hover:text-blue-400 transition-colors" text="IT Solutions" /></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors" text="About Us" /></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors" text="Services" /></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors" text="Contact" /></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><Link href="mailto:contact@technology-craft.com" className="hover:text-blue-400 transition-colors" text="contact@technology-craft.com" /></li>
              <li><Link href="tel:+0201100240856" className="hover:text-blue-400 transition-colors" text="+02 0110 024 0856" /></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors" text="Contact Page" /></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Technology Craft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-slate-400 transition-colors" text="Terms of Service" />
          </div>
        </div>

      </div>
    </footer>
  )
}
