import Text from '../Text';



/**
 * Column<T>はテーブルの各カラムを定義します。
 *
 * header?: ヘッダーに表示する文字列。
 *   - undefinedの場合：空欄を表示して左側のボーダーラインを削除します。その他のボーダーラインは表示。
 *   - 空文字の場合：空欄を表示して左側ボーダーラインを表示します。その他のボーダーラインは表示。
 *
 * accessor: テーブルボディに表示する値を取得する関数。
 *   - 文字列または数値を渡すとテキストコンポーネントでラップします。
 *   - コンポーネントが渡された場合は、そのコンポーネントをそのまま表示します。
 *
 * isPrimaryKey: 当該カラムが一意に定まる値かどうかを保持します。
 *   - 一意に定まるならtrue。
 *   - それ以外ならfalse。
 *
 * sizeRatio: カラムのサイズを決定します。
 *   - 入力値/入力値の和 となるようにサイズの割合を保持します（小数可）。
 *   - 当該カラムを非表示にする場合は0を入れます。
 */
type Column<T> = {
	header?: string;
	accessor: (row: T) => string | number | JSX.Element | undefined;
	isPrimaryKey: boolean;
	sizeRatio: number;
};

type Props<T> = {
	columns: Column<T>[];
	data: T[];
};

/**
 * テーブルコンポーネント
 * @param columns, Column<T>
 * @param data, TableBodyに格納するデータ
 * @returns Table Component
 */
const Table = <T,>({ columns, data }: Props<T>) => {
	const primaryKeyColumns = columns.filter((column) => column.isPrimaryKey);
	const totalSize = columns.reduce((sum, column) => sum + column.sizeRatio, 0);
	return (
		<div className='flex justify-center'>
			<div className='w-4/5'>
				<table className='min-w-full table-fixed border-collapse border'>
					<thead className='bg-light-blue border-4 border-white'>
						<tr>
							{columns.map((column, index) => (
								<th
									key={index}
									className={`border-b-2 border-t-2 border-white px-4 py-3 ${column.header !== undefined ? 'border-l-2' : 'border-l-0'}`}
									hidden={column.sizeRatio === 0}
									style={{
										width: `${(column.sizeRatio / totalSize) * 100}%`,
									}}
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
								key={
									primaryKeyColumns.length > 0
										? primaryKeyColumns
												.map((column) => column.accessor(row))
												.join('-')
										: rowIndex
								}
								className='border-4 border-white'
							>
								{columns.map((column, colIndex) => (
									<td
										key={colIndex}
										className={`border-b-2 border-t-2 border-white bg-gray-200 px-4 py-2 text-center ${column.header !== undefined ? 'border-l-2' : 'border-l-0'}`}
										style={{
											width: `${(column.sizeRatio / totalSize) * 100}%`,
										}}
										hidden={column.sizeRatio === 0}
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
