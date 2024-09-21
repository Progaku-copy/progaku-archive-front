import Text from '../Text';
import IconButton from '../IconButton/index';

type Tag = {
	id: number;
	name: string;
	describe: string;
	priority: number;
};

type Props = {
	data?: Tag[];
};

const TagTable = ({ data }: Props) => {
	if (data === undefined || data.length === 0) {
		return <Text>データがありません。</Text>;
	}

	const editOnClickIcon = (id: number): any => {
		console.log(`edit: ${id}`);
	};
	const deleteOnClickIcon = (id: number): any => {
		console.log(`delete: ${id}`);
	};

	const truncateString = (maxLength: number, str?: string): string => {
		if (str === undefined || str.length < 0) {
			return '';
		} else if (str.length <= maxLength) {
			return str;
		} else {
			return str.slice(0, maxLength - 1) + '...';
		}
	};

	return (
		<div className='flex justify-center'>
			<div className='w-4/5'>
				<table className='min-w-full max-w-lg table-fixed border-collapse border'>
					<thead className='bg-light-blue border-4 border-white'>
						<tr>
							<th className={`max-w-xs border-2 border-white p-1 py-3`}>
								<Text color='white'>タグ名</Text>
							</th>
							<th
								className={`border-b-2 border-l-2 border-t-2 border-white py-3`}
							>
								<Text color='white'>説明</Text>
							</th>
							<th
								className={`border-b-2 border-l-0 border-t-2 border-white py-3`}
							>
								{''}
							</th>
							<th
								className={`border-b-2 border-l-0 border-t-2 border-white py-3`}
							>
								{''}
							</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						{data.map((row) => (
							<tr
								key={row.id}
								className={`bg-gray-200 py-8 text-center`}
							>
								<td className='max-w-xs border-2 border-white px-2 py-2'>
									<Text>{truncateString(10, row.name)}</Text>
								</td>
								<td className='border-b-2 border-l-2 border-t-2 border-white px-2 py-2'>
									<Text>{truncateString(20, row.describe)}</Text>
								</td>
								<td className='border-b-2 border-l-0 border-t-2 border-white'>
									<IconButton
										iconType='edit'
										iconJustified='top'
										size='s'
										onClickHandler={() => editOnClickIcon(row.id)}
									></IconButton>
								</td>
								<td className='border-b-2 border-l-0 border-t-2 border-white'>
									<IconButton
										iconType='delete'
										iconJustified='top'
										size='s'
										onClickHandler={() => deleteOnClickIcon(row.id)}
									></IconButton>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TagTable;
