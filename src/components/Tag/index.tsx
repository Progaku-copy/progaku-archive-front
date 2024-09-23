import Text from '../Text';

type Props = {
	children: string | number;
};

const Tag = ({ children }: Props) => {
	return (
		<span className='mb-1 ml-1 mr-1 rounded-full bg-gray-200 px-2.5 py-1 text-xs'>
			<Text fontSize='s'>{children}</Text>
		</span>
	);
};

export default Tag;
