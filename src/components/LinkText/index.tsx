import Link from 'next/link';
import React from 'react';

type Props = {
	children: React.ReactNode;
	href: string;
};

const LinkText: React.FC<Props> = ({ children, href }) => {
	return (
		<Link
			href={href}
			className='font-noto-sans text-[24px] !text-white text-white transition-opacity duration-300 hover:opacity-70'
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
