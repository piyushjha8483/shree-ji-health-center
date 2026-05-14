import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' } }),
};

const services = [
  { name: 'General Practice', icon: '🏥', color: '#d97706', desc: 'Family medicine, annual checkups, lifestyle counselling.', hi: 'रूटीन चेकअप, शुगर/बीपी मॉनिटरिंग', details: ['BP/Sugar monitoring, diet & sleep coaching', 'Routine checkup scheduling', 'Home-care guidance'] },
  { name: 'Cardiology', icon: '❤️', color: '#f59e0b', desc: 'ECG, Echo, TMT, hypertension & heart failure clinics.', hi: 'हृदय जाँच, ब्लड प्रेशर नियंत्रण', details: ['Chest pain evaluation, lipid profile review', 'Cardiac risk assessment', 'Post-cardiac rehab support'] },
  { name: 'Pediatrics', icon: '👶', color: '#b48b07', desc: 'Vaccinations, growth & nutrition, common illnesses.', hi: 'टीकाकरण, बच्चों का विकास', details: ['Immunization schedule guidance', 'Growth monitoring', 'Pediatric nutrition counselling'] },
  { name: 'Dermatology', icon: '🌿', color: '#b45309', desc: 'Acne, allergies, hair & scalp care, minor procedures.', hi: 'मुहांसे, एलर्जी, त्वचा देखभाल', details: ['Skin infections, eczema, psoriasis', 'Cosmetic skin treatments', 'Hair & scalp care'] },
  { name: 'Urgent Care (Same Day)', icon: '🚨', color: '#f59e0b', desc: 'Fever, injuries, infections; quick treatment without wait.', hi: 'त्वरित इलाज: बुखार/चोट/संक्रमण', details: ['On-spot dressings & injections', 'Rapid diagnostic tests', 'Emergency stabilization'] },
  { name: "Maternity & Women's Health", icon: '🌸', color: '#b48b07', desc: 'Antenatal care, scans, PCOS guidance, postnatal support.', hi: 'गर्भावस्था देखभाल, प्रसवोत्तर सहयोग', details: ['Healthy pregnancy counselling', 'PCOS & hormonal guidance', 'Postnatal nutrition & support'] },
  { name: 'Neurology', icon: '🧠', color: '#d97706', desc: 'Headache, stroke rehab, epilepsy, neuropathies.', hi: 'माइग्रेन, नसों की समस्याएँ', details: ['EEG coordination, neuro-rehab', 'Migraine management', 'Stroke recovery support'] },
  { name: 'Dental Care', icon: '🦷', color: '#f59e0b', desc: 'Cleaning, fillings, RCT, extractions, smile care.', hi: 'दाँतों की सफाई व उपचार', details: ['Cosmetic dentistry options', 'Root canal treatment', 'Preventive dental care'] },
  { name: 'Orthopedics & Physio', icon: '🦴', color: '#b48b07', desc: 'Joint pain, sports injuries, post-op rehab.', hi: 'हड्डी/जोड़ दर्द, फिजियोथेरेपी', details: ['Back & knee rehab programs', 'Sports injury management', 'Post-surgical physiotherapy'] },
  { name: 'Radiology & Imaging', icon: '🔬', color: '#b45309', desc: 'Digital X-ray, Ultrasound, Echo (tie-ups where needed).', hi: 'एक्स-रे, अल्ट्रासाउंड, इको', details: ['Fast reports, expert reads', 'Digital imaging archival', 'CT/MRI referral coordination'] },
  { name: 'Diabetes & Thyroid Clinic', icon: '💊', color: '#d97706', desc: 'Sugar/thyroid management, diet plans, foot care.', hi: 'शुगर/थायरॉइड नियंत्रण', details: ['Continuous monitoring & counselling', 'HbA1c & FBS tracking', 'Diabetic foot care'] },
  { name: 'Eye Care (Ophthalmology)', icon: '👁️', color: '#f59e0b', desc: 'Vision testing, cataract guidance, dry-eye solutions.', hi: 'आँखों की जाँच व उपचार', details: ['Refraction & basic retina screening', 'Cataract evaluation & referral', 'Dry eye management'] },
];

const packages = [
  { name: 'Heart Check – Basic', price: '₹1,499', badge: 'Popular', color: '#d97706', includes: ['Consult + BP/ECG', 'Lipid Profile, Fasting Sugar', 'Doctor review & report'] },
  { name: 'Heart Check – Advanced', price: '₹3,499', color: '#f59e0b', includes: ['Cardio Consult + ECG + Echo', 'TMT, HBA1c, CRP', 'Cardiologist review'] },
  { name: 'Diabetes Care – 3 Months', price: '₹2,499', color: '#b48b07', includes: ['3 Consults + Diet Plan', 'HBA1c, FBS/PPBS (x2)', 'Monthly monitoring'] },
  { name: 'Wellness – Full Body', price: '₹2,999', color: '#f59e0b', includes: ['CBC, LFT, KFT, Thyroid, Vit-D/B12', 'Urine Routine, Chest X-ray', 'Doctor consultation'] },
  { name: 'Child Care – Immunization', price: 'From ₹799', color: '#d97706', includes: ['Vaccine counselling', 'Growth & Nutrition check', 'Pediatrician consultation'] },
  { name: 'Tele-Consult – Monthly', price: '₹599', color: '#b48b07', includes: ['2 Video consults + e-Prescription', 'WhatsApp follow-up (business hrs)', 'Digital records'] },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services – Shree Ji Health Center</title>
        <meta name="description" content="Explore 12+ medical specialties at Shree Ji Health Center including Cardiology, Pediatrics, Neurology, Dental Care, and more." />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="h-font text-5xl font-extrabold deco-lotus mb-4">Our Services / हमारी सेवाएँ</h1>
            <div className="floral-divider my-6 max-w-sm mx-auto" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Preventive to super-specialty — प्राथमिक से विशेष उपचार तक सम्पूर्ण देखभाल।
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-6 border-b-4"
                style={{ borderBottomColor: s.color }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="h-font text-xl font-bold">{s.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">{s.desc}</p>
                <p className="hi text-sm text-amber-700 mb-3">{s.hi}</p>
                <ul className="space-y-1">
                  {s.details.map((d) => (
                    <li key={d} className="text-sm text-gray-700 flex items-start gap-2">
                      <span style={{ color: s.color }} className="mt-0.5 shrink-0">◈</span> {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* How We Treat + Diagnostics */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7">
              <h3 className="h-font text-2xl font-bold mb-4 deco-lotus">How We Treat / हमारा दृष्टिकोण</h3>
              <ul className="space-y-3">
                {['Evidence-based medicine with personalized plans', 'Multidisciplinary reviews for complex issues', 'Home-care guidance & follow-ups', 'प्रमाण-आधारित उपचार, व्यक्तिगत योजना'].map((item, j) => (
                  <li key={j} className={`flex items-start gap-2 ${j === 3 ? 'hi' : ''} text-gray-700`}>
                    <span className="text-amber-600 mt-0.5 shrink-0">◈</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7">
              <h3 className="h-font text-2xl font-bold mb-4 deco-lotus">Diagnostics, Pharmacy & Tele-Consult</h3>
              <ul className="space-y-3">
                {['On-site sample collection; fast reports', 'In-house pharmacy (essentials)', 'Tele-consult for follow-ups', 'जाँच, दवाएँ व वीडियो-कन्सल्ट — एक जगह'].map((item, j) => (
                  <li key={j} className={`flex items-start gap-2 ${j === 3 ? 'hi' : ''} text-gray-700`}>
                    <span className="text-amber-600 mt-0.5 shrink-0">◈</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Insurance */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="card p-6 bg-amber-50/70 border-amber-200 mb-16">
            <h3 className="h-font text-xl font-bold mb-2 deco-lotus">Insurance & Payment / बीमा व भुगतान</h3>
            <p className="text-gray-700">Most major insurance plans accepted; cashless where applicable.</p>
            <p className="hi text-gray-700 mt-1">अधिकांश बीमा स्वीकार — जहाँ संभव हो कैशलेस सुविधा।</p>
          </motion.div>

          {/* Packages */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="h-font text-4xl font-extrabold deco-lotus">Packages & Pricing / पैकेज व मूल्य</h2>
            <div className="floral-divider my-6 max-w-xs mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-6 border-t-4"
                style={{ borderTopColor: pkg.color }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="h-font text-lg font-bold">{pkg.name}</h4>
                  {pkg.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full text-white bg-emerald-700 font-semibold">{pkg.badge}</span>
                  )}
                </div>
                <p className="text-3xl font-extrabold h-font mb-4" style={{ color: pkg.color }}>{pkg.price}</p>
                <ul className="space-y-1 mb-6">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="text-sm text-gray-700 flex items-start gap-2">
                      <span style={{ color: pkg.color }} className="mt-0.5 shrink-0">✓</span> {inc}
                    </li>
                  ))}
                </ul>
                <Link to="/appointment" className="btn-primary w-full text-center text-sm block py-2.5">
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pricing Table */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-amber-50 text-left">
                  <tr>
                    {['Package', 'Includes', 'Price', ''].map(h => (
                      <th key={h} className="px-5 py-3.5 h-font font-bold text-sm text-gray-800">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Heart Basic', 'Consult, ECG, Lipid, FBS', '₹1,499'],
                    ['Heart Advanced', 'ECG, Echo, TMT, HBA1c', '₹3,499'],
                    ['Full Body', 'CBC, LFT, KFT, Thyroid, Vit-D/B12', '₹2,999'],
                    ['Diabetes 3M', '3 Consults, HBA1c, FBS/PPBS x2', '₹2,499'],
                  ].map(([name, inc, price]) => (
                    <tr key={name} className="border-t border-amber-100 hover:bg-amber-50/30 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-sm">{name}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{inc}</td>
                      <td className="px-5 py-3.5 font-bold text-amber-700">{price}</td>
                      <td className="px-5 py-3.5">
                        <Link to="/appointment" className="text-amber-600 hover:text-amber-800 font-semibold text-sm underline">Book</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 px-5 py-3">*Prices are indicative; taxes extra where applicable.</p>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/appointment" className="btn-primary text-lg py-3.5 px-8 inline-flex items-center gap-2">
              Book Your Appointment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
