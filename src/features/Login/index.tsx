'use client';
import { loginUser } from '@/api/loginUser';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import Title from '@/components/Title';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = () => {
		void loginUser(userName, password);
		router.push('/memoList');
	};

	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Title
				fontSize='l'
				isBold
			>
				ログイン
			</Title>
			<Input
				setInputValue={setUserName}
				inputValue={userName}
				placeholder='ユーザー名'
			/>
			<Input
				setInputValue={setPassword}
				inputValue={password}
				placeholder='パスワード'
			/>
			<div className='flex justify-end'>
				<ColorButton
					color='green'
					label='ログイン'
					handleClickButton={handleLogin}
				></ColorButton>
			</div>
		</div>
	);
}
