import Input from '@/components/Input';
import MemoListItem from '@/features/MemoList/MemoListItem';
import Pagination from '@/features/MemoList/Pagination';
import { Memo } from '@/Types';

type Props = {
	memos: Memo[];
	memoTotalPage: number;
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
};

export function MemoList({ memos, memoTotalPage, searchValue, setSearchValue }: Props) {
	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<div className='flex justify-end'>
				<Input
					label='タグ検索'
					placeholder='タグを入力してください'
					setInputValue={setSearchValue}
					inputValue={searchValue}
				></Input>
			</div>
			<div className='space-y-5'>
				{memos.map((memo) => {
					return (
						<div className='m-1'>
							<MemoListItem
								key={memo.id}
								userName={memo.poster}
								createdDate={memo.created_at}
								memoTitle={memo.title}
								tags={memo.tags}
							></MemoListItem>
						</div>
					);
				})}
			</div>
			<div className='flex justify-center'>
				<Pagination totalPageNumber={memoTotalPage}></Pagination>
			</div>
		</div>
	);
}
