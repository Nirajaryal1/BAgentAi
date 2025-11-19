/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cabernet: {
          DEFAULT: '#800020',
          light: '#9e1b32',
          dark: '#5a0016',
        },
        gold: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FCD34D',
        },
        charcoal: {
          DEFAULT: '#1F2937',
          dark: '#111827',
          light: '#374151',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
