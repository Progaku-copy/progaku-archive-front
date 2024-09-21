'use client';

import IconButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/IconButton',
	component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: '編集',
		size: 'm',
		iconJustified: 'center',
		iconType: 'delete',
		onClickHandler: () => {
			console.log('click');
		},
	},
};
