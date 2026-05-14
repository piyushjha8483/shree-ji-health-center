import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookAppointment } from '../api/api';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Calendar, CheckCircle, Lock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const appointmentSchema = z.object({
  name: z.string().min(2, 'Patient name must be at least 2 characters'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

const services = [
  'General Practice Check-up',
  'Cardiology Consultation',
  'Pediatric Visit',
  'Urgent Care (Same Day)',
  'Dermatology',
  'Neurology',
  'Dental Care',
  'Eye Care',
  'Orthopedics & Physio',
  'Radiology & Imaging',
  'Diabetes & Thyroid Clinic',
  "Maternity & Women's Health",
];

export default function Appointment() {
  const { isAuthenticated, user } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: user?.name || '' },
  });

  const onSubmit = async (data) => {
    try {
      await bookAppointment(data);
      setSubmittedData(data);
      setSubmitted(true);
      toast.success('Appointment booked successfully! 🙏');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || 'Failed to book appointment. Please try again.');
    }
  };

  // Today's date for min
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Book Appointment – Shree Ji Health Center</title>
        <meta name="description" content="Book your appointment at Shree Ji Health Center online. Fast, easy, and convenient." />
      </Helmet>

      <div className="pt-24 pb-16 pattern-soft min-h-screen">
        <div className="max-w-lg mx-auto px-4">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-8">
            <h1 className="h-font text-4xl font-extrabold deco-lotus mb-4">Book Your Appointment</h1>
            <div className="floral-divider my-6 max-w-xs mx-auto" />
            <p className="text-gray-600 text-sm">अपॉइंटमेंट बुक करें — हम आपकी सेवा में तत्पर हैं।</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="card p-8">

            {!isAuthenticated ? (
              /* Not authenticated – prompt login */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Lock size={28} className="text-amber-600" />
                </div>
                <h2 className="h-font text-2xl font-bold mb-2">Login Required</h2>
                <p className="text-gray-600 text-sm mb-6">
                  Please sign in to book an appointment. It only takes a moment!
                </p>
                <Link to="/auth" className="btn-primary inline-block py-3 px-8">
                  Sign In to Continue
                </Link>
                <p className="text-gray-400 text-xs mt-4">Don't have an account? You can create one on the sign-in page.</p>
              </div>
            ) : submitted ? (
              /* Success state */
              <div className="text-center py-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h2 className="h-font text-2xl font-bold text-green-700 mb-2">Booking Confirmed! 🎉</h2>
                <p className="hi text-gray-600 mb-6">धन्यवाद! आपकी अपॉइंटमेंट सफलतापूर्वक बुक हो गई।</p>

                {submittedData && (
                  <div className="bg-amber-50 rounded-2xl p-5 text-left mb-6 border border-amber-100">
                    <h3 className="font-bold text-amber-800 mb-3 text-sm">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Patient:</span>
                        <span className="font-semibold">{submittedData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-semibold">{submittedData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-semibold">{submittedData.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Time:</span>
                        <span className="font-semibold">{submittedData.time}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 flex-col sm:flex-row">
                  <button onClick={() => { setSubmitted(false); setSubmittedData(null); }} className="btn-outline flex-1">
                    Book Another
                  </button>
                  <Link to="/" className="btn-primary flex-1 text-center">
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="flex items-center gap-2 mb-2 text-sm text-amber-700 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-100">
                  <Calendar size={15} className="shrink-0" />
                  <span>Appointments confirmed within 24 hours via phone/WhatsApp</span>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Patient Name *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="form-input"
                    placeholder="Full patient name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed *</label>
                  <select {...register('service')} className="form-input bg-white">
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
                  <input
                    {...register('date')}
                    type="date"
                    min={today}
                    className="form-input bg-white"
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time Slot *</label>
                  <select {...register('time')} className="form-input bg-white">
                    <option value="">Select time slot</option>
                    {[
                      '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
                      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
                      '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
                    ].map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-base">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking...
                    </>
                  ) : (
                    'Confirm Booking 🙏'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
