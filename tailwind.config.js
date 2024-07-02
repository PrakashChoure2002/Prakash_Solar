/** @type {import('tailwindcss').Config} */
// import calculator from './src/public/assets/calculator.png'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://assets.codepen.io/4787486/trees.png')",
        "calculator":"url('./src/public/assets/calculator.png')",
        "home":"url('./src/public/assets/home.png')",
        "Dg":"url('./src/public/assets/Dg.png')",
        "Edcess":"url('./src/public/assets/Edcess.png')",
        "Lt":"url('./src/public/assets/Lt.png')",
        "panel":"url('./src/public/assets/panel.png')",
        "paneldesi":"url('./src/public/assets/paneldesi.png')",
        "product":"url('./src/public/assets/product.png')",
        "commercial":"url('./src/public/assets/commercial.png')",
        "after":"url('./src/public/assets/after.png')",

        
      }
    },
  },
  plugins: [],
}