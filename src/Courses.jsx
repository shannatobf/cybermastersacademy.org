import React, { useState } from 'react';
import './Courses.css';

const THEMES = {
  ubuntu: 'ubuntu',
  cyber: 'cyber',
  powershell: 'powershell',
  bw: 'bw'
};

const themeOptions = [
  { value: THEMES.ubuntu, label: 'Ubuntu Terminal' },
  { value: THEMES.cyber, label: 'Cyber Masters' },
  { value: THEMES.powershell, label: 'PowerShell' },
  { value: THEMES.bw, label: 'Black & White' }
];

const courseList = [
  {
    title: "🎨 🧩 🖥️ Front-End Web Development",
    description: "Learn HTML, CSS, JavaScript, and React to build beautiful web interfaces.",
    level: "Beginner",
    links: [
      { name: "Mozilla Developer Network", url: "https://developer.mozilla.org/" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "W3Schools", url: "https://www.w3schools.com/" },
      { name: "Scrimba", url: "https://scrimba.com/" },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" }
    ]
  },
  {
    title: "🛠️ 🔄🔧 Full Stack Developer",
    description: "Master both front-end and back-end technologies to build full applications.",
    level: "Intermediate",
    links: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/" },
      { name: "Fullstack Academy", url: "https://www.fullstackacademy.com/" },
      { name: "Codecademy", url: "https://www.codecademy.com/" },
      { name: "NodeSchool", url: "https://nodeschool.io/" }
    ]
  },
  {
    title: "🔒🔍 Cybersecurity Essentials",
    description: "Understand core cybersecurity principles and protect systems from threats.",
    level: "Beginner",
    links: [
      { name: "Cybrary", url: "https://www.cybrary.it/" },
      { name: "SANS Institute", url: "https://www.sans.org/" },
      { name: "NIST Cybersecurity", url: "https://www.nist.gov/cyberframework" },
      { name: "Open Security Training", url: "http://opensecuritytraining.info/" },
      { name: "TryHackMe", url: "https://tryhackme.com/" }
    ]
  },
  {
    title: "☁️ Cloud Computing Basics",
    description: "Get introduced to cloud platforms like AWS, Azure, and Google Cloud.",
    level: "Beginner",
    links: [
      { name: "AWS Training", url: "https://aws.training/" },
      { name: "Microsoft Azure", url: "https://azure.microsoft.com/en-us/get-started/" },
      { name: "Google Cloud Skills Boost", url: "https://cloudskillsboost.google/" },
      { name: "A Cloud Guru", url: "https://acloudguru.com/" },
      { name: "Cloud Academy", url: "https://cloudacademy.com/" }
    ]
  },
  {
    title: "🤖 AI & Machine Learning",
    description: "Explore how AI works, train models, and apply machine learning techniques.",
    level: "Advanced",
    links: [
      { name: "Coursera", url: "https://www.coursera.org/" },
      { name: "edX", url: "https://www.edx.org/" },
      { name: "fast.ai", url: "https://www.fast.ai/" },
      { name: "Google AI Education", url: "https://ai.google/education/" },
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" }
    ]
  }
];

export default function Courses() {
  const [theme, setTheme] = useState(THEMES.ubuntu);

  return (
    <div className={`courses-terminal-root theme-${theme}`}>
      <div className="courses-terminal-header">
        <div className="courses-terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="courses-terminal-title">cyber-masters-academy:~$ courses</span>
        <div className="theme-dropdown-container">
          <select
            className="theme-dropdown"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            aria-label="Choose terminal color scheme"
          >
            {themeOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
      <main className="courses-terminal-surface">
        <section className="courses-hero">
          <h1>
            <span className="courses-hero-cursor">_</span>
            Shop for Knowledge <span className="courses-highlight">in Computer Science</span>
          </h1>
          <p className="courses-hero-sub">
            <span className="courses-hero-mono"># Pick a path. Level up. Repeat.</span>
            <br />
            <span>
              Browse curated learning tracks and resources—just like running <span className="courses-highlight">ls --all</span> in your terminal.
            </span>
          </p>
        </section>
        <section className="courses-list">
          {courseList.map((course, idx) => (
            <div className="courses-card" key={idx}>
              <div className="courses-card-header">
                <span className="courses-card-title">{course.title}</span>
                <span className={`courses-card-level ${course.level.toLowerCase()}`}>{course.level}</span>
              </div>
              <div className="courses-card-desc">{course.description}</div>
              <div className="courses-card-links">
                {course.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="courses-link-btn"
                  >
                    <span className="courses-link-arrow">❯</span> {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}