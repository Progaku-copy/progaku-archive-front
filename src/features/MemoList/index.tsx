'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Memo, Tag } from '@/Types';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import MultipleSelectInput from '@/components/MultipleSelectInput';
import MemoListItem from '@/features/MemoList/MemoListItem';
import Pagination from '@/features/MemoList/Pagination';

type Props = {
	memos: Memo[];
	memoTotalPage: number;
	tags: Tag[];
};

export function MemoList({ memos, memoTotalPage, tags }: Props) {
	const [searchMemoContent, setSearchMemoContent] = useState('');
	const [selectedChips, setSelectedChips] = useState<Tag[]>([]);

	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClickSearchButton = () => {
		const params = new URLSearchParams(searchParams.toString());

		params.set('page', '1');

		if (searchMemoContent.trim()) {
			params.set('content', searchMemoContent.trim());
		} else {
			params.delete('content'); // 空なら削除
		}

		router.push(`/memoList?${params.toString()}`);
	};

	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<div>
				<div className='m-1 flex items-center'>
					<div className='mr-5 w-4/5'>
						<MultipleSelectInput
							selectedChips={selectedChips}
							setSelectedChips={setSelectedChips}
							labelPosition='left'
							selectOptions={tags}
							placeholder='タグを入力してください'
							label='タグ検索'
						/>
					</div>
					<div className='w-20'></div>
				</div>
				<div className='m-1 flex items-center'>
					<div className='mr-5 w-4/5'>
						<Input
							label='メモ検索'
							placeholder='メモを入力してください'
							labelPosition='left'
							setInputValue={setSearchMemoContent}
							inputValue={searchMemoContent}
						/>
					</div>
					<div className='w-20'>
						<ColorButton
							color='green'
							label='検索'
							handleClickButton={handleClickSearchButton}
						/>
					</div>
				</div>
			</div>
			<div className='space-y-5'>
				{memos.map((memo) => (
					<MemoListItem memo={memo} />
				))}
				<Pagination totalPageNumber={memoTotalPage} />
			</div>
		</div>
	);
}

export default MemoList;
