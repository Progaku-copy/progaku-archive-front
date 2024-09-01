type FontSize = 'l' | 'm';

type Props = {
	children: string;
	fontSize?: FontSize;
};

const Title = ({ children, fontSize }: Props) => {
	let fontSizeClassName;
	switch (fontSize) {
		case 'l':
			fontSizeClassName = `text-2.5xl`;
			break
		case 'm':
			fontSizeClassName = `text-2xl`;
			break
	}

	return <div className={`${fontSizeClassName} text-black font-bold font-sans`}>{children}</div>;
};

export default Title;
