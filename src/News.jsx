import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
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
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📰 Tech News Central</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest developments in technology and innovation.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article
            key={`${article.title}-${index}`}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🧠 {article.title}</h2>
            <time
              className="block text-sm text-gray-500 mb-2"
              dateTime={new Date(article.date).toISOString()}
            >
              🗓️ {article.date}
            </time>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <button className="mt-auto inline-block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Read More
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
