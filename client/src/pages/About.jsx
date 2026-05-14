import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' } }),
};

const values = [
  { title: 'Innovation', hi: 'नवाचार', color: '#d97706', desc: 'Tech-enabled diagnostics, digital records for better outcomes.' },
  { title: 'Compassion', hi: 'करुणा', color: '#f59e0b', desc: 'Respect, dignity, empathy for every patient and family.' },
  { title: 'Integrity', hi: 'ईमानदारी', color: '#b48b07', desc: 'Ethical practice, transparent billing, no hidden charges.' },
];

const timeline = [
  { year: '1998', event: 'Founded as a family clinic in Gurugram', icon: '🏥' },
  { year: '2005', event: 'Expanded with multi-specialty OPD & diagnostic center', icon: '🔬' },
  { year: '2010', event: 'Empanelled with major TPAs & insurance networks', icon: '🤝' },
  { year: '2018', event: 'Launched tele-consult services', icon: '💻' },
  { year: '2025', event: 'Digital patient portal & 14+ specialist team', icon: '🚀' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – Shree Ji Health Center</title>
        <meta name="description" content="Learn about Shree Ji Health Center's mission, vision, values, and 25+ year journey of compassionate healthcare in Gurugram." />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="h-font text-5xl font-extrabold deco-lotus mb-4">About Us / हमारे बारे में</h1>
            <div className="floral-divider my-6 max-w-sm mx-auto" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Care rooted in compassion — करुणा और सेवा पर आधारित भरोसेमंद उपचार।
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="card p-7">
              <div className="text-3xl mb-3">🎯</div>
              <h2 className="h-font text-2xl font-bold mb-3">Our Mission / हमारा उद्देश्य</h2>
              <p className="text-gray-700 leading-relaxed">
                Accessible, high-quality, patient-first healthcare for every family.
              </p>
              <p className="hi text-gray-600 mt-2 leading-relaxed">
                हर परिवार तक सुलभ, उच्च-गुणवत्ता और रोगी-प्रथम स्वास्थ्य सेवाएँ।
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="card p-7">
              <div className="text-3xl mb-3">🌟</div>
              <h2 className="h-font text-2xl font-bold mb-3">Our Vision / हमारी दृष्टि</h2>
              <p className="text-gray-700 leading-relaxed">
                A community where preventive care and compassionate healing are everyday habits.
              </p>
              <p className="hi text-gray-600 mt-2 leading-relaxed">
                ऐसा समुदाय जहाँ निवारक देखभाल और सहानुभूतिपूर्ण उपचार आदत बनें।
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7 mb-10">
            <h2 className="h-font text-2xl font-bold mb-6">Our Values / हमारे मूल्य</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="border-l-4 pl-5 py-1" style={{ borderLeftColor: v.color }}>
                  <h3 className="h-font text-xl font-bold" style={{ color: v.color }}>{v.title}</h3>
                  <p className="hi text-sm text-gray-500">{v.hi}</p>
                  <p className="text-gray-700 text-sm mt-2">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Accreditations & Facilities */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="card p-7">
              <h2 className="h-font text-2xl font-bold mb-4">Accreditations / मान्यताएँ</h2>
              <ul className="space-y-3">
                {[
                  'Empanelled with major TPAs & insurance networks',
                  'Infection control & safety protocols aligned to NABH standards',
                  'Regular clinical audits & doctor peer-reviews',
                  'प्रमुख टीपीए/बीमा नेटवर्क से संबद्ध; NABH अनुरूप प्रक्रियाएँ',
                ].map((item, j) => (
                  <li key={j} className={`flex items-start gap-2 text-gray-700 ${j === 3 ? 'hi' : ''}`}>
                    <span className="text-amber-600 mt-0.5 shrink-0 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="card p-7">
              <h2 className="h-font text-2xl font-bold mb-4">Facilities / सुविधाएँ</h2>
              <ul className="space-y-3">
                {[
                  'Day-care procedure rooms, observation beds',
                  'Digital records, SMS/WhatsApp reminders',
                  'Wheelchair access, senior-citizen priority desk',
                  'डे-केयर, डिजिटल रिकॉर्ड, व्हीलचेयर सुविधा',
                ].map((item, j) => (
                  <li key={j} className={`flex items-start gap-2 text-gray-700 ${j === 3 ? 'hi' : ''}`}>
                    <span className="text-amber-600 mt-0.5 shrink-0 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Leadership */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7 mb-10">
            <h2 className="h-font text-2xl font-bold mb-3">Leadership & Team / नेतृत्व एवं टीम</h2>
            <p className="text-gray-700 leading-relaxed">
              Senior consultants mentor multi-disciplinary teams to ensure each case gets the right expertise.
            </p>
            <p className="hi text-gray-600 mt-2">
              वरिष्ठ विशेषज्ञ पूरी टीम का मार्गदर्शन करते हैं ताकि हर रोगी को सही उपचार मिले।
            </p>
          </motion.div>

          {/* Community & CSR */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7 mb-10">
            <h2 className="h-font text-2xl font-bold mb-3">Community & CSR / समुदाय एवं सेवा</h2>
            <p className="text-gray-700 leading-relaxed">
              Free health camps, school wellness drives, and awareness sessions on lifestyle diseases.
            </p>
            <p className="hi text-gray-600 mt-2">
              निःशुल्क हेल्थ कैंप, स्कूल वेलनेस ड्राइव और जागरूकता सत्र।
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-7 bg-amber-50/50 border-amber-200">
            <h2 className="h-font text-2xl font-bold mb-6 deco-lotus">Our Journey / हमारी यात्रा</h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex items-start gap-5 md:pl-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center text-xl shrink-0 shadow-sm z-10">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <p className="font-bold text-amber-700 text-lg h-font">{item.year}</p>
                      <p className="text-gray-700 text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
