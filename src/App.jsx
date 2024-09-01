import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import { fetchHealthNews } from './newsService';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const getNews = async () => {
    try {
      setLoading(true);
      const data = await fetchHealthNews(query);
      console.log('Fetched news data:', data); // Debug log
      setNews(data.results);
    } catch (error) {
      console.error('Error fetching news:', error); // Debug log
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, [query]);

  return (
    <div className="App">
      <Navbar onSearch={(searchQuery) => setQuery(searchQuery)} />
      <main className="news-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          news.length > 0 ? (
            news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          ) : (
            <p>No news articles found.</p>
          )
        )}
      </main>
    </div>
  );
}

export default App;
