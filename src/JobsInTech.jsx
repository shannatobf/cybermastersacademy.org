import { useEffect, useState } from "react";
import './style.css';

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

  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % rotatingJobs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const jobsByCategory = {
    "Software Development": [
      "Software Developer",
      "Web Developer",
      "Mobile App Developer",
      "Game Developer",
      "Full Stack Developer"
    ],
    "Data Science & Analysis": [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst"
    ],
    "Cybersecurity": [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Security Engineer"
    ],
    "Network & Systems": [
      "Network Administrator",
      "Systems Administrator",
      "Cloud Engineer"
    ],
    "Artificial Intelligence & Robotics": [
      "AI Engineer",
      "Robotics Engineer"
    ],
    "Database Management": [
      "Database Administrator",
      "Data Architect"
    ],
    "IT Support & Management": [
      "IT Support Specialist",
      "IT Manager"
    ],
    "Other Specialized Roles": [
      "DevOps Engineer",
      "UX/UI Designer",
      "Blockchain Developer",
      "Computer Vision Engineer"
    ],
    "Research & Academia": [
      "Computer Science Researcher",
      "Professor/Instructor"
    ],
    "Miscellaneous": [
      "Technical Writer",
      "Product Manager",
      "Quality Assurance (QA) Tester"
    ]
  };

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-title">💼 Jobs in Tech</h1>
        <p className="hero-subtitle">Sometimes you just need to know what to apply for.</p>

        <div className="rotating-job">
          <span className="highlight">🔥 Explore your next move:</span> {rotatingJobs[currentJobIndex]}
        </div>
      </section>

      <section className="jobs-list">
        {Object.entries(jobsByCategory).map(([category, jobs]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">📌 {category}</h2>
            <ul className="job-items">
              {jobs.map((job, idx) => (
                <li key={idx} className="job-card">
                  <div className="job-name">{job}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
