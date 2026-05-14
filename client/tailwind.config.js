/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fffdf7",
        saffron: {
          DEFAULT: "#d97706",
          700: "#b45309",
        },
        marigold: "#f59e0b",
        gold: "#b48b07",
        forest: "#14532d",
        ink: "#1b1b1b",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mukta: ['"Mukta"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'spiritual-pattern': "linear-gradient(90deg, rgba(212,163,59,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(212,163,59,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'pattern': '24px 24px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
