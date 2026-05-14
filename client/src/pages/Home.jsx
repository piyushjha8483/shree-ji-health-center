import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Heart, Star, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  }),
};

const features = [
  { icon: Clock, title: '24×7 Seva', hi: 'हर समय आपकी सेवा में तत्पर', color: '#f59e0b', desc: 'Round-the-clock care with quick response for all your medical needs.' },
  { icon: Shield, title: 'Trusted Specialists', hi: 'विश्वसनीय विशेषज्ञ', color: '#d97706', desc: 'Experienced doctors with 14 specialties and personal attention.' },
  { icon: Heart, title: 'Compassion-Led Healing', hi: 'सेवा ही आधार', color: '#b48b07', desc: 'Where care meets devotion — rooted in tradition and love.' },
];

const stats = [
  { value: '25+', label: 'Years of Service' },
  { value: '14+', label: 'Specialists' },
  { value: '50k+', label: 'Patients Served' },
  { value: '12+', label: 'Specialties' },
];

const testimonials = [
  { name: 'Ramesh Sharma', text: 'Exceptional care from Dr. Mehta. The staff is compassionate and the facility is excellent.', rating: 5, location: 'Gurugram' },
  { name: 'Priya Singh', text: 'Booked an appointment online effortlessly. The pediatric care for my child was outstanding!', rating: 5, location: 'Delhi' },
  { name: 'Mohan Das', text: 'The Diabetes Clinic program transformed my health. Regular monitoring and great counselling.', rating: 5, location: 'Faridabad' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shree Ji Health Center – Healing with Compassion & Faith</title>
        <meta name="description" content="Shree Ji Health Center – Family-centered healthcare guided by tradition and powered by modern science. Book appointments online." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-16 pattern-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700 font-semibold mb-6">
                🙏 Serving with Devotion since 1998
              </div>

              <h1 className="h-font text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 deco-lotus mb-2">
                Healing with
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #d97706, #b45309)' }}>
                  Compassion & Faith
                </span>
              </h1>
              <p className="hi text-xl font-semibold text-gray-600 mt-4 mb-6">
                करुणा और आस्था के साथ उपचार
              </p>

              <div className="floral-divider mb-6" />

              <p className="text-lg text-gray-700 mb-2">
                Family-centered care guided by tradition and powered by modern science.
              </p>
              <p className="hi text-gray-600 mb-8">
                परिवार-केंद्रित देखभाल — परंपरा से प्रेरित, आधुनिक चिकित्सा से समर्थित।
              </p>

              {/* Shloka */}
              <div className="p-5 rounded-2xl card border-l-4 border-l-amber-500 mb-8 bg-amber-50/50">
                <p className="hi text-lg italic text-gray-800">"धर्मार्थकाममोक्षाणां आरोग्यं मूलमुत्तमम्"</p>
                <p className="text-sm text-gray-500 mt-1">Good health is the root of Dharma, Artha, Kama & Moksha.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/appointment" className="btn-primary flex items-center gap-2">
                  Book Online <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>

            {/* Right – Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <figure className="rounded-3xl overflow-hidden border border-amber-200 shadow-2xl shadow-amber-100">
                <img
                  src="https://m.media-amazon.com/images/I/819MQtWPpAL._AC_UF894,1000_QL80_.jpg"
                  alt="Shri Premanand Ji Maharaj"
                  className="w-full object-cover"
                  style={{ height: '420px', objectPosition: 'top' }}
                />
                <figcaption className="text-center text-sm text-gray-600 py-3 bg-gradient-to-r from-amber-50 to-white">
                  🙏 Shri Premanand Ji Maharaj 🙏
                  <br />
                  <span className="text-xs">May His blessings guide your path to health & happiness.</span>
                </figcaption>
              </figure>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-6 border-t-4"
                style={{ borderTopColor: f.color }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${f.color}20` }}>
                  <f.icon size={24} style={{ color: f.color }} />
                </div>
                <h3 className="h-font text-xl font-bold mb-1 deco-lotus">{f.title}</h3>
                <p className="hi text-sm text-amber-700 mb-2">{f.hi}</p>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg, #14532d, #166534)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <p className="h-font text-4xl font-extrabold text-amber-400">{s.value}</p>
                <p className="text-emerald-200 mt-1 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="h-font text-4xl font-extrabold deco-lotus mb-3">Our Services</h2>
          <div className="floral-divider my-6 max-w-xs mx-auto" />
          <p className="text-gray-600">Preventive to super-specialty — comprehensive care for every need.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'General Practice', icon: '🏥', desc: 'Family medicine, check-ups, lifestyle counselling' },
            { name: 'Cardiology', icon: '❤️', desc: 'ECG, Echo, TMT, hypertension & heart care' },
            { name: 'Pediatrics', icon: '👶', desc: 'Vaccinations, growth & nutrition for children' },
            { name: 'Neurology', icon: '🧠', desc: 'Headache, stroke rehab, epilepsy management' },
            { name: 'Dental Care', icon: '🦷', desc: 'Cleaning, fillings, RCT, cosmetic dentistry' },
            { name: 'Eye Care', icon: '👁️', desc: 'Vision testing, cataract, dry-eye solutions' },
          ].map((svc, i) => (
            <motion.div
              key={svc.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card p-6 flex items-start gap-4"
            >
              <div className="text-3xl shrink-0">{svc.icon}</div>
              <div>
                <h3 className="h-font text-lg font-bold mb-1">{svc.name}</h3>
                <p className="text-gray-600 text-sm">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="h-font text-4xl font-extrabold deco-lotus mb-6">Why Choose Shree Ji?</h2>
              <div className="floral-divider mb-8 max-w-[200px]" />
              <ul className="space-y-4">
                {[
                  'NABH-aligned protocols & clinical audits',
                  'Empanelled with major insurance networks',
                  'Digital records & WhatsApp reminders',
                  'Wheelchair access & senior-citizen priority desk',
                  'Transparent billing & cashless facility',
                  '14+ experienced doctors across all specialties',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-8 inline-flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card p-5"
                >
                  <div className="flex mb-2">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-3">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 pattern-soft border-y border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-4xl mb-4">🕉️</p>
            <h2 className="h-font text-4xl font-extrabold mb-4">Ready to Start Your Healing Journey?</h2>
            <p className="hi text-lg text-gray-600 mb-8">
              अपनी स्वास्थ्य यात्रा आज ही शुरू करें — Book Your Appointment Now
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-primary text-lg py-3.5 px-8 inline-flex items-center gap-2">
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline text-lg py-3.5 px-8">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
