type Props = {
	children: string | number;
};

const Tag = ({ children }: Props) => {
	return (
		<span className='font-noto rounded-full bg-gray-200 px-2 py-1 text-black'>
			{children}
		</span>
	);
};

export default Tag;
