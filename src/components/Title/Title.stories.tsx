import Title from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/Title',
	component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleDefault: Story = {
	args: {
        children: 'サンプル',
    },
};
