import { BookOpen, Star, Users, Zap } from "lucide-react";
import {
  FaMicrophoneAlt,
  FaLaptopCode,
  FaFileAlt,
  FaTrophy,
  FaLightbulb,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaTools,
  FaCertificate,
  FaChartLine,
  FaUserTie,
  FaHeadset,
  FaCompass,
  FaUserFriends,
  FaAward,
  FaCode,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaCheckCircle,
  FaBuilding,
  FaMobileAlt,
  FaClock,
  FaLock, FaThumbsUp,
  FaShieldAlt
} from "react-icons/fa";


import { FiGlobe, FiShield, FiZap } from "react-icons/fi";

import { MdVerifiedUser } from "react-icons/md";
export const TECHS = [
  { label: "Java", icon: "☕" }, { label: "Data Engineering", icon: "🗄️" }, { label: "QA / Testing", icon: "✅" },
  { label: "DevOps", icon: "♾️" }, { label: "Data Science", icon: "📊" }, { label: "Machine Learning", icon: "🧠" },
  { label: ".NET", icon: "🔷" }, { label: "Power BI", icon: "📈" }, { label: "MuleSoft", icon: "🔗" },
  { label: "Salesforce", icon: "⚡" }, { label: "AWS / Azure", icon: "☁️" }, { label: "& More", icon: "➕" },
];

export const DEMO_STEPS = [
  { icon: "🏗️", t: "Understand Your Project Architecture", d: "We study your project structure and technical setup." },
  { icon: "📋", t: "Review Your Client Requirements", d: "We go through the requirements to understand your expectations." },
  { icon: "🤝", t: "Explain How We Can Support You", d: "Our expert explains the approach and how we can help you." },
];



export const JOB_SUPPORT = [
  {
    icon: <FaMicrophoneAlt />,
    iconColor: "#2563EB",
    bgColor: "#EFF6FF",
    t: "Interview Prepration",
    d: "Real-time expert support during your interviews across all platforms."
  },
  {
    icon: <FaLaptopCode />,
    iconColor: "#7C3AED",
    bgColor: "#F3E8FF",
    t: "Test Support",
    d: "LeetCode, HackerRank, Mettl, Codility, and technical assessment assistance."
  },
  {
    icon: <MdVerifiedUser />,
    iconColor: "#16A34A",
    bgColor: "#DCFCE7",
    t: "Certification Preparation Support",
    d: "Get help for online certifications and proctored examinations."
  },
  {
    icon: <FaFileAlt />,
    iconColor: "#F59E0B",
    bgColor: "#FEF3C7",
    t: "Resume Help — ATS & SP Format",
    d: "Professionally written ATS-optimized resumes."
  },
  {
    icon: <FaTrophy />,
    iconColor: "#DC2626",
    bgColor: "#FEE2E2",
    t: "Full Job Support — End to End",
    d: "From resume to offer letter — we support you until you get placed."
  }
];

export const TRAINING = [
  {
    icon: <FaLightbulb />,
    iconColor: "#2563EB",
    bgColor: "#EFF6FF",
    t: "Popular Technologies",
    d: "Java, Python, Data Science, DevOps, Cloud, .NET, Power BI, SQL, QA & More",
    accent: true
  },
  {
    icon: <FaChalkboardTeacher />,
    iconColor: "#7C3AED",
    bgColor: "#F3E8FF",
    t: "Expert Trainers",
    d: "Trainers with 8+ years of industry experience",
    accent: true
  },
  {
    icon: <FaCalendarAlt />,
    iconColor: "#16A34A",
    bgColor: "#DCFCE7",
    t: "Flexible Schedule",
    d: "Weekday / Weekend Batches — Online / Offline",
    accent: true
  },
  {
    icon: <FaTools />,
    iconColor: "#F59E0B",
    bgColor: "#FEF3C7",
    t: "Hands-on Learning",
    d: "Real-time projects, practical exercises & real-world examples"
  },
  {
    icon: <FaCertificate />,
    iconColor: "#EC4899",
    bgColor: "#FCE7F3",
    t: "Certification Assistance",
    d: "Guidance to help you achieve recognized certifications"
  },
  {
    icon: <FaChartLine />,
    iconColor: "#DC2626",
    bgColor: "#FEE2E2",
    t: "Career Support",
    d: "Resume guidance, interview preparation & job support"
  }
];



export const SERVICES = [
  {
    icon: FaCertificate,
    tag: "Most Popular",
    title: "Certification Preparation",
    desc: "Structured support to help you confidently prepare for globally recognized IT certifications.",
    points: [
      "Guided learning paths — AWS, Salesforce, QA, Data, DevOps",
      "Practice questions & mock tests",
      "Real-world scenario-based learning",
      "Expert mentorship & doubt-solving"
    ],
    note: "We focus on helping you understand concepts and prepare effectively for certification success.",
    accent: true
  },
  {
    icon: FaFileAlt,
    title: "Resume & LinkedIn Optimization",
    desc: "Build a strong professional presence that gets recruiter attention.",
    points: [
      "ATS-friendly resumes",
      "Project-based resume building",
      "LinkedIn profile enhancement",
      "Keyword optimization for visibility"
    ],
    note: "Our goal is to help you present your skills and experience in the most professional way possible."
  },
  {
    icon: FaUserTie,
    title: "Interview Preparation",
    desc: "Crack interviews with confidence through real-time mock sessions.",
    points: [
      "Technical + HR mock interviews",
      "Domain-specific questions",
      "Personalized feedback",
      "Communication & confidence building"
    ],
    note: "Practice-driven sessions designed to improve performance, confidence, and interview readiness."
  },
  {
    icon: FaHeadset,
    title: "Real-Time Job Support",
    desc: "Hands-on guidance to help you perform effectively in your role.",
    points: [
      "Assistance with live tasks & workflows",
      "Tool-based support — AWS, SQL, Salesforce",
      "Understanding real project environments",
      "Daily/weekly support plans"
    ],
    note: "Support is focused on knowledge sharing, best practices, and helping professionals navigate workplace challenges."
  },
  {
    icon: FaCompass,
    title: "Career Consulting",
    desc: "Get clarity on the right path based on your background and goals.",
    points: [
      "Career roadmap planning",
      "Domain selection guidance",
      "Skill gap analysis"
    ],
    note: "Personalized guidance to help you make informed career decisions and achieve long-term growth."
  }
];
export const STEPS = [
  { n: "01", t: "Book a Consultation", d: "Start with a free session to discuss your background." },
  { n: "02", t: "Get Your Roadmap", d: "Receive a custom plan tailored to your domain." },
  { n: "03", t: "Training & Cert Prep", d: "Guided learning, mock tests, mentor sessions." },
  { n: "04", t: "Resume + Interviews", d: "Polish your profile and practice until confident." },
  { n: "05", t: "Ongoing Support", d: "Continued guidance as you step into your role." },
];

export const WHY = [
  {
    icon: FaUserTie,
    t: "Industry-Experienced Mentors",
    d: "Real practitioners who have done the work."
  },
  {
    icon: FaLaptopCode,
    t: "Practical, Real-World Approach",
    d: "Every session tied to actual job scenarios."
  },
  {
    icon: FaUserFriends,
    t: "One-on-One Guidance",
    d: "No batches. Your pace, your goals."
  },
  {
    icon: FaChartLine,
    t: "Focus on Long-Term Success",
    d: "We invest in your career, not just a course."
  },
  {
    icon: FaShieldAlt,
    t: "Ethical & Transparent",
    d: "No false promises. Honest, hard-earned results."
  }
];



export const TECH_DOMAINS = [
  {
    icon: FaCode,
    cat: "Software Development",
    items: [
      "Java, .NET, Python, C/C++",
      "JavaScript (Angular, React, Node.js, Vue.js)",
      "Spring Boot, Microservices",
      "PHP, Ruby on Rails"
    ]
  },
  {
    icon: FaCloud,
    cat: "Cloud & DevOps",
    items: [
      "AWS, Azure, GCP",
      "Docker, Kubernetes",
      "Terraform, Jenkins, CI/CD",
      "Ansible, OpenShift"
    ]
  },
  {
    icon: FaDatabase,
    cat: "Data & Analytics",
    items: [
      "SQL, Power BI, Tableau",
      "Data Warehousing",
      "Big Data (Hadoop, Spark, Kafka), Snowflake"
    ]
  },
  {
    icon: FaBrain,
    cat: "AI / ML & Data Science",
    items: [
      "Machine Learning, Deep Learning, NLP",
      "Computer Vision",
      "Predictive Analytics"
    ]
  },
  {
    icon: FaCheckCircle,
    cat: "Testing & QA",
    items: [
      "Selenium, Automation",
      "Manual, API Testing",
      "Performance Testing",
      "Security Testing"
    ]
  },
  {
    icon: FaBuilding,
    cat: "Enterprise Solutions",
    items: [
      "SAP S/4HANA, SAP Fiori",
      "Salesforce CRM & Lightning",
      "ServiceNow Platform",
      "Oracle ERP & Fusion Applications"
    ]
  },
  {
    icon: FaShieldAlt,
    cat: "Cybersecurity & Networking",
    items: [
      "Ethical Hacking & Penetration Testing",
      "SOC & SIEM (Splunk, QRadar)",
      "Network Security & Firewalls",
      "Cloud Security & Identity Management"
    ]
  },
  {
    icon: FaMobileAlt,
    cat: "Mobile & Emerging Tech",
    items: [
      "Android & iOS Development",
      "React Native & Flutter",
      "Blockchain & Web3",
      "IoT & Edge Computing"
    ]
  }
];




export const GLOBAL = [
  { flag: "🇺🇸", label: "USA" },
  { flag: "🇨🇦", label: "Canada" },
  { flag: "🇬🇧", label: "UK" },
  { flag: "🇦🇺", label: "Australia" },
  { flag: "🇮🇳", label: "India" },
  { flag: "🌍", label: "Worldwide" },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Java Full Stack Developer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    q: "The guidance was practical and focused on real interview scenarios. It helped me gain confidence and secure a better opportunity."
  },
  {
    name: "Priya Verma",
    role: "Cloud Engineer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    q: "Excellent support for certifications and project work. The mentoring approach was personalized and very effective."
  },
  {
    name: "Amit Patel",
    role: "DevOps Engineer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    q: "Professional guidance, quick responses, and real-world expertise. Highly recommended for career growth."
  }
];



export const SUCCESS_METRICS = [
  { end: 500, suffix: "+", label: "Professionals Guided", "icon": < Users size={22} /> },
  { end: 1000, suffix: "+", label: "Mock Interviews", "icon": <BookOpen size={22} /> },
  { end: 50, suffix: "+", label: "Technologies Supported", "icon": <Zap size={22} /> },
  { end: 95, suffix: "%", label: "Client Satisfaction", "icon": <Star size={22} /> },
];


export const ENGAGEMENT_MODELS = [
  "Hourly",
  "Part-time",
  "Full-time",
  "Project-based"
];
// ===============================
export const SERVICE_TRUST_BADGES = [
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
export const TRUST_BADGES = [
  {
    icon: FaShieldAlt,
    t: "Reliable Support",
    d: "Dedicated guidance from experienced professionals whenever you need assistance."
  },
  {
    icon: FaAward,
    t: "Quality Service",
    d: "High standards, practical expertise, and consistent support for every engagement."
  },
  {
    icon: FaClock,
    t: "Flexible Engagement",
    d: "Choose hourly, part-time, or full-time support based on your requirements."
  },
  {
    icon: FaLock,
    t: "100% Confidential",
    d: "Your information, projects, and discussions remain private and secure."
  },
  {
    icon: FaThumbsUp,
    t: "Client Satisfaction",
    d: "Focused on delivering value, measurable outcomes, and long-term success."
  }
];

export  const fadeUp = {
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

export  const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};