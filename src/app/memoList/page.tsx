import { getMemos } from '@/api/getMemos';
import { getTags } from '@/api/getTags';
import MemoList from '@/features/MemoList';

export default async function MemoListPage() {
	const memos = await getMemos();
	const tags = await getTags();

	if (!memos || memos.length === 0) {
		return <div>メモが見つかりません</div>;
	}

	return (
		<MemoList
			memos={memos}
			memoTotalPage={memos.length}
			tags={tags}
		></MemoList>
	);
}
