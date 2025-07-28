import React, { useState } from 'react';
import './App.css';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';

function App() {
  const [urls, setUrls] = useState([]);

  const addUrl = (longUrl) => {
    const shortCode = Math.random().toString(36).substring(2, 8);
    const newUrl = {
      longUrl,
      shortUrl: `https://short.ly/${shortCode}`,
      createdAt: new Date().toLocaleString()
    };
    setUrls([newUrl, ...urls]);
  };

  return (
    <div className="App">
      <h1>🔗 URL Shortener</h1>
      <UrlForm onSubmit={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;
