/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "50vw": "50vw",
        "80vw": "80vw",
      },
      height: {
        "25vh": "25vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
};
