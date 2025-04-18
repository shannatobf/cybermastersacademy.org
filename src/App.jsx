import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css';
import Blog from './Blog'; // Adjust path if your structure is different
import Courses from './Courses';
import JobsInTech from './JobsInTech';
import News from './News';

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>The Future of Learning is <span className="highlight">Open</span></h1>
        <p>
          Welcome to <strong>Cyber Masters Academy.</strong> We believe your coding journey starts <strong>now.</strong>
        </p>
        <button className="cta-button">Start Learning</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>What You’ll Discover</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">🛡️</div>
            <h3>Industry Expert-led Courses</h3>
            <p>Taking advantage of open source work and review real-world projects that build job-ready skills.</p>
          </div>
          <div className="card">
            <div className="icon">👨‍💻/👩‍💻</div>
            <h3>Open Source Projects</h3>
            <p>Review and contribute to active community-driven tech projects.</p>
          </div>
          <div className="card">
            <div className="icon">📚</div>
            <h3>Positions in the Field</h3>
            <p>You ever wonder what all you can do in the computer science realm? </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="footer-cta">
        <h2>2025 Cyber Masters Academy </h2>
        <p>Join thousands of learners building the next generation of digital skills.🔥</p>
        <button className="cta-button dark">Explore Courses</button>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">CyberMastersAcademy.org</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/JobsInTech">Jobs In Tech</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact/About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/JobsInTech" element={<JobsInTech />}/>
          <Route path="/News" element={<News />}/>
        </Routes>
      </main>
    </Router>
  );
}