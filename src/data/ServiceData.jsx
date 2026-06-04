
import {
    FaUserTie,
    FaExchangeAlt,
    FaGraduationCap,
    FaBriefcase,
    FaCloud,
    FaCog,
    FaLaptopCode,
    FaServer,
    FaChartBar,
    FaFlask,
    FaRobot,
} from "react-icons/fa";

// slug: "salesforce-job-support",
// slug: "aws-job-support",
// slug: "  devops-job-support"
// slug: "data-engineer-job-support",
// slug: "qa-job-support",
// slug: "power-bi-training",
// slug: "resume-services",

//
        
export const SERVICES_PAGE_DATA = [
    {
        slug: "salesforce-job-support",

        title: "Salesforce Job Support",

        badge: "Most Popular",
        description:
            "Get real-time Salesforce project assistance from experienced professionals. Navigate complex configurations, deployments, and client requirements with confidence.",
        technologies: ["Apex", "LWC", "Visualforce", "SOQL", "SOSL", "Flows", "Integrations", "Deployment"],
        support: [
            { title: "Live Project Support", desc: "Real-time expert guidance while you work — from daily tasks to complex project deliverables." },
            { title: "Production Issue Fixing", desc: "Rapid diagnosis and resolution of critical bugs, failures, and system errors before they impact your clients." },
            { title: "Deployment Assistance", desc: "Step-by-step help with sandbox to production deployments, change sets, and release management." },
            { title: "Client Meeting Guidance", desc: "Prepare confidently for stakeholder calls, demos, and requirement discussions with expert coaching." },
            { title: "Code Review", desc: "Professional review of your Apex, LWC, and integration code with actionable improvement feedback." },
        ],
        audience: [
            { label: "Working Professionals", icon: <FaUserTie /> },
            { label: "Career Switchers", icon: <FaExchangeAlt /> },
            { label: "Freshers", icon: <FaGraduationCap /> },
            { label: "Consultants", icon: <FaBriefcase /> },
        ],
        benefits: ["One-on-one mentoring", "Flexible timing", "Confidential support", "Interview preparation"],
    },
    {
        slug: "aws-job-support",

        title: "AWS Job Support",
        badge: "Cloud Expert",
        description:
            "Professional AWS support for cloud engineers and developers. Master cloud infrastructure, deployments, and security with guidance from certified AWS professionals.",
        technologies: ["EC2", "S3", "IAM", "Lambda", "RDS", "VPC", "CloudWatch", "EKS"],
        support: [
            { title: "Deployment Assistance", desc: "Hands-on help with EC2 provisioning, container deployments, and serverless functions." },
            { title: "Infrastructure Management", desc: "Design, optimize, and maintain scalable, cost-effective AWS infrastructure." },
            { title: "Production Support", desc: "Immediate response for outages, performance degradation, and incident resolution." },
            { title: "Security Implementation", desc: "Configure IAM roles, VPCs, and security groups to meet compliance and best practices." },
            { title: "Troubleshooting", desc: "Systematic diagnosis of configuration errors, connectivity issues, and service failures." },
        ],
        audience: [
            { label: "Cloud Engineers", icon: <FaCloud /> },
            { label: "DevOps Engineers", icon: <FaCog /> },
            { label: "Developers", icon: <FaLaptopCode /> },
        ],
        benefits: ["Industry experts", "Flexible schedules", "Hands-on support", "Real-time solutions"],
    },
    {
        slug: "devops-job-support",
        title: "DevOps Job Support",
        badge: "Automation Focus",
        description:
            "Expert DevOps assistance for automation, CI/CD, and cloud deployments. Streamline your pipelines and infrastructure with battle-tested DevOps professionals.",
        technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "Ansible"],
        support: [
            { title: "CI/CD Setup", desc: "Build and optimize end-to-end pipelines for automated testing, building, and deployment." },
            { title: "Containerization", desc: "Dockerize applications and orchestrate workloads with Kubernetes best practices." },
            { title: "Infrastructure Automation", desc: "Write and debug Terraform and Ansible scripts for repeatable infrastructure provisioning." },
            { title: "Monitoring", desc: "Set up observability stacks including metrics, logging, and alerting for production systems." },
            { title: "Production Support", desc: "Fast resolution of deployment failures, pipeline breakages, and infrastructure outages." },
        ],
        audience: [
            { label: "DevOps Engineers", icon: FaCog },
            { label: "System Admins", icon: FaServer },
            { label: "Cloud Professionals", icon: FaCloud },
        ],
        benefits: ["Practical guidance", "Experienced mentors", "Project assistance", "Flexible plans"],
    },
    {
        slug: "data-engineer-job-support",

        title: "Data Engineer Job Support",
        badge: "Pipeline Expert",
        description:
            "Guidance for building and managing modern data platforms. From ETL pipelines to data warehousing, get support from experienced data engineers.",
        technologies: ["Python", "SQL", "Spark", "Databricks", "Airflow", "Snowflake"],
        support: [
            { title: "ETL Pipelines", desc: "Design and debug robust extract-transform-load pipelines for reliable data flow." },
            { title: "Data Warehousing", desc: "Model and optimize schemas in Snowflake, Redshift, or BigQuery for analytics workloads." },
            { title: "Performance Tuning", desc: "Diagnose slow queries, partition strategies, and Spark job optimization." },
            { title: "Production Support", desc: "Immediate help with pipeline failures, data quality issues, and SLA breaches." },
        ],
        audience: [
            { label: "DevOps Engineers", icon: <FaCog /> },
            { label: "System Admins", icon: <FaServer /> },
            { label: "Cloud Professionals", icon: <FaCloud /> },
        ],
        benefits: ["Expert mentoring", "Hands-on projects", "Career support", "Interview preparation"],
    },
    {
        slug: "qa-job-support",

        title: "QA Job Support",
        badge: "Testing Expert",
        description:
            "Testing and automation support from QA experts. Build reliable test suites, automate regression testing, and ship with confidence.",
        technologies: ["Manual Testing", "Selenium", "Playwright", "Cypress", "Postman", "JMeter"],
        support: [
            { title: "Automation Frameworks", desc: "Design and implement scalable test automation frameworks from scratch." },
            { title: "API Testing", desc: "Build comprehensive API test suites using Postman, RestAssured, or custom scripts." },
            { title: "Performance Testing", desc: "Load test and stress test applications using JMeter and k6 with analysis guidance." },
            { title: "Defect Management", desc: "Best practices for bug reporting, triage, and regression test cycle management." },
        ],
        audience: [
            { label: "QA Engineers", icon: <FaFlask /> },
            { label: "Automation Testers", icon: <FaRobot /> },
            { label: "Freshers", icon: <FaGraduationCap /> },
        ],
        benefits: ["Project support", "Interview guidance", "Practical learning", "Expert mentoring"],
    },
    {
        slug: "power-bi-training",

        title: "Power BI Training",
        badge: "Live Training",
        description:
            "Learn Power BI through practical projects and expert-led sessions. Go from beginner to job-ready with real datasets and industry dashboards.",
        technologies: ["Power BI Desktop", "Power Query", "DAX", "Data Modeling", "Dashboards"],
        support: [
            { title: "Live Classes", desc: "Interactive sessions with experienced Power BI developers covering real-world scenarios." },
            { title: "Project Work", desc: "Build a portfolio of dashboards on industry datasets to showcase in interviews." },
            { title: "Assignments", desc: "Structured practice tasks reviewed by mentors with detailed feedback." },
            { title: "Interview Preparation", desc: "Mock interviews, common question walkthroughs, and portfolio review sessions." },
        ],
        audience: [
            { label: "Students", icon: <FaGraduationCap /> },
            { label: "Analysts", icon: <FaChartBar /> },
            { label: "Working Professionals", icon: <FaUserTie /> },
        ],
        benefits: ["Industry projects", "Recorded sessions", "Expert trainers", "Career support"],
    },
    {
        slug: "resume-services",

        title: "Resume Services",
        badge: "ATS Optimized",
        description:
            "Professional ATS-friendly resume and LinkedIn optimization services. Stand out to recruiters and land more interviews with a strategically crafted profile.",
        technologies: ["ATS Resume", "LinkedIn Optimization", "Cover Letter", "Career Guidance"],
        support: [
            { title: "Resume Writing", desc: "Custom-written resumes highlighting your achievements with recruiter-friendly language." },
            { title: "Resume Review", desc: "Detailed critique and rewrite suggestions to maximise ATS pass-through rates." },
            { title: "LinkedIn Profile Enhancement", desc: "Keyword-optimised headline, summary, and experience sections to attract recruiters." },
            { title: "Job Search Support", desc: "Tailored application strategy, job board tips, and networking guidance." },
        ],
        audience: [
            { label: "Freshers", icon: <FaGraduationCap /> },
            { label: "Experienced Professionals", icon: <FaUserTie /> },
            { label: "Career Switchers", icon: <FaExchangeAlt /> },
        ],
        benefits: ["Better ATS score", "Professional formatting", "Recruiter visibility", "Career growth"],
    },
];


export const FAQS = [
    {
        q: "Do you provide real-time project support?",
        a: "Yes. Our experts help with live projects, troubleshooting, deployments, and client requirements in real time.",
    },
    {
        q: "Are sessions confidential?",
        a: "Yes. All discussions and project information remain completely confidential under strict privacy standards.",
    },
    {
        q: "Can beginners join?",
        a: "Absolutely. We support both freshers and experienced professionals with tailored guidance at every level.",
    },
];

export const SERVICE_PROCESS =
    [
        { n: "01", title: "Consultation", desc: "Understand your project requirements and career goals." },
        { n: "02", title: "Expert Matching", desc: "Connect with experienced professionals in your domain." },
        { n: "03", title: "Real-Time Support", desc: "Get guidance on tasks, meetings, and production issues." },
        { n: "04", title: "Career Growth", desc: "Build confidence, skills, and advance professionally." },
    ]