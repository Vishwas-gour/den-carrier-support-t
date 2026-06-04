
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

// slug: "java-job-support",
// slug: "dotnet-job-support"
// slug: "qa-job-support",
// slug: "devops-job-support"
// slug: "aws-job-support",
// slug: "azure-job-support",
// slug: "salesforce-job-support",
// slug: "resume-services",
// slug: "data-engineer-job-support",
// slug: "data-science-job-support",l̥
// slug: "mulesoft-job-support",
// slug: "power-bi-training",

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
    {
        slug: "java-job-support",

        title: "Java Job Support",
        badge: "Backend Expert",
        description:
            "Get hands-on Java project support from experienced professionals. Solve real-world challenges in backend development, microservices, APIs, and enterprise applications with confidence.",
        technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA", "Microservices", "REST APIs", "MySQL"],
        support: [
            { title: "Live Project Support", desc: "Receive real-time assistance with Java development tasks, debugging, and project deliverables." },
            { title: "Spring Boot Guidance", desc: "Expert help in building scalable REST APIs, authentication systems, and enterprise applications." },
            { title: "Code Review", desc: "Improve code quality, performance, and maintainability through professional reviews." },
            { title: "Production Issue Resolution", desc: "Quick diagnosis and fixes for bugs, exceptions, and performance bottlenecks." },
            { title: "Interview Preparation", desc: "Prepare for Java developer interviews with mock sessions and practical questions." },
        ],
        audience: [
            { label: "Java Developers", icon: <FaLaptopCode /> },
            { label: "Working Professionals", icon: <FaUserTie /> },
            { label: "Freshers", icon: <FaGraduationCap /> },
            { label: "Career Switchers", icon: <FaExchangeAlt /> },
        ],
        benefits: ["One-on-one mentoring", "Project assistance", "Flexible schedules", "Interview support"],
    },
    {
        slug: "dotnet-job-support",

        title: ".NET Job Support",
        badge: "Enterprise Expert",
        description:
            "Professional .NET project support for developers working on enterprise applications. Get expert assistance with ASP.NET Core, Web APIs, microservices, cloud deployments, and production issues.",
        technologies: ["C#", "ASP.NET Core", "Web API", "Entity Framework", "SQL Server", "Microservices", "Azure", "MVC"],
        support: [
            { title: "Live Project Assistance", desc: "Get real-time guidance on daily development tasks, project requirements, and complex implementations." },
            { title: "Application Development", desc: "Build scalable web applications, REST APIs, and enterprise solutions using modern .NET technologies." },
            { title: "Code Review", desc: "Improve application quality, security, and maintainability through expert code reviews." },
            { title: "Production Support", desc: "Resolve application errors, performance issues, and deployment challenges quickly." },
            { title: "Interview Preparation", desc: "Prepare for .NET developer interviews with practical scenarios and mock interview sessions." },
        ],
        audience: [
            { label: "Dot Net Developers", icon: <FaLaptopCode /> },
            { label: "Software Engineers", icon: <FaUserTie /> },
            { label: "Freshers", icon: <FaGraduationCap /> },
            { label: "Career Switchers", icon: <FaExchangeAlt /> },
        ],
        benefits: ["Enterprise expertise", "Project guidance", "Flexible timings", "Interview support"],
    },
    {
        slug: "azure-job-support",

        title: "Azure Job Support",
        badge: "Cloud Expert",
        description:
            "Get expert Azure project support for cloud infrastructure, application deployment, security, and DevOps. Work confidently on real-time projects with guidance from experienced Azure professionals.",
        technologies: ["Azure Virtual Machines", "Azure App Service", "Azure Functions", "Azure DevOps", "Azure SQL", "Azure Storage", "Azure Kubernetes Service", "Azure Active Directory"],
        support: [
            { title: "Cloud Infrastructure Support", desc: "Design, deploy, and manage scalable Azure cloud environments with expert assistance." },
            { title: "Application Deployment", desc: "Deploy web applications, APIs, and microservices using Azure services and best practices." },
            { title: "Security & Identity Management", desc: "Configure Azure AD, RBAC, networking, and security controls for enterprise-grade protection." },
            { title: "DevOps & Automation", desc: "Implement CI/CD pipelines, infrastructure automation, and monitoring using Azure DevOps." },
            { title: "Production Issue Resolution", desc: "Quick troubleshooting for outages, performance bottlenecks, and deployment failures." },
        ],
        audience: [
            { label: "Cloud Engineers", icon: <FaCloud /> },
            { label: "DevOps Engineers", icon: <FaCog /> },
            { label: "Developers", icon: <FaLaptopCode /> },
            { label: "System Administrators", icon: <FaServer /> },
        ],
        benefits: ["Certified Azure experts", "Hands-on support", "Flexible schedules", "Real-time project guidance"],
    },
    {
        slug: "mulesoft-job-support",

        title: "MuleSoft Job Support",
        badge: "Integration Expert",
        description:
            "Get real-time MuleSoft project support from experienced integration professionals. Master API-led connectivity, system integrations, and enterprise deployments with expert guidance.",
        technologies: ["Mule 4", "Anypoint Studio", "API Manager", "DataWeave", "RAML", "REST APIs", "SOAP Services", "CloudHub"],
        support: [
            { title: "Live Project Support", desc: "Receive hands-on assistance with daily MuleSoft development tasks, integrations, and client deliverables." },
            { title: "API Development", desc: "Design, build, secure, and manage APIs using MuleSoft best practices and API-led architecture." },
            { title: "Integration Assistance", desc: "Connect Salesforce, SAP, databases, cloud applications, and third-party systems efficiently." },
            { title: "Deployment Support", desc: "Get help with CloudHub deployments, environment management, and release processes." },
            { title: "Production Issue Resolution", desc: "Quick troubleshooting of integration failures, API errors, and performance bottlenecks." },
        ],
        audience: [
            { label: "Integration Developers", icon: <FaLaptopCode /> },
            { label: "MuleSoft Professionals", icon: <FaUserTie /> },
            { label: "API Developers", icon: <FaExchangeAlt /> },
            { label: "Working Professionals", icon: <FaBriefcase /> },
        ],
        benefits: ["Expert mentoring", "Real-time project support", "Flexible schedules", "Interview preparation"],
    },
    {
        slug: "data-science-job-support",

        title: "Data Science Job Support",
        badge: "Analytics Expert",
        description:
            "Get expert Data Science project support for analytics, predictive modeling, machine learning, and business insights. Work on real-world datasets and solve complex data challenges with experienced professionals.",
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "SQL", "Jupyter", "Data Visualization"],
        support: [
            { title: "Live Project Support", desc: "Receive real-time assistance on data science projects, model development, and business analytics tasks." },
            { title: "Data Analysis & Visualization", desc: "Clean, analyze, and visualize data using industry-standard tools and techniques." },
            { title: "Predictive Modeling", desc: "Build and optimize machine learning models for classification, regression, and forecasting problems." },
            { title: "Production Issue Resolution", desc: "Troubleshoot model performance, data quality issues, and deployment challenges effectively." },
            { title: "Interview Preparation", desc: "Prepare for Data Science interviews with practical case studies, coding exercises, and mock interviews." },
        ],
        audience: [
            { label: "Data Scientists", icon: <FaChartBar /> },
            { label: "Data Analysts", icon: <FaUserTie /> },
            { label: "Working Professionals", icon: <FaBriefcase /> },
            { label: "Career Switchers", icon: <FaExchangeAlt /> },
        ],
        benefits: ["Industry experts", "Hands-on project guidance", "Flexible schedules", "Career support"],
    },
    {
    slug: "machine-learning-job-support",

    title: "Machine Learning Job Support",
    badge: "AI Expert",
    description:
        "Get professional Machine Learning project support from experienced AI engineers. Build, train, optimize, and deploy ML models with confidence while working on real-world business use cases.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "MLflow", "MLOps", "Model Deployment"],
    support: [
        { title: "Live Project Support", desc: "Receive real-time assistance on machine learning projects, model development, and production deployments." },
        { title: "Model Building & Training", desc: "Design, train, evaluate, and optimize machine learning models for business and research applications." },
        { title: "MLOps & Deployment", desc: "Deploy and monitor ML models using modern MLOps practices, CI/CD pipelines, and cloud platforms." },
        { title: "Performance Optimization", desc: "Improve model accuracy, reduce training time, and solve issues related to overfitting and underfitting." },
        { title: "Interview Preparation", desc: "Prepare for Machine Learning and AI interviews with practical exercises, coding rounds, and case studies." },
    ],
    audience: [
        { label: "Machine Learning Engineers", icon: <FaRobot /> },
        { label: "Data Scientists", icon: <FaChartBar /> },
        { label: "AI Professionals", icon: <FaUserTie /> },
        { label: "Career Switchers", icon: <FaExchangeAlt /> },
    ],
    benefits: ["AI expert mentoring", "Real-world project support", "Flexible schedules", "Career growth assistance"],
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