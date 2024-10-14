'use client';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import Title from '@/components/Title';
import { useState } from 'react';

export function UserCreate() {
	const [useName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Title
				fontSize='l'
				isBold
			>
				ユーザーを作成
			</Title>
			<Input
				inputValue={useName}
				setInputValue={setUserName}
				placeholder='ユーザー名'
			/>
			<Input
				inputValue={password}
				setInputValue={setPassword}
				placeholder='パスワード'
			/>
			<div className='flex justify-end'>
				<ColorButton
					handleClickButton={() => console.log('click')}
					color='green'
					label='登録'
				></ColorButton>
			</div>
		</div>
	);
}
