import type {
  BuildLabProject,
  Education,
  Experience,
  ImpactMetric,
  NavigationItem,
  Profile,
  Project,
  SkillGroup,
} from "../types/portfolio";

export const profile: Profile = {
  name: "Cody Cintron",
  domain: "codycintron.dev",
  location: "Orlando, Florida",
  email: "cody.cintron@icloud.com",
  github: "https://github.com/codycin",
  linkedIn: "https://www.linkedin.com/in/cody-cintron",
  resumePath: "/resume/Cody-Cintron-Resume.pdf",
  portraitPath: "/images/profile/cody-cintron-portrait.webp",
  primaryRole: "Software Engineer",
  secondaryRole: "Computer Science Student at Florida State University",
  availability: "Seeking software engineering internship and new-graduate opportunities",
  expectedGraduation: "Spring 2027",
  headline: "Software engineer building reliable products and enterprise automation.",
  summary:
    "I am a Computer Science student at Florida State University and a Collaboration Services Intern at Leidos. I build full-stack applications, enterprise automation, and systems-oriented software with an emphasis on maintainability, measurable results, and strong engineering fundamentals.",
};

export const navigation: NavigationItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Build Lab", to: "/build-lab" },
  { label: "Résumé", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: "60,000+",
    label: "OneDrive sites",
    detail: "searched through enterprise permission automation",
  },
  {
    value: "1,000+",
    label: "Folders preserved",
    detail: "through an API-driven archival workflow",
  },
  {
    value: "50,000+",
    label: "Employees supported",
    detail: "by the organization's collaboration systems",
  },
  { value: "3.85", label: "FSU GPA", detail: "Bachelor of Science in Computer Science" },
  { value: "Spring 2027", label: "Expected graduation", detail: "Florida State University" },
];

export const experiences: Experience[] = [
  {
    organization: "Leidos",
    title: "Collaboration Services Intern",
    location: "Orlando, Florida",
    dates: "May 2026–Present",
    summary:
      "Building enterprise automation and content workflows for the Collaboration Services team while protecting confidential implementation details.",
    accomplishments: [
      "Built PowerShell automation that searches more than 60,000 OneDrive sites for user access, removes outdated permissions, and reapplies correct access to reduce legacy-access issues.",
      "Created Power Automate workflows using REST API endpoints to support daily team operations, including auditing intranet deletion activity across enterprise content systems.",
      "Designed an API-driven archival workflow that migrated intranet content into SharePoint while preserving more than 1,000 folders and their structure for an organization of more than 50,000 employees.",
      "Collaborated with two interns to identify workflow needs, divide implementation responsibilities, and deliver internal tools for the Collaboration Services team.",
    ],
    technologies: [
      "SharePoint",
      "Microsoft 365",
      "PowerShell",
      "REST APIs",
      "Power Automate",
      "Azure administration",
      "Power BI integration",
    ],
  },
  {
    organization: "Florida State University",
    title: "Research Assistant",
    dates: "February 2026–Present",
    summary:
      "Contributed to research-oriented deep learning and data workflows focused on anomaly detection in taxi datasets using approved computing environments.",

    accomplishments: [
      "Collaborated with a six-student research team to organize datasets, technical references, experiment documentation, and shared project resources.",
      "Trained and evaluated seven deep learning anomaly-detection models across five taxi and transportation datasets.",
      "Developed a standardized testing workflow using synthetic anomaly data to compare model performance under controlled conditions.",
      "Analyzed model outputs across multiple datasets to identify differences in anomaly-detection behavior, generalization, and reliability.",
      "Documented dataset preparation, model configurations, and experimental results to support reproducible research and team collaboration.",
    ],
    technologies: ["Python", "Machine learning", "High-performance computing", "Linux", "Slurm"],
  },
];

export const education: Education = {
  institution: "Florida State University",
  degree: "Bachelor of Science in Computer Science",
  expectedGraduation: "Spring 2027",
  gpa: "3.85",
  honors: ["Dean’s List", "Mores Scholar", "Quest Scholar", "Degree in Three Program"],
  organizations: ["Association for Computing Machinery", "Computational Neuroscience Society"],
  coursework: [
    "Data Structures and Algorithms",
    "Databases",
    "Software Engineering",
    "Computer Organization",
    "Full-Stack Application Development with C#",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: [
      "C++",
      "C#",
      "Python",
      "Java",
      "SQL",
      "TypeScript",
      "JavaScript",
      "Bash",
      "PowerShell",
      "HTML",
      "CSS",
    ],
    evidence: "C++ systems work, C# product APIs, Python research, and PowerShell enterprise automation.",
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive UI development", "Accessible component design"],
    evidence: "Product interfaces for TallyPRs, PrepYield, and this portfolio.",
  },
  {
    name: "Backend",
    skills: [
      "ASP.NET Core",
      "REST API development",
      "Entity Framework Core",
      "Authentication and authorization",
      "SignalR",
      "Asynchronous programming",
    ],
    evidence: "Layered APIs, authentication, and real-time messaging in TallyPRs.",
  },
  {
    name: "Data",
    skills: ["PostgreSQL", "Supabase", "SQLite", "Relational data modeling", "SQL"],
    evidence: "Relational product data and PostgreSQL-backed application development.",
  },
  {
    name: "Cloud & infrastructure",
    skills: [
      "Azure App Service",
      "Cloudflare R2",
      "Cloudflare Pages",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Slurm",
    ],
    evidence: "Containerized delivery, static hosting, cloud storage, and HPC workflows.",
  },
  {
    name: "Tools & practices",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio",
      "Visual Studio Code",
      "Postman",
      "FFmpeg",
      "Agile development",
      "SOLID principles",
      "Object-oriented programming",
      "Debugging",
      "CI/CD",
    ],
    evidence: "Maintainable development, testing, technical iteration, and automated delivery.",
  },
];

export const projects: Project[] = [
  {
    slug: "tallyprs",
    title: "TallyPRs",
    shortDescription:
      "A social platform for powerlifters to publish personal records, receive community feedback, and have lifts reviewed by administrators.",
    fullDescription:
      "TallyPRs connects product engineering with strength training through a full-stack social experience built around personal-record posts, community interaction, and review workflows.",
    category: ["full-stack", "backend", "frontend", "cloud"],
    status: "active",
    featured: true,
    technologies: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Azure App Service",
      "Supabase",
      "Cloudflare R2",
      "GitHub Actions",
      "FFmpeg",
      "SignalR",
    ],
    highlights: [
      "Designed a layered API architecture with controllers, services, and data-access responsibilities.",
      "Added role-based authorization and JWT authentication with refresh-token handling.",
      "Built a media-processing pipeline using FFmpeg and Cloudflare R2.",
      "Implemented cursor-based pagination and filtering for the social feed.",
      "Created one-to-one real-time messaging with SignalR.",
      "Containerized and deployed the backend through an automated CI/CD workflow.",
    ],
    problem: [
      "Create a focused place for powerlifters to share personal records, discuss lifts, and support administrator review workflows.",
    ],
    users: [
      "Powerlifters publishing personal records",
      "Community members providing feedback",
      "Administrators reviewing lifts",
    ],
    functionality: [
      "Member and administrator roles",
      "Personal-record posts with media uploads",
      "Comments, likes, and downvotes",
      "Profiles with gym and lifting information",
      "Follow and follower relationships",
      "One-to-one messaging through SignalR",
      "JWT authentication with refresh tokens",
      "Cursor-based feed pagination and filtering",
    ],
    architecture: [
      {
        heading: "API architecture",
        body: [
          "A layered ASP.NET Core API separates controllers, services, and data-access responsibilities.",
        ],
      },
      {
        heading: "Media pipeline",
        body: ["FFmpeg processes uploaded media before it is stored with Cloudflare R2."],
      },
      {
        heading: "Data and delivery",
        body: [
          "Entity Framework Core and PostgreSQL support application data, while Docker and GitHub Actions support automated backend delivery to Azure App Service.",
        ],
      },
    ],
    decisions: [
      {
        heading: "Authentication",
        body: [
          "JWT authentication, refresh-token handling, and role-based authorization support member and administrator access.",
        ],
      },
      {
        heading: "Feed architecture",
        body: ["Cursor-based pagination and filtering keep the social feed structured for continued growth."],
      },
      {
        heading: "Real-time communication",
        body: ["SignalR supports one-to-one messaging without adding a separate real-time framework."],
      },
    ],
    images: [
      {
        src: "/images/projects/tallyprs-feed.webp",
        alt: "TallyPRs social feed showing powerlifting posts and community controls",
        width: 378,
        height: 821,
        caption: "Social feed",
      },
      {
        src: "/images/projects/tallyprs-profile.webp",
        alt: "TallyPRs athlete profile with lifting and gym information",
        width: 379,
        height: 819,
        caption: "Athlete profile",
      },
    ],
    links: [
      { label: "View repository", url: "https://github.com/codycin/TallyPRs", type: "repository" },
      { label: "Visit TallyPRs", url: "https://tallyprs.com", type: "live" },
    ],
    currentWork: [
      "TallyPRs remains an active production project.",
      "Implementing Signal R for instant messaging.",
    ],
    relatedProjectSlugs: ["alphiplate", "prepyield"],
  },
  {
    slug: "prepyield",
    title: "PrepYield",
    shortDescription:
      "A lightweight cooking-yield calculator that tracks food weight before and after cooking to measure moisture and fat loss.",
    category: ["frontend"],
    status: "active",
    featured: true,
    technologies: ["React", "TypeScript", "Vite", "Bootstrap", "LocalStorage"],
    highlights: [
      "Persists calculator data locally in the browser.",
      "Focuses the interface on a specific cooking and nutrition workflow.",
    ],
    links: [
      { label: "View repository", url: "https://github.com/codycin/prepyield", type: "repository" },
      { label: "Visit PrepYield", url: "https://www.prepyield.com/", type: "live" },
    ],
    results: ["Completed and available as a live application."],
    images: [
      {
        src: "/images/projects/PrepYeildMobile.png",
        alt: "Prepyield project",
        width: 562,
        height: 1174,
        caption: "Prepyield Mobile",
      },
      {
        src: "/images/projects/pyieldd.png",
        alt: "Prepyield project",
        width: 2529,
        height: 1339,
        caption: "PrepYield Desktop",
      },
    ],
  },
  {
    slug: "macro-factor-prepyield",
    title: "MacroFactor PrepYield Extension",
    shortDescription:
      "A PrepYield variant presented in the format of a calorie tracker and shared with the MacroFactor community for feedback.",
    category: ["frontend"],
    status: "active",
    technologies: ["TODO: Add approved technology list."],
    highlights: ["Adapts the PrepYield workflow to a familiar calorie-tracker format."],
    links: [
      { label: "View repository", url: "https://github.com/codycin/MFPrepYield", type: "repository" },
      { label: "Visit project", url: "https://mfconcepts.prepyield.com/", type: "live" },
    ],
    images: [
      {
        src: "/images/projects/mfPrepYield.png",
        alt: "Prepyield MF project",
        width: 559,
        height: 1216,
        caption: "MacroFactor Style",
      },
    ],
  },
  {
    slug: "bskin-and-body",
    title: "BSkinAndBody Website",
    shortDescription: "A modern website built for a local esthetician in Cody's community.",
    category: ["frontend"],
    status: "active",
    featured: true,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: ["Delivered a modern responsive web presence for a local business."],
    links: [
      { label: "View repository", url: "https://github.com/codycin/bskinandspa", type: "repository" },
      { label: "Visit website", url: "https://www.bskinandbody.com/", type: "live" },
    ],
    images: [
      {
        src: "/images/projects/bskinandbodyM.png",
        alt: "bskinandbody website",
        width: 556,
        height: 1218,
        caption: "bskinandbody mobile",
      },
      {
        src: "/images/projects/bskinandbodyD.png",
        alt: "LMS student view of home page",
        width: 2533,
        height: 1345,
        caption: "bskinandbody desktop",
      },
    ],
  },
  {
    slug: "course-management-system",
    title: "Course Management System",
    shortDescription:
      "Built a course management system modeling core functionality of learning management systems (e.g. Canvas). ",
    category: ["full-stack", "backend", "frontend"],
    status: "completed",
    featured: false,
    technologies: ["C# .NET", ".NET MAUI", "SQL Server"],
    highlights: [
      "Full-stack application development course project.",
      "Structured application layers to separate UI, business logic, and service components.",
      "Developed domain models and service logic for courses, enrollments, assignments, and submissions with input validation and null safety.",
    ],
    images: [
      {
        src: "/images/projects/LMS-TEACHER.png",
        alt: "LMS Teacher view of home page",
        width: 1890,
        height: 978,
        caption: "Teacher view",
      },
      {
        src: "/images/projects/LMS-STUDENT.png",
        alt: "LMS student view of home page",
        width: 1896,
        height: 985,
        caption: "Student view",
      },
    ],
  },
  {
    slug: "cpp-vector",
    title: "C++ Vector Implementation",
    shortDescription:
      "A custom vector-style container created to practice dynamic memory management, resizing behavior, copy semantics, and generic container design in C++.",
    category: ["systems"],
    status: "completed",
    technologies: ["C++", "Templates", "Dynamic memory management", "Object lifetime management"],
    highlights: ["Explores resizing behavior, copy semantics, templates, and object lifetime."],
  },
  {
    slug: "data-cache-simulator",
    title: "Data Cache Simulator",
    shortDescription:
      "Designed and implemented a configurable C++ data cache simulator supporting set-associative caching, LRU replacement, tag/offset/index extraction, and memory reference tracking",
    category: ["systems"],
    status: "completed",
    technologies: ["C++"],
    highlights: [
      "Modeled realistic memory access patterns to analyze performance tradeoffs and cache behavior.",
    ],
  },
  {
    slug: "codycintrondev",
    title: "CodyCintron.dev",
    shortDescription: "My portfolio website",
    category: ["frontend"],
    status: "active",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "CODEX"],
    highlights: [
      "Experimented with codex to learn prompt engineering and setting up repoistories for agent use",
    ],
  },
  {
    slug: "alphiplate",
    title: "Alphiplate",
    shortDescription:
      "An AI-assisted weekly meal-planning and nutrition application designed around preferences, ingredients, goals, liked meals, and dietary information.",
    category: ["full-stack", "backend", "frontend"],
    status: "in-progress",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "OpenAI API",
    ],
    highlights: [
      "Planned around weekly and daily meal planning, nutrition summaries, preference data, and athlete-oriented recommendations.",
    ],
    links: [{ label: "View repository", url: "https://github.com/codycin/athliplate", type: "repository" }],
    plannedWork: [
      "Weekly and daily meal planning",
      "Nutrition and macro summaries",
      "Food, ingredient, and pantry preferences",
      "Athlete-oriented AI meal recommendations",
    ],
  },
];

export const buildLabProjects: BuildLabProject[] = [
  {
    name: "Alphiplate",
    status: "Under Construction",
    description:
      "An AI-assisted weekly meal-planning and nutrition application designed around preferences, ingredients, goals, and dietary information.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "OpenAI API",
    ],
    repository: "https://github.com/codycin/athliplate",
    milestones: [
      { label: "Product foundation", state: "building" },
      { label: "Interface development", state: "building" },
      { label: "Nutrition and macro summaries", state: "planned" },
      { label: "Recommendation logic", state: "planned" },
      { label: "Testing conditions", state: "planned" },
      { label: "Deployment preparation", state: "planned" },
    ],
  },
];

export const engineeringPrinciples = [
  {
    title: "Build for maintenance",
    body: "Prefer clear boundaries, typed data, and software that can evolve without hiding essential behavior.",
  },
  {
    title: "Measure the real scope",
    body: "Use context-rich results—from enterprise workflows to product behavior—without inflating what the work proves.",
  },
  {
    title: "Learn through systems",
    body: "Move between product interfaces, APIs, cloud delivery, automation, and low-level C++ to strengthen engineering judgment.",
  },
];

export const selectedProjects = projects.filter((project) => project.featured);
export const featuredProject = projects.find((project) => project.slug === "tallyprs")!;
export const completedProjects = projects.filter((project) => project.status === "completed");
