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
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleLogin = async () => {
		if (!userName || !password) return;

		setIsLoading(true);
		try {
			await loginUser(userName, password);
			router.push('/memoList');
		} catch (error) {
			console.error('ログインエラー:', error);
			// エラー処理を追加することも検討
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	};

	return (
		<form className='mx-auto flex h-screen max-w-md flex-col justify-center px-4'>
			<div className='rounded-lg bg-white p-8 shadow-sm'>
				<Title
					fontSize='l'
					isBold
					className='mb-6 text-center'
				>
					ProgakuArchive
				</Title>
				<div className='space-y-6'>
					<Input
						setInputValue={setUserName}
						inputValue={userName}
						placeholder='ユーザー名'
						onKeyDown={handleKeyDown}
						name='username'
						autoComplete='username'
					/>
					<Input
						setInputValue={setPassword}
						inputValue={password}
						placeholder='パスワード'
						type='password'
						onKeyDown={handleKeyDown}
						name='password'
						autoComplete='current-password'
					/>
					<div className='mt-8 flex justify-center'>
						<ColorButton
							color='light-blue'
							label={isLoading ? 'ログイン中...' : 'ログイン'}
							handleClickButton={handleLogin}
							disabled={isLoading}
						></ColorButton>
					</div>
				</div>
			</div>
		</form>
	);
}
