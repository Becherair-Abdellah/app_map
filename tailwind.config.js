/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        myCol: '30% 70%'
      },
      backgroundColor:{
        trs: '#ffffff1a'
      },
      fontFamily:{
        ubuntu: ['Ubuntu','sans-serif']
      },
    },
  },
  plugins: [],
}