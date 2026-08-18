# ZITO Logistics Team Portfolio

> We shipped at ZITO Logistics. We learned more than we coded.

A portfolio showcasing the work of three engineers who built and shipped at ZITO Logistics — a startup founded by Negi Bhaiya.

## 👥 The Team

| Member | Role | Focus |
|---|---|---|
| **Tathagato Chatterjee** | Frontend Engineer | React, UI/UX, Client-Side Architecture |
| **Archit Sandeep Gore** | QA Engineer | Testing, Bug Finding, Quality Assurance |
| **Devansh Gaur** | Backend Engineer | Node.js, API Design, Database Architecture |

##  What We Did at ZITO

- **Tathagato** — Built the entire frontend of the ZITO Logistics website, making it look good and easy to use for customers
- **Devansh** — Found and fixed the surge pricing bug, handled backend infrastructure
- **Archit** — Tested the platform extensively, found bugs, and ensured quality before release

## 🛠 Tech Stack

### Frontend
- React
- Vite
- CSS3

### Backend
- Node.js
- Express
- REST APIs

##  Project Structure

```
Demo/
├── democlient/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Hero.jsx
│   │   │   ├── Zito.jsx
│   │   │   └── Team.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── demoback/                # Node.js Backend
│   ├── routes/
│   │   └── team.js          # Team member endpoints
│   ├── server.js            # Express application entry
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation & Run

#### 1. Start the Backend

```bash
cd demoback
npm install
npm run dev
```

The backend will start on `http://localhost:5000`

#### 2. Start the Frontend

```bash
cd democlient
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📡 API Endpoints

### Team
```
GET  /api/team              # Get all team members
GET  /api/team/:id          # Get specific team member
```

### Health Check
```
GET /api/health
```

## 📄 License

MIT — Built by Tathagato, Archit & Devansh.

---

*Made with ❤️ at ZITO Logistics*
