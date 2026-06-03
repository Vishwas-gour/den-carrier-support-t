import { useEffect } from "react";
import "../../css/WhyUs.css";
import { WHY } from "../../data/Data";

export default function WhyUs() {

  /* left column — slides in from left */
  useEffect(() => {
    const el = document.querySelector(".why-us-content");
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* right cards — staggered slide-in from right */
  useEffect(() => {
    const cards = document.querySelectorAll(".why-card");
    if (!cards.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = [...cards].indexOf(e.target);
            setTimeout(() => e.target.classList.add("visible"), idx * 100);
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
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="why-us-grid">

          {/* ── Left ─────────────────────────────────── */}
          <div className="why-us-content">

            <div className="sec-label">
              Why TalentStack
            </div>

            <h2 className="sec-h2">
              We don't just train —
              <br />
              <span className="highlight-text">
                we build careers.
              </span>
            </h2>

            <p className="why-us-description">
              Our approach is rooted in real-world relevance.
              Every session is designed to move you closer
              to your professional goals.
            </p>

            <div className="goal-box">
              <h4>Our Goal is Simple:</h4>
              <p>
                To help you deliver your work
                <strong> confidently and successfully.</strong>
              </p>
            </div>

            <button className="btn-blue">
              Learn More About Us
            </button>

          </div>

          {/* ── Right ────────────────────────────────── */}
          <div className="why-list">
  {WHY.map((item, index) => {
    const Icon = item.icon;

    return (
      <div key={item.t} className="why-card">

        <div
          className={`why-icon ${
            index % 2 === 0 ? "icon-blue" : "icon-gray"
          }`}
        >
          <Icon />
        </div>

        <div>
          <h4>{item.t}</h4>
          <p>{item.d}</p>
        </div>

      </div>
    );
  })}
</div>

        </div>
      </div>
    </section>
  );
}