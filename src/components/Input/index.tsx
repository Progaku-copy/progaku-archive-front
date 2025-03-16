'use client';

import Text from '../Text';

type Props = {
	placeholder: string;
	label?: string;
	labelPosition?: 'left' | 'top';
	setInputValue: (value: string) => void;
	inputValue: string;
	type?: 'text' | 'password';
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	name?: string;
	autoComplete?: string;
	className?: string;
};

const Input = ({
	placeholder,
	label = '',
	labelPosition = 'top',
	setInputValue,
	inputValue,
	type = 'text',
	onKeyDown,
	name,
	autoComplete,
	className = '',
}: Props) => {
	return (
		<div
			className={`${labelPosition === 'left' ? 'flex items-center' : ''} ${className}`}
		>
			<div className={labelPosition === 'left' ? 'w-32' : ''}>
				{!!label && <Text>{label}</Text>}
			</div>
			<div className={labelPosition === 'left' ? 'w-full' : ''}>
				<input
					className='h-11 w-full rounded-lg border border-gray-200 px-3 focus:border-light-blue focus:outline-none'
					placeholder={placeholder}
					value={inputValue}
					type={type}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={onKeyDown}
					name={name}
					autoComplete={autoComplete}
				></input>
			</div>
		</div>
	);
};

export default Input;
