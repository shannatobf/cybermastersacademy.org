import { useEffect, useState } from "react";
import './JobsInTech.css';

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

// Improved grouping: allocate all jobs to the most relevant category
const jobsByCategory = {
  "Software Development": [
    "Software Developer",
    "Web Developer",
    "Mobile App Developer",
    "Game Developer",
    "Full Stack Developer",
    "Product Manager",
    "Quality Assurance (QA) Tester"
  ],
  "Data Science & Analysis": [
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "Business Intelligence Analyst",
    "Computer Vision Engineer"
  ],
  "Cybersecurity": [
    "Cybersecurity Analyst",
    "Ethical Hacker",
    "Security Engineer"
  ],
  "Network, Cloud & Systems": [
    "Network Administrator",
    "Systems Administrator",
    "Cloud Engineer",
    "DevOps Engineer"
  ],
  "Artificial Intelligence & Robotics": [
    "AI Engineer",
    "Robotics Engineer"
  ],
  "Database & Data Management": [
    "Database Administrator",
    "Data Architect"
  ],
  "IT Support & Management": [
    "IT Support Specialist",
    "IT Manager"
  ],
  "UI/UX & Design": [
    "UX/UI Designer"
  ],
  "Blockchain & Emerging Tech": [
    "Blockchain Developer"
  ],
  "Research & Academia": [
    "Computer Science Researcher",
    "Professor/Instructor",
    "Technical Writer"
  ]
};

const categoryIcons = {
  "Software Development": "💻",
  "Data Science & Analysis": "📊",
  "Cybersecurity": "🔒",
  "Network, Cloud & Systems": "☁️",
  "Artificial Intelligence & Robotics": "🤖",
  "Database & Data Management": "🗄️",
  "IT Support & Management": "🛠️",
  "UI/UX & Design": "🎨",
  "Blockchain & Emerging Tech": "⛓️",
  "Research & Academia": "🎓"
};

export default function JobsInTech() {
  const rotatingJobs = [
    "Software Developer",
    "Data Scientist",
    "Cybersecurity Analyst",
    "AI Engineer",
    "UX/UI Designer",
    "DevOps Engineer",
    "Cloud Engineer"
  ];

  const [theme, setTheme] = useState(THEMES.ubuntu);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % rotatingJobs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`jobs-terminal-root theme-${theme}`}>
      <div className="jobs-terminal-header">
        <div className="jobs-terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="jobs-terminal-title">cyber-masters-academy:~$ jobs-in-tech</span>
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
      <main className="jobs-terminal-surface">
        <section className="jobs-hero">
          <h1>
            <span className="jobs-hero-cursor">_</span>
            Explore <span className="jobs-highlight">Jobs in Tech</span>
          </h1>
          <p className="jobs-hero-sub">
            <span className="jobs-hero-mono"># Find your path. Shape the future.</span>
            <br />
            <span>
              Browse the landscape of tech careers—grouped by specialty, styled like a terminal, and ready for your next command.
            </span>
          </p>
          <div className="rotating-job modern-terminal-blink">
            <span className="jobs-highlight">🔥 Next move:</span> {rotatingJobs[currentJobIndex]}
          </div>
        </section>
        <section className="jobs-category-list">
          {Object.entries(jobsByCategory).map(([category, jobs]) => (
            <div key={category} className="jobs-category-card">
              <div className="jobs-category-header">
                <span className="jobs-category-icon">{categoryIcons[category]}</span>
                <span className="jobs-category-title">{category}</span>
              </div>
              <ul className="jobs-list-items">
                {jobs.map((job, idx) => (
                  <li key={idx} className="job-card-modern">
                    <span className="job-dot">❯</span>
                    <span className="job-name-modern">{job}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}