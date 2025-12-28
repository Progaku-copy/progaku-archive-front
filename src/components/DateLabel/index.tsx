import { useDateTime } from '../../hooks/useDateTime';
import Text, { FONT_SIZES } from '../Text';

type Props = {
	utcDateTimeString?: string;
	label?: string;
	fontSize?: keyof typeof FONT_SIZES;
	color?: string;
};

const DateLabel = ({
	utcDateTimeString,
	label,
	fontSize = 'm',
	color = 'black',
}: Props) => {
	const { dateWithSecond } = useDateTime(utcDateTimeString);

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
				{dateWithSecond}
			</Text>
		</div>
	);
};

export default DateLabel;
