/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  useTabs: true,
  singleQuote: true,
  printWidth: 90,
  tabWidth: 4,
  jsxSingleQuote: true,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "ignore",
  singleAttributePerLine: true,
};
