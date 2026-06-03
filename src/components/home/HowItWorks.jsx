import { useEffect } from "react";
import "../../css/HowItWorks.css";
import { STEPS } from "../../data/Data";

export default function HowItWorks() {

  /* staggered scroll reveal for each step card */
  useEffect(() => {
    const cards = document.querySelectorAll(".step-item");
    if (!cards.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = [...cards].indexOf(e.target);
            setTimeout(() => e.target.classList.add("visible"), idx * 110);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">

        <div className="how-it-works-header">
          <div className="sec-label center">
            Our Process
          </div>

          <h2 className="sec-h2 center">
            A Simple &amp;{" "}
            <span className="grad">Transparent</span>{" "}
            Engagement Process
          </h2>
        </div>

        <div className="steps-grid">
          {STEPS.map((step, index) => (
            <div key={step.n} className="step-item">

              {/* connector to next card */}
              {index !== STEPS.length - 1 && (
                <div className="step-line" />
              )}

              <div className="step-number">
                {step.n}
              </div>

              <h4 className="step-title">
                {step.t}
              </h4>

              <p className="step-description">
                {step.d}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}