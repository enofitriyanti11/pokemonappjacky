/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: '#0A4D68',
      secondaryColor: '#088395',
      thirdColor: '#05BFDB',
      fourthColor: '#00FFCA',
      },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    
  ],
}

