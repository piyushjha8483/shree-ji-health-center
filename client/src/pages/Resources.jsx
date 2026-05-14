import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' } }),
};

const faqs = [
  { q: 'First visit? / पहली विज़िट?', a: 'Bring your ID, insurance card (if any), and previous prescriptions/test reports. Our front desk team will guide you through the registration process.' },
  { q: 'What insurance plans are accepted?', a: 'Most major insurance plans are accepted including Mediclaim, Star Health, HDFC Ergo, ICICI Lombard, and more. Call our billing team for confirmation.' },
  { q: 'How can I access my medical records?', a: 'Medical records are accessible via our Patient Portal. Ask the receptionist to help you set up your digital account.' },
  { q: 'Are same-day appointments available?', a: 'Same-day appointments are available for Urgent Care (limited slots). For elective consultations, please book at least 24 hours in advance.' },
  { q: 'Is tele-consultation available?', a: 'Yes! We offer tele-consult for follow-ups and minor consultations. Book via our website or call us to schedule a video consultation.' },
  { q: 'What are the payment modes?', a: 'We accept cash, all major debit/credit cards, UPI (GPay, PhonePe, Paytm), and cashless insurance for empanelled networks.' },
];

const healthTips = [
  { title: 'Immunity: Diet + Sleep Basics', color: '#d97706', icon: '🛡️', desc: 'Learn the essentials of boosting your immunity through balanced nutrition and quality sleep.' },
  { title: 'BP & Sugar: Home Monitoring', color: '#f59e0b', icon: '💉', desc: 'How to accurately monitor blood pressure and blood sugar levels at home.' },
  { title: 'Child Vaccination Schedule', color: '#b48b07', icon: '👶', desc: 'Complete guide to mandatory and recommended vaccinations for children 0–12 years.' },
  { title: 'Stress & Mind Care', color: '#b45309', icon: '🧘', desc: 'Practical techniques for stress management, mindfulness, and mental wellness.' },
];

function FAQItem({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="border border-amber-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-amber-50/60 hover:bg-amber-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-amber-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 py-4 text-gray-700 text-sm bg-white leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources – Shree Ji Health Center</title>
        <meta name="description" content="Health tips, FAQs, and downloadable resources from Shree Ji Health Center." />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="h-font text-5xl font-extrabold deco-lotus mb-4">Resources / संसाधन</h1>
            <div className="floral-divider my-6 max-w-sm mx-auto" />
            <p className="text-gray-600">Simple guides, FAQs and tips — आसान मार्गदर्शिका व स्वास्थ्य सुझाव।</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* FAQs – Main */}
            <div className="lg:col-span-2">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="h-font text-2xl font-bold text-amber-600 mb-5">
                FAQs / सामान्य प्रश्न
              </motion.h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} i={i} />
                ))}
              </div>

              {/* Health Blog Snippets */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12">
                <h2 className="h-font text-2xl font-bold mb-6">Health Articles</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Understanding Diabetes Management in 2026', tag: 'Diabetes', date: 'May 2026' },
                    { title: 'Heart Health: 10 Tips for a Healthy Lifestyle', tag: 'Cardiology', date: 'Apr 2026' },
                    { title: 'Children\'s Nutrition: What Every Parent Should Know', tag: 'Pediatrics', date: 'Mar 2026' },
                    { title: 'Stress & Your Health: The Mind-Body Connection', tag: 'Mental Health', date: 'Feb 2026' },
                  ].map((article) => (
                    <div key={article.title} className="card p-4 hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-2">{article.tag}</span>
                      <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2">{article.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{article.date}</span>
                        <button className="text-amber-600 hover:text-amber-800 text-xs font-semibold flex items-center gap-1">
                          Read More <ExternalLink size={11} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Health Tips */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <h2 className="h-font text-xl font-bold mb-5">Health Tips / स्वास्थ्य सुझाव</h2>
                <div className="space-y-4">
                  {healthTips.map((tip) => (
                    <div key={tip.title} className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                      <span className="text-2xl shrink-0">{tip.icon}</span>
                      <div>
                        <a href="#" className="font-semibold text-sm hover:underline" style={{ color: tip.color }}>{tip.title}</a>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Downloads */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <h2 className="h-font text-xl font-bold mb-4">Downloads / डाउनलोड</h2>
                <ul className="space-y-3">
                  {[
                    'New Patient Form (PDF)',
                    'Insurance Empanelment List (PDF)',
                    'Medical Records Request (PDF)',
                    'Vaccination Schedule Chart (PDF)',
                  ].map((doc) => (
                    <li key={doc}>
                      <a href="#" className="flex items-center gap-2.5 text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                          <FileText size={15} className="text-amber-600" />
                        </div>
                        {doc}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Emergency Info */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="card p-6 border-red-200 bg-red-50">
                <h2 className="h-font text-xl font-bold mb-3 text-red-700">🚨 Emergency</h2>
                <p className="text-gray-700 text-sm mb-3">For medical emergencies, please call immediately:</p>
                <a href="tel:+919636739142" className="text-xl font-extrabold text-red-600 hover:text-red-800 block mb-2">
                  +91 9636739142
                </a>
                <p className="text-xs text-gray-500">Or visit our Urgent Care desk during working hours.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
