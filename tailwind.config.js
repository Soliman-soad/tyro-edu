/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar-hide')],
  
  
  daisyui: {
    themes: ["light", "dark"],
  },
}
