import React from 'react';

type Props = {
    children: React.ReactNode;
    href: string;
};

const LinkText: React.FC<Props> = ({ children, href }) => {
    return (
        <a
            href={href}
            className="font-noto-sans text-[24px] text-white !text-white hover:opacity-70 transition-opacity duration-300"
            style={{ color: 'white' }}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            {children}
        </a>
    );
};

export default LinkText;