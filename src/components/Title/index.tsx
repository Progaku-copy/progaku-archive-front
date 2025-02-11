import useTextParser from '@/hooks/useTextParser';

const FONT_SIZES = {
	l: 'text-2.5xl',
	m: 'text-2xl',
} as const;

type Props = {
	children: string;
	fontSize?: keyof typeof FONT_SIZES;
	isBold?: boolean;
	textParseFlg?: boolean;
};

const Title = ({
	children,
	fontSize = 'm',
	isBold = false,
	textParseFlg = false,
}: Props) => {
	const fontBold = isBold ? 'font-bold' : '';
	const parsedText = useTextParser(children as string);
	return (
		<span
			className={`font-noto ${FONT_SIZES[fontSize]} text-black ${fontBold}`}
			dangerouslySetInnerHTML={
				textParseFlg ? { __html: parsedText as string } : undefined
			}
		>
			{!textParseFlg ? children : null}
		</span>
	);
};

export default Title;
