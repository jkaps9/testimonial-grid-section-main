/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        // Primary
        moderateViolet: 'hsl(263, 55%, 52%)',
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
  
        // Neutral
        lightGray: 'hsl(0, 0 %, 81 %)',
        lightGrayishBlue: 'hsl(210, 46 %, 95 %)',
      },
      fontSize: {
        mxsm: '0.813rem',
      },
    },
  },
  plugins: [],
}

