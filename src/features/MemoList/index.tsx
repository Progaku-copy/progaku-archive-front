import Input from '@/components/Input';
import MemoListItem from './MemoListItem';
import Pagination from './Pagination';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type Comment = {
	id: number;
	memo_id: number;
	content: string;
	created_at: string;
	updated_at: string;
};

type Memo = {
	id: number;
	title: string;
	content: string;
	poster: string;
	created_at: string;
	updated_at: string;
	comments: Comment[];
};

type Props = {
	memos: Memo[];
	memoTotalPage: number;
	tags: Tag[];
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
};

export function MemoList({
	memos,
	memoTotalPage,
	tags,
	searchValue,
	setSearchValue,
}: Props) {
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
								tags={tags}
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
