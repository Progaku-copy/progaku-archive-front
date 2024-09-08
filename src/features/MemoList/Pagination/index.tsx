import Text from '@/components/Text';

type Props = {
	children: string;
};

const Pagination = ({ children }: Props) => {
	return (
		<div>
			<button className='transitions hover:opacity-75'>
				<span className='i-ic-sharp-skip-previous'></span>
			</button>
			<button className='transitions hover:opacity-75'>
				<span className='i-ic-baseline-chevron-left'></span>
			</button>
			<button>
				<Text>1</Text>
			</button>
			<button>
				<Text>2</Text>
			</button>
			<button>
				<Text>3</Text>
			</button>
			<button>
				<Text>4</Text>
			</button>
			<button>
				<Text>5</Text>
			</button>
			<button className='transitions hover:opacity-75'>
				<span className='i-ic-baseline-chevron-right'></span>
			</button>
			<button className='transitions hover:opacity-75'>
				<span className='i-ic-baseline-skip-next'></span>
			</button>
		</div>
	);
};

export default Pagination;
