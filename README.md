# 🔗 URL Shortener

A full-stack URL shortener application with a React frontend and an Express.js backend. Users can input long URLs, generate shortened links, and click them to be redirected to the original destination.

## 🚀 Features

- Shorten any valid URL into a compact, shareable link.
- View a history of all shortened URLs with original links.
- Click a short link to be redirected to the original URL.
- Simple, clean UI built with React.
- Backend API with logging middleware and in-memory storage.

## 📁 Project Structure

```
frontend-test-submission/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── UrlForm.js
│   │   └── UrlList.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md

logging-middleware/
├── index.js
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: React (Create React App)
- **Backend**: Node.js + Express.js
- **CORS**: Enabled for cross-origin frontend communication
- **Storage**: In-memory (per-session)

## 🧪 How to Run Locally

### 1. Start the Backend

```bash
cd logging-middleware
npm install
npm start
```

Server will run on `http://localhost:3001`.

### 2. Start the Frontend

```bash
cd frontend-test-submission
npm install
npm start
```

The React app will open on `http://localhost:3000`.

### 3. Test the Flow

- Enter a long URL in the frontend and click **Shorten**.
- Copy or click the generated short link to be redirected.

