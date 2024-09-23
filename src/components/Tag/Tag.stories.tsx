import Tag from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Tag',
	component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'サンプルタグ',
	},
};
