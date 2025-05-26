import React, { useState } from "react";
import "./Blog.css";

const motivators = [
  { icon: "💡", title: "You Belong in Tech", message: "No matter your background, you can master computer science. We’ll help you every step of the way." },
  { icon: "🚀", title: "Launch Your Potential", message: "Every coder starts somewhere. The only difference is persistence—and you’ve got it." },
  { icon: "🧑‍💻", title: "Mentorship That Matters", message: "Real mentors. Real answers. Real encouragement. You’re never alone at Cyber Masters Academy." },
  { icon: "🔓", title: "Unlock New Skills", message: "Every challenge is a chance to grow. We turn confusion into confidence, one lesson at a time." },
  { icon: "🌱", title: "Grow With Us", message: "Celebrate your wins, learn from your mistakes, and keep moving forward. We’re cheering for you!" }
];

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <div className="blog-root">
      <div className="blog-terminal-container">
        <header className="blog-terminal-header">
          <div className="blog-terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="blog-terminal-title">cyber-masters-academy:~$ Blog</span>
        </header>
        <main className="blog-terminal-surface">
          <section className="blog-hero">
            <h1>
              <span className="blog-hero-cursor">_</span>
              Welcome to <span className="blog-highlight">Cyber Masters Academy</span>
            </h1>
            <p className="blog-hero-sub">
              <span className="blog-hero-mono"># Motivation. Mentorship. Momentum.</span>
              <br />
              <span>
                Your journey in computer science starts here—with real guidance, encouragement, and a community that wants you to win.
              </span>
            </p>
          </section>
          <section className="blog-motivation-list">
            {motivators.map((item, idx) => (
              <div className="blog-motivation-item" key={idx}>
                <span className="blog-motivation-icon">{item.icon}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.message}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="blog-banner">
            <h3>🌟 Your Mentor’s Promise</h3>
            <p>
              At Cyber Masters Academy, you’re never just a number. We’re here to answer your questions, celebrate your wins, and help you overcome every obstacle.<br />
              <span className="blog-highlight">Let’s reach your full potential—together.</span>
            </p>
          </section>
        </main>
      </div>
      <footer className="blog-email-footer" role="contentinfo">
        <div className="blog-email-footer-content">
          <h4>
            <span className="blog-email-emoji" aria-hidden="true">📬</span>
            <span className="blog-email-title-text">Join our <span className="blog-highlight">Email List</span></span>
            <span className="blog-email-emoji" aria-hidden="true">🚀</span>
          </h4>
          <div className="blog-email-subtext">
            <span>Get coding tips, new challenges, and exclusive updates. </span>
          </div>
        </div>
        {!subscribed ? (
          <div className="blog-email-input-container terminal-input">
            <span className="prompt-sign">$</span>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="Email address input"
              autoComplete="email"
            />
            <button onClick={handleSubscribe} disabled={subscribed} type="button">
              {subscribed ? "Subscribed" : "Join"}
            </button>
          </div>
        ) : (
          <div className="blog-subscribed-msg">🎉 You're subscribed!</div>
        )}
      </footer>
    </div>
  );
}