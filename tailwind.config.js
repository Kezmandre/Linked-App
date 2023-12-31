/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        clash: "DM Serif Display",
        unica: "Unica One",
        poppins: 'Poppins',
      },

      colors: {
        textColor: "#d434fe",
        colorBg: "#150e28",
      },
    },
  },
  plugins: [],
};
