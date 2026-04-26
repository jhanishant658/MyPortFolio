// ============================================================
//  portfolioData.js — Edit ALL your content here
//  Change text, links, projects, skills etc. from this file
// ============================================================

export const personal = {
  name: "Nishant Jha",
  title: "Full Stack Developer",
  subtitle: "Java & Spring Boot Specialist",
  tagline:
    "Architecting scalable microservices and building production-ready applications with Spring Boot & React.js.",
  bio1:
    "I'm a Full Stack Developer specializing in the Java ecosystem — from designing RESTful APIs with Spring Boot to building responsive frontends with React.js.",
  bio2:
    "My passion lies in microservices architecture — crafting distributed systems that are resilient, scalable, and production-ready. I've implemented everything from Eureka service discovery to Circuit Breaker patterns with Resilience4j.",
  bio3:
    "Beyond code, I'm a competitive programmer with 500+ LeetCode problems solved, ranking in the Top 15% in contests. I believe strong fundamentals make better engineers.",
  email: "njha5901@gmail.com",
  phone: "+91 88823 84369",
  github: "https://github.com/jhanishant658",
  githubHandle: "jhanishant658",
  linkedin: "https://www.linkedin.com/in/nishant-jha-0b96a629b",
  linkedinHandle: "nishant-jha-0b96a629b",
  leetcode: "https://leetcode.com/jhanishant18",
  leetcodeHandle: "jhanishant18",
  education: "Dronacharya Group of Institutions (AKTU), Greater Noida",
  degree: "B.Tech in Computer Science (CGPA: 7.5) · 2023 – 2027",
};

export const stats = [
  { num: "500+", label: "LeetCode Problems" },
  { num: "3", label: "Live Projects" },
  { num: "3", label: "Internships" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java (Core & Advanced)", "JavaScript ES6+", "SQL", "MySQL", "PostgreSQL"],
    featured: ["Java (Core & Advanced)", "JavaScript ES6+"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Microservices", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "RBAC"],
    featured: ["Spring Boot", "Microservices"],
  },
  {
    category: "Microservices",
    items: ["Eureka Server", "Feign Client", "API Gateway", "Resilience4j", "Circuit Breaker"],
    featured: ["Eureka Server", "Feign Client"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "Material UI", "HTML5", "CSS3"],
    featured: ["React.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB Atlas", "MySQL", "PostgreSQL"],
    featured: ["MongoDB Atlas"],
  },
  {
    category: "Tools & Concepts",
    items: ["Git / GitHub", "Docker", "Postman", "JUnit", "Mockito", "OOP", "DSA", "SDLC"],
    featured: ["Git / GitHub", "Docker"],
  },
];

export const experiences = [
  {
    company: "The Skybrisk",
    role: "Full Stack Java Developer Intern",
    period: "May 2026 – Aug 2026",
    location: "Remote",
    bullets: [
      "Joining as Full Stack Java Developer Intern to work on real-world projects.",
      "Will work on Java & Spring Boot based solutions through mentorship and assessments.",
      "Internship program designed for hands-on experience with potential for full-time offer.",
    ],
    upcoming: true,
  },
  {
    company: "Cognifyz IT Solutions",
    role: "Software Development Intern",
    period: "Apr 2026 – May 2026",
    location: "Remote, Nagpur",
    bullets: [
      "Developed and maintained software solutions at an ISO 9001:2015 certified IT company.",
      "Contributed to real-world projects using Java and Spring Boot across the full SDLC.",
      "Collaborated with cross-functional teams on coding, testing, and software maintenance.",
    ],
    upcoming: false,
  },
  {
    company: "Hex Softwares",
    role: "Java Programming Intern",
    period: "Sep 2025 – Oct 2025",
    location: "Remote (WFH)",
    bullets: [
      "Completed a 1-month intensive Java internship on enterprise-level projects.",
      "Deepened expertise in OOP principles, memory management, and version control.",
      "Actively contributed to development modules following industry best practices.",
    ],
    upcoming: false,
  },
];

export const projects = [
  {
    num: "01",
    title: "Microservice Quiz Application",
    description:
      "Distributed system of 5 independent microservices — Quiz, Question, User, Result, and API Gateway. Features Eureka service discovery, Feign Client inter-service communication, and Circuit Breaker patterns for fault tolerance.",
    stack: ["Spring Boot", "Eureka", "Feign", "JUnit", "Resilience4j"],
    github: "https://github.com/jhanishant658/MicroService-version-of-QuizApp",
    live: null,
  },
  {
    num: "02",
    title: "Attendance Management System",
    description:
      "Full-stack solution used by 100+ active users. Features real-time analytics for attendance percentages, predictive estimators, and a MongoDB Atlas backend for scalable data handling.",
    stack: ["React", "Spring Boot", "MongoDB Atlas"],
    github: "https://github.com/jhanishant658/AttendanceApp",
    live: "https://attendance-app-frontend-ten.vercel.app/",
  },
  {
    num: "03",
    title: "E-Commerce Platform",
    description:
      "Scalable commerce engine with JWT authentication and Role-Based Access Control (RBAC). Integrated Razorpay for secure payments. Migrated from MySQL to MongoDB for enhanced performance.",
    stack: ["React", "Spring Boot", "Razorpay", "MongoDB"],
    github: "https://github.com/jhanishant658/E-Commerce_App",
    live: "https://e-commerce-app-blue-ten.vercel.app/",
  },
];

export const achievements = [
  {
    icon: "◈",
    title: "LeetCode Top 15%",
    desc: "Solved 500+ problems. Ranked in Top 15% in contests, demonstrating strong algorithmic problem-solving skills.",
  },
  {
    icon: "⊡",
    title: "HackerRank SQL",
    desc: "Certified at Advanced level in SQL, covering complex queries, optimization, and database design.",
  },
  {
    icon: "◎",
    title: "Problem Solving",
    desc: "HackerRank Intermediate certification in Problem Solving, covering data structures and algorithms.",
  },
  {
    icon: "▸",
    title: "Production Deployments",
    desc: "Built and deployed multiple full-stack applications to production on Vercel and Render.",
  },
];
