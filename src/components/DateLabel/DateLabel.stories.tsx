import DateLabel from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'components/DateLabel',
	component: DateLabel,
} satisfies Meta<typeof DateLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		utcDateTimeString: '2024-09-15T10:12:14.000Z',
		label: '登録日時',
		containSecond: false,
		fontSize: 'm',
		color: 'black',
	},
};
