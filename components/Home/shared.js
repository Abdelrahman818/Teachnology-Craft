import { MonitorSmartphone, Code, TrendingUp, PenTool, Server } from "lucide-react";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export const services = [
  { icon: <MonitorSmartphone className="w-6 h-6" />, title: "Web Designing", desc: "UI, UX, landing pages, and responsive design crafted for impact." },
  { icon: <Code className="w-6 h-6" />, title: "Web Development", desc: "Custom web apps, CMS, and e-commerce platforms built to scale." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Marketing", desc: "SEO, PPC, and content strategies that drive measurable growth." },
  { icon: <PenTool className="w-6 h-6" />, title: "Graphic Designing", desc: "Brand identity, logos, and illustrations that tell your story." },
  { icon: <Server className="w-6 h-6" />, title: "IT Solutions", desc: "Robust infrastructure, cloud integration, and reliable support." }
];
