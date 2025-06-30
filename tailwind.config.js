/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',

    },
    container:{
      center:true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
        'roboto': ['Roboto'],
        'freehand': ['Freehand']
      },
      colors:{
        primary :'#523456',
        second : '#523456',
        three: '#F4C64F',
        four : '#98DFD6'

      },



    },
  },
  plugins: [],
}

