import { useEffect, } from "react";
import "../../css/JobSupport.css";
import { JOB_SUPPORT, TRAINING } from "../../data/Data";
import { FaGlobeAmericas, FaLock } from "react-icons/fa";

/* ── tiny hook: adds "visible" class when element enters viewport ── */
function useReveal(selector, options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

export default function JobSupport() {
  /* reveal columns */
  useReveal(".col-enter");

  /* stagger job-support cards */
  useEffect(() => {
    const cards = document.querySelectorAll(".job-support-card");
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

  /* stagger training cards */
  useEffect(() => {
    const cards = document.querySelectorAll(".training-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = [...cards].indexOf(e.target);
            setTimeout(() => e.target.classList.add("visible"), idx * 90);
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
    <section id="job-support" className="job-support-section">
      <div className="container">
        <div className="job-support-grid">

          {/* ── LEFT: Job Support ───────────────────────── */}
          <div className="col-enter">

            <div className="sec-label">
              Interview &amp; Job Support
            </div>

            <h2 className="sec-h2">
              Our Interview &amp;{" "}
              <br />
              <span className="grad">Job Support</span> Includes
            </h2>

            <p className="job-support-desc">
              Real-time expert assistance for interviews,
              assessments, certifications, and daily work tasks.
            </p>

            <div className="job-support-list">
              {JOB_SUPPORT.map((item) => (
                <div key={item.t} className="job-support-card">
                  <div
                    className="job-support-icon"
                    style={{ color: item.iconColor, background: item.bgColor }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.t}</h4>
                    <p>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="job-support-footer">
              WORK SUPPORT&nbsp;•&nbsp;INTERVIEWS&nbsp;•&nbsp;TESTS&nbsp;•&nbsp;EXAMS
            </div>

            <div className="job-support-tags">
              <span>
                <FaGlobeAmericas className="tag-icon globe-icon" />
                Global Time Zones
              </span>
              <span>
                <FaLock className="tag-icon lock-icon" />
                Fully Confidential
              </span>
            </div>

          </div>

          {/* ── RIGHT: Training ─────────────────────────── */}
          <div className="col-enter">

            <div className="sec-label">
              Training &amp; Upskilling
            </div>

            <h2 className="sec-h2">
              Training &amp;{" "}
              <br />
              <span className="grad">Upskilling</span> We Offer
            </h2>

            <p className="job-support-desc">
              Practical, industry-relevant training delivered by
              experienced professionals.
            </p>

            <div className="training-highlight">
              <h3>Upskill. Grow. Succeed.</h3>
            </div>

            <div className="training-grid">
              {TRAINING.map((item) => (
                <div key={item.t} className="training-card">
                  <div
                    className="training-icon"
                    style={{ color: item.iconColor, background: item.bgColor }}
                  >
                    {item.icon}
                  </div>
                  <h4 className={item.accent ? "accent-title" : ""}>
                    {item.t}
                  </h4>
                  <p>{item.d}</p>
                </div>
              ))}
            </div>

            <button className="btn-blue training-btn">
              Begin Your Learning Journey Today →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}