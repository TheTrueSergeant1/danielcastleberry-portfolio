/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0a', // Deepest background
          card: '#121212', // Card background
          border: '#2a2a2a', // Subtle borders
          accent: '#00f0ff', // Cyber blue accent
          glow: 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, like iOS
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}