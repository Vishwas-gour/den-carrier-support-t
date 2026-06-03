import "../../css/GlobalCoverage.css";
import { motion } from "framer-motion";

const GLOBAL = [
  { label: "USA", code: "us" },
  { label: "Canada", code: "ca" },
  { label: "UK", code: "gb" },
  { label: "Australia", code: "au" },
  { label: "India", code: "in" },
  { label: "Worldwide", code: "world" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function GlobalCoverage() {
  return (
    <section className="gc-section">
      <div className="gc-bg-ring gc-bg-ring--top" aria-hidden="true" />
      <div className="gc-bg-ring gc-bg-ring--bottom" aria-hidden="true" />

      <div className="container">

        <motion.div
          className="gc-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="gc-label"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="gc-pulse-dot" aria-hidden="true" />
            Global Presence
          </motion.div>

          <motion.h2
            className="gc-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Supporting Professionals Across
            <br />
            Major Global Markets
          </motion.h2>

          <motion.p
            className="gc-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Our consultants provide guidance and support to professionals
            working across North America, Europe, Asia-Pacific,
            the Middle East, and other international regions.
          </motion.p>

          <motion.div
            className="gc-sub2-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <span className="gc-divider" aria-hidden="true" />
            <span className="gc-sub2">
              Global support &amp; job assistance across
            </span>
            <span className="gc-divider" aria-hidden="true" />
          </motion.div>
        </motion.div>

        <motion.div
          className="gc-strip"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {GLOBAL.map((country, i) => (
            <motion.div
              key={country.code}
              className="country-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: {
                  duration: 0.25
                }
              }}
            >
              <motion.div
                className="flag-wrap"
                whileHover={{
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 0.5
                }}
              >
                <img
                  className="flag-img"
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.label} flag`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML =
                      '<span class="flag-fallback">🌍</span>';
                  }}
                />
              </motion.div>

              <span className="country-name">
                {country.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}