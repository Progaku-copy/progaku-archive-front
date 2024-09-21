import Table from './table';
import IconButton from '../IconButton';

import type { Meta, StoryObj } from '@storybook/react';

type Tag = {
	id: number;
	name: string;
	describe: string;
	priority: number;
	editIcon?: JSX.Element;
	deleteIcon?: JSX.Element;
};

type Column<T> = {
	header?: string;
	accessor: (row: T) => string | number | JSX.Element | undefined;
	isPrimaryKey: boolean;
	sizeRatio: number;
};

const columns: Column<Tag>[] = [
	{
		header: 'ID',
		accessor: (row: Tag) => row.id ?? '',
		isPrimaryKey: true,
		sizeRatio: 0,
	},
	{
		header: 'タグ名',
		accessor: (row: Tag) => row.name,
		isPrimaryKey: false,
		sizeRatio: 3,
	},
	{
		header: '説明',
		accessor: (row: Tag) => row.describe,
		isPrimaryKey: false,
		sizeRatio: 7,
	},
	{
		header: '優先度',
		accessor: (row: Tag) => row.priority,
		isPrimaryKey: false,
		sizeRatio: 0,
	},
	{
		header: undefined,
		accessor: (row: Tag) => row.editIcon,
		isPrimaryKey: false,
		sizeRatio: 0.5,
	},
	{
		header: undefined,
		accessor: (row: Tag) => row.deleteIcon,
		isPrimaryKey: false,
		sizeRatio: 0.5,
	},
];

const editIconClicked = (id: number): void => {
	console.log(`edit:ID = ${id}`);
};

const deleteIconClicked = (id: number): void => {
	console.log(`delete:ID = ${id}`);
};

const tags: Tag[] = [
	{
		id: 1,
		name: 'タグ1',
		describe: 'タグ１説明',
		priority: 1,
		editIcon: (
			<IconButton
				iconType='edit'
				onclickHandler={editIconClicked(1)}
			/>
		),
		deleteIcon: (
			<IconButton
				iconType='delete'
				onclickHandler={deleteIconClicked(1)}
			/>
		),
	},
	{
		id: 2,
		name: 'タグ2',
		describe: 'タグ２説明',
		priority: 2,
		editIcon: (
			<IconButton
				iconType='edit'
				onclickHandler={editIconClicked(2)}
			/>
		),
		deleteIcon: (
			<IconButton
				iconType='delete'
				onclickHandler={deleteIconClicked(2)}
			/>
		),
	},
	{
		id: 3,
		name: 'タグ3',
		describe: 'タグ３説明',
		priority: 3,
		editIcon: (
			<IconButton
				iconType='edit'
				onclickHandler={editIconClicked(3)}
			/>
		),
		deleteIcon: (
			<IconButton
				iconType='delete'
				onclickHandler={deleteIconClicked(3)}
			/>
		),
	},
	{
		id: 4,
		name: 'タグ4',
		describe: 'タグ４説明',
		priority: 4,
		editIcon: (
			<IconButton
				iconType='edit'
				onclickHandler={editIconClicked(4)}
			/>
		),
		deleteIcon: (
			<IconButton
				iconType='delete'
				onclickHandler={deleteIconClicked(4)}
			/>
		),
	},
	{
		id: 5,
		name: '春の訪れとともに、街中は色とりどりの花々で彩られます。公園では子どもたちが笑い声を上げ、青空の下で元気に遊んでいます。大人たちも、その光景に微笑みながら、穏やかなひとときを楽しんでいます。暖かな日差しが心を和ませ、自然の美しさに感謝する瞬間が広がります。まるで、日常の忙しさを忘れさせてくれるような、心温まるひとときです。春は新たな始まりを感じさせ、希望に満ちた季節です。',
		describe:
			'春の訪れとともに、街中は色とりどりの花々で彩られます。公園では子どもたちが笑い声を上げ、青空の下で元気に遊んでいます。大人たちも、その光景に微笑みながら、穏やかなひとときを楽しんでいます。暖かな日差しが心を和ませ、自然の美しさに感謝する瞬間が広がります。まるで、日常の忙しさを忘れさせてくれるような、心温まるひとときです。春は新たな始まりを感じさせ、希望に満ちた季節です。',
		priority: 5,
		editIcon: (
			<IconButton
				iconType='edit'
				onclickHandler={editIconClicked(5)}
			/>
		),
		deleteIcon: (
			<IconButton
				iconType='delete'
				onclickHandler={deleteIconClicked(5)}
			/>
		),
	},
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
