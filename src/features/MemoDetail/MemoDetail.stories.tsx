import { MemoDetail } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'features/MemoDetail',
	component: MemoDetail,
} satisfies Meta<typeof MemoDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type Comment = {
	id: number;
	memo_id: number;
	content: string;
	created_at: string;
	updated_at: string;
};

type Memo = {
	id: number;
	title: string;
	content: string;
	poster: string;
	created_at: string;
	updated_at: string;
	comments: Comment[];
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

const memo: Memo = {
	id: 1,
	title: 'タイトルタイトルタイトルタイトルタイトル',
	content:
		'本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文',
	poster: 'ユーザ名',
	created_at: '2024-09-05T10:12:14.000Z',
	updated_at: '2024-12-15T10:12:14.000Z',
	comments: [],
};

export const Default: Story = {
	args: {
		memo: memo,
		tags: tags,
	},
};
