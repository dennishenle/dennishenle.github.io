type SocialConfig = {
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

export const siteConfig = {
  name: "Dennis Henle",
  title: "Mobile Developer",
  description: "Portfolio website of Dennis Henle",
  accentColor: "#761A5F",
  social: {
    email: "henledennis@gmail.com",
    github: "https://github.com/dennishenle",
  } satisfies SocialConfig as SocialConfig,
  aboutMe:
    "I'm a Flutter developer based in Ravensburg, Germany, passionate about crafting polished cross-platform apps. Beyond mobile development, I enjoy exploring AI tools and workflows, and I'm always tinkering with side projects in TypeScript, Swift, or Python. When I'm not coding, you'll find me mountain biking through the Allgäu, climbing, hiking the Alps, or gaming.",
  skills: ["Flutter", "Swift", "Javascript", "React", "Node.js", "Python", "Docker"],
  projects: [],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
