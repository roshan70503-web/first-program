// ✏️ EDIT YOUR CONTENT HERE. The website reads everything from this file.
// Items marked `placeholder: true` are clearly labelled on the page — replace them when you have real details.

export const profile = {
  name: "Roshan Shah",
  headline: "Aspiring Python developer, finishing a B.Sc. in Computer Science.",
  intro:
    "I'm a final-year computer science student in Wardha, Maharashtra. I enjoy turning problems into clean logic, and I'm ready to start building real projects in Python and web development.",
  email: "roshan70503@gmail.com",
  location: "Wardha, Maharashtra, India",
  tagline: "Learn · Code · Grow",
  resumeUrl: "/resume.pdf",
  photo: "", // e.g. "/roshan.jpg" — put the image in /public. Leave empty to show initials.
  // Add your links (full URLs). Empty ones are hidden automatically.
  links: { linkedin: "", github: "" },
};

export const about = [
  "I'm studying B.Sc. Computer Science at Bajaj College of Science, Wardha (RTM Nagpur University), and graduate in 2026. My coursework and practice have centred on programming, data structures and algorithms, and logic building.",
  "What I like most is working out how to solve a problem step by step. I learn quickly, work well in a team, and I'm looking for a first role in the IT industry as a Python developer where I can apply that and keep growing.",
];

export const education = [
  { title: "B.Sc. Computer Science", place: "Bajaj College of Science, Wardha · RTM Nagpur University", years: "2023 – 2026", note: "Consistent academic performance." },
  { title: "Higher Secondary (12th)", place: "State Board, Maharashtra", years: "2021 – 2022", note: "" },
  { title: "Secondary (10th)", place: "State Board, Maharashtra", years: "2019 – 2020", note: "" },
];

export const skills = [
  { group: "Programming", items: ["Python", "Java", "C", "C++"] },
  { group: "Web", items: ["HTML", "CSS"] },
  { group: "Computer science", items: ["Data structures & algorithms", "Problem solving & logic building", "Basic SQL"] },
  { group: "Working style", items: ["Analytical thinking", "Teamwork & collaboration", "Quick learner", "Time management"] },
  { group: "Languages", items: ["English (fluent)", "Hindi (fluent)", "Marathi (basic)"] },
];

// No projects are listed on the resume yet, so these are placeholders.
export const projects = [
  { placeholder: true, title: "Your first Python project", description: "Describe what it does and the problem it solves.", tech: ["Python"], contribution: "What you built or decided.", outcome: "What it achieved or what you learned.", github: "", live: "" },
  { placeholder: true, title: "Your first web project", description: "A small site or app built with HTML and CSS.", tech: ["HTML", "CSS"], contribution: "What you built or decided.", outcome: "What it achieved or what you learned.", github: "", live: "" },
];

export const experience: { role: string; org: string; period: string; detail: string }[] = [
  // Add internships, volunteering or leadership here, e.g.
  // { role: "Python Intern", org: "Company", period: "Jun – Aug 2026", detail: "What you did." },
];

export const achievements = [
  "Consistent academic performance in B.Sc. Computer Science.",
  "Strong problem-solving skills in programming.",
];
export const certifications: string[] = []; // Add certificates here when you have them.

export const interests = ["Python programming", "Web development", "Problem solving and logic puzzles", "Learning new technologies"];
