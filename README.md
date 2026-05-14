# 🕉️ Shree Ji Health Center
### *Healing with Compassion & Faith*

> **राधे राधे 💫** — A premium MERN Stack healthcare application

---

## Project Structure

```
shree-ji-health-center/
├── client/          → React + Vite frontend (port 3000)
├── server/          → Node.js + Express backend (port 5000)
└── README.md
```

## Tech Stack

### Frontend (client/)
| Technology | Purpose |
|---|---|
| React + Vite | Core framework |
| Tailwind CSS v3 | Styling |
| Framer Motion | Animations |
| React Router DOM | Routing |
| Axios | API calls |
| React Hook Form + Zod | Forms & validation |
| Lucide React | Icons |
| react-hot-toast | Notifications |
| React Helmet Async | SEO metadata |

### Backend (server/) — unchanged
| Technology | Purpose |
|---|---|
| Node.js + Express | Server |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcryptjs | Password hashing |

---

## Getting Started

### 1. Start the Backend Server
```bash
cd server
node server.js
# Runs on http://localhost:5000
```

### 2. Start the React Frontend
```bash
cd client
npm run dev
# Runs on http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register new user |
| POST | `/login` | Login → returns JWT |
| POST | `/book` | Book appointment |
| GET | `/appointments` | Get all appointments |
| PUT | `/appointments/:id` | Update appointment |
| DELETE | `/appointments/:id` | Delete appointment |

---

## Pages

| Route | Page | Protected |
|---|---|---|
| `/` | Home | No |
| `/services` | Services | No |
| `/doctors` | Find a Doctor | No |
| `/about` | About Us | No |
| `/resources` | Resources & FAQs | No |
| `/contact` | Contact | No |
| `/appointment` | Book Appointment | Soft (shows login prompt) |
| `/auth` | Login / Register | No |
| `*` | 404 Not Found | No |

---

## Features

- ✅ Spiritual theme (Ivory, Saffron, Marigold, Gold, Forest Green)
- ✅ Playfair Display + Mukta fonts
- ✅ Sticky navbar with scroll shadow effect
- ✅ Single-card tabbed Login/Signup
- ✅ JWT auth with localStorage persistence
- ✅ User profile dropdown in navbar
- ✅ Protected appointment booking
- ✅ Appointment booked → MongoDB via `/book`
- ✅ Radhe AI floating chatbot with localStorage history
- ✅ Doctor search with specialty filter (14 doctors)
- ✅ FAQ accordion (animated)
- ✅ Contact form with Zod validation
- ✅ Toast notifications
- ✅ Framer Motion page animations
- ✅ SEO meta tags on every page
- ✅ Fully responsive (mobile-first)
- ✅ 404 Not Found page
- ✅ Glassmorphism cards
- ✅ Google Maps embed

---

*"धर्मार्थकाममोक्षाणां आरोग्यं मूलमुत्तमम्"*
*Good health is the root of Dharma, Artha, Kama & Moksha.*
