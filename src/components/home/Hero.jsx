import { useEffect, useRef } from "react";
import "../../css/Hero.css";
import {
  BriefcaseBusiness,
  HeadphonesIcon,
  BookOpen,
  FileText,
  Compass,
  Globe,
  Clock,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

const TAG_ICONS = {
  "Interview Support": HeadphonesIcon,
  "Job Support": BriefcaseBusiness,
  "Cert Prep": BookOpen,
  "Resume ATS": FileText,
  "Career Consulting": Compass,
};

const TRUST_ITEMS = [
  { label: "Industry Mentors", Icon: Users },
  { label: "Real Project Exposure", Icon: Zap },
  { label: "Career-Focused Learning", Icon: BookOpen },
  { label: "Global Standards", Icon: Globe },
  { label: "Fully Confidential", Icon: ShieldCheck },
  { label: "Global Time Zones", Icon: Clock },
];



export default function Hero() {
  const counterRef = useRef(null);
  const typingRef  = useRef(null);

  /* ── Animated counter ── */
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const target = 500, duration = 1600, increment = 10;
    const delay = duration / (target / increment);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      el.textContent = current + "+";
      if (current >= target) { el.textContent = "500+"; clearInterval(timer); }
    }, delay);
    return () => clearInterval(timer);
  }, []);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const words   = ["IT Career", "Your Future", "New Skills"];
    const TYPE_MS = 80;
    const DEL_MS  = 45;
    const PAUSE   = 1800;

    let wordIdx = 0, charIdx = 0, deleting = false;
    let raf;

    const tick = () => {
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          raf = setTimeout(tick, PAUSE);
          return;
        }
        raf = setTimeout(tick, TYPE_MS);
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx  = (wordIdx + 1) % words.length;
          raf = setTimeout(tick, 320);
          return;
        }
        raf = setTimeout(tick, DEL_MS);
      }
    };

    raf = setTimeout(tick, 900);
    return () => clearTimeout(raf);
  }, []);

  const allItems = [
    ...TRUST_ITEMS, ...TRUST_ITEMS,
    ...TRUST_ITEMS, ...TRUST_ITEMS,
  ];

  return (
    <section className="hero">
      <img src="" alt="" className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay"      aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">

          {/* ── Left ── */}
          <div className="hero-left">

            <div className="hero-badge">
              <span className="hero-dot" />
              <span>IT Career Consulting &amp; Talent Enablement</span>
            </div>

            <h1 className="hero-title">
              Build a Future-Ready
              <br />
              <span className="hero-typed-wrap">
                <span className="hero-typed" ref={typingRef} />
                <span className="hero-cursor" aria-hidden="true" />
              </span>
              <br />
              with Confidence
            </h1>

            <p className="hero-subtitle">
              Expert Help. Real Solutions. Successful Delivery.
            </p>

            <p className="hero-description">
              Get real-time expert assistance from experienced professionals
              to solve complex technical challenges and deliver your projects
              successfully.
            </p>

            <div className="hero-tags">
              {Object.entries(TAG_ICONS).map(([label, Icon]) => (
                <span key={label}>
                  <Icon size={12} strokeWidth={2} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            <div className="hero-buttons">
              <button className="btn-blue">Get Started</button>
              <button className="btn-ow">Book Free Consultation →</button>
            </div>

          </div>

          {/* ── Right ── */}
          <div className="hero-right">

            {/* ── Image Showcase ── */}
            <div className="hero-image-frame">
              <div className="hero-image-glow" aria-hidden="true" />
              <div className="hero-image-ring hero-image-ring--1" aria-hidden="true" />
              <div className="hero-image-ring hero-image-ring--2" aria-hidden="true" />

              <div className="hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="IT professional in a consulting session"
                  className="hero-image"
                />
                <div className="hero-image-overlay" aria-hidden="true" />
              </div>

              {/* Floating badge — top left */}
              <div className="hero-float-badge hero-float-badge--tl">
                <div className="hfb-icon" aria-hidden="true">
                  <ShieldCheck size={14} strokeWidth={2} />
                </div>
                <div>
                  <p className="hfb-title">Trusted by</p>
                  <p className="hfb-val">500+ Professionals</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="hero-float-badge hero-float-badge--br">
                <div className="hfb-icon hfb-icon--green" aria-hidden="true">
                  <Zap size={14} strokeWidth={2} />
                </div>
                <div>
                  <p className="hfb-title">Success Rate</p>
                  <p className="hfb-val">98% Placement</p>
                </div>
              </div>

              {/* Floating dot cluster */}
              <div className="hero-dots" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="hero-dot-sm"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Hint ── */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-dot" />
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div className="hero-trustbar">
        <div className="hero-trust-container">
          {allItems.map(({ label, Icon }, i) => (
            <div className="trust-item" key={`${label}-${i}`}>
              <div className="trust-check" aria-hidden="true">
                <Icon size={10} strokeWidth={2.5} />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}