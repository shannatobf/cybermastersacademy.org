import React from 'react';
import './style.css';

export default function Courses() {
  const courseList = [
    {
      title: "🎨 🧩 🖥️Front-End Web Development",
      description: "Learn HTML, CSS, JavaScript, and React to build beautiful web interfaces.",
      level: "Beginner",
      links: [
        { name: "Mozilla Developer Network", url: "https://developer.mozilla.org/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "W3Schools", url: "https://www.w3schools.com/" },
        { name: "Scrimba", url: "https://scrimba.com/" }
      ]
    },
    {
      title: "🛠️ 🔄🔧Full Stack Developer",
      description: "Master both front-end and back-end technologies to build full applications.",
      level: "Intermediate",
      links: [
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "The Odin Project", url: "https://www.theodinproject.com/" },
        { name: "Fullstack Academy", url: "https://www.fullstackacademy.com/" },
        { name: "Codecademy", url: "https://www.codecademy.com/" }
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
        { name: "Open Security Training", url: "http://opensecuritytraining.info/" }
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
        { name: "A Cloud Guru", url: "https://acloudguru.com/" }
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
        { name: "Google AI Education", url: "https://ai.google/education/" }
      ]
    }
  ];

  return (
    <div className="container">
      <div className="navbar-inner">
        <nav className="nav-links">
          {/* Add navigation links back later if needed */}
        </nav>
      </div>

      <main className="courses">
        <section className="hero">
          <h1 className="hero-title"> 💡 Start Here. Go anywhere ;)</h1>
          <p className="hero-subtitle">Empowering learners with hands-on knowledge and industry skills.</p>
        </section>

        <section className="course-list">
          {courseList.map((course, index) => (
            <div key={index} className="course-card course-card-block"> {/* Added course-card-block */}
              <h2>{course.title}</h2>
              <p className="course-level">📌 {course.level}</p>
              <p className="course-description">{course.description}</p> {/* Added course-description class */}
              <div className="course-links course-links-block"> {/* Added course-links-block */}
                {course.links && course.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link-button course-link-button-block"  // Added course-link-button-block
                  >
                    {link.name}
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
