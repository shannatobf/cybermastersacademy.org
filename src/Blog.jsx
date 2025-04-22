import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Blog() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [dislikes, setDislikes] = useState([0, 0, 0]);
  const [userPost, setUserPost] = useState({ title: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  const handleDislike = (index) => {
    const updatedDislikes = [...dislikes];
    updatedDislikes[index]++;
    setDislikes(updatedDislikes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setUserPost({ title: '', description: '' });
  };

  const posts = [
    {
      title: "🚀 Getting Started with Web Development",
      description: "Discover how to kick off your coding journey using modern tools and frameworks.",
      date: "April 17, 2025"
    },
    {
      title: "🧠 Expert Tips: Writing Clean Code",
      description: "Learn best practices to keep your code readable, efficient, and scalable.",
      date: "April 16, 2025"
    },
    {
      title: "🌐 Open Source & You",
      description: "Why contributing to open source accelerates your growth and career.",
      date: "April 15, 2025"
    }
  ];

  return (
    <div className="container">
      <div className="navbar-inner">
        <nav className="nav-links">
          {/* Add navigation links back later if needed */}
        </nav>
      </div>

      <main className="blog">
        <section className="hero">
          <h1 className="hero-title">📚 Cyber Insights Blog</h1>
          <p className="hero-subtitle">
            Fresh stories, tutorials, and career tips for future tech leaders.
          </p>
        </section>

        <section className="blog-entries">
          {posts.map((post, index) => (
            <div key={index} className="blog-card">
              <h2>{post.title}</h2>
        
              <p>{post.description}</p>
              <button className="cta-button">Read More</button>
              <div className="reaction-buttons">
              <p className="blog-date">📅 {post.date}</p>
                <button onClick={() => handleLike(index)} className="like-button">❤️ {likes[index]}</button>
                <button onClick={() => handleDislike(index)} className="dislike-button">💔 {dislikes[index]}</button>
              </div>
            </div>
          ))}
        </section>

        <section className="blog-submission">
          <h2 className="section-title">✍️ Submit Your Questions!</h2>
          {submitted ? (
            <p className="submission-message">✅ Blog Post Submitted for Approval!</p>
          ) : (
            <form onSubmit={handleSubmit} className="blog-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={userPost.title}
                  onChange={(e) => setUserPost({ ...userPost, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Blog Description"
                  value={userPost.description}
                  onChange={(e) => setUserPost({ ...userPost, description: e.target.value })}
                  required
                  rows="4"
                />
              </div>
              <button type="submit" className="cta-button">Submit</button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
