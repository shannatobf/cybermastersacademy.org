import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css';

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>The Future of Learning is <span className="highlight">Open</span></h1>
        <p>
          Welcome to <strong>Cyber Masters Academy</strong> We believe everyone should have access to learning <span className="hightlight"> Code.</span>
        </p>
        <button className="cta-button">Start Learning</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>What You’ll Discover</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">🧪</div>
            <h3>Hands-on Courses</h3>
            <p>Interactive lessons and real-world projects that build job-ready skills.</p>
          </div>
          <div className="card">
            <div className="icon">💻</div>
            <h3>Open Source Projects</h3>
            <p>Collaborate and contribute to active community-driven tech projects.</p>
          </div>
          <div className="card">
            <div className="icon">📚</div>
            <h3>Modern Glossary</h3>
            <p>Stay sharp with an evolving glossary of technical terms and lingo.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="footer-cta">
        <h2>Ready to Master the Cyber Future?</h2>
        <p>Join thousands of learners building the next generation of digital skills.</p>
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
          <Link to="/glossary">Technical Terms</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact/About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
