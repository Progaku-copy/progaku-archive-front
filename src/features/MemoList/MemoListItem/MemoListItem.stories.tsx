import MemoListItem from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/MemoList/MemoListItem',
	component: MemoListItem,
} satisfies Meta<typeof MemoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

type Tag = {
	id: number;
	name: string;
	priority: number;
};

const tags: Tag[] = [
	{
		id: 1,
		name: 'タグ名1',
		priority: 1,
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
		name: 'タグ名2',
		priority: 3,
	},
	{
		id: 6,
		name: 'タグ名3',
		priority: 2,
	},
	{
		id: 7,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 8,
		name: 'タグ名2',
		priority: 3,
	},
	{
		id: 9,
		name: 'タグ名111111111113',
		priority: 2,
	},
	{
		id: 10,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 11,
		name: 'タグ名2',
		priority: 3,
	},
	{
		id: 12,
		name: 'タグ名3',
		priority: 2,
	},
	{
		id: 13,
		name: 'タグ名1',
		priority: 1,
	},
	{
		id: 14,
		name: 'タグ名2',
		priority: 3,
	},
	{
		id: 15,
		name: 'タグ名3',
		priority: 2,
	},
	{
		id: 16,
		name: 'タグ名1',
		priority: 1,
	},
];

export const Default: Story = {
	args: {
		userName: 'ユーザ名',
		createdDate: '2024/1/1((日付の型定義は親画面で担保)',
		memoTitle: 'メモタイトル',
		tags: tags,
	},
};
