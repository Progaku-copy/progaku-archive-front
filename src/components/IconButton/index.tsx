'use client';

import Text from '../Text';

const ICON_TYPE = {
	edit: 'edit',
	delete: 'delete',
} as const;

type Props = {
	label?: string;
	iconType: keyof typeof ICON_TYPE;
};

const IconButton = ({ label, iconType }: Props) => {
	const onclickHandler = () => {
		console.log('onclick');
	};

	return (
		<button onClick={onclickHandler}>
			<span className={`i-ic-${ICON_TYPE[iconType]}`}></span>
			{label && <Text>{label}</Text>}
		</button>
	);
};

export default IconButton;
