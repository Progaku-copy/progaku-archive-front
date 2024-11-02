import { Memo } from '@/Types';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import Title from '@/components/Title';

type Props = {
	memo: Memo;
};

const MemoListItem = ({ memo }: Props) => {
	return (
		<div className='flex flex-col justify-center gap-2 rounded-lg bg-gray-100 p-3'>
			<Text fontSize='l'>{memo.poster}</Text>
			<Text fontSize='s'>{memo.created_at}</Text>
			<Title isBold>{memo.title}</Title>
			<div className='flex flex-wrap'>
				{memo.tags.map((tag) => {
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
