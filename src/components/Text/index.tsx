import useTextParser from '@/hooks/useTextParser';

export const FONT_SIZES = {
	l: 'text-xl',
	m: 'text-base',
	s: 'text-xs',
} as const;

type Props = {
	children: string | number;
	fontSize?: keyof typeof FONT_SIZES;
	color?: string;
	textParseFlg?: boolean;
};

const Text = ({
	children,
	fontSize = 'm',
	color = 'black',
	textParseFlg = false,
}: Props) => {
	const textColor = `text-${color}`;
	const parsedText = useTextParser(children as string);
	return (
		<span
			style={{ whiteSpace: 'pre-line' }}
			className={`font-noto ${FONT_SIZES[fontSize]} ${textColor}`}
			dangerouslySetInnerHTML={
				textParseFlg ? { __html: parsedText as string } : undefined
			}
		>
			{!textParseFlg ? children : null}
		</span>
	);
};

export default Text;
