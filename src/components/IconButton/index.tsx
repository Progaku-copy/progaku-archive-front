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

const ICON_JUSTIFIED = {
	top: 'items-start',
	center: 'items-center',
} as const;

type Props = {
	label?: string;
	size?: keyof typeof ICON_SIZES;
	iconJustified?: keyof typeof ICON_JUSTIFIED;
	iconType: 'edit' | 'delete';
	onClickHandler: (...args: unknown[]) => unknown;
};

const IconButton = ({
	label = undefined,
	size = 's',
	iconJustified = 'center',
	iconType,
	onClickHandler,
}: Props) => {
	return (
		<div className={`h-15 ${label === undefined ? ICON_BUTTON_SIZES[size] : 'w-20'}`}>
			<button
				onClick={onClickHandler}
				className={`flex ${ICON_JUSTIFIED[iconJustified]}`}
			>
				<span
					className={`i-ic-${iconType} ${label === undefined ? ICON_BUTTON_SIZES[size] : 'm-0.5 p-2'} ${ICON_SIZES[size]}`}
				></span>
				{label && <Text fontSize='m'>{label}</Text>}
			</button>
		</div>
	);
};

export default IconButton;
