import Text from '../Text';

type Column<T> = {
	header?: string;
	accessor: (row: T) => string | number | JSX.Element;
	isPrimaryKey: boolean;
	isHidden: boolean;
};

type Props<T> = {
	columns: Column<T>[];
	data: T[];
};

const Table = <T,>({ columns, data }: Props<T>) => {
	return (
		<div className='flex justify-center'>
			<div className='w-4/5'>
				<table className='min-w-full table-fixed border-collapse border'>
					<thead className='bg-blue'>
						<tr>
							{columns.map((column, index) => (
								<th
									key={index}
									className='text-white border border-white bg-blue'
									hidden={column.isHidden}
								>
									{column.header && (
										<Text color='white'>{column.header}</Text>
									)}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='border-spacing-2 border-white'>
						{data.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								className='border border-white'
							>
								{columns.map((column, colIndex) => (
									<td
										key={colIndex}
										className='border border-white bg-gray-200 text-center'
										hidden={column.isHidden}
									>
										{(() => {
											const cellValue = column.accessor(row);
											if (
												typeof cellValue === 'string' ||
												typeof cellValue === 'number'
											) {
												return <Text>{cellValue}</Text>;
											} else {
												return cellValue;
											}
										})()}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
