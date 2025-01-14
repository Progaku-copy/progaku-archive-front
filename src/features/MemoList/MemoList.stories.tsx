import { MemoList } from '.';

import type { Meta, StoryObj } from '@storybook/react';

import { Memo, Tag } from '@/Types';

const meta = {
	title: 'features/MemoList',
	component: MemoList,
} satisfies Meta<typeof MemoList>;

export default meta;
type Story = StoryObj<typeof meta>;

const DUMMY_DATA_TAGS: Tag[] = [
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

const DUMMY_DATA_MEMOS: Memo[] = [
	{
		id: 1,
		title: 'タイトルタイトルタイトルタイトルタイトル',
		content:
			'本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文',
		poster: 'ユーザ名',
		created_at: '2024-09-05T10:12:14.000Z',
		updated_at: '2024-12-15T10:12:14.000Z',
		comments: [],
		tags: DUMMY_DATA_TAGS,
	},
	{
		id: 2,
		title: 'タイトルタイトルタイトルタイトルタイトル',
		content:
			'本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文',
		poster: 'ユーザ名',
		created_at: '2024-09-05T10:12:14.000Z',
		updated_at: '2024-12-15T10:12:14.000Z',
		comments: [],
		tags: DUMMY_DATA_TAGS,
	},
];

export const Default: Story = {
	args: {
		memos: DUMMY_DATA_MEMOS,
		memoTotalPage: 1,
		tags: DUMMY_DATA_TAGS,
		searchMemoContent: '',
		setSearchMemoContent: () => {},
		selectedChips: [],
		setSelectedChips: () => {},
		handleClickSearchButton: () => {},
	},
};
