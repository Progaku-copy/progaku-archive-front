import Input from '@/components/Input';
import Title from '@/components/Title';
import ColorButton from '@/components/ColorButton';

type Props = {
	onClose: () => void;
	onClickSubmitButton: () => void;
	tagName: string;
	setTagName: (value: string) => void;
	mode: 'edit' | 'create' | undefined;
};

const Modal = ({ onClose, onClickSubmitButton, tagName, setTagName, mode }: Props) => {
	return (
		<div className='mx-auto max-w-4xl flex-col rounded-2xl border border-gray-400 bg-white py-10'>
			<div className='m-1 space-y-12 rounded-lg px-40 py-20 pl-10 pr-10 pt-20'>
				<div className='flex justify-between'>
					<Title
						fontSize='l'
						isBold
					>
						{mode === 'edit'
							? 'タグを編集'
							: mode === 'create'
								? 'タグを作成'
								: ''}
					</Title>
					<button
						className='i-ic-close px-3 py-3 text-gray-500 hover:opacity-75'
						onClick={onClose}
					></button>
				</div>
				<Input
					placeholder='タグ名'
					setInputValue={setTagName}
					inputValue={tagName}
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
