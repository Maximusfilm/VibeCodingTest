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
        // Galileo Pro7 Official Branding
        'galileo-yellow': '#FFD700',
        'galileo-orange': '#FF6B00',
        'galileo-pink': '#FF1F8F',
        'galileo-cyan': '#00D9FF',
        'galileo-purple': '#9B30FF',
        'galileo-green': '#00FF9F',
        'dark-bg': '#1a1a2e',
        'dark-purple': '#16213e',
        'dark-blue': '#0f3460',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'galileo-gradient': 'linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)',
        'galileo-burst': 'linear-gradient(135deg, #FF6B00 0%, #FFD700 50%, #FF1F8F 100%)',
        'galileo-glow': 'radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 0, 0.5)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 107, 0, 0.8)',
            transform: 'scale(1.02)',
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 107, 0, 0.6), 0 0 60px rgba(255, 107, 0, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)',
        'glow-pink': '0 0 30px rgba(255, 31, 143, 0.6), 0 0 60px rgba(255, 31, 143, 0.3)',
        'glow-yellow': '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.3)',
        'glow-xl': '0 0 40px rgba(255, 107, 0, 0.8), 0 0 80px rgba(255, 107, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'galileo': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
