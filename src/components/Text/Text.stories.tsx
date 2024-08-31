import Text from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Text',
	component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'サンプル',
	},
};
