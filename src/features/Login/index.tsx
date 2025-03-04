'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { loginUser } from '@/api/loginUser';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import Title from '@/components/Title';

export function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = () => {
		void loginUser(userName, password);
		setTimeout(() => router.push('/memoList'), 1500); // 1.5秒後に遷移(Cookieが設定される前に遷移するため一旦仮で設定)
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
