'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Text from '../Text';

type Props = {
	placeholder?: string;
	label?: string;
	row?: number;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

const TextArea = ({ placeholder, label = '', row = 10, value, setValue }: Props) => {
	return (
		<div>
			{label ?? <Text>{label}</Text>}
			<div>
				<textarea
					className='w-full rounded-lg border-2 border-light-gray px-2'
					rows={row}
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></textarea>
			</div>
		</div>
	);
};

export default TextArea;
