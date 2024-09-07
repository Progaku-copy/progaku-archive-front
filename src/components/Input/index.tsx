import { useState } from 'react';
import Text from '../Text';

type Props = {
	placeholder: string;
	label: string;
};

const Input = ({ placeholder, label }: Props) => {
	const [value, setValue] = useState('');

	return (
		<div>
			<Text>{label}</Text>
			<div>
				<input
					className='h-11 w-full rounded-lg border-2 border-light-gray px-2'
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></input>
			</div>
		</div>
	);
};

export default Input;
