import Text from '@/components/Text';
import Title from '@/components/Title';
import Tag from '@/components/Tag';
import DateLabel from '@/components/DateLabel';

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

type Props = {
	memo: Memo;
	tags: Tag[];
};

export function MemoDetail({ memo, tags }: Props) {
	const sortedTags = [...tags].sort((a, b) => {
		return b.priority - a.priority;
	});
	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<Text>{memo.poster}</Text>
			<Title
				fontSize='l'
				isBold
			>
				{memo.title}
			</Title>
			<div className='flex flex-wrap'>
				{sortedTags.map((tag) => {
					return (
						<div className='mb-1 mr-1'>
							<Tag key={tag.id}>{tag.name}</Tag>
						</div>
					);
				})}
			</div>
			<div className='flex space-x-2'>
				<DateLabel
					utcDateTimeString={memo.created_at}
					label='登録日時'
				/>
				<DateLabel
					utcDateTimeString={memo.updated_at}
					label='更新日時'
				/>
			</div>
			<div className='mt-3'>
				<Text>{memo.content}</Text>
			</div>
		</div>
	);
}
