'use client';

import { format, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

import Text from '@/components/Text';

const FALLBACK_TEXT = '日時不明';

type Props = {
	utcDateTimeString?: string;
	label?: string;
	fontSize?: 's' | 'm' | 'l';
};

const DateLabel = ({ utcDateTimeString, label, fontSize = 'm' }: Props) => {
	let formattedDate = FALLBACK_TEXT;

	if (utcDateTimeString) {
		try {
			const date = parseISO(utcDateTimeString);
			if (!Number.isNaN(date.getTime())) {
				formattedDate = format(date, 'yyyy年MM月dd日 HH:mm', {
					locale: ja,
				});
			}
		} catch {
			console.error('Invalid date format:', utcDateTimeString);
		}
	}

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
