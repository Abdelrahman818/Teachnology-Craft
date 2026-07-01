"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { fadeIn } from "./shared";

export default function Projects() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg">Explore how we&apos;ve helped businesses transform their digital presence and scale their operations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer block"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-md border border-border/50">
              <Image
                src="/images/project-web.png"
                alt="Web Dashboard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Fintech Dashboard</h3>
            <p className="text-muted-foreground">Web Development • UI/UX Design</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer block md:mt-16"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-md border border-border/50">
              <Image
                src="/images/project-mobile.png"
                alt="Mobile App"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Health & Wellness App</h3>
            <p className="text-muted-foreground">Mobile App • Backend Infrastructure</p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button size="lg" className="rounded-full shadow-md">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
);
}
