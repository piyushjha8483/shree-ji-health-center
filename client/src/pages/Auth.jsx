import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser, loginUser } from '../api/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

function PasswordInput({ register: reg, name, placeholder, error }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="relative">
        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
        <input
          {...reg(name)}
          type={show ? 'text' : 'password'}
          className="form-input pl-10 pr-10"
          placeholder={placeholder}
        />
        <button type="button" onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}

export default function Auth() {
  const [tab, setTab] = useState('login');
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginForm = useForm({ resolver: zodResolver(loginSchema) });
  const registerForm = useForm({ resolver: zodResolver(registerSchema) });

  const onLogin = async (data) => {
    try {
      const res = await loginUser(data);
      login(res.data.token, { name: data.email.split('@')[0], email: data.email });
      toast.success('Welcome back! राधे राधे 🙏');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data || 'Login failed. Check your credentials.');
    }
  };

  const onRegister = async (data) => {
    try {
      await registerUser({ name: data.name, email: data.email, password: data.password });
      toast.success('Account created! Please log in. 🎉');
      setTab('login');
    } catch (err) {
      toast.error(err.response?.data || 'Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In / Sign Up – Shree Ji Health Center</title>
        <meta name="description" content="Login or create your account at Shree Ji Health Center to manage appointments." />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16 pattern-soft flex items-center justify-center px-4">
        <div className="w-full max-w-md">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Link to="/" className="inline-block">
              <span className="h-font text-2xl font-extrabold">
                <span className="text-amber-600">🕉️ Shree Ji</span>
                <span className="text-emerald-700"> Health Center</span>
              </span>
            </Link>
            <p className="text-pink-500 text-sm font-semibold italic mt-1 animate-pulse">राधे राधे 💫</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-8"
          >
            {/* Tab Switcher */}
            <div className="flex bg-amber-50 rounded-xl p-1 mb-8">
              {[
                { key: 'login', label: 'Sign In' },
                { key: 'register', label: 'Create Account' },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                    tab === t.key
                      ? 'bg-white text-amber-700 shadow-md shadow-amber-100'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* ---- Login Form ---- */}
            <AnimatePresence mode="wait">
              {tab === 'login' ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2 className="h-font text-2xl font-bold mb-6">Welcome Back!</h2>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
                        <input
                          {...loginForm.register('email')}
                          type="email"
                          className="form-input pl-10"
                          placeholder="your@email.com"
                        />
                      </div>
                      {loginForm.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{loginForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                      <PasswordInput
                        register={loginForm.register}
                        name="password"
                        placeholder="Your password"
                        error={loginForm.formState.errors.password}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loginForm.formState.isSubmitting}
                      className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 mt-2"
                    >
                      {loginForm.formState.isSubmitting ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</>
                      ) : 'Sign In 🙏'}
                    </button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-5">
                    Don't have an account?{' '}
                    <button onClick={() => setTab('register')} className="text-amber-600 font-bold hover:underline">
                      Create one
                    </button>
                  </p>
                </motion.div>
              ) : (
                /* ---- Register Form ---- */
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22 }}
                >
                  <h2 className="h-font text-2xl font-bold mb-6">Create Account</h2>
                  <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
                        <input
                          {...registerForm.register('name')}
                          type="text"
                          className="form-input pl-10"
                          placeholder="Your full name"
                        />
                      </div>
                      {registerForm.formState.errors.name && (
                        <p className="text-red-500 text-xs mt-1">{registerForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400" />
                        <input
                          {...registerForm.register('email')}
                          type="email"
                          className="form-input pl-10"
                          placeholder="your@email.com"
                        />
                      </div>
                      {registerForm.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{registerForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                      <PasswordInput
                        register={registerForm.register}
                        name="password"
                        placeholder="Create a strong password"
                        error={registerForm.formState.errors.password}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
                      <PasswordInput
                        register={registerForm.register}
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        error={registerForm.formState.errors.confirmPassword}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={registerForm.formState.isSubmitting}
                      className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 mt-2"
                    >
                      {registerForm.formState.isSubmitting ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Creating...</>
                      ) : 'Create Account 🎉'}
                    </button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-5">
                    Already have an account?{' '}
                    <button onClick={() => setTab('login')} className="text-amber-600 font-bold hover:underline">
                      Sign in
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Shloka */}
            <div className="mt-8 pt-6 border-t border-amber-100 text-center">
              <p className="hi text-sm text-gray-500 italic">"सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"</p>
              <p className="text-xs text-gray-400 mt-1">May all beings be happy, may all be free from illness.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
