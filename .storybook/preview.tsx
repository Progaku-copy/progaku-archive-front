import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const defaultNavigationContext = {
	push: fn((...args: any[]) => {
		action('nextNavigation.push')(...args);
	}),
	replace: fn((...args: any[]) => {
		action('nextNavigation.replace')(...args);
	}),
	forward: fn((...args: any[]) => {
		action('nextNavigation.forward')(...args);
	}),
	back: fn((...args: any[]) => {
		action('nextNavigation.back')(...args);
	}),
	prefetch: fn((...args: any[]) => {
		action('nextNavigation.prefetch')(...args);
	}),
	refresh: fn(() => {
		action('nextNavigation.refresh')();
	}),
};

const noto = Noto_Sans_JP({
	display: 'swap',
	preload: false,
	variable: '--font-noto',
});

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: defaultNavigationContext,
		},
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
