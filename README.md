# Small Wonders Clinic (R) - Website

A modern, fast, and fully responsive Single Page Application (SPA) built for the **Small Wonders Clinic** (featuring the Child Clinic & Dental Studio). This project is designed to provide patients and parents with a seamless, informative, and engaging experience.

---

## 🚀 Technologies Used

- **React 19** - Component-based user interface development.
- **Vite** - Lightning-fast build tool and development server.
- **React Router Dom (v7)** - Seamless page transitions and routing.
- **Custom CSS** - Fully custom responsive styling without heavy external frameworks.
- **Oxlint** - Ultra-fast JavaScript linter to maintain clean code quality.

---

## ✨ Features

- **Modular & Component-Driven Architecture**: Reusable React components for Navbar, Footer, Carousels, and Loader.
- **Lazy Loading**: Pages are lazy-loaded dynamically using React `Suspense` and `lazy` to optimize performance and reduce initial load times.
- **Dynamic SEO Hook**: Custom `useSEO` React hook that updates page title, keywords, and description tags on route change for search engine optimization.
- **Error Boundaries**: Root-level error handling with `ErrorBoundary` to gracefully recover from runtime errors without breaking the entire UI.
- **Floating Contact Actions**: Persistent quick contact actions (WhatsApp / Direct Call) optimized for mobile conversion.
- **Scroll Restoration**: Automatically scrolls to the top of the window on page changes.

---

## 📁 Project Structure

```
SmallWonders(R)/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Images, logos, and illustrations
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── ReviewsCarousel.jsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks (e.g., useSEO.js)
│   ├── pages/              # Page level components (Home, About, ChildClinic, etc.)
│   ├── App.css             # Global styles
│   ├── App.jsx             # Root App component and routing
│   ├── index.css           # Core styling system and styling tokens
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts configuration
└── vite.config.js          # Vite configuration
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone <repository-url>
cd SmallWonders-R
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
This will start the local server, typically at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` directory.

### 5. Lint the codebase
```bash
npm run lint
```
Runs `oxlint` to detect syntax issues or bad practices.

---

## 📄 License
This project is proprietary. All rights reserved.
