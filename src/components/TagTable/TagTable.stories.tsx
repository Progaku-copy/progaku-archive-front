import TagTable from './tagTable';

import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@/Types';

const DUMMY_TAGS: Tag[] = [
	{
		id: 1,
		name: 'タグ1',
	},
	{
		id: 2,
		name: 'タグ2',
	},
	{
		id: 3,
		name: 'タグ3',
	},
	{
		id: 4,
		name: 'タグ4',
	},
	{
		id: 5,
		name: 'タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名',
	},
	{
		id: 6,
		name: 'タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名タグ名',
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
		editOnClickIcon: () => console.log('edit'),
		deleteOnClickIcon: () => console.log('delete'),
	},
};
