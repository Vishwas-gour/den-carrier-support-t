import { useEffect } from "react";
import "../../css/TechDomains.css";
import { TECH_DOMAINS } from "../../data/Data";

export default function TechDomains() {

  /* staggered scroll reveal */
  useEffect(() => {
    const cards = document.querySelectorAll(".domain-card");
    if (!cards.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = [...cards].indexOf(e.target);
            setTimeout(() => e.target.classList.add("visible"), idx * 80);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="tech-domains" className="tech-domains-section">
      <div className="container">

        <div className="tech-domains-header">
          <div className="tech-domains-label">
            Full Coverage
          </div>

          <h2 className="sec-h2-w">
            Technologies &amp;{" "}
            <span className="grad">Domains</span> Covered
          </h2>
        </div>

        <div className="tech-domains-grid">
          {TECH_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <div key={domain.cat} className="domain-card">

                <div className="domain-icon">
                  <Icon />
                </div>

                <h3 className="domain-title">
                  {domain.cat}
                </h3>

                <div className="domain-items">
                  {domain.items.map((item) => (
                    <div key={item} className="domain-item">
                      <span className="domain-dot">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}