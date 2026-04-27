const express = require('express');
const cors = require('cors');
const os = require('os');
const app = express();
const port = 3001;

// Get local network IP for cross-device access
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal && !iface.address.startsWith('169.254')) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Configurable base URL for short links (env var or auto-detected LAN IP)
const BASE_URL = process.env.BASE_URL || `http://${getLocalIP()}:${port}`;

// In-memory store: shortCode -> longUrl
const urlStore = {};

// 🛠️ Logging Middleware
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}`;
  console.log(log);
  next();
});

// Enable CORS for React frontend
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('URL Shortener API is running!');
});

// Shorten a URL
app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ error: 'longUrl is required' });
  }

  const shortCode = Math.random().toString(36).substring(2, 8);
  urlStore[shortCode] = longUrl;

  const shortUrl = `${BASE_URL}/${shortCode}`;
  res.json({ shortCode, shortUrl, longUrl });
});

// Redirect short code to original URL
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const longUrl = urlStore[shortCode];

  if (!longUrl) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  res.redirect(longUrl);
});

// Listen on 0.0.0.0 so other devices on the same network can reach us
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running at ${BASE_URL}`);
  console.log(`   (Accepting connections from any network interface)`);
});

