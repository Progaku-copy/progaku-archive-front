'use client';

import { Comment } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Text from '@/components/Text';

type Props = {
	comment: Comment;
};

const CommentListItem = ({ comment }: Props) => {
	return (
		<div className='flex flex-col justify-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					<div className='flex size-8 items-center justify-center rounded-full bg-light-blue text-white'>
						{comment.poster.charAt(0).toUpperCase()}
					</div>
					<Text
						fontSize='l'
						className='ml-3 font-medium'
					>
						{comment.poster}
					</Text>
				</div>
				<DateLabel
					fontSize='s'
					utcDateTimeString={comment.created_at}
				/>
			</div>
			<div className='mt-2 pl-11'>
				<Text textParseFlg={true}>{comment.content}</Text>
			</div>
		</div>
	);
};

export default CommentListItem;
