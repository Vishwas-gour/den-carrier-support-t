import { useParams } from "react-router-dom";
import "../css/ServicePage.css";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { FAQS, SERVICE_PROCESS } from "../data/ServiceData"

import { SERVICES_PAGE_DATA } from "../data/ServiceData";
import { SUCCESS_METRICS } from "../data/Data";
import Counter from "../components/Counter";
import ServiceHero from "../components/service/ServiceHero";
import ServiceCTC from "../components/service/ServiceCTC";




export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES_PAGE_DATA.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="sp-not-found">
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="sp-page">

      {/* ── Hero ── */}
      <ServiceHero />
      {/* ── Technologies ── */}
      <section className="sp-section sp-section--light">
        <div className="sp-container">
          <div className="sp-section-head">
            <span className="sp-eyebrow">What We Cover</span>
            <h2>Technologies &amp; Tools</h2>
            <p>Expert guidance across all the core technologies you need for your role.</p>
          </div>
          <div className="sp-tech-grid">
            {service.technologies.map((tech) => (
              <div key={tech} className="sp-tech-pill">
                <span className="sp-tech-dot" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Support / How We Help ── */}
      <section className="sp-section sp-section--dark">
        <div className="sp-container">
          <div className="sp-section-head sp-section-head--dark">
            <span className="sp-eyebrow sp-eyebrow--dark">How We Help</span>
            <h2>What You Get</h2>
            <p>Hands-on expert support covering every aspect of your role.</p>
          </div>
          <div className="sp-support-grid">
            {service.support.map((item, i) => (
              <div key={item.title} className="sp-support-card">
                <span className="sp-support-num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="sp-support-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience + Benefits side-by-side ── */}
      <section className="sp-section sp-section--light">

        <div className="sp-container">
          <div className="sp-two-col">

            <div className="sp-panel">
              <span className="sp-eyebrow">For You</span>
              <h2>Who Can Benefit?</h2>
              <div className="sp-audience-list">
                {service.audience.map((item) => (

                  <div key={item.label} className="sp-audience-item">
                    <span className="sp-audience-emoji" style={{ color: "#2563EB" }} >{item.icon} </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sp-panel">
              <span className="sp-eyebrow">Our Edge</span>
              <h2>Why Choose Us?</h2>
              <div className="sp-benefits-list">
                {service.benefits.map((item) => (
                  <div key={item} className="sp-benefit-item">
                    <CheckCircle size={16} className="sp-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sp-section sp-section--dark">
        <div className="sp-container">
          <div className="sp-section-head sp-section-head--dark">
            <span className="sp-eyebrow sp-eyebrow--dark">How It Works</span>
            <h2>Our Process</h2>
            <p>A clear, four-step path from first contact to career success.</p>
          </div>
          <div className="sp-process-grid">
            {SERVICE_PROCESS.map((step, i) => (
              <div key={step.n} className="sp-process-card" style={{ "--step-delay": `${i * 0.1}s` }}>
                <span className="sp-process-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < 3 && <span className="sp-process-arrow" aria-hidden="true"><ArrowRight size={16} /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="sp-section sp-stats-section">
        <div className="sp-container">
          <div className="sp-stats-grid">
            {SUCCESS_METRICS.map((item) => (
              <div className="sp-stat-block" key={item.label}>
                <div className="sp-stat-icon">{item.icon}</div>
                <h2><Counter end={item.end} suffix={item.suffix} />
                </h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-section sp-section--light">
        <div className="sp-container sp-container--narrow">
          <div className="sp-section-head">
            <span className="sp-eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="sp-faq-list">
            {FAQS.map((faq) => (
              <details key={faq.q} className="sp-faq-item">
                <summary className="sp-faq-q">
                  {faq.q}
                  <ChevronDown size={18} className="sp-faq-chevron" />
                </summary>
                <p className="sp-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ServiceCTC />

    </div>
  );
}