'use client';

import { ReactNode } from 'react';

import useTextParser from '@/hooks/useTextParser';

export const FONT_SIZES = {
	s: 'text-sm',
	m: 'text-base',
	l: 'text-lg',
} as const;

type Props = {
	children: ReactNode;
	fontSize?: keyof typeof FONT_SIZES;
	textParseFlg?: boolean;
	className?: string;
};

const Text = ({
	children,
	fontSize = 'm',
	textParseFlg = false,
	className = '',
}: Props) => {
	const parsedText = useTextParser(String(children));

	return (
		<div className={`${FONT_SIZES[fontSize]} ${className}`}>
			{textParseFlg ? (
				<div dangerouslySetInnerHTML={{ __html: parsedText }} />
			) : (
				children
			)}
		</div>
	);
};

export default Text;
