import { Header as ProgakuHeader } from '@/components/Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/Header',
	component: ProgakuHeader,
} satisfies Meta<typeof ProgakuHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserHeader: Story = {
	args: {
		isAdmin: false,
	},
};

export const AdminHeader: Story = {
	args: {
		isAdmin: true,
	},
};
