/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'Inter':['Inter','sans-serif'],
      'Chirp':['Chirp','sans-serif'],
    },
    fontSize:{
      '26px':'26px',
      '5xl':'3rem',
      'base':'1rem',
    },
    extend: {
      boxShadow:{
        'standard':'0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      padding:{
        '236.5' : '263.5px',
        '161.936' : '161.936px',
      },
      gap:{
        '100':'100px',
        '2px':'2px',
      },
      colors:{
        'neutral-50':'#F9F9F9',
        "buttonstroke":"#546a7a",
        "twitterblue-default":"#1d9bf0",
      }
    },
  },
  plugins: [],
}