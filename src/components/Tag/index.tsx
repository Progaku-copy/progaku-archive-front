import Text from '../Text';

type Props = {
	children: string | number;
};

const Tag = ({ children }: Props) => {
	return (
		<span className='rounded-full bg-gray-200 px-2.5 py-1 text-xs'>
			<Text fontSize='s'>{children}</Text>
		</span>
	);
};

export default Tag;
