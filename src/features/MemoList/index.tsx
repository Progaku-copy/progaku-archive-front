import MemoListItem from './MemoListItem';
import Pagination from './Pagination';

import { Memo } from '@/Types';

type Props = {
	memos: Memo[];
};

const MemoList = ({ memos }: Props) => {
	return (
		<>
			{memos.map((memo) => (
				<MemoListItem memo={memo} />
			))}
			<Pagination totalPageNumber={10} />
		</>
	);
};

export default MemoList;
