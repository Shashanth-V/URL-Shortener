import React, { useState } from 'react';

function UrlForm({ onSubmit, loading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || loading) return;
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        placeholder="Enter a long URL"
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        style={{ width: '300px', padding: '10px' }}
      />
      <button type="submit" disabled={loading} style={{ padding: '10px' }}>
        {loading ? 'Shortening...' : 'Shorten'}
      </button>
    </form>
  );
}

export default UrlForm;
