/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        montserrat:"Montserrat",
        clash:"DM Serif Display",
        unica:"Unica One"
      },

      colors:{
        textColor:"#d434fe"
      }
    },
  },
  plugins: [],
}

