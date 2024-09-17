import { Login } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/Login',
	component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
