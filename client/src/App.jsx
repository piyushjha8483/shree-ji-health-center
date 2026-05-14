import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RadheAI from './components/RadheAI';

import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-ivory">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <RadheAI />
          </div>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#1b1b1b',
                border: '1px solid rgba(217,119,6,0.2)',
                borderRadius: '14px',
                padding: '12px 16px',
                fontSize: '14px',
                fontFamily: 'Mukta, sans-serif',
                boxShadow: '0 8px 28px rgba(217,119,6,0.12)',
              },
              success: {
                iconTheme: { primary: '#d97706', secondary: '#fff' },
              },
              error: {
                iconTheme: { primary: '#ef4444', secondary: '#fff' },
              },
            }}
          />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}
