/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
    "./presentation/**/*.{js,ts,jsx,tsx}",
    "./application/**/*.{js,ts,jsx,tsx}",
    "./domain/**/*.{js,ts,jsx,tsx}",
    "./infrastructure/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'condensed': ['Anton', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#C8A96A',
        'secondary': '#0D0D0D',
        'accent': '#F5E6D3',
      },
    },
  },
  plugins: [],
}