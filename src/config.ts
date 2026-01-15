export const siteConfig = {
  name: "Ethan Xiao",
  title: "CS + Economics @ Vanderbilt | App Developer",
  description: "Portfolio website of Ethan Xiao",
  accentColor: "#1d4ed8",
  social: {
    email: "ethan.xiao@vanderbilt.edu",
    linkedin: "https://www.linkedin.com/in/ethan-xiao",
    twitter: "", // optional (leave blank if you don't want it shown)
    github: "https://github.com/exiao07",
  },

  aboutMe:
    "I’m a Computer Science + Economics student at Vanderbilt building full-stack products with a focus on mobile engineering, data-driven iteration, and clean UX. I’m excited about building software that’s practical, scalable, and impactful to others.",

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C/C++",
    "SQL",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Firebase",
    "AWS",
    "Docker",
  ],

  projects: [
    {
      name: "CrewOps — Full-Stack Mobile Platform",
      description:
        "A full-stack rowing management platform built with React Native (Expo) to manage athletes, boats, practices, and regattas with lineup validation, seat optimization, reliability scoring, and performance analytics.",
      link: "https://youtu.be/PVagNUDkbZU?si=smWCzjnFmtW4AKkl", // add GitHub or demo link if you have one
      skills: ["React Native", "TypeScript", "Expo", "State Management"],
    },
    {
      name: "Baby Party Arcade (HTML5 Canvas Mini-Game Suite)",
  description:
    "Built a single-file, touch-first arcade web app for babies/toddlers using vanilla HTML/CSS/JS + an HTML5 Canvas render loop. Includes 4 mini-games with a shared particle/confetti engine, streak + tap scoring, responsive iPad layouts, Web Audio feedback, optional text-to-speech prompts, persistent settings via localStorage, and a 3-second “Parent” gate for safety controls. Runs offline-friendly and can be saved as a Home Screen app on iOS.",
  link: "https://github.com/ethanxiao/baby-game",
  skills: ["JavaScript", "HTML5 Canvas", "HTML", "CSS", "Web Audio API", "localStorage"],

    },
    {
      name: "Study Timer + Task Manager (iOS)",
      description:
        "A productivity app combining a study timer with task management workflows, built full-stack with real-time persistence and clean UI patterns. Achieved a 4.7+ rating on iOS app store with 30+ downloads.",
      link: "",
      skills: ["React Native", "TypeScript", "Node.js"],
    },
  ],

  experience: [
    {
      company: "Independent Product Development",
      title: "Product Engineer (Mobile)",
      dateRange: "May 2025 - Present",
      bullets: [
        "Built and shipped multiple full-stack mobile apps to the Apple App Store, including a habit tracker with streak analytics, a study timer + task manager, and a local events discovery app.",
        "Developed mobile features in React Native + TypeScript and backend services using Node.js, Express, and Firebase (auth, persistence, real-time updates).",
        "Designed subscription + in-app purchase monetization flows and iterated post-launch using engagement metrics, generating $1,000+ profit and 1,000+ cumulative downloads.",
      ],
    },
    {
      company: "RenaissanceTech",
      title: "Development Intern",
      dateRange: "Jun 2024 - Aug 2024",
      bullets: [
        "Developed interactive CPQ analytics dashboards using React.js and JavaScript, integrating pricing and sales data via internal APIs for real-time tracking.",
        "Wrote unit + integration tests, debugged production-bound releases, and collaborated with engineers to resolve defects across multiple deployments.",
        "Queried and analyzed CPQ datasets with SQL, traced data flows, and surfaced edge cases that influenced feature prioritization for 10+ mid-market manufacturing clients.",
        "Refactored frontend components and API integration logic to improve data consistency and scalability using modular React patterns and defensive input handling.",
      ],
    },
    {
      company: "Dr. David Kane’s Research Lab (Harvard University)",
      title: "Lead Teaching & Research Assistant",
      dateRange: "May 2022 - May 2024",
      bullets: [
        "Co-authored a section of a peer-reviewed paper on quantitative data ethics, translating reproducibility standards into concrete engineering practices.",
        "Built reproducible workflows in Python and R (RStudio), transforming raw research inputs into validated, analysis-ready datasets.",
        "Wrote data cleaning + quality-check scripts for datasets with 11,800+ observations, implementing integrity checks to reduce downstream debugging.",
      ],
    },
  ],

  education: [
    {
      school: "Vanderbilt University",
      degree: "B.S. Computer Science & Economics (Chancellor’s Scholar)",
      dateRange: "",
      achievements: [
        "GPA: 4.0/4.0",
        "Activities: Men’s Rowing, Christian Fellowship, Research Assistant",
        "Coursework: Linear Algebra, Data Structures, Algorithms, OOP, Statistics",
      ],
    },
    {
      school: "The Ohio State University - High School Dual Enrollment",
      degree: "Minor in Mathematics",
      dateRange: "",
      achievements: [
        "GPA: 3.95/4.0",
        "Coursework: Calculus I–III, Differential Equations, Finite Linear Math",
      ],
    },
  ],
};
