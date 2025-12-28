'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import LinkText from '@/components/LinkText';

export const Header: React.FC = () => {
	const router = useRouter();

	return (
		<header className='bg-light-blue text-white shadow-md'>
			<div className='relative flex items-center justify-between px-4 py-3'>
				<button
					onClick={() => router.back()}
					className='absolute left-4 flex items-center rounded-lg px-3 py-2 text-white transition hover:bg-blue-600'
				>
					<span className='text-lg'>&larr;</span>
					<span className='ml-2'>戻る</span>
				</button>

				<div className='flex grow justify-center'>
					<LinkText href='/memoList'>メモ一覧</LinkText>
				</div>
			</div>
		</header>
	);
};
