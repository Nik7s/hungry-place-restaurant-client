/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerBg: "url('/src/assets/footer-bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
