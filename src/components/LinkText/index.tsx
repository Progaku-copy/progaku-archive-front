'use client';

import Link from 'next/link';

import Text from '@/components/Text';

type Props = {
	href: string;
	children: React.ReactNode;
};

const LinkText = ({ href, children }: Props) => {
	return (
		<Link
			href={href}
			className='text-white hover:underline'
		>
			<Text>{children}</Text>
		</Link>
	);
};

export default LinkText;
