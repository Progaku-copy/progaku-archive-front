import MemoListItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@/Types';

const meta = {
	title: 'features/MemoList/MemoListItem',
	component: MemoListItem,
} satisfies Meta<typeof MemoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags: Tag[] = [
	{
		id: 1,
		name: 'タグ名1',
	},
	{
		id: 2,
		name: 'タグ名2',
	},
	{
		id: 3,
		name: 'タグ名3',
	},
	{
		id: 4,
		name: 'タグ名1',
	},
	{
		id: 5,
		name: 'タグ名2',
	},
	{
		id: 6,
		name: 'タグ名3',
	},
	{
		id: 7,
		name: 'タグ名1',
	},
	{
		id: 8,
		name: 'タグ名2',
	},
	{
		id: 9,
		name: 'タグ名111111111113',
	},
	{
		id: 10,
		name: 'タグ名1',
	},
	{
		id: 11,
		name: 'タグ名2',
	},
	{
		id: 12,
		name: 'タグ名3',
	},
	{
		id: 13,
		name: 'タグ名1',
	},
	{
		id: 14,
		name: 'タグ名2',
	},
	{
		id: 15,
		name: 'タグ名3',
	},
	{
		id: 16,
		name: 'タグ名1',
	},
];

export const Default: Story = {
	args: {
		memo: {
			poster: 'ユーザ名',
			created_at: '2024/1/1',
			title: 'メモタイトル',
			tags: tags,
			id: 1,
			content: 'メモ内容',
			updated_at: '2024/1/1',
			comments: [],
		},
	},
};
