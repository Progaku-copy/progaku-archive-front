import Text from '@/components/Text';
import IconButton from '@/components/IconButton';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type Props = {
	tags?: Tag[];
};

const TagTable = ({ tags }: Props) => {
	const editOnClickIcon = (id: number): any => {
		console.log(`edit: ${id}`);
	};
	const deleteOnClickIcon = (id: number): any => {
		console.log(`delete: ${id}`);
	};

	return (
		<div className='flex justify-center'>
			<div className='w-4/5 space-y-2'>
				{tags &&
					tags?.length > 0 &&
					tags.map((tag) => (
						<div
							key={tag.id}
							className='flex justify-between bg-gray-200 px-5'
						>
							<div className='m-2 flex flex-wrap p-1'>
								<Text>{tag.name}</Text>
							</div>
							<div className='flex justify-end'>
								<div className='m-2'>
									<IconButton
										iconType='edit'
										size='s'
										onClickHandler={() => editOnClickIcon(tag.id)}
									></IconButton>
								</div>
								<div className='m-2'>
									<IconButton
										iconType='delete'
										size='s'
										onClickHandler={() => deleteOnClickIcon(tag.id)}
									></IconButton>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default TagTable;
