/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#027DFC",
        secondary: "#3497fc",
        tertiary: "#67b1fd",
        quaternary: "#99cbfd",
        graydark: "#333",
        graryligh: "eee"
      }
    },
  },
  plugins: [],
}