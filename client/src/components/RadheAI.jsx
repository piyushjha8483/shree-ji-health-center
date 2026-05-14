import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Trash2, Bot } from 'lucide-react';

const CHAT_KEY = 'radhe_ai_history';

const quickActions = [
  '🏥 Book an appointment',
  '👨‍⚕️ Find a doctor',
  '💊 Know our services',
  '📞 Contact us',
  '⏰ Clinic timings',
  '💰 Check pricing',
];

const botResponses = {
  appointment: 'You can book an appointment online! Click "Book Appointment" in the navbar or visit the Appointment page. Our team will confirm within 24 hours. 🙏',
  doctor: 'We have 14+ experienced specialists including Cardiologists, Pediatricians, Neurologists, and more! Visit our Doctors page to search by name or specialty.',
  service: 'We offer 12 services: General Practice, Cardiology, Pediatrics, Dermatology, Neurology, Dental, Eye Care, Orthopedics, Radiology, Diabetes Clinic, Maternity & Women\'s Health, and Urgent Care. 🌿',
  contact: '📍 2nd Floor, Plot No. 14, MG Road, Sector 12, Gurugram\n📞 +91 9636739142\n📧 info@shreejihealth.com',
  timing: '⏰ Clinic Hours:\n• Mon–Fri: 8:00 AM – 6:00 PM\n• Saturday: 9:00 AM – 1:00 PM (Urgent Care)\n• Sunday: Closed',
  pricing: '💰 Our packages start from:\n• Heart Basic Check – ₹1,499\n• Full Body Wellness – ₹2,999\n• Diabetes Care (3M) – ₹2,499\n• Tele-Consult Monthly – ₹599',
  default: 'राधे राधे 🙏 I\'m Radhe AI, your health assistant at Shree Ji Health Center. I can help you with appointments, doctors, services, contact info, and more! How can I serve you today?',
};

function getBotReply(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('appointment') || lower.includes('book')) return botResponses.appointment;
  if (lower.includes('doctor') || lower.includes('specialist')) return botResponses.doctor;
  if (lower.includes('service') || lower.includes('treatment') || lower.includes('care')) return botResponses.service;
  if (lower.includes('contact') || lower.includes('address') || lower.includes('phone') || lower.includes('email')) return botResponses.contact;
  if (lower.includes('time') || lower.includes('hour') || lower.includes('open') || lower.includes('timing')) return botResponses.timing;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('fee') || lower.includes('pricing') || lower.includes('package')) return botResponses.pricing;
  return botResponses.default;
}

export default function RadheAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(CHAT_KEY);
      return saved ? JSON.parse(saved) : [
        { id: 1, from: 'bot', text: 'राधे राधे 🙏\n\nNamaste! I\'m **Radhe AI**, your compassionate health assistant. How can I help you today?' }
      ];
    } catch { return []; }
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text) => {
    const userMsg = { id: Date.now(), from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, from: 'bot', text: reply }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
  };

  const clearHistory = () => {
    setMessages([{ id: Date.now(), from: 'bot', text: 'राधे राधे 🙏\n\nChat cleared! How can I assist you?' }]);
  };

  const renderText = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.replace(/\*\*(.*?)\*\*/g, '$1')}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white ${open ? 'hidden' : 'flex'}`}
        style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}
        aria-label="Open Radhe AI"
      >
        <Bot size={26} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 80px)', background: '#fffdf7' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: 'linear-gradient(135deg, #d97706, #b45309)' }}>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-200 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <p className="text-white font-bold text-sm h-font">Radhe AI</p>
                  <p className="text-amber-100 text-xs">Your Health Companion 🙏</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={clearHistory} className="text-amber-200 hover:text-white transition-colors" title="Clear chat">
                  <Trash2 size={16} />
                </button>
                <button onClick={() => setOpen(false)} className="text-amber-200 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '380px' }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-sm mr-2 shrink-0 mt-1">🕉️</div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-amber-600 text-white rounded-tr-sm'
                        : 'bg-white border border-amber-100 text-gray-800 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {renderText(msg.text)}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-sm mr-2">🕉️</div>
                  <div className="bg-white border border-amber-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-amber-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-3 py-2 border-t border-amber-100 flex gap-1.5 overflow-x-auto">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => sendMessage(action)}
                  className="shrink-0 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700 hover:bg-amber-100 transition-colors font-medium"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-amber-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Radhe AI anything..."
                className="form-input flex-1 text-sm py-2.5 px-3"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all"
                style={{ background: input.trim() ? 'linear-gradient(135deg, #d97706, #b45309)' : '#d1d5db' }}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
