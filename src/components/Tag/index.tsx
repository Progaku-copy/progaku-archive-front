type Props = {
	children: string | number;
};

const Tag = ({ children }: Props) => {
	return (
		<span className='font-noto py-0.3 rounded-full bg-gray-200 px-2.5 text-sm text-black'>
			{children}
		</span>
	);
};

export default Tag;
