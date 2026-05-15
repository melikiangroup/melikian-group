/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#0c0a09',
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'Didot', 'Bodoni MT', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        extreme: '0.5em',
      }
    },
  },
  plugins: [],
}