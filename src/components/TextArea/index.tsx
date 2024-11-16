'use client';
import React from 'react';

type Props = {
	placeholder: string;
	inputValue: string;
	setInputValue: (value: string) => void;
};

const TextArea = ({ placeholder, inputValue, setInputValue }: Props) => {
	const handleChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<div>
			<textarea
				className='h-[382px] w-full resize-none rounded-lg border-2 border-light-gray p-2'
				placeholder={placeholder}
				value={inputValue}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};

export default TextArea;
