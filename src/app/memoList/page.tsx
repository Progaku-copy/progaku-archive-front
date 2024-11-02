import { getMemos } from '@/api/getMemos';
import MemoList from '@/features/MemoList';

export default async function MemoListPage() {
	const memos = await getMemos();
	if (!memos || memos.length === 0) {
		return <div>メモが見つかりません</div>;
	}
	return <MemoList memos={memos}></MemoList>;
}
