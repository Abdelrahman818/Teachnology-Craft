'use client'

import { Link } from "../app/router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel border-b border-white/10 shadow-xl shadow-slate-950/20 py-4 backdrop-blur-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <Image src={"/favicon.ico"} alt="Favicon" width={100} height={100} className="rounded-lg" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Technology Craft</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors" text="Home" />
          <Link href="/services" className="hover:text-white transition-colors" text="Services" />
          <Link href="/about" className="hover:text-white transition-colors" text="About" />
          <Link href="/visitor-sources" className="hover:text-white transition-colors" text="Visitor Sources" />
          <Link href="/contact" className="hover:text-white transition-colors" text="Contact" />
        </div>
        
        <div className="hidden md:block">
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]" text="Start a Project" />
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="container mx-auto px-6 md:px-12 py-4 space-y-3">
              <Link href="/services" className="block text-slate-200 hover:text-white transition-colors" text="Services" />
            <Link href="/about" className="block text-slate-200 hover:text-white transition-colors" text="About" />
            <Link href="/visitor-sources" className="block text-slate-200 hover:text-white transition-colors" text="Visitor Sources" />
            <Link href="/contact" className="block text-blue-400 hover:text-blue-300 font-medium transition-colors" text="Start a Project" />
          </div>
        </div>
      )}
    </nav>
  )
}