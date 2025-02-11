import { MemoResponse } from '@/Types';
import { getMemos } from '@/api/getMemos';
// import { getTags } from '@/api/getTags';
import MemoList from '@/features/MemoList';

type Props = {
	searchParams: {
		page?: string;
		[key: string]: string | undefined;
	};
};

export default async function MemoListPage({ searchParams }: Props) {
	const memoResponse: MemoResponse = await getMemos(searchParams);

	// const tags = await getTags();

	if (!memoResponse.memos || memoResponse.memos.length === 0) {
		return <div>メモが見つかりません</div>;
	}

	return (
		<MemoList
			memos={memoResponse.memos}
			memoTotalPage={memoResponse.total_page}
			// tags={tags}
		></MemoList>
	);
}
