import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="h-font text-2xl font-bold mb-2">
              <span className="text-amber-400">🕉️ Shree Ji</span>
              <span className="text-emerald-300"> Health Center</span>
            </h3>
            <p className="text-pink-300 text-sm italic font-semibold mb-4 animate-pulse">राधे राधे 💫</p>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Family-centered care guided by tradition and powered by modern science.
            </p>
            <p className="hi text-emerald-300 text-sm mt-1">
              परिवार-केंद्रित देखभाल — परंपरा से प्रेरित।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="h-font text-lg font-bold text-amber-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['Services', '/services'],
                ['Find a Doctor', '/doctors'],
                ['About Us', '/about'],
                ['Resources', '/resources'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-emerald-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span className="text-amber-600 text-xs">◈</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="h-font text-lg font-bold text-amber-400 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'General Practice',
                'Cardiology',
                'Pediatrics',
                'Dermatology',
                'Neurology',
                'Dental Care',
                'Eye Care',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-emerald-200 hover:text-amber-400 transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span className="text-amber-600 text-xs">◈</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="h-font text-lg font-bold text-amber-400 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-emerald-200">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span>2nd Floor, Plot No. 14, MG Road, Sector 12, Gurugram, Haryana – 122001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-emerald-200">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:+919636739142" className="hover:text-amber-400 transition-colors">+91 9636739142</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-emerald-200">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a href="mailto:info@shreejihealth.com" className="hover:text-amber-400 transition-colors">info@shreejihealth.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-emerald-200">
                <Clock size={16} className="text-amber-400 shrink-0" />
                <div>
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom */}
        <div className="border-t border-emerald-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-400 text-sm text-center md:text-left">
            © 2026 Shree Ji Health Center. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-emerald-400 text-sm">
            Made with <Heart size={13} className="text-red-400 fill-red-400" /> for the community
          </p>
          <div className="h-font text-amber-400 text-sm italic">
            "धर्मार्थकाममोक्षाणां आरोग्यं मूलमुत्तमम्"
          </div>
        </div>
      </div>
    </footer>
  );
}
