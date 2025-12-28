import ColorButton from '../ColorButton';
import Text from '../Text';

type Props = {
	children: string;
	handleClickButton: () => void;
	alertType: 'error' | 'warning';
};

const Alert = ({ children, handleClickButton, alertType }: Props) => {
	const getIcon = () => {
		switch (alertType) {
			case 'error':
				return 'i-ic-outline-error-outline text-red-500';
			case 'warning':
				return 'i-ic-round-warning-amber text-amber-500';
			default:
				return '';
		}
	};

	return (
		<div className='fixed inset-0 z-10 flex items-center justify-center'>
			<div className='absolute inset-0 bg-gray-700 opacity-50'></div>
			<div className='relative z-10 flex w-auto min-w-[400px] flex-col items-center justify-center gap-5 rounded-lg bg-white px-10 py-5'>
				<div>
					<span className={`${getIcon()} size-32`} />
				</div>
				<div className='flex flex-col items-center'>
					{children.split('\n').map((line, index) => (
						<Text key={index}>{line}</Text>
					))}
				</div>
				<div>
					<ColorButton
						color='light-blue'
						label='OK'
						handleClickButton={handleClickButton}
					></ColorButton>
				</div>
			</div>
		</div>
	);
};

export default Alert;
