import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Masego Laurentia Moatshe",
  title: "Aspiring Data Analyst | BSc Information Technology Student",
  intro:
    "I turn raw data into clear, decision-ready insight. Currently completing my BSc in Information Technology while building analytics projects with Python, SQL and Power BI.",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
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
  { name: "Python", level: 85, group: "Analysis" },
  { name: "SQL", level: 88, group: "Data" },
  { name: "Power BI", level: 80, group: "Visualisation" },
  { name: "Java", level: 70, group: "Programming" },
  { name: "JavaScript", level: 72, group: "Programming" },
  { name: "AWS", level: 60, group: "Cloud" },
  { name: "Git", level: 82, group: "Tooling" },
  { name: "GitHub", level: 85, group: "Tooling" },
];

export const projects = [
  {
    title: "Retail Sales Analytics Dashboard",
    image: project1,
    description:
      "Interactive dashboard tracking revenue, basket size and regional performance across 24 months of retail transactions.",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/your-username",
    demo: "https://example.com",
  },
  {
    title: "Customer Data Pipeline",
    image: project2,
    description:
      "An ETL pipeline that cleans, validates and loads customer records into a normalised PostgreSQL schema with automated quality checks.",
    tech: ["Python", "PostgreSQL", "Pandas"],
    github: "https://github.com/your-username",
  },
  {
    title: "Churn Prediction Model",
    image: project3,
    description:
      "Exploratory analysis and a logistic regression baseline predicting subscriber churn, with feature importance reporting.",
    tech: ["Python", "scikit-learn", "Matplotlib"],
    github: "https://github.com/your-username",
    demo: "https://example.com",
  },
];

export const education = [
  {
    school: "University Name",
    qualification: "BSc Information Technology",
    period: "2023 — Present",
    detail:
      "Coursework in databases, data structures, statistics, software development and information systems.",
  },
  {
    school: "High School Name",
    qualification: "National Senior Certificate",
    period: "2022",
    detail: "Bachelor's pass with distinctions in Mathematics and Information Technology.",
  },
];

export const certifications = [
  { name: "Google Data Analytics Certificate", issuer: "Coursera", year: "2025" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS Skill Builder", year: "2025" },
  { name: "SQL for Data Analysis", issuer: "DataCamp", year: "2024" },
  { name: "Microsoft Power BI Fundamentals", issuer: "Microsoft Learn", year: "2024" },
];
