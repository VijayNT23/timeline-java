# ☕ Java Timeline — From Oak to OpenJDK

An interactive and visually rich web application that explores the **evolution of Java** —  
from its beginnings as **Project Oak (1991)** to its modern **OpenJDK** dominance.

Built as a mix of **infographic storytelling + data visualization + an interactive quiz**.

---

## 🚀 Live Features

- 📜 **Historical Timeline** of Java milestones
- 📊 **Interactive Charts** showing Java’s platform dominance
- 🧠 **10-Question Quiz** to test Java knowledge
- 🎨 Modern **dark UI** with smooth animations
- ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

- **React** – UI & state management  
- **Vite** – Lightning-fast development & build tool  
- **Tailwind CSS** – Utility-first styling  
- **Chart.js** + **react-chartjs-2** – Data visualizations  

---

## 📂 Project Structure

timeline-java/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── App.jsx        # Main application component (timeline + quiz logic)
│   ├── main.jsx       # React entry point (creates root & renders App)
│   └── index.css      # Global styles & Tailwind directives
│
├── index.html         # Root HTML file for Vite
│
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration for Tailwind
│
├── package.json       # Project metadata & dependencies
├── package-lock.json  # Locked dependency versions
│
├── .gitignore         # Git ignored files (node_modules, dist, etc.)
└── README.md          # Project documentation



---

## 🧪 Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/VijayNT23/timeline-java.git
cd timeline-java
2️⃣ Install dependencies
npm install
3️⃣ Start development server
npm run dev
Open your browser at:

http://localhost:5173
