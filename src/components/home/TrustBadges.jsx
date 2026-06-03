import "../../css/TrustBadges.css";
import { TRUST_BADGES } from "../../data/Data";
import { motion } from "framer-motion";

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
    y: 50,
    scale: 0.95
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

export default function TrustBadges() {
  return (
    <section className="trust-badges-section">
      <div className="container">

        <motion.div
          className="trust-badges-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="sec-label"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Why Professionals Trust Us
          </motion.div>

          <motion.h2
            className="sec-h2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trusted by Professionals Seeking
            Reliable Career & Technical Support
          </motion.h2>

          <motion.p
            className="trust-badges-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            We combine industry expertise, practical guidance,
            and personalized support to help professionals
            confidently navigate interviews, projects,
            certifications, and career growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="trust-badges-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TRUST_BADGES.map((badge, index) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={badge.t}
                className="trust-badge-card"
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.25 }
                }}
              >
                <motion.div
                  className="trust-badge-icon"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <Icon />
                </motion.div>

                <h3 className="trust-badge-title">
                  {badge.t}
                </h3>

                <p className="trust-badge-desc">
                  {badge.d}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}