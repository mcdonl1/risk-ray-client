/** @type {import("prettier").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: './tailwind.config.cjs',
};
