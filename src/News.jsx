import { useEffect, useState } from "react";
import './style.css';

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mocking tech news data for now
    const mockNews = [
      {
        title: "OpenAI Releases GPT-5 Sneak Peek",
        description: "The next-gen language model promises more power, less bias, and real-time data capabilities.",
        date: "April 17, 2025"
      },
      {
        title: "Apple's New M4 Chip Shakes Up the Industry",
        description: "Benchmarks show massive improvements in performance and efficiency.",
        date: "April 16, 2025"
      },
      {
        title: "Cybersecurity Breach Hits Major Cloud Provider",
        description: "Sensitive data of thousands of companies potentially exposed.",
        date: "April 15, 2025"
      },
      {
        title: "AI Takes Center Stage at Google I/O 2025",
        description: "Google unveils new AI-powered tools for developers and consumers.",
        date: "April 14, 2025"
      },
    ];

    setArticles(mockNews);
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-title">📰 Tech News Central</h1>
        <p className="hero-subtitle">Stay updated with the latest developments in technology and innovation.</p>
      </section>

      <section className="news-list">
        {articles.map((article, idx) => (
          <div key={idx} className="blog-card">
            <h2>🧠 {article.title}</h2>
            <p className="news-date">🗓️ {article.date}</p>
            <p>{article.description}</p>
            <button className="cta-button">Read More</button>
          </div>
        ))}
      </section>
    </div>
  );
}
