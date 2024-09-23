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
];

export const Default: Story = {
	args: {
		userName: 'ユーザ名',
		createdDate: '2024/1/1((日付の型定義は親画面で担保)',
		memoTitle: 'メモタイトル',
		tags: tags,
	},
};
