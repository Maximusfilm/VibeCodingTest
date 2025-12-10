/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'galileo-purple': '#7B1FA2',
        'galileo-blue': '#0288D1',
        'galileo-green': '#00C853',
        'galileo-orange': '#FF6F00',
      },
    },
  },
  plugins: [],
}
