import React, { useState } from 'react';
import './App.css';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';

const API_BASE = 'http://10.57.79.167:3001';

function App() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addUrl = async (longUrl) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/shorten`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl })
      });
      if (!res.ok) {
        throw new Error('Failed to shorten URL');
      }
      const data = await res.json();
      const newUrl = {
        longUrl: data.longUrl,
        shortUrl: data.shortUrl,
        createdAt: new Date().toLocaleString()
      };
      setUrls((prev) => [newUrl, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🔗 URL Shortener</h1>
      <UrlForm onSubmit={addUrl} loading={loading} />
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      <UrlList urls={urls} />
    </div>
  );
}

export default App;
