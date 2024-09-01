/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'black': '#333333',
			},
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
		},
	},
	plugins: [],
};
