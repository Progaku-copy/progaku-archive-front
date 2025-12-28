'use client';

import { ReactNode } from 'react';

import Text from '@/components/Text';

type Props = {
	children: ReactNode;
};

const Tag = ({ children }: Props) => {
	return (
		<div className='rounded-full bg-light-blue/90 px-3 py-1 text-white shadow-sm transition-colors hover:bg-light-blue/100'>
			<Text fontSize='s'>{children}</Text>
		</div>
	);
};

export default Tag;
