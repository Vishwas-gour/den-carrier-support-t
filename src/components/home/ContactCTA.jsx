import "../../css/ContactCTA.css";
import { motion } from "framer-motion";

import {
  FiCalendar,
  FiBriefcase,
  FiZap,
  FiShield,
  FiGlobe,
  FiClock,
  FiMessageCircle,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const ENGAGEMENT_MODELS = [
  "Hourly",
  "Part-time",
  "Full-time",
  "Project-based"
];

const TRUST_BADGES = [
  {
    icon: <FiZap />,
    label: "Quick Response"
  },
  {
    icon: <FiShield />,
    label: "Trusted Support"
  },
  {
    icon: <FiGlobe />,
    label: "Global Reach"
  }
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function ContactCTA() {
  return (
    <section id="contact" className="contact-cta-section">

      <div
        className="cta-bg-blob cta-bg-blob--1"
        aria-hidden="true"
      />

      <div
        className="cta-bg-blob cta-bg-blob--2"
        aria-hidden="true"
      />

      <div className="container">

        <motion.div
          className="contact-cta-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
        >

          {/* LEFT SIDE */}

          <motion.div
            className="contact-content"
            variants={fadeUp}
          >

            <motion.div
              className="cta-eyebrow"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5
              }}
            >
              <span
                className="cta-eyebrow-dot"
                aria-hidden="true"
              />
              Free Consultation Available
            </motion.div>

            <motion.h2
              className="contact-title"
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2,
                duration: 0.7
              }}
            >
              Start Your IT Career
              <br />
              <span className="contact-title-accent">
                Transformation
              </span>{" "}
              Today
            </motion.h2>

            <motion.p
              className="contact-description"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4,
                duration: 0.7
              }}
            >
              A free consultation is all it takes to get your
              personalized roadmap. Quick Response · Reliable
              Support · Trusted by Professionals.
            </motion.p>

            <motion.div
              className="contact-buttons"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.5
              }}
            >

              <motion.button
                className="btn-blue"
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{
                  scale: 0.97
                }}
              >
                <FiCalendar
                  className="btn-icon"
                  aria-hidden="true"
                />
                Book Consultation
              </motion.button>

              <motion.button
                className="btn-ow"
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{
                  scale: 0.97
                }}
              >
                <FiBriefcase
                  className="btn-icon"
                  aria-hidden="true"
                />
                Talk to an Expert
              </motion.button>

            </motion.div>

            <motion.div
              className="trust-badges"
              variants={stagger}
            >
              {TRUST_BADGES.map((badge) => (
                <motion.div
                  key={badge.label}
                  className="trust-badge"
                  variants={fadeUp}
                  whileHover={{
                    y: -4
                  }}
                >
                  <span
                    className="trust-badge-icon"
                    aria-hidden="true"
                  >
                    {badge.icon}
                  </span>

                  <span>
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="contact-card"
            variants={fadeUp}
            whileHover={{
              y: -8
            }}
          >

            <div className="contact-card-header">

              <motion.div
                className="wa-avatar"
                aria-hidden="true"
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiMessageCircle className="wa-avatar-icon" />
              </motion.div>

              <div>

                <div className="contact-label">
                  Connect on WhatsApp
                </div>

                <div className="online-badge">
                  <span
                    className="online-dot"
                    aria-hidden="true"
                  />
                  Online Now
                </div>

              </div>

            </div>

            <motion.div
              className="contact-number"
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3
              }}
            >
              +91 7387 563439
            </motion.div>

            <motion.a
              href="https://wa.me/917382727507"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wa-btn"
              whileHover={{
                scale: 1.04
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              <FaWhatsapp
                className="wa-icon"
                aria-hidden="true"
              />
              Chat on WhatsApp
            </motion.a>

            <div className="engagement-section">

              <div className="engagement-title">
                Engagement Models
              </div>

              <div className="engagement-tags">

                {ENGAGEMENT_MODELS.map((model) => (
                  <motion.span
                    key={model}
                    className="engagement-tag"
                    whileHover={{
                      scale: 1.08
                    }}
                  >
                    {model}
                  </motion.span>
                ))}

              </div>

            </div>

            <motion.div
              className="response-note"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.6
              }}
            >
              <FiClock
                className="response-note-icon"
                aria-hidden="true"
              />
              Typical response within 30 minutes
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}