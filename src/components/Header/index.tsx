"use client";
import React, { useState } from 'react';
import LinkText from '../LinkText';

interface HeaderProps {
	isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin }) => {
	return (
		<header className='bg-light-blue text-white shadow-md'>
			<div className='flex justify-evenly px-4 py-3'>
				<div className=''>
					<LinkText href='/memoList'>メモ一覧</LinkText>
				</div>
				{isAdmin && (
					<div className=''>
						<LinkText href='/memoCreate'>メモ作成</LinkText>
					</div>
				)}
				{isAdmin && (
					<div className=''>
						<LinkText href='/tagList'>タグ作成・編集</LinkText>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;