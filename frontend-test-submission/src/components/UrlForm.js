import React, { useState } from 'react';

function UrlForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
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
        style={{ width: '300px', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Shorten</button>
    </form>
  );
}

export default UrlForm;
