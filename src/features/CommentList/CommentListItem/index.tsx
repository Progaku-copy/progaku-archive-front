'use client';

import { Comment } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Text from '@/components/Text';

type Props = {
	comment: Comment;
};

const CommentListItem = ({ comment }: Props) => {
	return (
		<div className='flex cursor-pointer flex-col justify-center gap-2 rounded-lg bg-gray-100 p-3'>
			<Text fontSize='l'>{comment.poster}</Text>
			<DateLabel
				fontSize='s'
				utcDateTimeString={comment.created_at}
			/>
			<Text>{comment.content}</Text>
		</div>
	);
};

export default CommentListItem;
