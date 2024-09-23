import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import Title from '@/components/Title';

export function UserCreate() {
	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Title
				fontSize='l'
				isBold
			>
				ユーザーを作成
			</Title>
			<Input placeholder='ユーザー名' />
			<Input placeholder='パスワード' />
			<div className='flex justify-end'>
				<ColorButton
					color='green'
					label='登録'
				></ColorButton>
			</div>
		</div>
	);
}
