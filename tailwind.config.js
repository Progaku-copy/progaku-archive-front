/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#333333',
				'light-gray': '#B3B3B3',
				green: '#2E7D32',
				blue: '#3B6DCF',
				'light-blue': '#6495ed',
			},
			fontSize: {
				'2.5xl': '1.75rem',
			},
			maxWidth: {
				'tag-table-name': '100px',
				'tag-table-icon': '20px',
			},
			fontFamily: {
				noto: ['"Noto Sans"', 'sans-serif'],
			},
		},
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections(['ic']),
		}),
		function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-thin': {
					'::-webkit-scrollbar': {
						width: '4px',
						height: '4px',
					},
					'::-webkit-scrollbar-thumb': {
						backgroundColor: '#888',
						borderRadius: '4px',
					},
					'::-webkit-scrollbar-track': {
						background: 'transparent',
					},
					scrollbarWidth: 'thin',
					scrollbarColor: '#888 transparent',
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		},
	],
};
