/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        "dark-blue" : "#445874;"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

