import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Shree Ji Health Center</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pattern-soft px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="text-8xl mb-6">🕉️</div>
          <h1 className="h-font text-8xl font-extrabold text-amber-600 mb-4">404</h1>
          <h2 className="h-font text-3xl font-bold text-gray-800 mb-3">Page Not Found</h2>
          <p className="hi text-lg text-gray-500 mb-2">यह पृष्ठ उपलब्ध नहीं है।</p>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="p-5 rounded-2xl card border-l-4 border-l-amber-500 bg-amber-50/50 mb-8 text-left">
            <p className="hi text-sm italic text-gray-600">"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"</p>
            <p className="text-xs text-gray-400 mt-1">May all beings be happy, may all be free from illness.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => window.history.back()} className="btn-outline flex items-center justify-center gap-2">
              <ArrowLeft size={16} /> Go Back
            </button>
            <Link to="/" className="btn-primary flex items-center justify-center gap-2">
              <Home size={16} /> Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
