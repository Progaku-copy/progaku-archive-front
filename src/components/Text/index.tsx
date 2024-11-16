export const FONT_SIZES = {
	l: 'text-xl',
	m: 'text-base',
	s: 'text-xs',
} as const;

type Props = {
	children: string | number;
	fontSize?: keyof typeof FONT_SIZES;
	color?: string;
};

const Text = ({ children, fontSize = 'm', color = 'black' }: Props) => {
	const textColor = `text-${color}`;
	return (
		<span className={`font-noto ${FONT_SIZES[fontSize]} ${textColor}`}>
			{children}
		</span>
	);
};

export default Text;
