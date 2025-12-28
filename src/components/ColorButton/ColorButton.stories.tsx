import ColorButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/ColorButton',
	component: ColorButton,
} satisfies Meta<typeof ColorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Button',
		color: 'light-blue',
		handleClickButton: () => console.log('click'),
	},
};
