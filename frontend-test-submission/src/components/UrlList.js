import React from 'react';

function UrlList({ urls }) {
  return (
    <div>
      <h2>Shortened URLs</h2>
      {urls.length === 0 && <p>No URLs yet.</p>}
      <ul>
        {urls.map((url, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <div>🔗 <a href={url.shortUrl} target="_blank" rel="noopener noreferrer"><strong>{url.shortUrl}</strong></a></div>
            <div>📎 Original: <a href={url.longUrl} target="_blank" rel="noopener noreferrer">{url.longUrl}</a></div>
            <div>🕒 Created: {url.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
