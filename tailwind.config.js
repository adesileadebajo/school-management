/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#0f172a',
        },
        secondary: {
          50: '#fefce8',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
}