import MemoListItem from './MemoListItem';
import Pagination from './Pagination';

import { Memo } from '@/Types';

type Props = {
	memos: Memo[]; // 配列が格納されるプロパティ
	total_page: number; // ページ数のプロパティ
};

const MemoList = ({ memos, total_page }: Props) => {
	return (
		<>
			{memos.map((memo) => (
				<MemoListItem memo={memo} />
			))}
			<Pagination totalPageNumber={total_page} />
		</>
	);
};

export default MemoList;
