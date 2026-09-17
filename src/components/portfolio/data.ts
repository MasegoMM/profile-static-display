import projectLaCrime from "@/assets/project-la-crime.jpg";

export const profile = {
  name: "Masego Laurentia Moatshe",
  title: "Aspiring Data Analyst | BSc Information Technology Student",
  intro:
    "I turn raw data into clear, decision-ready insight. Currently completing my BSc in Information Technology while building analytics projects with Python, SQL and Power BI.",
  email: "moatshemasego73@gmail.com",
  linkedin: "https://www.linkedin.com/in/masego-moatshe-0059b7334/",
  github: "https://github.com/MasegoMM",
  location: "South Africa",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "Python",
  "MySQL",
  "SQL Server Management Studio",
  "Java",
  "JavaScript",
  "Power BI",
  "AWS",
  "Git",
  "GitHub",
  "Data cleaning",
  "Exploratory data analysis",
  "Jupyter Notebook",
  "IntelliJ IDEA",
  "VS Code",
  "Excel",
];

export const projects = [
  {
    title: "LAPD Crime Data Analysis (2020–2024)",
    image: projectLaCrime,
    description:
      "Exploratory analysis of 1,004,894 LAPD crime incidents: time trends, crime types, geography and hotspots, victim demographics, and a model predicting arrest outcomes.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/MasegoMM/Crime_Data_Analysis_2020_2024",
    demo: "/LA_Crime_Analysis_Report.html",
  },
];

export const education = [
  {
    school: "Richfield Graduate Institute of Technology",
    qualification: "BSc Information Technology",
    period: "2024 — Present",
    detail:
      "Coursework in databases, data structures, statistics, software development and information systems.",
  },
  {
    school: "HF Tlou",
    qualification: "National Senior Certificate",
    period: "2020",
    detail: "Bachelor's pass.",
  },
];

export const certifications = [
  { name: "Microsoft AI Essentials", issuer: "Microsoft Learn", year: "2025" },
];
