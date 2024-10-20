import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import MultipleSelectInput from '@/components/MultipleSelectInput';
import MemoListItem from '@/features/MemoList/MemoListItem';
import Pagination from '@/features/MemoList/Pagination';
import { Memo, Tag } from '@/Types';

type Props = {
	memos: Memo[];
	memoTotalPage: number;
	tags: Tag[];
	searchMemoContent: string;
	setSearchMemoContent: (searchValue: string) => void;
	selectedChips: Tag[];
	setSelectedChips: (selectedChips: Tag[]) => void;
	searchButtonClicked: () => void;
};

export function MemoList({
	memos,
	memoTotalPage,
	tags,
	searchMemoContent,
	setSearchMemoContent,
	selectedChips,
	setSelectedChips,
	searchButtonClicked,
}: Props) {
	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<div className=''>
				<div className='m-1 w-full'>
					<MultipleSelectInput
						selectedChips={selectedChips}
						setSelectedChips={setSelectedChips}
						labelPosition='left'
						selectOptions={tags}
						placeholder='タグを入力してください'
						label='タグ検索'
					/>
				</div>
				<div className='m-1 w-full'>
					<Input
						label='メモ検索'
						placeholder='メモを入力してください'
						labelPosition='left'
						setInputValue={setSearchMemoContent}
						inputValue={searchMemoContent}
					/>
				</div>
			</div>
			<div className='text-center'>
				<ColorButton
					color='green'
					label='検索'
					handleClickButton={searchButtonClicked}
				/>
			</div>
			<span className='border'></span>
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
