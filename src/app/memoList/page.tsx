import { useState } from 'react';

import { Tag } from '@/Types';
import { getMemos } from '@/api/getMemos';
import { getTags } from '@/api/getTags';
import MemoList from '@/features/MemoList';

export default async function MemoListPage() {
	const [searchMemoContent, setSearchMemoContent] = useState('');
	const [selectedChips, setSelectedChips] = useState<Tag[]>([]);

	const memos = await getMemos();
	const tags = await getTags();

	const handleClickSearchButton = () => {
		console.log('search');
	};

	if (!memos || memos.length === 0) {
		return <div>メモが見つかりません</div>;
	}

	return (
		<MemoList
			memos={memos}
			memoTotalPage={memos.length}
			tags={tags}
			searchMemoContent={searchMemoContent}
			setSearchMemoContent={setSearchMemoContent}
			selectedChips={selectedChips}
			setSelectedChips={setSelectedChips}
			handleClickSearchButton={handleClickSearchButton}
		></MemoList>
	);
}
