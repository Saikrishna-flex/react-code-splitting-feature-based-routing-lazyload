# ⚛️ React Code Splitting + Feature-Based Routing + Lazy Loading

This project is a professional-grade React app demonstrating:

- ⚡ Code Splitting using `React.lazy()` and `Suspense`
- 🧱 Feature-Based Modular Routing Architecture
- 🐢 Lazy Loading of Routes and Components
- 🚧 Error Boundaries
- 🔐 Role-Based Protected Routes (coming up)
- 📦 Deployment to GitHub Pages

---

## 🚀 Live Demo

[🔗 View Live App](https://saikrishna-flex.github.io/react-code-splitting-feature-based-routing-lazyload/)

---

## 📁 Folder Structure (Feature-Based)

src/
├── auth/ # Auth context and protected routes
├── components/ # Reusable shared components (Loader, ErrorBoundary)
├── features/ # Feature modules with their own routing
│ ├── Dashboard/
│ │ ├── Dashboard.jsx
│ │ ├── DashboardRoutes.jsx
│ │ ├── Overview/
│ │ ├── Stats/
│ │ └── Notifications/
│ ├── Reports/
│ ├── Settings/
├── pages/ # Standalone pages like NotFound, Login
├── routes/
│ └── AppRoutes.jsx # Central routing that loads feature routes
├── App.jsx
└── main.jsx


---

## 🧠 Key Concepts Implemented

### ✅ Code Splitting
- Done using `React.lazy()` + `Suspense`
- Only loads feature modules when needed

### ✅ Feature-Based Routing
- Each feature (Dashboard, Reports, Settings) has its own route file
- Modular, scalable structure like in real-world projects

### ✅ Lazy Loading
- Lazy loads both route entry points and inner feature components

### ✅ Error Boundaries
- Wraps the entire `<Routes>` tree for graceful error handling

### ✅ Role-Based Routing (Scaffolded)
- Context-based role/auth guard structure in place
- Easily extendable to real login systems

---

## 🛠️ Getting Started

git clone https://github.com/saikrishna-flex/react-code-splitting-feature-based-routing-lazyload.git
cd react-code-splitting-feature-based-routing-lazyload
npm install
npm run dev


🎓 Learning Outcomes
This project is ideal for learning:

How real-world projects structure routes and features
Best practices for code splitting and lazy loading
SPA deployment to static hosting (GitHub Pages)
Writing maintainable and scalable React codebases

📬 Contact
Built by Sai Krishna
Feel free to open issues or suggestions!

