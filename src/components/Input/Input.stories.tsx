import Input from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Input',
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'タイトル',
		label: 'サンプル',
	},
};
