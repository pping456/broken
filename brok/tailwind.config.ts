import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#141b4d',
          navyDark: '#0d1138',
          purple: '#7c3aed',
          purpleLight: '#9f6cf7',
          pink: '#e91e8c',
          pinkLight: '#f472b6',
          blue: '#2563eb',
          blueDark: '#1d4ed8',
          blueLight: '#eff6ff',
          green: '#16a34a',
          greenDark: '#15803d',
          greenLight: '#f0fdf4',
          teal: '#0891b2',
        },
      },
      keyframes: {
        fadeSlideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.8s ease forwards',
        glowJump: 'glow-jump 0.55s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
