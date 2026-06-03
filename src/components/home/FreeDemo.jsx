import "../../css/FreeDemo.css";
import { motion } from "framer-motion";

import {
  FaCalendarCheck,
  FaUserTie,
  FaRocket
} from "react-icons/fa";

const DEMO_STEPS = [
  {
    icon: <FaCalendarCheck />,
    t: "Book Free Consultation",
    d: "Schedule a discussion with our experts to understand your goals."
  },
  {
    icon: <FaUserTie />,
    t: "Meet Our Experts",
    d: "Receive personalized guidance and a roadmap tailored to your career."
  },
  {
    icon: <FaRocket />,
    t: "Start Your Journey",
    d: "Begin your learning and career growth with confidence."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function FreeDemo() {
  return (
    <section className="free-demo-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="free-demo-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="free-demo-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Complimentary Consultation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Experience Our Process{" "}
            <span className="accent">Before You Commit</span>
          </motion.h2>

          <motion.p
            className="free-demo-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Schedule a free consultation to understand our approach,
            meet an expert, and evaluate how we can support your goals.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="free-demo-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {DEMO_STEPS.map((step, index) => (
            <motion.div
              key={step.t}
              className={`demo-card demo-card-${index + 1}`}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.04,
                transition: { duration: 0.25 }
              }}
              whileTap={{
                scale: 0.97
              }}
            >
              <motion.div
                className="step-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {index + 1}
              </motion.div>

              <motion.div
                className="demo-icon"
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                {step.icon}
              </motion.div>

              <h3 className="demo-title">
                {step.t}
              </h3>

              <p className="demo-description">
                {step.d}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}