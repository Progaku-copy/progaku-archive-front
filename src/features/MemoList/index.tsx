'use client';

import { useState, useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Memo } from '@/Types';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import MemoListItem from '@/features/MemoList/MemoListItem';
import Pagination from '@/features/MemoList/Pagination';

type Props = {
	memos: Memo[];
	memoTotalPage: number;
	// tags: Tag[];
};

export function MemoList({ memos, memoTotalPage }: Props) {
	const [searchMemoContent, setSearchMemoContent] = useState('');
	const [isFiltered, setIsFiltered] = useState(false);
	// const [selectedChips, setSelectedChips] = useState<Tag[]>([]);

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		// URLから検索条件を取得して初期表示に反映
		const contentParam = searchParams.get('content');
		if (contentParam) {
			setSearchMemoContent(contentParam);
			setIsFiltered(true);
		}
	}, [searchParams]);

	const handleClickSearchButton = () => {
		const params = new URLSearchParams(searchParams.toString());

		params.set('page', '1');

		if (searchMemoContent.trim()) {
			params.set('content', searchMemoContent.trim());
			setIsFiltered(true);
		} else {
			params.delete('content'); // 空なら削除
			setIsFiltered(false);
		}

		router.push(`/memoList?${params.toString()}`);
	};

	const handleResetSearch = () => {
		setSearchMemoContent('');
		setIsFiltered(false);

		const params = new URLSearchParams(searchParams.toString());
		params.delete('content');
		params.set('page', '1');

		router.push(`/memoList?${params.toString()}`);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleClickSearchButton();
		}
	};

	return (
		<div className='mx-auto mt-10 flex max-w-4xl flex-col justify-center gap-8 px-4 sm:px-8 md:px-16'>
			<div className='mb-2 flex flex-col sm:flex-row sm:items-center'>
				<div className='relative mb-2 grow sm:mb-0 sm:mr-3'>
					<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
						<svg
							className='size-5 text-gray-400'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							></path>
						</svg>
					</div>
					<Input
						placeholder='キーワードを入力'
						setInputValue={setSearchMemoContent}
						inputValue={searchMemoContent}
						onKeyDown={handleKeyDown}
						className='pl-10'
					/>
					{isFiltered && (
						<button
							onClick={handleResetSearch}
							className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600'
							title='検索条件をクリア'
						>
							<svg
								className='size-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								></path>
							</svg>
						</button>
					)}
				</div>
				<div className='shrink-0'>
					<ColorButton
						color='light-blue'
						label='検索'
						handleClickButton={handleClickSearchButton}
					/>
				</div>
			</div>
			<div className='space-y-4'>
				{memos.map((memo) => (
					<MemoListItem
						key={memo.id}
						memo={memo}
					/>
				))}
				<Pagination totalPageNumber={memoTotalPage} />
			</div>
		</div>
	);
}

export default MemoList;
