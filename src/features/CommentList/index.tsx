'use client';

import { Comment } from '@/Types';
import Title from '@/components/Title';
import CommentListItem from '@/features/CommentList/CommentListItem';

type Props = {
	comments: Comment[];
};

export function CommentList({ comments }: Props) {
	return (
		<div className='mx-auto mt-10 flex max-w-4xl flex-col justify-center gap-8 px-4 sm:px-8 md:px-16'>
			<div className='mb-4'>
				<Title isBold>コメント一覧</Title>
			</div>
			<div className='space-y-4'>
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
