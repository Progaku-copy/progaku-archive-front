import Table from './table';

import type { Meta, StoryObj } from '@storybook/react';

type Tag = {
	id: number;
	name: string;
	describe: string;
	priority: number;
};

type Column<T> = {
	header: string;
	accessor: (row: T) => string | number;
	isPrimaryKey: boolean;
	isHidden: boolean;
};

const columns: Column<Tag>[] = [
	{ header: 'ID', accessor: (row: Tag) => row.id, isPrimaryKey: true, isHidden: true },
	{
		header: 'タグ名',
		accessor: (row: Tag) => row.name,
		isPrimaryKey: false,
		isHidden: false,
	},
	{
		header: '説明',
		accessor: (row: Tag) => row.describe,
		isPrimaryKey: false,
		isHidden: false,
	},
	{
		header: '説明',
		accessor: (row: Tag) => row.priority,
		isPrimaryKey: false,
		isHidden: true,
	},
];

const tags: Tag[] = [
	{ id: 1, name: 'タグ1', describe: 'タグ１説明', priority: 1 },
	{ id: 2, name: 'タグ2', describe: 'タグ２説明', priority: 2 },
	{ id: 3, name: 'タグ3', describe: 'タグ３説明', priority: 3 },
	{ id: 4, name: 'タグ4', describe: 'タグ４説明', priority: 4 },
];

const meta = {
	title: 'components/Table',
	component: Table<Tag>,
} satisfies Meta<typeof Table<Tag>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		columns: columns,
		data: tags,
	},
};
