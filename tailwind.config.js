/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#333333',
				'light-gray': '#B3B3B3',
				'gray-200': '#E5E7EB',
				'gray-400': '#9CA3AF',
				'gray-500': '#6B7280',
				'gray-600': '#4B5563',
				'gray-700': '#374151',
				green: '#2E7D32',
				'green-600': '#1B5E20',
				red: '#D32F2F',
				'red-500': '#F44336',
				'red-600': '#B71C1C',
				blue: '#3B6DCF',
				'light-blue': '#6495ed',
				'blue-600': '#1565C0',
				'amber-500': '#FFC107',
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
