import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' } }),
};

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log('Contact form data:', data);
    setSubmitted(true);
    reset();
    toast.success('Message sent! We\'ll get back to you soon. 🙏');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – Shree Ji Health Center</title>
        <meta name="description" content="Get in touch with Shree Ji Health Center in Gurugram. Call, email, or visit us today." />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="h-font text-5xl font-extrabold deco-lotus mb-4">Get in Touch</h1>
            <div className="floral-divider my-6 max-w-sm mx-auto" />
            <p className="text-gray-600">We're here for you — हम आपके लिए यहाँ हैं।</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="card p-8">
              <h2 className="h-font text-2xl font-bold mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="h-font text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input {...register('name')} type="text" className="form-input" placeholder="Your full name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input {...register('email')} type="email" className="form-input" placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone (Optional)</label>
                    <input {...register('phone')} type="tel" className="form-input" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea {...register('message')} rows={4} className="form-input resize-none" placeholder="How can we help you?" />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 py-3.5">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <div className="space-y-6">

              {/* Contact Info */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="card p-7">
                <h2 className="h-font text-2xl font-bold mb-5">Our Main Office</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Shree Ji Health Center</p>
                      <p className="text-gray-600 text-sm">2nd Floor, Plot No. 14, MG Road, Sector 12</p>
                      <p className="text-gray-600 text-sm">Gurugram, Haryana – 122001</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-amber-600" />
                    </div>
                    <a href="tel:+919636739142" className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">
                      +91 9636739142
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-amber-600" />
                    </div>
                    <a href="mailto:info@shreejihealth.com" className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">
                      info@shreejihealth.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Visiting Hours</p>
                      <p className="text-gray-600 text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Sat: 9:00 AM – 1:00 PM (Urgent Care Only)</p>
                      <p className="text-gray-600 text-sm">Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Map */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
                <iframe
                  className="w-full"
                  height="260"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.175199613775!2d77.04843987532062!3d28.62486157567464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f4b7c94e6b%3A0x6c826a6dcb4826b1!2sMG%20Road%2C%20Sector%2012%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1730828200000!5m2!1sen!2sin"
                  title="Shree Ji Health Center Location"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
