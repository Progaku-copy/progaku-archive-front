import TagTable from './tagTable';

import type { Meta, StoryObj } from '@storybook/react';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

const DUMMY_TAGS: Tag[] = [
	{
		id: 1,
		name: 'タグ1',
		priority: 1,
	},
	{
		id: 2,
		name: 'タグ2',
		priority: 2,
	},
	{
		id: 3,
		name: 'タグ3',
		priority: 3,
	},
	{
		id: 4,
		name: 'タグ4',
		priority: 4,
	},
	{
		id: 5,
		name: 'タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名',
		priority: 5,
	},
	{
		id: 6,
		name: 'タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名',
		priority: 5,
	},
];

const meta = {
	title: 'components/TagTable',
	component: TagTable,
} satisfies Meta<typeof TagTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tags: DUMMY_TAGS,
	},
};
