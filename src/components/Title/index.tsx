const FONT_SIZES = {
	l: 'text-2.5xl',
	m: 'text-2xl',
} as const;

type Props = {
	children: string;
	fontSize?: keyof typeof FONT_SIZES;
};

const Title = ({ children, fontSize = 'm' }: Props) => {
	return (
		<div className={`font-noto ${FONT_SIZES[fontSize]} text-black`}>{children}</div>
	);
};

export default Title;
