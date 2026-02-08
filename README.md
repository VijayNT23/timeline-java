# ☕ Java Timeline — From Oak to OpenJDK

An interactive and visually rich web application that explores the **evolution of Java** —  
from its beginnings as **Project Oak (1991)** to its modern **OpenJDK** dominance.

Built as a mix of **infographic storytelling + data visualization + an interactive quiz**.

---

## 🚀 Live Features

- 📜 **Historical Timeline** of Java milestones
- 📊 **Interactive Charts** showing Java's platform dominance
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

## 📦 Package Installation

### Core Dependencies
```bash
# React & Vite (already included in setup)
npm create vite@latest my-project -- --template react

# Charting Libraries
npm install chart.js react-chartjs-2

# Tailwind CSS with Vite plugin
npm install tailwindcss @tailwindcss/vite
```

### Tailwind CSS Configuration
1. Add the Vite plugin to `vite.config.ts`:
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

2. Add Tailwind import to your main CSS file:
```css
@import "tailwindcss";
```

---

## 📂 Project Structure

```text
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
├── tailwind.config.js # Tailwind CSS configuration (optional)
├── postcss.config.js  # PostCSS configuration for Tailwind (optional)
│
├── package.json       # Project metadata & dependencies
├── package-lock.json  # Locked dependency versions
│
├── .gitignore         # Git ignored files (node_modules, dist, etc.)
└── README.md          # Project documentation
```

## 🧪 Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/VijayNT23/timeline-java.git
cd timeline-java
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## 📊 Chart.js Integration

The project uses **Chart.js v4+** with **react-chartjs-2** wrapper for React.  
Components are imported as:
```javascript
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
```

---

## 🎨 Tailwind CSS Setup

This project uses **Tailwind CSS v4+** with the **Vite plugin** approach:
- No separate `tailwind.config.js` needed for basic setups
- CSS processed through Vite's built-in PostCSS
- Automatic class scanning from JSX/HTML files
- Zero-runtime CSS generation

For advanced customization, create:
```bash
npx tailwindcss init
```

---

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.
