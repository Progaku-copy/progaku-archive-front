'use client';

import { ComponentProps, useState } from 'react';
import TextArea from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/TextArea',
	component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

const TextAreaWithHooks = (args: ComponentProps<typeof TextArea>) => {
	const [value, setValue] = useState('');
	return (
		<TextArea
			{...args}
			value={value}
			setValue={setValue}
		/>
	);
};

export const Default: Story = {
	args: {
		placeholder: 'タイトル',
		label: 'サンプル',
		row: 10,
	},
	render: (args) => <TextAreaWithHooks {...args} />,
};
