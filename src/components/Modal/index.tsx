import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Title from '@/components/Title';
import { useState } from 'react';
import ColorButton from '../ColorButton';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	mode: 'edit' | 'create';
};

const Modal = ({ isOpen, onClose, mode }: Props) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	if (!isOpen) {
		return null;
	}
	return (
		<div className='z-10 mx-auto max-w-7xl flex-col rounded-full'>
			<div className='m-10 rounded-lg border border-gray-400 p-10 px-48'>
				<Title
					fontSize='l'
					isBold
				>
					{mode === 'edit' ? 'タグの編集' : 'タグの作成'}
				</Title>
				<br />
				<br />
				<Input placeholder='タグ名' />
				<br />
				<TextArea
					placeholder='説明'
					value={description}
					setValue={setDescription}
				/>
				<br />
				<div className='flex justify-between'>
					<button
						className='text-white w-28 rounded bg-blue py-3 transition hover:opacity-75'
						onClick={onClose}
					>
						閉じる
					</button>
					<ColorButton
						label='送信'
						color='green'
					></ColorButton>
				</div>
			</div>
		</div>
	);
};

export default Modal;
