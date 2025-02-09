'use client';

import { Comment } from '@/Types';
import Title from '@/components/Title';
import CommentListItem from '@/features/CommentList/CommentListItem';

type Props = {
	comments: Comment[];
};

export function CommentList({ comments }: Props) {
	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<Title isBold>コメント一覧</Title>
			<div className='space-y-5'>
				{comments.map((comment: Comment) => (
					<CommentListItem
						key={comment.id}
						comment={comment}
					/>
				))}
			</div>
		</div>
	);
}

export default CommentList;
