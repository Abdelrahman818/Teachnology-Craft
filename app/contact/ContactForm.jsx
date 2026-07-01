"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const services = [
  { name: "IT Solutions", target: "it" },
  { name: "Web Development", target: "dev" },
  { name: "Mobile Application", target: "dev" },
  { name: "Desktop Application", target: "dev" },
  { name: "Marketing", target: "marketing" },
  { name: "Web Designing", target: "designs"},
  { name: "Graphic Designing", target: "designs" },
  { name: "Not sure yet - let's talk", target: "contact"},
];

const contactInfo = [
  { icon: Mail, label: "General", value: "contact@technology-craft.com", type: "static", link: null },
  { icon: Phone, label: "Phone", value: "+020 110 024 0856", type: "static", link: null },
  { icon: FaFacebook, label: "Facebook", value: "Click and visit Techonogy Craft Facebook page", type: "link", link: "https://web.facebook.com/profile.php?id=61565299295319" },
  { icon: FaInstagram, label: "Instagram", value: "Click and visit Technology Craft Instagram page", type: "link", link: "https://www.instagram.com/technology_craft221/?hl=en" },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) {
    errors.service = "Please select a service.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (touched[name]) {
      const nextErrors = validate(nextValues);
      setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: nextErrors[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setApiError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send message. Please try again.");
      }

      setSubmitted(true);
      setValues({ name: "", email: "", phone: "", service: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Unable to send message.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-slate-950/70 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 ${
      errors[field] && touched[field]
        ? "border-rose-400 focus:ring-rose-400/30"
        : "border-slate-800 hover:border-slate-700"
  }`;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <div className="max-w-lg">
              <div className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Start with the shortest useful version.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tell us your goal, timeline, and what already exists. We can help clarify the rest.
              </p>
            </div>

            <div className="space-y-4 mt-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                if (item.type === "link") {
                  return (
                    <Link key={item.label} href={item.link} target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl bg-slate-900/50 border border-slate-800 p-5 cursor-pointer hover:border-blue-500/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{item.label}</div>
                        <div className="text-slate-200 font-medium text-sm mt-1">{item.value}</div>
                      </div>
                    </Link>
                  );
                }
                return (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-slate-900/50 border border-slate-800 p-5">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{item.label}</div>
                      <div className="text-slate-200 font-medium text-sm mt-1">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl glass-panel p-6">
              <div className="text-sm font-semibold text-blue-400 mb-2">Response time</div>
              <p className="text-sm text-slate-400 leading-relaxed">
                We typically respond within one business day. For urgent IT support, include urgent in your message.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="min-h-[520px] rounded-2xl glass-panel p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Message sent.</h3>
                  <p className="mt-4 text-slate-400 max-w-sm">
                    Thank you for reaching out. We will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setValues({ name: "", email: "", phone: "", service: "", message: "" });
                      setTouched({});
                      setErrors({});
                    }}
                    className="mt-8 text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-2 cursor-pointer"
                  >
                    Send another message <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl glass-panel p-6 md:p-8"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("name")}
                      />
                      {errors.name && touched.name && <p className="mt-2 text-xs text-rose-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                      />
                      {errors.email && touched.email && <p className="mt-2 text-xs text-rose-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+020 110 024 0856"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("phone")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={values.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass("service")} cursor-pointer`}
                      >
                        <option disabled={true} value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.name} value={service.target}>{service.name}</option>
                        ))}
                      </select>
                      {errors.service && touched.service && <p className="mt-2 text-xs text-rose-400">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Describe your goals, constraints, timeline, and what success should look like."
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && touched.message && <p className="mt-2 text-xs text-rose-400">{errors.message}</p>}
                  </div>

                  {apiError ? <p className="text-sm text-rose-400 mb-2">{apiError}</p> : null}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold transition-all shadow-[0_0_30px_rgba(59,130,246,0.35)] cursor-pointer text-base flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending
                      </span>
                    ) : (
                      <>Send Message <ArrowRight size={18} /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
