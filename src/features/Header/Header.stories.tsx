import type { Meta, StoryObj } from '@storybook/react';

import { Header as ProgakuHeader } from '@/components/Header';

const meta = {
	title: 'features/Header',
	component: ProgakuHeader,
} satisfies Meta<typeof ProgakuHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
	args: {},
};
