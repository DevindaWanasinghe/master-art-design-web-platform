/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'greens-wood': ['Green King\'s Wood', 'sans-serif'],
      },
      backgroundImage: {
        'login-bg': "url('/src/images/Home/Background girl image.png')",
      },
      colors: {
        'custom-purple': "#9573A9",
      },
    },
  },
  plugins: [],
};
