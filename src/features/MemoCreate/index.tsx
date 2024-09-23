import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

export function MemoCreate() {
	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Input placeholder='タイトル' />
			<Input placeholder='タグ' />
			<TextArea placeholder='本文' />
			<div className='flex justify-end'>
				<ColorButton
					color='green'
					label='送信'
				></ColorButton>
			</div>
		</div>
	);
}
