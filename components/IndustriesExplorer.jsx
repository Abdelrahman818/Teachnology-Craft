"use client";

import { createContext, useContext, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Film,
  Heart,
  Landmark,
  Rocket,
  ShoppingCart,
  TrendingUp,
  Truck,
  Zap,
  GraduationCap,
  Factory,
} from "lucide-react";
import { PrimaryLink } from "./InnerPage";

const IndustryContext = createContext(null);

function useIndustry() {
  const context = useContext(IndustryContext);
  if (!context) {
    throw new Error("useIndustry must be used within an IndustryContext provider.");
  }
  return context;
}

const industries = [
  {
    id: "finance",
    icon: TrendingUp,
    title: "Finance & Banking",
    tagline: "Secure, scalable, and compliance-aware.",
    desc: "Trading tools, payment flows, reporting dashboards, and internal platforms where reliability and data handling matter.",
    stats: [
      { value: "99.9%", label: "Uptime focus" },
      { value: "Secure", label: "Data flows" },
      { value: "Auditable", label: "Operations" },
    ],
    services: ["Payment integrations", "Financial dashboards", "Role-based portals", "Compliance reporting"],
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & MedTech",
    tagline: "Private by design, usable in practice.",
    desc: "Patient portals, booking experiences, internal dashboards, and health product interfaces with accessibility and privacy in mind.",
    stats: [
      { value: "WCAG", label: "Accessible UI" },
      { value: "Private", label: "Data handling" },
      { value: "Fast", label: "Care flows" },
    ],
    services: ["Patient portals", "Telehealth UI", "Medical dashboards", "Booking systems"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    tagline: "Built to convert and keep moving.",
    desc: "Storefronts, checkout flows, product catalogs, and admin tools for brands that need clarity, speed, and reliable ordering.",
    stats: [
      { value: "Mobile", label: "First buying" },
      { value: "Fast", label: "Catalogs" },
      { value: "Clean", label: "Checkout" },
    ],
    services: ["Custom storefronts", "Inventory systems", "Payment flows", "Conversion UX"],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & EdTech",
    tagline: "Learning products that stay clear at scale.",
    desc: "Learning platforms, course dashboards, content portals, and certification workflows for institutions and creators.",
    stats: [
      { value: "LMS", label: "Platforms" },
      { value: "Video", label: "Learning" },
      { value: "Admin", label: "Control" },
    ],
    services: ["Learning platforms", "Course portals", "Certification flows", "Admin dashboards"],
  },
  {
    id: "realestate",
    icon: Building2,
    title: "Real Estate & PropTech",
    tagline: "Property workflows with less friction.",
    desc: "Listing platforms, lead capture, valuation tools, and property management interfaces for sales and operations teams.",
    stats: [
      { value: "Listings", label: "At speed" },
      { value: "Leads", label: "Captured" },
      { value: "CRM", label: "Ready" },
    ],
    services: ["Property listings", "Virtual tour flows", "Lead dashboards", "Lease automation"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing & Industry",
    tagline: "Operational clarity for technical teams.",
    desc: "Dashboards, maintenance tools, inventory interfaces, and workflow systems that connect people to the state of production.",
    stats: [
      { value: "Ops", label: "Dashboards" },
      { value: "Live", label: "Visibility" },
      { value: "Practical", label: "Controls" },
    ],
    services: ["Operations dashboards", "Maintenance systems", "Inventory tools", "Workflow software"],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    tagline: "Every shipment and handoff in view.",
    desc: "Fleet tools, delivery workflows, warehouse dashboards, and integration layers for supply chain teams.",
    stats: [
      { value: "Routes", label: "Optimized" },
      { value: "Fleet", label: "Tracked" },
      { value: "APIs", label: "Connected" },
    ],
    services: ["Fleet management", "Route planning", "Warehouse UI", "Carrier integrations"],
  },
  {
    id: "media",
    icon: Film,
    title: "Media & Entertainment",
    tagline: "Content systems that feel effortless.",
    desc: "Publishing tools, content libraries, campaign pages, and media product interfaces with clean editorial control.",
    stats: [
      { value: "CMS", label: "Control" },
      { value: "Fast", label: "Delivery" },
      { value: "Clear", label: "Discovery" },
    ],
    services: ["Publishing tools", "Media libraries", "Campaign pages", "Recommendation UI"],
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government & Public Sector",
    tagline: "Citizen services with accessible paths.",
    desc: "Public portals, service request flows, reporting tools, and internal systems designed for clarity and access.",
    stats: [
      { value: "Public", label: "Portals" },
      { value: "A11y", label: "First" },
      { value: "Secure", label: "Access" },
    ],
    services: ["Citizen portals", "Request systems", "Public dashboards", "Internal tooling"],
  },
  {
    id: "startups",
    icon: Rocket,
    title: "Startups & SaaS",
    tagline: "From MVP to the system after MVP.",
    desc: "Product strategy, SaaS architecture, dashboards, billing flows, and launch-ready interfaces for teams moving fast.",
    stats: [
      { value: "MVP", label: "Launch" },
      { value: "SaaS", label: "Ready" },
      { value: "Scale", label: "Planned" },
    ],
    services: ["MVP development", "SaaS dashboards", "Billing flows", "Analytics tools"],
  },
];

function IndustryProvider({ children }) {
  const [active, setActive] = useState(industries[0].id);
  const selected = industries.find((industry) => industry.id === active) || industries[0];

  return (
    <IndustryContext.Provider value={{ industries, active, setActive, selected }}>
      {children}
    </IndustryContext.Provider>
  );
}

function IndustryList() {
  const { industries, active, setActive } = useIndustry();

  return (
    <div className="lg:sticky lg:top-28 rounded-2xl glass-panel p-3">
      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Select Industry</p>
      <div className="space-y-1">
        {industries.map((industry) => {
          const Icon = industry.icon;
          const isActive = industry.id === active;
          return (
            <button
              key={industry.id}
              onClick={() => setActive(industry.id)}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all ${
                isActive
                  ? "bg-blue-500/15 text-white border border-blue-500/30"
                  : "text-slate-400 border border-transparent hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
              <span className="leading-tight">{industry.title}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto text-blue-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function IndustryHeader() {
  const { selected } = useIndustry();
  const SelectedIcon = selected.icon;

  return (
    <div className="rounded-2xl glass-panel p-6 md:p-8 border-t-4 border-t-blue-500">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
          <SelectedIcon className="w-8 h-8" />
        </div>
        <div>
          <div className="text-sm font-semibold text-blue-400 mb-2">{selected.tagline}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">{selected.title}</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">{selected.desc}</p>
        </div>
      </div>
    </div>
  );
}

function IndustryHighlights() {
  const { selected } = useIndustry();

  return (
    <div className="grid sm:grid-cols-3 gap-4 my-6">
      {selected.stats.map((stat, index) => (
        <div key={stat.label} className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 animate-slide-in" style={{ animationDelay: `${index * 70}ms` }}>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function IndustryServices() {
  const { selected } = useIndustry();

  return (
    <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 md:p-8">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Zap className="w-5 h-5 text-blue-400" />
        What we build for {selected.title}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {selected.services.map((service, index) => (
          <div key={service} className="flex items-start gap-3 animate-slide-in" style={{ animationDelay: `${index * 60}ms` }}>
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span className="text-slate-300 text-sm leading-relaxed">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IndustriesExplorer() {
  return (
    <IndustryProvider>
      <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
        <IndustryList />
        <div className="animate-fade-in">
          <IndustryHeader />
          <IndustryHighlights />
          <IndustryServices />
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <PrimaryLink href="/contact" icon={ArrowRight}>Start a project</PrimaryLink>
          </div>
        </div>
      </div>
    </IndustryProvider>
  );
}
