/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        change: {
          '0% ': { backgroundImage: "url('./assets/Images/Home_img1.png')" },
          '25%': { backgroundImage: "url('./assets/Images/Home_img2.png')" },
          '50%': { backgroundImage: "url('./assets/Images/Home_img3.png')" },
          '75%': { backgroundImage: "url('./assets/Images/Home_img4.png')" },
          '100% ': { backgroundImage: "url('./assets/Images/Home_img1.png')" }
        }
      }
    },
  },
  plugins: [],
}