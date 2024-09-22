'use client';

import Text from '../Text';

type Props = {
	placeholder: string;
	label?: string;
	setInputValue: (value: string) => void;
	inputValue: string;
};

const Input = ({ placeholder, label = '', setInputValue, inputValue }: Props) => {
	return (
		<div>
			{!!label ?? <Text>{label}</Text>}
			<div>
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
