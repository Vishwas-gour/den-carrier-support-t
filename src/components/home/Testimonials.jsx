import "../../css/Testimonials.css";
import { TESTIMONIALS } from "../../data/Data";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">

        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="sec-label center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What People Say
          </motion.div>

          <motion.h2
            className="sec-h2 center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Real outcomes, real people
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: {
                  duration: 0.25
                }
              }}
            >

              <motion.div
                className="quote-icon"
                animate={{
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "
              </motion.div>

              <div className="rating-row">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </div>

              <p className="testimonial-text">
                {item.q}
              </p>

              <div className="testimonial-user">

                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="user-avatar"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
} 