import Input from '@/components/Input';
import Title from '@/components/Title';
import ColorButton from '../ColorButton';
import { useState } from 'react';

type Props = {
	onClose: () => void;
	mode: 'edit' | 'create';
};

const Modal = ({ onClose, mode }: Props) => {
	const [name, setName] = useState('');
	const onClickSubmitButton = () => {
		console.log('submit');
	};

	return (
		<div className='z-10 mx-auto max-w-4xl flex-col rounded-2xl border border-gray-400 py-10'>
			<div className='m-1 space-y-12 rounded-lg px-40 py-20 pl-10 pr-10 pt-20'>
				<div className='flex justify-between'>
					<Title
						fontSize='l'
						isBold
					>
						{mode === 'edit' ? 'タグを編集' : 'タグを作成'}
					</Title>
					<button
						className='i-ic-close px-3 py-3 text-gray-500 hover:opacity-75'
						onClick={onClose}
					></button>
				</div>
				<Input
					placeholder='タグ名'
					setInputValue={setName}
					inputValue={name}
				/>
				<div className='flex justify-end'>
					<ColorButton
						label='送信'
						color='green'
						handleClickButton={onClickSubmitButton}
					></ColorButton>
				</div>
			</div>
		</div>
	);
};

export default Modal;
