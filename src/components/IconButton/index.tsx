'use client';

import Text from '../Text';

const ICON_SIZES = {
	m: 'h-8 w-8',
	s: 'h-4 w-4',
} as const;

const ICON_BUTTON_SIZES = {
	m: 'h-10 w-10',
	s: 'h-5 w-5',
} as const;

const ICON_TYPE = {
	edit: 'i-ic-edit',
	delete: 'i-ic-delete',
} as const;

type Props = {
	label?: string;
	size?: keyof typeof ICON_SIZES;
	iconType: keyof typeof ICON_TYPE;
	onClickHandler: (...args: unknown[]) => unknown;
};

const IconButton = ({ label, size = 's', iconType, onClickHandler }: Props) => {
	const buttonSizeClass = label ? 'w-20 h-15' : `${ICON_BUTTON_SIZES[size]} h-15`;
	const iconClass = `${ICON_TYPE[iconType]} ${ICON_SIZES[size]} ${label ? 'm-0.5 p-2' : ICON_BUTTON_SIZES[size]}`;

	return (
		<div className={buttonSizeClass}>
			<button
				onClick={onClickHandler}
				className={'flex items-center'}
			>
				<span className={iconClass}></span>
				{label && <Text fontSize='m'>{label}</Text>}
			</button>
		</div>
	);
};

export default IconButton;
