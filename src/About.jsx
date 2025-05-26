import React, { useState, useEffect } from "react";
import "./About.css";

const highlights = [
  {
    icon: "🚀",
    title: "Mission",
    text: "Empower everyone to master computer science, coding, and cybersecurity—no matter their background."
  },
  {
    icon: "🧑‍💻",
    title: "How We Teach",
    text: "We blend hands-on coding, real-world challenges, and terminal-inspired design for a fun, immersive learning experience."
  },
  {
    icon: "🌐",
    title: "Open & Inclusive",
    text: "All resources are free, open, and curated for beginners, career switchers, and lifelong learners."
  },
  {
    icon: "🤝",
    title: "Community",
    text: "Join a global network of learners, mentors, and creators. Grow together, share knowledge, and build your future."
  }
];

const themeOptions = [
  { value: "ubuntu", label: "Ubuntu Terminal" },
  { value: "cyber", label: "Cyber Masters" },
  { value: "powershell", label: "PowerShell" },
  { value: "bw", label: "Black & White" }
];

const themeVars = {
  ubuntu: {
    "--primary-accent": "#e95420",
    "--primary-accent-rgb": "233, 84, 32",
    "--success-accent": "#77216f",
    "--success-accent-rgb": "119, 33, 111",
    "--terminal-bg": "#300a24",
    "--terminal-surface": "#2c001e",
    "--terminal-border": "#77216f",
    "--terminal-text": "#eeeeec",
    "--terminal-text-muted": "#ad7fa8"
  },
  cyber: {
    "--primary-accent": "#00d9ff",
    "--primary-accent-rgb": "0, 217, 255",
    "--success-accent": "#00ff88",
    "--success-accent-rgb": "0, 255, 136",
    "--terminal-bg": "#0d1117",
    "--terminal-surface": "#161b22",
    "--terminal-border": "#30363d",
    "--terminal-text": "#e6edf3",
    "--terminal-text-muted": "#7d8590"
  },
  powershell: {
    "--primary-accent": "#00bcf2",
    "--primary-accent-rgb": "0, 188, 242",
    "--success-accent": "#003776",
    "--success-accent-rgb": "0, 55, 118",
    "--terminal-bg": "#012456",
    "--terminal-surface": "#001a33",
    "--terminal-border": "#00bcf2",
    "--terminal-text": "#e5f6fd",
    "--terminal-text-muted": "#7fdbff"
  },
  bw: {
    "--primary-accent": "#fff",
    "--primary-accent-rgb": "255, 255, 255",
    "--success-accent": "#fff",
    "--success-accent-rgb": "255, 255, 255",
    "--terminal-bg": "#111",
    "--terminal-surface": "#181818",
    "--terminal-border": "#fff",
    "--terminal-text": "#fff",
    "--terminal-text-muted": "#bbb"
  }
};

const team = [
  {
    name: "Shanna Rowe",
    role: "Founder & Lead Instructor",
    avatar: "/headshot.jpg",
    bio: "Passionate about making tech accessible. Loves Linux, open source, and teaching by example."
  },
  {
    name: "You?",
    role: "Contributor",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=contributor",
    bio: "Want to help others learn? Reach out and join our mission!"
  }
];

export default function About() {
  const [theme, setTheme] = useState("cyber");

  useEffect(() => {
    const root = document.documentElement;
    const vars = themeVars[theme];
    for (const key in vars) {
      root.style.setProperty(key, vars[key]);
    }
  }, [theme]);

  return (
    <div className={`about-root theme-${theme}`}>
      <div className="about-terminal-header">
        <div className="about-terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="about-terminal-title">cyber-masters-academy:~$ about</span>
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
      <main className="about-surface">
        <section className="about-hero">
          <h1>
            <span className="about-hero-cursor">_</span>
            About <span className="about-highlight">Cyber Masters Academy</span>
          </h1>
          <p className="about-hero-sub">
            <span className="about-hero-mono"># Learn. Build. Share. Repeat.</span>
            <br />
            <span>
              We believe in <span className="about-highlight">open knowledge</span>, practical skills, and a welcoming community for all.
            </span>
          </p>
        </section>

        <section className="about-highlights">
          {highlights.map((h, i) => (
            <div className="about-highlight-card" key={i}>
              <div className="about-highlight-icon">{h.icon}</div>
              <div>
                <div className="about-highlight-title">{h.title}</div>
                <div className="about-highlight-text">{h.text}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="about-team">
          <h2 className="about-team-title">Meet the Team</h2>
          <div className="about-team-list">
            {team.map((member, i) => (
              <div className="about-team-card" key={i}>
                <img className="about-team-avatar" src={member.avatar} alt={member.name} />
                <div className="about-team-info">
                  <div className="about-team-name">{member.name}</div>
                  <div className="about-team-role">{member.role}</div>
                  <div className="about-team-bio">{member.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h3>Ready to start your journey?</h3>
          <a className="about-cta-btn" href="/courses">
            <span className="about-cta-arrow">❯</span> Explore Courses
          </a>
        </section>
      </main>
    </div>
  );
}