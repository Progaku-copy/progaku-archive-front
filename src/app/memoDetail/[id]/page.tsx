import { getMemoDetail } from '@/api/getMemoDetail';
import CommentList from '@/features/CommentList';
import { MemoDetail } from '@/features/MemoDetail';

type Props = {
	params: {
		id: string; // URLパラメータを表す
	};
};

export default async function MemoDetailPage({ params }: Props) {
	const memo = await getMemoDetail(Number(params.id));

	return (
		<div className='pb-16'>
			<MemoDetail memo={memo} />
			{memo.comments && memo.comments.length > 0 && (
				<CommentList comments={memo.comments} />
			)}
		</div>
	);
}
