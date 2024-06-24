/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'login-bg': "url('/src/images/Home/Background girl image.png')",
      },
      colors:{
        'custom-purple':"#9573A9",
      }
  },
},
  plugins: [],
}

