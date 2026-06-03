import "../css/Footer.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowUpRight,
  FiShield,
} from "react-icons/fi";

const QUICK_LINKS = [
  { href: "#services",     label: "Services"     },
  { href: "#job-support",  label: "Job Support"  },
  { href: "#how-it-works", label: "Process"      },
  { href: "#why-us",       label: "Why Us"       },
  { href: "#contact",      label: "Contact"      },
];

const SERVICES = [
  "Resume Building",
  "Mock Interviews",
  "Career Roadmap",
  "IT Consulting",
  "Certification Prep",
];

const SOCIALS = [
  { icon: <FiLinkedin />,  href: "#", label: "LinkedIn"  },
  { icon: <FiTwitter />,   href: "#", label: "Twitter"   },
  { icon: <FiInstagram />, href: "#", label: "Instagram" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy"  },
  { href: "#", label: "Terms of Use"    },
  { href: "#", label: "Cookie Policy"   },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* ── Top grid ── */}
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-col footer-col--brand">
              <div className="footer-logo">
                <div className="logo-box">CT</div>
                <span className="logo-text">Cloudffusion technologies</span>
              </div>
              <p className="footer-tagline">
                Empowering IT professionals with expert guidance,
                career support, and real-world readiness across global markets.
              </p>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-btn"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-list">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="footer-list-link">
                      <FiArrowUpRight className="footer-list-icon" aria-hidden="true" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Services</h3>
              <ul className="footer-list">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <a href="#services" className="footer-list-link">
                      <FiArrowUpRight className="footer-list-icon" aria-hidden="true" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h3 className="footer-col-title">Get in Touch</h3>
              <ul className="footer-contact-list">
                <li>
                  <FiPhone className="footer-contact-icon" aria-hidden="true" />
                  <a href="tel:+917382727507">+91 73875-63439</a>
                </li>
                <li>
                  <FiMail className="footer-contact-icon" aria-hidden="true" />
                  <a href="mailto:hello@talentstack.io">hello@talentstack.io</a>
                </li>
                <li>
                  <FiMapPin className="footer-contact-icon" aria-hidden="true" />
                  <span>India &amp; Worldwide</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Disclaimer ── */}
          <div className="footer-disclaimer">
            <FiShield className="disclaimer-icon" aria-hidden="true" />
            <p>
              TalentStack Technologies provides training, guidance, and career
              support services. We do not guarantee job placement or
              certification outcomes. Results may vary based on individual
              effort and market conditions.
            </p>
          </div>

          <div className="footer-divider" />

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <span className="footer-copyright">
              © {new Date().getFullYear()} TalentStack Technologies. All rights reserved.
            </span>
            <div className="footer-links">
              {LEGAL_LINKS.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}