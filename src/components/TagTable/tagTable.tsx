import Text from '../Text';
import IconButton from '../IconButton/index';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type Props = {
	data?: Tag[];
};

const TagTable = ({ data }: Props) => {
	const editOnClickIcon = (id: number): any => {
		console.log(`edit: ${id}`);
	};
	const deleteOnClickIcon = (id: number): any => {
		console.log(`delete: ${id}`);
	};

	return (
		<div className='flex justify-center'>
			<div className='w-[600px]'>
				<table className='min-w-full max-w-lg table-fixed border-collapse border'>
					<thead className='border-4 border-white bg-light-blue'>
						<tr>
							<th
								className={`w-[600px] border-2 border-b-2 border-l-2 border-r-0 border-t-2 border-white p-1 py-3`}
							>
								<Text color='text-white'>タグ名</Text>
							</th>
							<th
								className={`w-[25px] border-b-2 border-l-0 border-t-2 border-white py-3`}
							>
								{''}
							</th>
							<th
								className={`w-[25px] border-b-2 border-l-0 border-t-2 border-white py-3`}
							>
								{''}
							</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						{data && data?.length > 0 ? (
							data.map((row) => (
								<tr
									key={row.id}
									className={`bg-gray-200 py-8 text-center`}
								>
									<td className='border-2 border-b-2 border-l-2 border-r-0 border-t-2 border-white px-2 py-2'>
										<Text>{row.name}</Text>
									</td>
									<td className='border-b-2 border-l-0 border-t-2 border-white align-middle'>
										<div className='inline-block'>
											<IconButton
												iconType='edit'
												size='s'
												onClickHandler={() =>
													editOnClickIcon(row.id)
												}
											></IconButton>
										</div>
									</td>
									<td className='border-b-2 border-l-0 border-t-2 border-white align-middle'>
										<div className='inline-block'>
											<IconButton
												iconType='delete'
												size='s'
												onClickHandler={() =>
													deleteOnClickIcon(row.id)
												}
											></IconButton>
										</div>
									</td>
								</tr>
							))
						) : (
							<tr className='text-center`} bg-gray-200 py-8'>
								<td className='border-2 border-b-2 border-l-2 border-r-0 border-t-2 border-white px-2 py-2'>
									ー
								</td>
								<td className='border-b-2 border-l-0 border-t-2 border-white align-middle'>
									ー
								</td>
								<td className='border-b-2 border-l-0 border-t-2 border-white align-middle'></td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TagTable;
