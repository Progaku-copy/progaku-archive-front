import Alert from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Alert',
	component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'サンプル\nサンプル',
		handleClickButton: () => console.log('click'),
		alertType: 'error',
	},
};
