/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quickks: {
          50: "#eff9ff",
          100: "#dff3ff",
          500: "#18a9e8",
          600: "#0c94d1",
          700: "#0876aa",
          900: "#0a2435"
        }
      },
      boxShadow: {
        soft: "0 16px 45px rgba(7, 44, 69, 0.10)"
      }
    },
  },
  plugins: [],
};