import { MemoCreate } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/MemoCreate',
	component: MemoCreate,
} satisfies Meta<typeof MemoCreate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
