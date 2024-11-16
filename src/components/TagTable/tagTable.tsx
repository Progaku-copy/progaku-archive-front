import IconButton from '../IconButton/index';
import Text from '../Text';

import { Tag } from '@/Types';

type Props = {
	tags: Tag[];
	editOnClickIcon: (id: number) => void;
	deleteOnClickIcon: (id: number) => void;
};

const TagTable = ({ tags }: Props) => {
	const editOnClickIcon = (id: number) => {
		console.log(`edit: ${id}`);
	};
	const deleteOnClickIcon = (id: number) => {
		console.log(`delete: ${id}`);
	};

	return (
		<div className='flex justify-center'>
			<div className='space-y-2'>
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
										onClickHandler={() =>
											editOnClickIcon(tag.id ?? 0)
										}
									></IconButton>
								</div>
								<div className='m-2'>
									<IconButton
										iconType='delete'
										size='s'
										onClickHandler={() =>
											deleteOnClickIcon(tag.id ?? 0)
										}
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
