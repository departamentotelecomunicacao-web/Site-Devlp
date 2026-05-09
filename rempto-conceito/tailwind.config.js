/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        obsidian: '#0a0a0a',
        charcoal: '#111111',
        smoke: '#1a1a1a',
        ash: '#2a2a2a',
        silver: '#8a8a8a',
        mist: '#c8c8c8',
        ivory: '#f0ede8',
        gold: '#c9a96e',
        'gold-light': '#e2c994',
      },
      letterSpacing: {
        ultra: '0.35em',
        extreme: '0.5em',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
