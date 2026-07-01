"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AmbientGlow, PageShell } from "../components/InnerPage";

export default function NotFound() {
  return (
    <PageShell withFooter={false}>
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 text-center overflow-hidden">
        <AmbientGlow />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-xl flex flex-col items-center"
        >
          <div className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-700 select-none">
            404
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">Page not found</h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}
