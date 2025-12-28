'use client';

import { ReactNode } from 'react';

import useTextParser from '@/hooks/useTextParser';

export const FONT_SIZES = {
	s: 'text-sm',
	m: 'text-base',
	l: 'text-lg',
} as const;

export const TEXT_COLORS = {
	black: 'text-black',
	white: 'text-white',
} as const;

type Props = {
	children: ReactNode;
	fontSize?: keyof typeof FONT_SIZES;
	color?: keyof typeof TEXT_COLORS;
	textParseFlg?: boolean;
	className?: string;
};

const Text = ({
	children,
	fontSize = 'm',
	color,
	textParseFlg = false,
	className = '',
}: Props) => {
	const parsedText = useTextParser(String(children));
	const colorClass = color ? TEXT_COLORS[color] : '';

	return (
		<div className={`${FONT_SIZES[fontSize]} ${colorClass} ${className}`}>
			{textParseFlg ? (
				<div dangerouslySetInnerHTML={{ __html: parsedText }} />
			) : (
				children
			)}
		</div>
	);
};

export default Text;
