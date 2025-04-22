import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css';
import Blog from './Blog'; // Adjust path if your structure is different
import Courses from './Courses';
import JobsInTech from './JobsInTech';
import News from './News';
import logoImage from './cma_logo.jpg'; // import logo

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>The Future of Learning is <span className="highlight">Open</span></h1>
        <p>
          Welcome to <strong>Cyber Masters Academy.</strong> We believe your coding journey starts <strong>now.</strong>
        </p>
        <button className="cta-button">Explore Jobs in Tech</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>What You’ll Discover</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">📢🛡️ </div>
            <h3>Learn how to Open Source</h3>
            <p>Get in tech. Develop a passion and take advantage of open source work while building job-ready skills.  Consider contributing to active community-driven tech projects.</p>
          </div>
          <div className="card">
            <div className="icon">📍📰⚡➡️</div>
            <h3>News</h3>
            <p>Keep up with the latest tech news. Use CyberMastersAcademy.org intel to produce reports, interviews, presentations, and so on!</p>
          </div>
          <div className="card">
            <div className="icon">🌐</div>
            <h3>Positions in the Field</h3>
            <p>You ever wonder what all you can do in the computer science realm? Head to Jobs in Tech and explore your next career move.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer-cta">
      <button className="cta-button dark">Explore Courses</button>
        <h2>2025 Cyber Masters Academy </h2>
        <p>🚨 Join thousands of learners building the next generation of digital skills.</p>
        <h6>2025 All copyrights reserved. | CyberMastersAcademy.org </h6>
      </section>
    </div>
  );
}

/* HEADER SECTION */
export default function App() {
  return (
    <Router>
      <header className="navbar">
        <h1 className="logo">CyberMastersAcademy.org </h1>
        <h5>💻 open source computer science organization designed to make learning, simple. 🛠️  </h5>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/JobsInTech">Jobs In Tech</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">About</Link>
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

