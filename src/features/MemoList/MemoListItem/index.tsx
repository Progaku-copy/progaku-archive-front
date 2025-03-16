'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Memo } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Tag from '@/components/Tag';
import Text from '@/components/Text';

type Props = {
	memo: Memo;
};

const MemoListItem = ({ memo }: Props) => {
	const router = useRouter();
	const [isExpanded, setIsExpanded] = useState(false);

	const navigateToMemoDetail = () => {
		router.push(`/memoDetail/${memo.id}`);
	};

	const handleClickMore = (e: React.MouseEvent) => {
		e.stopPropagation(); // 親要素のクリックイベントを停止
		setIsExpanded(true);
	};

	// コンテンツの長さをチェック
	const isLongContent = memo.content.length > 300;
	// 表示するコンテンツを決定
	const displayContent =
		isLongContent && !isExpanded
			? `${memo.content.substring(0, 300)}...`
			: memo.content;

	return (
		<div
			className='flex cursor-pointer flex-col justify-center gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-light-blue hover:shadow-md'
			onClick={navigateToMemoDetail}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-light-blue text-white'>
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

			{memo.tags.length > 0 && (
				<div className='flex flex-wrap'>
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

			<div className='text-gray-700'>
				<Text textParseFlg={true}>{displayContent}</Text>
				{isLongContent && !isExpanded && (
					<div className='mt-3 text-right'>
						<button
							className='hover:text-blue-700 font-medium text-light-blue underline-offset-2 hover:underline'
							onClick={handleClickMore}
						>
							もっと見る
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default MemoListItem;
