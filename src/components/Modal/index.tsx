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

const Modal = ({ onClose, mode }: Props) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	return (
		<div className='z-10 mx-auto max-w-4xl flex-col rounded-full'>
			<div className='px-38 m-10 rounded-lg border border-gray-400 p-10'>
				<div className='flex justify-between'>
					<Title
						fontSize='l'
						isBold
					>
						{mode === 'edit' ? 'タグの編集' : 'タグの作成'}
					</Title>
					<button
						className='i-ic-close px-3 py-3 text-gray-500 hover:opacity-75'
						onClick={onClose}
					></button>
				</div>
				<br />
				<br />
				<Input placeholder='タグ名' />
				<br />
				<TextArea placeholder='説明' />
				<br />
				<div className='flex justify-end'>
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
