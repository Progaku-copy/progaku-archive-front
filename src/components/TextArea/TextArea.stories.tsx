import TextArea from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/TextArea',
	component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: '本文',
	},
};
