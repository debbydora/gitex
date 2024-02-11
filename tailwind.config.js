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
        footerBg: "#0A0323",
      },

      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        burgerBg: "url('../../public/image/burgerBg.png')",
        heroBg: "url('../../public/image/hero.png')",
        "harmburger-gradient":
          "linear-gradient(0deg, rgba(7, 2, 29, 0.50) 0%, rgba(7, 2, 29, 0.50) 100%), linear-gradient(58deg, rgba(10, 3, 35, 0.90) 19.88%, rgba(16, 0, 82, 0.90) 91.89%)",
        "hero-gradient":
          "linear-gradient(58deg, rgba(10, 3, 35, 0.90) 19.88%, rgba(16, 0, 82, 0.90) 91.89%)",
        btnBg: "linear-gradient(100deg, #FF2169 17.2%, #E62D8E 70.31%)",
        btnBorder: "linear-gradient(to right, #0E0531, #990D81);",
      }),
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        cabinet: ["var(--font-cabinet)"],
      },
    },
  },
  plugins: [],
};
