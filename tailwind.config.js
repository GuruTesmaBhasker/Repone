/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rep-red': '#DC2626',
        'rep-dark-red': '#B91C1C',
        'rep-black': '#111111',
        'rep-dark': '#0A0A0A',
        'rep-light': '#F8F9FA',
        'rep-gray': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-pulse': 'scrollPulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          '50%': { transform: 'translateX(-50%) translateY(12px)', opacity: '0.3' },
        }
      }
    },
  },
  plugins: [],
}
