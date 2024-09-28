import Text from '@/components/Text';
import Title from '@/components/Title';
import Tag from '@/components/Tag';
import DateLabel from '@/components/DateLabel';
import IconButton from '@/components/IconButton';

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

	const onClickEditButton = (id: number): any => {
		console.log('edit id', { id });
	};
	const onClickDeleteButton = (id: number): any => {
		console.log('delete id', { id });
	};
	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<div className='flex'>
				<div className='mr-auto'>
					<Text>{memo.poster}</Text>
				</div>
				<div className='flex'>
					<IconButton
						label='編集'
						size='s'
						iconType='edit'
						onClickHandler={onClickEditButton(memo.id)}
					></IconButton>
					<IconButton
						label='削除'
						size='s'
						iconType='delete'
						onClickHandler={onClickDeleteButton(memo.id)}
					></IconButton>
				</div>
			</div>
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
