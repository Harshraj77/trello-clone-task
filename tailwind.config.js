/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corrected the path
  ],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#0D1117', // Corrected the object syntax
        columnBackgroundColor: '#161C22', // Corrected the object syntax
      },
    },
  },
  plugins: [],
};
