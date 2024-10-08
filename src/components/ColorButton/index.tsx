'use client';
import Text from '../Text';

const BACKGROUND_COLORS = {
	green: 'bg-green',
	blue: 'bg-blue',
};

type Props = {
	color: keyof typeof BACKGROUND_COLORS;
	label: string;
	handleClickButton: () => void;
};

const ColorButton = ({ color, label, handleClickButton }: Props) => {
	return (
		<button
			className={`${BACKGROUND_COLORS[color]} w-28 rounded py-3 transition hover:opacity-75`}
			onClick={handleClickButton}
		>
			<Text color='white'>{label}</Text>
		</button>
	);
};

export default ColorButton;
