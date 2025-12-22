import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Blog from './Blog';
import Courses from './Courses';
import About from './About';
import CodingTrivia from "./CodingTrivia";
import JobsInTech from './JobsInTech';
import logoImage from './cma_logo.jpg';
import './App.css';
import React, { useState, useEffect } from "react";

// Auth0 config
const domain = "dev-uqbkcw80kyqc88jz.us.auth0.com";
const clientId = "jodozCrja2uStkOWkWS1MIC4NKjzOSWU";

// Auth Buttons
function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) return <div className="auth-loading"><span className="pulse-dot"></span></div>;
  return (
    <div className="auth-buttons">
      {isAuthenticated ? (
        <>
          <div className="user-badge">
            <div className="user-avatar">{(user.name || user.email || 'U')[0].toUpperCase()}</div>
            <span className="user-name">{user.name || user.email}</span>
          </div>
          <button className="btn-logout" onClick={() => logout({ returnTo: window.location.origin })}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16,17 21,12 16,7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </>
      ) : (
        <button className="btn-login" onClick={() => loginWithRedirect()}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10,17 15,12 10,7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
          Sign In
        </button>
      )}
    </div>
  );
}

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`cma-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="cma-header-inner">
        <Link to="/" className="cma-header-logo-wrap">
          <div className="logo-glow">
            <img src={logoImage} alt="Cyber Masters Academy" className="cma-logo" />
          </div>
          <div className="logo-text">
            <span className="cma-title">CyberMasters</span>
            <span className="cma-subtitle">Academy</span>
          </div>
        </Link>
        
        <nav className={`cma-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>About
          </Link>
          <Link to="/courses" className={location.pathname === "/courses" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>Courses
          </Link>
          <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>Blog
          </Link>
          <Link to="/JobsInTech" className={location.pathname === "/JobsInTech" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>Jobs
          </Link>
          <Link to="/coding-trivia" className={location.pathname === "/coding-trivia" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon"></span>Trivia
          </Link>
          <div className="nav-auth-mobile">
            <AuthButtons />
          </div>
        </nav>

        <div className="header-right">
          <div className="nav-auth-desktop">
            <AuthButtons />
          </div>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

// Modern 2025 Home page
function Home() {
  return (
    <div className="home-2025">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-2025">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text"> Computer Science Career Development and Learning Platform</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Master the Future of</span>
            <span className="title-gradient">Cybersecurity</span>
            <span className="title-line">& Technology</span>
          </h1>
          
          <p className="hero-description">
            Join thousands of learners building next-generation digital skills. 
            From open source to career-ready certifications  your journey starts here.
          </p>

          <div className="hero-cta">
            <Link to="/courses" className="btn-primary">
              <span>Explore Courses</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/JobsInTech" className="btn-secondary">
              <span>Browse Tech Jobs</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">Explore</span>
              <span className="stat-label">Computer Science realm</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Free Course Resources</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Open Source</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">cyber-masters-academy</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">initialize_career</span>
                <span className="cursor"></span>
              </div>
              <div className="terminal-line output">
                <span className="success"></span> Loading tech skills...
              </div>
              <div className="terminal-line output">
                <span className="success"></span> Connecting to industry...
              </div>
              <div className="terminal-line output">
                <span className="success"></span> Future unlocked!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="bento-section">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">Comprehensive tools and resources designed for the modern learner</p>
        </div>

        <div className="bento-grid">
          {/* Large Feature Card */}
          <div className="bento-card bento-large">
            <div className="card-glow"></div>
            <div className="card-icon-wrap">
              <div className="card-icon"></div>
            </div>
            <h3>Open Source Learning</h3>
            <p>Contribute to real-world projects while building job-ready skills. Learn by doing with our community-driven approach.</p>
            <Link to="/courses" className="card-link">
              Start Learning
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Medium Cards */}
          <div className="bento-card bento-medium">
            <div className="card-glow"></div>
            <div className="card-icon-wrap purple">
              <div className="card-icon"></div>
            </div>
            <h3>Coding Trivia</h3>
            <p>Test your knowledge with interactive challenges and compete with others.</p>
            <Link to="/coding-trivia" className="card-link">
              Play Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="bento-card bento-medium">
            <div className="card-glow"></div>
            <div className="card-icon-wrap green">
              <div className="card-icon"></div>
            </div>
            <h3>Career Paths</h3>
            <p>Discover roles in cybersecurity, development, and beyond.</p>
            <Link to="/JobsInTech" className="card-link">
              Explore Jobs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Small Cards Row */}
          <div className="bento-card bento-small">
            <div className="card-icon-mini"></div>
            <span>Security First</span>
          </div>

          <div className="bento-card bento-small">
            <div className="card-icon-mini"></div>
            <span>Global Community</span>
          </div>

          <div className="bento-card bento-small">
            <div className="card-icon-mini"></div>
            <span>Mobile Ready</span>
          </div>

          <div className="bento-card bento-small">
            <div className="card-icon-mini"></div>
            <span>Certifications</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="proof-content">
          <div className="proof-text">
            <span className="proof-tag">Trusted by Learners</span>
            <h2>Join the Community</h2>
            <p>Thousands of students have launched their tech careers with Cyber Masters Academy</p>
          </div>
          <div className="proof-avatars">
            <div className="avatar-stack">
              <div className="avatar" style={{background: 'linear-gradient(135deg, #00ffe7, #00b4d8)'}}>S</div>
              <div className="avatar" style={{background: 'linear-gradient(135deg, #ff6b6b, #feca57)'}}>A</div>
              <div className="avatar" style={{background: 'linear-gradient(135deg, #a855f7, #6366f1)'}}>M</div>
              <div className="avatar" style={{background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>J</div>
              <div className="avatar more">+2.5k</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-bg"></div>
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join Cyber Masters Academy today and unlock your potential in tech.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn-cta-primary">
                Get Started Free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-cta-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-2025">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="CMA" />
              <span>Cyber Masters Academy</span>
            </div>
            <p>Empowering the next generation of tech professionals.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Learn</h4>
              <Link to="/courses">Courses</Link>
              <Link to="/coding-trivia">Trivia</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/JobsInTech">Jobs in Tech</Link>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p> 2025 Cyber Masters Academy. All rights reserved.</p>
          <p className="footer-tagline">Built and designed by developers.</p>
        </div>
      </footer>
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
            <Route path="/coding-trivia" element={<CodingTrivia />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Auth0Provider>
  );
}
