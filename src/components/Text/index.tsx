type Props = {
	children: string;
};

const Text = ({ children }: Props) => {
	return <div className='aspect-square bg-sky-500'>{children}</div>;
};

export default Text;
