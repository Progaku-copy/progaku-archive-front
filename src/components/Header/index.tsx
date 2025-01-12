'use client';

import React from 'react';

import LinkText from '@/components/LinkText';

export const Header: React.FC = () => {
	return (
		<header className='bg-light-blue text-white shadow-md'>
			<div className='flex justify-evenly px-4 py-3'>
				<LinkText href='/memoList'>メモ一覧</LinkText>
			</div>
		</header>
	);
};
