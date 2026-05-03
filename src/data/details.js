// Enter all your profile details in this file

// Profile Image
import profile from "../assets/images/profile.jpg";
// Tech stack images
import html from "../assets/techicons/html.png";
import css from "../assets/techicons/css.png";
import js from "../assets/techicons/js.png";
import react from "../assets/techicons/react.png";
import redux from "../assets/techicons/redux.png";
import tailwind from "../assets/techicons/tailwind.png";
import vscode from "../assets/techicons/vscode.png";
import github from "../assets/techicons/github.png";
import git from "../assets/techicons/git.png";
import npm from "../assets/techicons/npm.png";
import ts from "../assets/techicons/ts.png";
import eclipse from "../assets/techicons/eclipse.png";
import java from "../assets/techicons/java.png";
import jQuery from "../assets/techicons/jQuery.png";
import vite from "../assets/techicons/vite.png";
import webpack from "../assets/techicons/webpack.png";
import axios from "../assets/techicons/axios.png";
import MySQL from "../assets/techicons/MySQL.png";
import restapi from "../assets/techicons/restapi.png";
// Porject Images
import projectImage1 from "../assets/images/projects/project1.jpg";
import projectImage2 from "../assets/images/projects/project2.jpg";

// Enter your Personal Details here
export const personalDetails = {
  name: "Naveen Poludasu",
  tagline: "Frontend Developer specializing in React & JavaScript",
  img: profile,
  about: 'Frontend Developer with 2.10 years of experience in building scalable, high-performance web applications using React.js, JavaScript (ES6+), and modern UI architecture. Specialized in reusable component design, state management with Hooks & Context API, performance optimization, and enterprise-level UI deployments. Passionate about creating responsive and accessible user experiences.'
          
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://in.linkedin.com/in/naveen-poludasu-8038a2214",
  github: "https://github.com/npoludasu",
  twitter: "https://x.com/NaveenPolu82563",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Engineer, Associate",
    Company: "Infor India Pvt. Ltd",
    Location: "Hyderabad",
    Type: "Full Time",
    Duration: "July 2023 - Present",
    Role: [
      "Developed reusable React components, improving UI consistency and reducing development effort by 30%.",
      "Optimized Java-based Infor WebTop modules, improving stability and reducing UI defects by 20%.",
      "Deployed Infor Infinium applications on IBM WebSphere with 99% success across prod, QA, and test environments.",
    ],
  },
  {
    Position: "Graduate Engineer Trainee",
    Company: "Hexaware Technologies",
    Location: "Remote",
    Type: "Internship",
    Duration: "Dec 2022 - May 2023",
    Role: [
      "Completed intensive training in Java, SQL, HTML, CSS, and JavaScript, gaining strong full-stack fundamentals.",
      "Designed and developed dynamic web applications using HTML, CSS, JavaScript, and AJAX with jQuery.",
    ],
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: "PACE Institute Of Technology & Sciences",
    Location: "Ongole",
    Type: "",
    Duration: "Aug 2019 - May 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  ts: ts,
  eclipse: eclipse,
  java: java,
  jQuery: jQuery,
  vite:vite,
  webpack:webpack,
  axios:axios,
  MySQL:MySQL,
  restapi:restapi,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Job Application Tracker (On Going)",
    image: projectImage1,
    description: `Developing a responsive React job tracking dashboard with CRUD operations, reusable components, custom hooks, search/filter/sorting, localStorage persistence, and optimized for performance.`,
    techstack: "React Js , Tailwind CSS",
    previewLink: "https://jobflow-dashboard-ngr1.vercel.app/",
    githubLink: "https://github.com/npoludasu/jobflow-dashboard",
  },
  {
    title: "Cricket Scoring App",
    image: projectImage2,
    description: `Built a responsive real-time cricket scoring application using HTML, CSS, and JavaScript with live score updates, accurate match logic (runs, wickets, overs, extras, strike rotation), and browser localStorage for match data persistence.`,
    techstack: "HTML,CSS, JavaScript",
    previewLink: "https://npoludasu.github.io/cricket-scoring-app/",
    githubLink: "https://github.com/npoludasu/cricket-scoring-app",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "naveen.poludasu1@gmail.com",
  phone: "+91 7993319156",
};
