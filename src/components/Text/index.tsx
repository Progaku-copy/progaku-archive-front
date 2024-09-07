const FONT_SIZES = {
	l: 'text-xl',
	m: 'text-base',
	s: 'text-xs',
} as const;

type Props = {
	children: string;
	fontSize?: keyof typeof FONT_SIZES;
};

const Text = ({ children, fontSize = 'm' }: Props) => {
	return (
		<div className={`font-noto ${FONT_SIZES[fontSize]} text-black`}>{children}</div>
	);
};

export default Text;
