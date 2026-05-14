import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' } }),
};

const doctors = [
  { name: 'Dr. Asha Mehta', specialty: 'Cardiologist', exp: '15 years', initials: 'AM', color: '#d97706', borderColor: '#d97706', available: 'Mon, Wed, Fri' },
  { name: 'Dr. Rohan Patel', specialty: 'General Practitioner', exp: '10 years', initials: 'RP', color: '#b48b07', borderColor: '#b48b07', available: 'Mon–Sat' },
  { name: 'Dr. Priya Kapoor', specialty: 'Pediatrician', exp: '8 years', initials: 'PK', color: '#f59e0b', borderColor: '#f59e0b', available: 'Tue, Thu, Sat' },
  { name: 'Dr. Aman Verma', specialty: 'Dermatologist', exp: '12 years', initials: 'AV', color: '#b45309', borderColor: '#b45309', available: 'Mon, Wed, Fri' },
  { name: 'Dr. Neha Khanna', specialty: 'Gynecologist', exp: '14 years', initials: 'NK', color: '#f59e0b', borderColor: '#f59e0b', available: 'Mon–Fri' },
  { name: 'Dr. Suresh Rao', specialty: 'Orthopedic Surgeon', exp: '18 years', initials: 'SR', color: '#14532d', borderColor: '#14532d', available: 'Tue, Thu' },
  { name: 'Dr. Rajeev Thakur', specialty: 'Neurologist', exp: '20 years', initials: 'RT', color: '#d97706', borderColor: '#d97706', available: 'Mon, Wed' },
  { name: 'Dr. Aarti Sharma', specialty: 'Dentist', exp: '9 years', initials: 'AS', color: '#b48b07', borderColor: '#b48b07', available: 'Mon–Sat' },
  { name: 'Dr. Manish Kumar', specialty: 'ENT Specialist', exp: '11 years', initials: 'MK', color: '#b45309', borderColor: '#b45309', available: 'Tue, Thu, Sat' },
  { name: 'Dr. Sneha Dutta', specialty: 'Ophthalmologist', exp: '7 years', initials: 'SD', color: '#f59e0b', borderColor: '#f59e0b', available: 'Wed, Fri' },
  { name: 'Dr. Vikram Singh', specialty: 'Radiologist', exp: '16 years', initials: 'VS', color: '#b48b07', borderColor: '#b48b07', available: 'Mon–Fri' },
  { name: 'Dr. Kavita Mishra', specialty: 'Psychiatrist', exp: '13 years', initials: 'KM', color: '#14532d', borderColor: '#14532d', available: 'Mon, Wed, Fri' },
  { name: 'Dr. Ankit Gupta', specialty: 'Oncologist', exp: '17 years', initials: 'AG', color: '#d97706', borderColor: '#d97706', available: 'Tue, Thu' },
  { name: 'Dr. Nidhi Joshi', specialty: 'Nutritionist', exp: '6 years', initials: 'NJ', color: '#b48b07', borderColor: '#b48b07', available: 'Mon–Sat' },
];

const specialties = ['All', ...Array.from(new Set(doctors.map(d => d.specialty)))];

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filtered = doctors.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty = selectedSpecialty === 'All' || d.specialty === selectedSpecialty;
    return matchSearch && matchSpecialty;
  });

  return (
    <>
      <Helmet>
        <title>Find a Doctor – Shree Ji Health Center</title>
        <meta name="description" content="Search our expert team of 14 doctors across specialties at Shree Ji Health Center, Gurugram." />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-10">
            <h1 className="h-font text-5xl font-extrabold deco-lotus mb-4">Meet Our Expert Team</h1>
            <div className="floral-divider my-6 max-w-sm mx-auto" />
            <p className="text-gray-600">Our team of dedicated specialists is here to serve you with compassion.</p>
          </motion.div>

          {/* Search */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="card p-5 mb-6">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or specialty (e.g., Dr. Asha, Cardiologist)"
                className="form-input pl-11"
              />
            </div>
          </motion.div>

          {/* Specialty Filter */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
            {specialties.slice(0, 10).map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'border-amber-200 text-amber-700 hover:bg-amber-50'
                }`}
              >
                {spec}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-amber-700">{filtered.length}</span> doctor{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Doctors Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card p-6 flex items-start gap-4 border-l-4"
                  style={{ borderLeftColor: doc.borderColor }}
                >
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${doc.color}, ${doc.color}99)` }}
                  >
                    {doc.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="h-font text-lg font-bold text-gray-900 truncate">{doc.name}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: doc.color }}>{doc.specialty}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Experience: {doc.exp}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-gray-500">Available: {doc.available}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 card p-10">
              <p className="text-4xl mb-3">🔍</p>
              <p className="h-font text-xl text-gray-600 font-bold">No doctors found</p>
              <p className="text-gray-400 text-sm mt-1">Try a different name or specialty</p>
              <button onClick={() => { setSearch(''); setSelectedSpecialty('All'); }} className="btn-outline mt-4">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
