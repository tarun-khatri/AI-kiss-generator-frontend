/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e91e63',     // a vibrant pink/red for buttons and accents
        secondary: '#f8bbd0',   // a soft pink for backgrounds or highlights
        accent: '#d81b60',      // a deep red for emphasis
        background: '#fff0f6',  // a very light, romantic background
        text: '#880e4f',        // dark, rich color for text
      },
      fontFamily: {
        // Optionally add a romantic or script font for headings
        script: ['Dancing Script', 'cursive'], // make sure to import via Google Fonts or similar
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // You can add a subtle heart pattern or romantic gradient
        'romantic-pattern': "url('/assets/images/romantic-pattern.avif')", // add your pattern image in assets
      },
    },
  },
  plugins: [],
};
