import Tag from '@/components/Tag';
import Text from '@/components/Text';
import Title from '@/components/Title';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type Props = {
	userName: string;
	createdDate: string;
	memoTitle: string;
	tags: Tag[] | undefined;
};

const MemoListItem = ({ userName, createdDate, memoTitle, tags = [] }: Props) => {
	const sortedTags = [...tags].sort((a, b) => {
		return b.priority - a.priority;
	});
	return (
		<div className='flex flex-col justify-center gap-2 rounded-lg bg-gray-100 p-3'>
			<Text fontSize='l'>{userName}</Text>
			<Text fontSize='s'>{createdDate}</Text>
			<Title isBold>{memoTitle}</Title>
			<div className='flex flex-wrap'>
				{sortedTags.map((tag) => {
					return (
						<div className='mb-1 mr-1'>
							<Tag key={tag.id}>{tag.name}</Tag>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MemoListItem;
