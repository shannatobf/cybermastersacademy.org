import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Blog from './Blog';
import Courses from './Courses';
import About from './About';
import JobsInTech from './JobsInTech';
import logoImage from './cma_logo.jpg';
import './App.css';

// Auth0 config
const domain = "dev-uqbkcw80kyqc88jz.us.auth0.com";
const clientId = "jodozCrja2uStkOWkWS1MIC4NKjzOSWU";

// Auth Buttons
function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="auth-buttons">
      {isAuthenticated ? (
        <>
          <span style={{ marginRight: '10px' }}>Welcome, {user.name || user.email}!</span>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
}

// Modern, immersive Header
function Header() {
  const location = useLocation();
  return (
    <header className="cma-header">
      <div className="cma-header-inner">
        <div className="cma-header-left">
          <img src={logoImage} alt="Cyber Masters Academy Logo" className="cma-logo" />
          <span className="cma-title">Cyber Masters Academy</span>
        </div>
        <nav className="cma-nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/courses" className={location.pathname === "/courses" ? "active" : ""}>Courses</Link>
          <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link>
          <Link to="/JobsInTech" className={location.pathname === "/JobsInTech" ? "active" : ""}>Jobs In Tech</Link>
        </nav>
        <div className="cma-header-right">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}

// Home page (immersive, full-width)
function Home() {
  return (
    <div className="immersive-container">
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
            <h3>Coding Trivia</h3>
            <p>Be Prepared. Use CyberMastersAcademy.org to unlock your full potential in Tech!</p>
          </div>
          <div className="card">
            <div className="icon">🌐</div>
            <h3>Positions in the Field</h3>
            <p>You ever wonder what all you can do in the computer science realm? Head to Jobs in Tech and explore your next career move.</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
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
      authorizationParams={{ redirect_uri: "https://shannatobf.github.io/cybermastersacademy.org" }}
    >
      <BrowserRouter basename="/cybermastersacademy.org">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/JobsInTech" element={<JobsInTech />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Auth0Provider>
  );
}