import { UserCreate } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/UserCreate',
	component: UserCreate,
} satisfies Meta<typeof UserCreate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
