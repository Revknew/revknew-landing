/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'blob-container',
    'blob',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0b0f1a',
        primary: '#0047ff',  // Logo blue
        accent: '#7eff00',   // Neon green
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 4px #7eff00, 0 0 8px #7eff00',
      },
      spacing: {
        'nav-logo': '3rem',
        'hero-top': '4rem',
        'hero-bottom': '2rem',
        'cta-section': '5rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
