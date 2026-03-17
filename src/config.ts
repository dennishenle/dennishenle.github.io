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
  darkMode: true,
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
      company: "sevdesk GmbH, Offenburg",
      title: "Mobile Engineer",
      dateRange: "Aug 2022 - Present",
      bullets: [
        "Mobile App Development (Flutter, Swift, SwiftUI)",
      ],
    },
    {
      company: "Bertrandt Ingenieurbüro GmbH, München",
      title: "Software Engineer",
      dateRange: "Aug 2021 - Aug 2022",
      bullets: [
        "In Car App Development for BMW/Mini Platforms",
      ],
    },
    {
      company: "Blackpin GmbH, Aalen",
      title: "Working Student",
      dateRange: "Nov 2019 - Jun 2021",
      bullets: [
        "Mobile App Development (Flutter, Swift, SwiftUI)"
      ],
    },
    {
      company: "PeakConcepts GmbH, Aalen",
      title: "Intern",
      dateRange: "Mar 2019 - Jul 2019",
      bullets: [
        "Mobile App Development (React Native)",
      ],
    },
  ],
  education: [
    {
      school: "Hochschule Aalen",
      degree: "Bachelor of Science in Software Engineering",
      dateRange: "2017 - 2021",
      achievements: [
        "BA Thesis: Machine Learning - Hit Detection in Sports Shooting",
        "Chairman of the Student Initiative FEIN e.V. Aalen (2018 - 2019)",
      ],
    },
    // {
    //   school: "Hochschule Albstadt-Sigmaringen",
    //   degree: "Mechanical Engineering",
    //   dateRange: "2013 - 2016",
    //   achievements: [],
    // },
    // {
    //   school: "Hochschule Ulm",
    //   degree: "Vehicle Electronics",
    //   dateRange: "2012 - 2013",
    //   achievements: [],
    // },
    {
      school: "Technische Schule Heidenheim",
      degree: "University Entrance Qualification (Fachhochschulreife)",
      dateRange: "2010 - 2012",
      achievements: [],
    },
  ],
};
