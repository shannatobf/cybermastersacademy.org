import { Link } from "react-router-dom";
import './style.css';

export default function Courses() {
  const courseList = [
    {
      title: "💻 Front-End Web Development",
      description: "Learn HTML, CSS, JavaScript, and React to build beautiful web interfaces.",
      level: "Beginner"
    },
    {
      title: "🛠️ Full Stack Developer",
      description: "Master both front-end and back-end technologies to build full applications.",
      level: "Intermediate"
    },
    {
      title: "🔒 Cybersecurity Essentials",
      description: "Understand core cybersecurity principles and protect systems from threats.",
      level: "Beginner"
    },
    {
      title: "☁️ Cloud Computing Basics",
      description: "Get introduced to cloud platforms like AWS, Azure, and Google Cloud.",
      level: "Beginner"
    },
    {
      title: "🤖 AI & Machine Learning",
      description: "Explore how AI works, train models, and apply machine learning techniques.",
      level: "Advanced"
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
          <h1 className="hero-title">🎓 Our Courses</h1>
          <p className="hero-subtitle">Empowering learners with hands-on knowledge and industry skills.</p>
        </section>

        <section className="course-list">
          {courseList.map((course, index) => (
            <div key={index} className="course-card">
              <h2>{course.title}</h2>
              <p className="course-level">📌 {course.level}</p>
              <p>{course.description}</p>
              <button className="cta-button">Explore</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
