/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    colors: {
    
      'green': '#16a34a',
      'white': '#ffffff',
      "backg":"linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(162, 232, 161, 0.8))",
      'deepg': '#052e16',
      'black': '#000'
    },

    extend: {},
  },
  plugins: [],
}

