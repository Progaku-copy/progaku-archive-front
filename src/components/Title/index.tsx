'use client';

import { ReactNode } from 'react';

import useTextParser from '@/hooks/useTextParser';

export const FONT_SIZES = {
	s: 'text-lg',
	m: 'text-xl',
	l: 'text-2xl',
} as const;

type Props = {
	children: ReactNode;
	fontSize?: keyof typeof FONT_SIZES;
	isBold?: boolean;
	textParseFlg?: boolean;
	className?: string;
};

const Title = ({
	children,
	fontSize = 'm',
	isBold = false,
	textParseFlg = false,
	className = '',
}: Props) => {
	const parsedText = useTextParser(String(children));

	return (
		<div
			className={`${FONT_SIZES[fontSize]} ${isBold ? 'font-bold' : ''} ${className}`}
		>
			{textParseFlg ? (
				<div dangerouslySetInnerHTML={{ __html: parsedText }} />
			) : (
				children
			)}
		</div>
	);
};

export default Title;
