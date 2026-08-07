import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import TopLoadingBar from './components/TopLoadingBar';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ChildClinic = lazy(() => import('./pages/ChildClinic'));
const DentalStudio = lazy(() => import('./pages/DentalStudio'));
const Experience = lazy(() => import('./pages/Experience'));
const HappyParents = lazy(() => import('./pages/HappyParents'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <main style={{ flexGrow: 1 }}>
          <Suspense fallback={<TopLoadingBar />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/child-clinic" element={<ChildClinic />} />
              <Route path="/dental-studio" element={<DentalStudio />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/happy-parents" element={<HappyParents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky Quick Actions (WhatsApp / Call) */}
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
