import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: { 50: '#fbf6ec', 100: '#f3e8d2', 200: '#e6d0a6', 300: '#d6b679', 400: '#c9a15a', 500: '#bb8522', 600: '#9a6b18', 700: '#7a5314', 800: '#4d3510', 900: '#2a1d0b' },
        lapis: { 300: '#8cc1ea', 400: '#5aa5df', 500: '#3a8fcf', 600: '#2a6fa6', 700: '#1f4f78' },
        night: '#14100c',
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
  addBase({ ':root': newVars })
}
