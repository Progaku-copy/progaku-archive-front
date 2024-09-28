'use client';
import React, { useState } from 'react';

type Props = {
	placeholder: string;
};

const TextArea: React.FC<Props> = ({ placeholder }) => {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<textarea
				className='h-[382px] w-full resize-none rounded-lg border-2 border-light-gray p-2'
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default TextArea;
