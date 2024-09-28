import Text from '../Text';
import { useDateTime } from '../../hooks/useDateTime';

const FONT_SIZES = {
	l: 'text-xl',
	m: 'text-base',
	s: 'text-xs',
} as const;

type Props = {
	utcDateTimeString: string;
	label?: string;
	containSecond?: boolean;
	fontSize?: keyof typeof FONT_SIZES;
	color?: string;
};

const DateLabel = ({
	utcDateTimeString,
	label,
	containSecond,
	fontSize = 'm',
	color = 'black',
}: Props) => {

	const utcDate = new Date(utcDateTimeString);
	if (isNaN(utcDate.getTime())) {
		return;
	}

	return (
		<div>
			{label && (
				<Text
					fontSize={fontSize}
					color={color}
				>
					{label + '：'}
				</Text>
			)}
			<Text
				fontSize={fontSize}
				color={color}
			>
				{useDateTime(utcDateTimeString, containSecond)!}
			</Text>
		</div>
	);
};

export default DateLabel;
