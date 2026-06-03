import "../../css/Services.css";
import { SERVICES } from "../../data/Data";
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
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="sec-label"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Core Services
          </motion.div>

          <motion.h2
            className="sec-h2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Everything you need to advance your IT career
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.25 }
                }}
                className={`service-card ${
                  service.accent
                    ? "service-card-active"
                    : ""
                }`}
              >
                {service.tag && (
                  <motion.div
                    className="service-tag"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {service.tag}
                  </motion.div>
                )}

                <motion.div
                  className="service-icon"
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon />
                </motion.div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-desc">
                  {service.desc}
                </p>

                <ul className="service-points">
                  {service.points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{
                        opacity: 0,
                        x: -15
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08
                      }}
                    >
                      <span>→</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                {service.note && (
                  <motion.div
                    className="service-note"
                    initial={{
                      opacity: 0
                    }}
                    whileInView={{
                      opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3
                    }}
                  >
                    {service.note}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}