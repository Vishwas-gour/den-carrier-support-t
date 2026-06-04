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



export default function TalentStack() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div >
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
    </div>
  );
}