'use client';

import { useRouter } from 'next/navigation';

import { Memo } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import Title from '@/components/Title';

type Props = {
	memo: Memo;
};

const MemoListItem = ({ memo }: Props) => {
	const router = useRouter();
	const navigateToMemoDetail = () => {
		router.push(`/memoDetail/${memo.id}`);
	};

	return (
		<div
			className='flex cursor-pointer flex-col justify-center gap-2 rounded-lg bg-gray-100 p-3'
			onClick={navigateToMemoDetail}
		>
			<Text fontSize='l'>{memo.poster}</Text>
			<DateLabel
				fontSize='s'
				utcDateTimeString={memo.created_at}
			/>
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
