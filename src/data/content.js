export const profile = {
  name: "Isiri Gallage",
  role: "Software Engineer",
  tagline: "IT undergraduate at the University of Moratuwa who enjoys building end-to-end systems, from backend architecture to AI-integrated functionality.",
  location: "Colombo, Sri Lanka",
  email: "isirigallage2002@gmail.com",
  phone: "+94 76 734 9357",
  github: "https://github.com/Isiri-gallage",
  linkedin: "https://linkedin.com/in/isiri-gallage",
  resumeUrl: "/resume.pdf",
  available: true,
  initials: "IG",
  photo: "/portrait.png",
  web3formsAccessKey: "37f11cfa-f6ec-42f4-bdb3-acd4735594c6",
};

export const about = [
  "I am an Information Technology undergraduate at the University of Moratuwa, passionate about building end-to-end web applications and AI-integrated systems. From designing scalable databases to crafting seamless user interfaces, I love bringing ideas to life using modern technologies like React, Next.js, and FastAPI.",
  "Currently seeking a Software Engineering Internship, I'm eager to apply my strong foundation in full-stack development, algorithms, and problem-solving to real-world, impactful projects.",
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Postman", "CI/CD"],
  },
  {
    title: "Embedded Systems",
    skills: ["Arduino IDE", "C", "Sensor Integration"],
  },
];

export const skillIconMap = {
  Python: "python",
  JavaScript: "js",
  TypeScript: "ts",
  Java: "java",
  C: "c",
  SQL: "mysql",
  React: "react",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwind",
  "HTML/CSS": "html",
  "Node.js": "nodejs",
  "Express.js": "express",
  FastAPI: "fastapi",
  Flask: "flask",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  Supabase: "supabase",
  Docker: "docker",
  Git: "git",
  Postman: "postman",
  "CI/CD": "githubactions",
  "Arduino IDE": "arduino",
};

export const projects = [
  {
    title: "Shipment Alerting System (SAS)",
    date: "August 2025 – August 2026",
    role: "Full-Stack Developer",
    tech: ["Next.js", "Flask", "PostgreSQL (Supabase)", "CargoWise REST API"],
    image: "/projects/sas-login.png",
    description:
      "Built the CargoWise API integration and sync engine end-to-end, including token authentication, scheduled shipment and milestone ingestion, and automated upserts. Designed the shipments database schema with JSONB structure.",
    context:
      "A web-based monitoring and alerting platform built for Dart Global Logistics, a freight forwarding company managing air and sea shipments through CargoWise. CargoWise stores every operational detail but never proactively flags overdue milestones, so staff had to manually check shipments and follow up by hand. SAS acts as an intelligent monitoring layer above it, syncing shipment data on a schedule and automatically surfacing delays and missing information.",
    contributionTitle: "My Contribution: CargoWise Integration & Synchronization Engine",
    highlights: [
      "Built the synchronization engine end-to-end: token-based authentication with the external API, retrieval and transformation of shipment records, and per-record validation that logs warnings instead of failing the whole run.",
      "Designed a configurable, admin-managed sync schedule where custom times run as independent scheduled jobs, alongside a fixed 6-hourly automatic run.",
      "Led a database restructuring project that migrated milestone data from individual flat columns into a single JSONB column, using a staged expand, migrate, and contract approach so the system stayed fully operational and independently verifiable at every step, across 17 files and two developers.",
      "Built a configuration-driven field registry so new milestone types are picked up by the sync automatically, with zero code changes.",
      "Implemented the shipment presentation layer: list/card/detail views with dynamic filtering, shared delay-detection logic kept consistent between frontend and backend, and client-side PDF report generation.",
    ],
    github: "https://github.com/Nadeesha-Maduwantha/SAS_project",
  },
  {
    title: "JeevaSeva",
    date: "May 2026 – August 2026",
    role: "Full-Stack Developer, Personal Project",
    tech: ["React 19", "React Router", "FastAPI", "SQLAlchemy 2", "Pydantic v2", "PostgreSQL", "Alembic", "WebSockets", "JWT", "Docker", "GitHub Actions"],
    image: "/projects/jeevaseva-home.png",
    description:
      "A full-stack platform connecting kidney patients in Sri Lanka with living donors, with emergency blood donation matching running on the same donor base. Built solo end-to-end, from database design to the full React frontend.",
    context:
      "A full-stack web platform connecting kidney patients in Sri Lanka with living donors, with emergency blood donation matching running on the same donor base. Patients post requests with blood type, hospital, and dialysis history; donors register their availability and browse open requests; once a donor expresses interest and a patient accepts, both sides move into a private, authenticated real-time chat to coordinate, with every connection still routed through a transplant centre for the actual medical process. Built solo end-to-end: REST API design, database schema and migrations, real-time messaging, authentication and security hardening, and the full React frontend.",
    contributionTitle: "Highlights",
    highlights: [
      "JWT authentication with role-aware routing (patient / donor / admin) and a secure password-reset flow with single-use, hashed, expiring tokens.",
      "Real-time chat over authenticated WebSockets, using short-lived socket-only tickets instead of long-lived tokens in the URL.",
      "Admin panel for user verification, moderation, and platform stats.",
      "Security-conscious backend: bcrypt password hashing, rate limiting, session invalidation on password change, and generic error responses.",
      "CI pipeline (GitHub Actions) running linting, backend tests, and a production frontend build on every PR; containerized with Docker for deployment.",
    ],
    github: "https://github.com/Isiri-gallage/JeevaSeva",
  },
  {
    title: "MoneyTracker",
    date: "July 2026 – August 2026",
    role: "Full-Stack Developer",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "Express", "MongoDB", "JWT", "Docker", "GitHub Actions"],
    image: "/projects/moneytracker-dashboard.png",
    description:
      "A personal finance tracker built end-to-end with the MERN stack, letting users manage multiple accounts, automate recurring transactions, set per-category budgets, and view live spending analytics.",
    context:
      "Money Tracker lets users manage multiple accounts (cash, bank, card), log income and expense transactions with search and filtering, set per-category monthly budgets, automate recurring transactions, and view spending analytics, all behind JWT-based authentication with per-user data isolation.",
    contributionTitle: "Highlights",
    highlights: [
      "Derived data, not stored state: account balances, budget spend, and analytics are computed live via MongoDB aggregation instead of stored counters, eliminating an entire class of sync bugs.",
      "Recurring transactions with catch-up logic: a background scheduler regenerates missed occurrences (e.g. after downtime) rather than silently dropping them, with correct month-end date clamping.",
      "Server-side analytics at scale: category breakdowns and 6-month trends are aggregated in MongoDB so results stay accurate beyond the paginated transaction list.",
      "Security-conscious by default: ownership checks enforced at the query level (not fetch-then-compare), and user search input is escaped before being used in MongoDB regex queries.",
      "Test coverage that targets real risk: 67 tests covering authorization boundaries, pagination edge cases, and aggregation correctness.",
      "Fully containerized with Docker Compose and a one-command deploy blueprint for Render.",
    ],
    github: "https://github.com/Isiri-gallage/money-tracker-mern",
    demo: "https://money-tracker-mern.vercel.app/",
  },
  {
    title: "Beginner Cricket Bat Drill Trainer",
    date: "January 2026 – June 2026",
    role: "IoT & Full-Stack Developer",
    tech: ["ESP32", "MPU6050", "FSR 402", "React", "Node.js", "C", "Python"],
    image: "/projects/cricket-trainer-collage.png",
    description:
      "Developed a sensor-based cricket training system to help beginners improve footwork, grip, and batting technique through real-time feedback and data analysis.",
    context:
      "A first-year microcontroller-based ICT project at the Faculty of IT, University of Moratuwa: a sensor-based cricket training system built by a five-member team to help beginners improve footwork, grip, and batting technique through real-time feedback and data analysis.",
    contributionTitle: "My Contribution: Grip Work Guider",
    highlights: [
      "Designed and implemented the Grip Work Guider, using FSR 402 sensors to measure front-hand and back-hand pressure and ensure proper grip technique during different batting drills.",
      "Integrated sensor data into the system for performance tracking and feedback through a web interface.",
      "Collaborated on hardware assembly, testing, and system calibration within a five-member team.",
    ],
    github: null,
  },
];

export const education = [
  {
    degree: "B.Sc. (Hons) in Information Technology & Management",
    institution: "University of Moratuwa, Sri Lanka",
    period: "2024 - Present",
    detail: "CGPA: 3.59 / 4.00",
    note: "Dean's List - Semester 2",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png",
  },
  {
    degree: "G.C.E Advanced Level",
    institution: "Devi Balika Vidyalaya, Colombo 08",
    period: "2013 - 2022",
    detail: "Physical Science Stream - Z-score: 1.3551",
    note: "Chemistry (A), Physics (B), Combined Mathematics (C)",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/62/Devi_Balika_crest.png",
  },
];

export const leadership = [
  { title: "Publicity Committee Member (Term 25/26)", org: "IEEE Industry Applications Society, UoM" },
  { title: "Editorial Committee Member (Term 25/26)", org: "Computer Society, IEEE UoM Student Branch" },
  { title: "Organizing Committee Member", org: "Road to Legacy 2.0, Rotaract Club of UoM" },
  { title: "Inducted Member", org: "Rotaract Club of University of Moratuwa" },
];

export const certifications = [
  { title: "Web Design for Beginners", issuer: "University of Moratuwa", date: "March 2024" },
  { title: "Python for Beginners", issuer: "University of Moratuwa", date: "March 2024" },
  { title: "HTML, CSS, and JavaScript for Web Developers", issuer: "Johns Hopkins University (Coursera)", date: "Jan 2025" },
  { title: "Getting Started with MySQL Command Line", issuer: "IBM", date: "May 2025" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
