'use client';

import Text from '../Text';

type Props = {
	label?: string;
	iconType: 'edit' | 'delete';
	onClickHandler: (...args: unknown[]) => unknown;
};

const IconButton = ({ label, iconType, onClickHandler }: Props) => {
	return (
		<button
			onClick={onClickHandler}
			className='flex h-full items-center'
		>
			<span className={`i-ic-${iconType} m-0.5 h-8 w-8 p-2`}></span>
			{label && <Text>{label}</Text>}
		</button>
	);
};

export default IconButton;
