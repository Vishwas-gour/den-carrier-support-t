import "../../css/Technologies.css";
import { motion } from "framer-motion";

import {
  FaJava,
  FaAws,
  FaMicrosoft,
  FaDocker
} from "react-icons/fa";

import {
  SiMulesoft,
  SiSalesforce,
  SiTestinglibrary,
  SiDotnet,
} from "react-icons/si";

import { FaChartPie } from "react-icons/fa";

import {
  MdDataObject,
  MdOutlineAutoGraph
} from "react-icons/md";

import {
  GiArtificialIntelligence
} from "react-icons/gi";

const TECHS = [
  {
    label: "Java",
    color: "#f89820",
    icon: <FaJava />
  },
  {
    label: ".NET",
    color: "#512BD4",
    icon: <SiDotnet />
  },
  {
    label: "QA / Testing",
    color: "#22c55e",
    icon: <SiTestinglibrary />
  },
  {
    label: "DevOps",
    color: "#326CE5",
    icon: <FaDocker />
  },
  {
    label: "AWS",
    color: "#FF9900",
    icon: <FaAws />
  },
  {
    label: "Azure",
    color: "#0078D4",
    icon: <FaMicrosoft />
  },
  {
    label: "Salesforce",
    color: "#00A1E0",
    icon: <SiSalesforce />
  },
  {
    label: "MuleSoft",
    color: "#00A1E0",
    icon: <SiMulesoft />
  },
  {
    label: "Data Engineering",
    color: "#00BFFF",
    icon: <MdDataObject />
  },
  {
    label: "Data Science",
    color: "#FF6F00",
    icon: <MdOutlineAutoGraph />
  },
  {
    label: "Machine Learning",
    color: "#FF6F61",
    icon: <GiArtificialIntelligence />
  },
  {
    label: "Power BI",
    color: "#F2C811",
    icon: <FaChartPie />
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
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
      duration: 0.5
    }
  }
};

export default function Technologies() {
  return (
    <section id="technologies" className="tech-section">
      {/* Background Effects */}
      <div className="tech-bg-grid" aria-hidden="true" />
      <div className="tech-blob tech-blob--a" aria-hidden="true" />
      <div className="tech-blob tech-blob--b" aria-hidden="true" />

      <div className="tech-container">

        {/* Header */}
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="tech-eyebrow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technology Domains
          </motion.span>

          <motion.h2
            className="tech-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Build Expertise Across
            <br />
            Leading Technologies
          </motion.h2>

          <motion.p
            className="tech-sub"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Industry-focused training and career guidance across
            enterprise applications, cloud computing, data engineering,
            analytics, and AI-driven technologies.
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {TECHS.map((tech) => (
            <motion.div
              key={tech.label}
              className="tech-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: {
                  duration: 0.25
                }
              }}
              whileTap={{
                scale: 0.97
              }}
              style={{
                "--card-color": tech.color,
                "--card-glow": `${tech.color}55`
              }}
            >
              {/* Glow Halo */}
              <span
                className="tc-halo"
                aria-hidden="true"
              />

              {/* Bottom Accent */}
              <span
                className="tc-line"
                aria-hidden="true"
              />

              {/* Decorative Dots */}
              <span
                className="tc-spark tc-spark--tl"
                aria-hidden="true"
              />

              <span
                className="tc-spark tc-spark--br"
                aria-hidden="true"
              />

              {/* Icon */}
              <motion.span
                className="tc-icon"
                animate={{
                  y: [0, -4, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {tech.icon}
              </motion.span>

              {/* Label */}
              <span className="tc-label">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}