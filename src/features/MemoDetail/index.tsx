'use client';

import { Memo } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Tag from '@/components/Tag';
import Text from '@/components/Text';

type Props = {
	memo: Memo;
};

export function MemoDetail({ memo }: Props) {
	return (
		<div className='mx-auto mt-10 flex max-w-4xl flex-col justify-center gap-8 px-4 sm:px-8 md:px-16'>
			<div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
				<div className='mb-4 flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='flex h-12 w-12 items-center justify-center rounded-full bg-light-blue text-white'>
							{memo.poster.charAt(0).toUpperCase()}
						</div>
						<Text
							fontSize='l'
							className='ml-4 font-medium'
						>
							{memo.poster}
						</Text>
					</div>
					<DateLabel
						fontSize='s'
						utcDateTimeString={memo.created_at}
					/>
				</div>

				{memo.tags && memo.tags.length > 0 && (
					<div className='mb-6 flex flex-wrap'>
						{memo.tags.map((tag) => (
							<div
								className='mb-1 mr-2'
								key={tag.id}
							>
								<Tag>{tag.name}</Tag>
							</div>
						))}
					</div>
				)}

				<div className='rounded-lg bg-white p-2'>
					<Text textParseFlg={true}>{memo.content}</Text>
				</div>
			</div>
		</div>
	);
}
