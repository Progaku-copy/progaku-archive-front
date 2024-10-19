import TagUpdate from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/TagUpdate',
	component: TagUpdate,
} satisfies Meta<typeof TagUpdate>;

export default meta;
type Story = StoryObj<typeof meta>;

type Tag = {
	id: number;
	name: string;
	priority: number;
};

const DUMMY_TAGS: Tag[] = [
	{
		id: 1,
		name: 'タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1タグ名1',
		priority: 100,
	},
	{
		id: 2,
		name: 'タグ名2',
		priority: 3,
	},
	{
		id: 3,
		name: 'タグ名3',
		priority: 2,
	},
	{
		id: 4,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 5,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 6,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 7,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 8,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 9,
		name: 'タグ名1',
		priority: 1,
	},
];

export const Default: Story = {
	args: {
		tags: DUMMY_TAGS,
		onClickEditIcon: () => {},
		onClickDeleteIcon: () => {},
		onClickSubmitButton: () => {},
	},
};
