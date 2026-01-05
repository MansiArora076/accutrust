import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Contact from './components/Contact';
import ContactPage from './pages/ContactPage';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Loader from './components/Loader';
import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, [])

  return (
    <div className="site-root">
      {loading && <Loader />}
      <BrowserRouter>
        <Header />
        <main className={loading ? 'fade-hidden' : 'fade-in'}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <WhyChoose />
                  <CTA />

                  <Testimonials />
                  <Newsletter />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
