'use client';

import Text from '@/components/Text';

const ICON_SIZES = {
	s: 'w-6 h-6',
	m: 'w-8 h-8',
	l: 'w-10 h-10',
} as const;

const ICON_TYPES = {
	edit: 'i-ic-baseline-edit',
	delete: 'i-ic-baseline-delete',
} as const;

type Props = {
	label?: string;
	size: keyof typeof ICON_SIZES;
	iconType: keyof typeof ICON_TYPES;
	onClickHandler: () => void;
};

const IconButton = ({ label, size, iconType, onClickHandler }: Props) => {
	return (
		<button
			className='mx-1 flex flex-col items-center'
			onClick={onClickHandler}
		>
			<div className={`${ICON_SIZES[size]} ${ICON_TYPES[iconType]}`}></div>
			{label && <Text fontSize='s'>{label}</Text>}
		</button>
	);
};

export default IconButton;
