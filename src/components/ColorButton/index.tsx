'use client';
import Text from '@/components/Text';

type Props = {
	color: 'green' | 'red' | 'light-blue';
	label: string;
	handleClickButton: () => void;
	disabled?: boolean;
};

const ColorButton = ({ color, label, handleClickButton, disabled = false }: Props) => {
	const colorClass = {
		green: 'bg-green hover:bg-green-600',
		red: 'bg-red hover:bg-red-600',
		'light-blue': 'bg-light-blue hover:bg-blue-600',
	};

	return (
		<button
			className={`${colorClass[color]} rounded-lg px-6 py-2 text-white transition-colors ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
			onClick={handleClickButton}
			disabled={disabled}
		>
			<Text>{label}</Text>
		</button>
	);
};

export default ColorButton;
