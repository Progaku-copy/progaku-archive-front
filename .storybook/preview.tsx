import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { Noto_Sans_JP } from 'next/font/google';

const noto = Noto_Sans_JP({
	display: 'swap',
	preload: false,
	variable: '--font-noto',
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={String(noto.variable)}>
				<Story />
			</div>
		),
	],
};

export default preview;
