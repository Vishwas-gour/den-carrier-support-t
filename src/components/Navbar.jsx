import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#job-support", label: "Job Support" },
    { href: "#how-it-works", label: "Process" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* ── Pill / strip ── */}
      <div className="navbar-inner">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
         
          <div className="logo-wordmark">
            <span className="logo-name"><img src={logo} alt="" />
            </span>
            <span className="logo-tag"></span>
          </div>
        </Link>

        {/* Desktop links — absolutely centred */}
        <nav className="navbar-links" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="navbar-actions">
          <button className="btn-o">Book Demo</button>
          <button className="btn-blue">Get Started</button>
        </div>

        {/* Hamburger — animated bars */}
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="mobile-menu" role="navigation" aria-label="Mobile navigation">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="mobile-divider" />
          <button className="btn-blue" onClick={() => setMenuOpen(false)}>
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}