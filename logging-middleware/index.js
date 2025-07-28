// index.js

const express = require('express');
const app = express();
const port = 3000;

// 🛠️ Logging Middleware
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}`;
  console.log(log);
  next();
});

app.get('/', (req, res) => {
  res.send('Logging middleware test successful!');
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
