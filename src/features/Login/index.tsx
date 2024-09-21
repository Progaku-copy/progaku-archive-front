import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import Title from '@/components/Title';

export function Login() {
	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Title
				fontSize='l'
				isBold
			>
				ログイン
			</Title>
			<Input placeholder='ユーザー名' />
			<Input placeholder='パスワード' />
			<div className='flex justify-end'>
				<ColorButton
					color='green'
					label='ログイン'
				></ColorButton>
			</div>
		</div>
	);
}
