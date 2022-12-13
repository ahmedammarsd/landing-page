/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header' : "url('/public/images/header.png')"
      },
      backgroundColor:{
        'main-color': '#040472',
        'yellow-b-border' : '#FFD800',
        'transparent-black' : 'rgba(0,0,0,.5)',
        'transparent-white' : 'rgba(255,255,255,.8)',
        'purple' : '#7676D7',
        'red-app' : '#CC2127',
        'f-book' : '#1778F2',
        'l-in' : '#0A7BBA',
        'tw' : '#55ACEE',
      },
      zIndex: {
        '1' : '1',
        '2' : '2',
        '-1' : '-1',
        '-2' : '-2',
      },
      colors:{
        'main-color': '#040472',
        'yellow-b-border' : '#FFD800',
        'red-app' : '#CC2127',
        'f-book' : '#1778F2',
        'l-in' : '#0A7BBA',
        'tw' : '#55ACEE',
      }
    },
  },
  plugins: [],
}
