/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': '#B3B3B3',
				green: '#2E7D32',
				blue: '#3B6DCF',
			},
			textColor: {
				black: '#333333',
			},
		},
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections(['ic']),
		}),
	],
};
