import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import './style.css';
import Blog from './Blog'; // Adjust path if your structure is different
import Courses from './Courses';
import JobsInTech from './JobsInTech';
import News from './News';
import logoImage from './cma_logo.jpg'; // import logo

// Auth0 config
const domain = "dev-uqbkcw80kyqc88jz.us.auth0.com";
const clientId = "jodozCrja2uStkOWkWS1MIC4NKjzOSWU";

// Simple Auth Buttons component for login/logout
function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="auth-buttons" style={{ marginLeft: 'auto' }}>
      {isAuthenticated ? (
        <>
          <span style={{ marginRight: '10px' }}>Welcome, {user.name || user.email}!</span>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}
    </div>
  );
}

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

export default function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router>
        <header className="navbar" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logoImage} alt="Cyber Masters Academy Logo" className="logo" />
          <h3 className="logo">CyberMastersAcademy.org</h3>
          <h5>💻 open source computer science organization designed to make learning, simple. 🛠️</h5>

          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/JobsInTech">Jobs In Tech</Link>
            <Link to="/News">News</Link>
            <Link to="/contact">About</Link>
          </nav>

          {/* Auth buttons at the right side */}
          <AuthButtons />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/JobsInTech" element={<JobsInTech />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </main>
      </Router>
    </Auth0Provider>
  );
}
