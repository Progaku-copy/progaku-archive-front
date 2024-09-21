import Text from '../Text';

/**
 * Column<T>はテーブルの各カラムを定義します。
 *
 * header?: ヘッダーに表示する文字列。
 *   - undefinedの場合：空欄を表示してボーダーラインを削除します。
 *   - 空文字の場合：空欄を表示してボーダーラインを表示します。
 *
 * accessor: テーブルボディに表示する値を取得する関数。
 *   - 文字列または数値を渡すとテキストコンポーネントでラップします。
 *   - コンポーネントが渡された場合は、そのコンポーネントをそのまま表示します。
 *
 * isPrimaryKey: 当該カラムが一意に定まる値かどうかを保持します。
 *   - 一意に定まるならtrue。
 *   - それ以外ならfalse。
 *
 * sizePercentMaxTen: カラムのサイズを決定します。
 *   - 合計値が10となるように数値を入れます（小数可）。
 *   - 当該カラムを非表示にする場合は0を入れます。
 */
type Column<T> = {
	header?: string;
	accessor: (row: T) => string | number | JSX.Element | undefined;
	isPrimaryKey: boolean;
	sizePercentMaxTen: number;
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
					<thead className='bg-light-blue border-4 border-white'>
						<tr>
							{columns.map((column, index) => (
								<th
									key={index}
									className={`text-white px-4 py-3 ${column.header !== undefined ? 'border border-white' : ''}`}
									hidden={column.sizePercentMaxTen === 0}
								>
									{column.header ? (
										<Text color='white'>{column.header}</Text>
									) : null}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								className='border-4 border-white'
							>
								{columns.map((column, colIndex) => (
									<td
										key={colIndex}
										className={`bg-gray-200 text-center ${column.header !== undefined ? 'border border-white' : ''}`}
										hidden={column.sizePercentMaxTen === 0}
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
