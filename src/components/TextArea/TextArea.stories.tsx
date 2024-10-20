import { useState } from 'react';

import TextArea from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/TextArea',
	component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextAreaWithState = (args: Story['args']) => {
	const [inputValue, setInputValue] = useState(args.inputValue);

	return (
		<TextArea
			{...args}
			inputValue={inputValue}
			setInputValue={setInputValue}
		/>
	);
};

export const Default: Story = {
	render: (args) => <TextAreaWithState {...args} />,
	args: {
		placeholder: '本文',
		inputValue: '',
		setInputValue: () => {},
	},
};
