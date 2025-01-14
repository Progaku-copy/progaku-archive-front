'use client';

import Text from '../Text';

type Props = {
	placeholder: string;
	label?: string;
	labelPosition?: 'left' | 'top';
	setInputValue: (value: string) => void;
	inputValue: string;
};

const Input = ({
	placeholder,
	label = '',
	labelPosition = 'top',
	setInputValue,
	inputValue,
}: Props) => {
	return (
		<div className={labelPosition === 'left' ? 'flex items-center' : ''}>
			<div className={labelPosition === 'left' ? 'w-28' : ''}>
				{!!label && <Text>{label}</Text>}
			</div>
			<div className={labelPosition === 'left' ? 'w-full' : ''}>
				<input
					className='h-11 w-full rounded-lg border-2 border-light-gray px-2'
					placeholder={placeholder}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				></input>
			</div>
		</div>
	);
};

export default Input;
