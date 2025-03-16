'use client';

import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

import Text from '@/components/Text';

type Props = {
	utcDateTimeString: string;
	label?: string;
	fontSize?: 's' | 'm' | 'l';
};

const DateLabel = ({ utcDateTimeString, label, fontSize = 'm' }: Props) => {
	const date = parseISO(utcDateTimeString);
	const formattedDate = format(date, 'yyyy年MM月dd日 HH:mm', {
		locale: ja,
	});

	return (
		<div className='flex items-center'>
			{label && (
				<div className='mr-2'>
					<Text fontSize={fontSize}>{label}:</Text>
				</div>
			)}
			<Text fontSize={fontSize}>{formattedDate}</Text>
		</div>
	);
};

export default DateLabel;
