import React from 'react';

import Link from 'next/link';

type Props = {
	children: React.ReactNode;
	href: string;
};

const LinkText = ({ children, href }: Props) => {
	return (
		<Link
			href={href}
			className='font-noto-sans text-[24px] text-white transition-opacity duration-300 hover:opacity-70'
			style={{ color: 'white' }}
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			{children}
		</Link>
	);
};

export default LinkText;
