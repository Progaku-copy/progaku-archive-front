import Modal from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Modal',
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isOpen: true,
		onClose: () => {},
		mode: 'edit',
	},
};
