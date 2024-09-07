/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': '#B3B3B3',
			},
		},
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections(['mdi']),
		}),
	],
};
