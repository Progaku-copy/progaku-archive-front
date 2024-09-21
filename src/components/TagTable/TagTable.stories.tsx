import TagTable from './tagTable';

import type { Meta, StoryObj } from '@storybook/react';

type Tag = {
	id: number;
	name: string;
	describe: string;
	priority: number;
};

const tags: Tag[] = [
	{
		id: 1,
		name: 'タグ1',
		describe: 'タグ１説明',
		priority: 1,
	},
	{
		id: 2,
		name: 'タグ2',
		describe: 'タグ２説明',
		priority: 2,
	},
	{
		id: 3,
		name: 'タグ3',
		describe: 'タグ３説明',
		priority: 3,
	},
	{
		id: 4,
		name: 'タグ4',
		describe: 'タグ４説明',
		priority: 4,
	},
	{
		id: 5,
		name: '春の訪れとともに、街中は色とりどりの花々で彩られます。公園では子どもたちが笑い声を上げ、青空の下で元気に遊んでいます。大人たちも、その光景に微笑みながら、穏やかなひとときを楽しんでいます。暖かな日差しが心を和ませ、自然の美しさに感謝する瞬間が広がります。まるで、日常の忙しさを忘れさせてくれるような、心温まるひとときです。春は新たな始まりを感じさせ、希望に満ちた季節です。',
		describe:
			'春の訪れとともに、街中は色とりどりの花々で彩られます。公園では子どもたちが笑い声を上げ、青空の下で元気に遊んでいます。大人たちも、その光景に微笑みながら、穏やかなひとときを楽しんでいます。暖かな日差しが心を和ませ、自然の美しさに感謝する瞬間が広がります。まるで、日常の忙しさを忘れさせてくれるような、心温まるひとときです。春は新たな始まりを感じさせ、希望に満ちた季節です。',
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
		data: tags,
	},
};
