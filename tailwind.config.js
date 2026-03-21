/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fff9e6',
          200: '#ffedb3',
          300: '#ffd966',
          400: '#ffcc00',
          500: '#e6b800',
          600: '#cc9900',
          700: '#a37a00',
          800: '#7a5c00',
          900: '#523d00',
        },
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(ellipse at center, #fff3a3 0%, #f5c518 30%, #c8860a 65%, #7a4800 100%)',
      },
      animation: {
        sparkle: 'sparkle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'scale-pulse': 'scalePulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 10px #ffcc00, 0 0 20px #e6b800' },
          '50%': { boxShadow: '0 0 20px #ffcc00, 0 0 40px #e6b800, 0 0 60px #cc9900' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
