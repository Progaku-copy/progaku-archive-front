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
				label='Slack投稿日'
				utcDateTimeString={comment.slack_posted_at}
			/>
			<Text textParseFlg={true}>{comment.content}</Text>
		</div>
	);
};

export default CommentListItem;
