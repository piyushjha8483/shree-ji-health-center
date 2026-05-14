import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ChevronDown, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    toast.success('Logged out successfully! 🙏');
    navigate('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-amber-100/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group" onClick={() => setMobileOpen(false)}>
            <span className="h-font font-extrabold text-xl leading-tight">
              <span className="text-amber-600">🕉️ Shree Ji</span>
              <span className="text-emerald-700"> Health Center</span>
            </span>
            <span className="text-pink-500 text-sm font-semibold italic animate-pulse-slow">
              राधे राधे 💫 राधे राधे
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav-link text-gray-700 hover:text-amber-700 font-medium pb-0.5 ${isActive ? 'text-amber-700 font-bold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-amber-200 hover:border-amber-400 bg-amber-50 hover:bg-amber-100 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-amber-800 font-semibold text-sm">{user?.name?.split(' ')[0]}</span>
                  <ChevronDown size={14} className={`text-amber-600 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 glass-card py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-amber-100">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-semibold text-amber-800 truncate">{user?.name}</p>
                      </div>
                      <Link
                        to="/appointment"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        <Calendar size={15} /> Book Appointment
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={15} /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/auth" className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-amber-300 text-amber-700 font-semibold text-sm hover:bg-amber-50 transition-all">
                <User size={15} /> Sign In
              </Link>
            )}
            <Link to="/appointment" className="btn-primary text-sm py-2.5 px-5">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-amber-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-xl font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-700 font-bold'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-3 border-t border-amber-100 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-500">
                      Signed in as <span className="font-semibold text-amber-700">{user?.name}</span>
                    </div>
                    <button
                      onClick={() => { handleLogout(); setMobileOpen(false); }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm font-semibold"
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    Sign In / Sign Up
                  </Link>
                )}
                <Link
                  to="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center text-sm py-3"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
