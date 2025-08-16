/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are elsewhere
  ],
  theme: {
    extend: {
      screens: {
        xsm: "480px", // ✅ your custom breakpoint
      },
      boxShadow: {
        "inset-shadow-md": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
        "inset-shadow-lg": "inset 0 10px 15px rgba(0, 0, 0, 0.15)",
        "inset-shadow-xl": "inset 0 20px 25px rgba(0, 0, 0, 0.2)",
        "inset-shadow-2xl": "inset 0 25px 50px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
