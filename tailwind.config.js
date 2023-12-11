/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iconColor: "#e74b3c", //header,icon
        footerColor: "#f4f6f6", //footer
        primary: "#ffffff", //navbar
        secondary: "#f7fafc", //main
        btnColor: "#0346c8",
        infoCard: "#eff4ff", //info card color
      },
    },
  },
  plugins: [],
};
