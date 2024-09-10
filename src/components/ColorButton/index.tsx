import Text from '../Text';

const BACKGROUD_COLORS = {
	green: 'bg-green',
	blue: 'bg-blue',
};

type Props = {
	color: keyof typeof BACKGROUD_COLORS;
	label: string;
};

const ColorButton = ({ color, label }: Props) => {
	// NOTE: こうするぐらいなら別コンポーネントに分けたほうが良さそうだが、ボタンの数が少ないので一旦これで対応
	const paddingInline = label === '送信' ? 'px-9' : 'px-3.5';

	return (
		<button
			className={`${BACKGROUD_COLORS[color]} rounded ${paddingInline} py-3 text-white transition hover:opacity-75`}
			onClick={() => console.log('click button')}
		>
			<Text color='white'>{label}</Text>
		</button>
	);
};

export default ColorButton;
