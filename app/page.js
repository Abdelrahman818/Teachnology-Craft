import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import Status from "../components/Home/Status";
import HomeServices from "../components/Home/Services";
import WhyUs from "../components/Home/WhyUs";
import Process from "../components/Home/Process";
import CTA from "../components/Home/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden selection:bg-blue-500/30">
      <NavBar />
      <Hero />
      <Status />
      <HomeServices />
      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
