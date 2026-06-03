import { useState, useEffect } from "react";
import Hero from "../components/home/Hero.jsx";
import Technologies from "../components/home/Technologies.jsx";
import FreeDemo from "../components/home/FreeDemo.jsx";
import JobSupport from "../components/home/JobSupport.jsx";
import Services from "../components/home/Services.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import TechDomains from "../components/home/TechDomains.jsx";
import TrustBadges from "../components/home/TrustBadges.jsx";
import GlobalCoverage from "../components/home/GlobalCoverage.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import ContactCTA from "../components/home/ContactCTA.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function useInView(ref, threshold = 0.1) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}




export default function TalentStack() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div >
      <Navbar />
      <Hero />
      <Technologies />
      <FreeDemo />
      <JobSupport />
      <Services />
      <HowItWorks />
      <WhyUs />
      <TechDomains />
      <TrustBadges />
      <GlobalCoverage />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}