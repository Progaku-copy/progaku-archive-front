const FONT_SIZES = {
	l: 'text-2.5xl',
	m: 'text-2xl',
} as const;

type Props = {
	children: string;
	fontSize?: keyof typeof FONT_SIZES;
	isBold?: boolean;
};

const Title = ({ children, fontSize = 'm', isBold = false }: Props) => {
	const fontBold = isBold ? 'font-bold' : '';
	return (
		<span className={`font-noto ${FONT_SIZES[fontSize]} text-black ${fontBold}`}>
			{children}
		</span>
	);
};

export default Title;
