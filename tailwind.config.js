/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2A52',
          dark: '#071A33',
          light: '#133D75'
        },
        secondary: {
          DEFAULT: '#1267B1',
          hover: '#0E5390'
        },
        accent: {
          DEFAULT: '#2CA6E0',
          hover: '#228FBE'
        },
        'light-blue': '#EAF6FF',
        'soft-bg': '#F7FBFF',
        'brand-text': '#14243A',
        'brand-muted': '#64748B'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(11, 42, 82, 0.08)',
        'glass-hover': '0 25px 60px rgba(11, 42, 82, 0.14)',
        'glass-card': '0 10px 30px -5px rgba(11, 42, 82, 0.06), 0 5px 15px -5px rgba(18, 103, 177, 0.05)',
        'glow': '0 0 30px rgba(44, 166, 224, 0.35)',
      }
    },
  },
  plugins: [],
}
