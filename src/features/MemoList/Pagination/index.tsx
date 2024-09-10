'use client';

import Text from '@/components/Text';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
	totalPageNumber: number;
};

const Pagination = ({ totalPageNumber }: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const pageNumber = searchParams.get('page') || '1';

	const currentPage = Number(pageNumber);

	const createQueryString = (name: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set(name, value);
		return params.toString();
	};

	const handleClickFirstPageButton = () => {
		if (pageNumber === '1') return;
		router.push(pathname + '?' + createQueryString('page', '1'));
	};

	const handleClickPreviousPageButton = () => {
		if (pageNumber === '1') return;
		router.push(
			pathname +
				'?' +
				createQueryString('page', (Number(pageNumber) - 1).toString()),
		);
	};

	const handleClickNextPageButton = () => {
		if (pageNumber === totalPageNumber.toString()) return;
		router.push(
			pathname +
				'?' +
				createQueryString('page', (Number(pageNumber) + 1).toString()),
		);
	};

	const handleClickLastPageButton = () => {
		if (pageNumber === totalPageNumber.toString()) return;
		router.push(
			pathname + '?' + createQueryString('page', totalPageNumber.toString()),
		);
	};

	const handleClickPageNumber = (page: number) => {
		router.push(pathname + '?' + createQueryString('page', page.toString()));
	};

	const generatePagination = () => {
		if (totalPageNumber <= 10) {
			return Array.from({ length: totalPageNumber }, (_, i) => i + 1);
		}
		if (currentPage <= 4) {
			return [1, 2, 3, 4, 5, 6, '...', totalPageNumber];
		}
		if (currentPage >= totalPageNumber - 4) {
			return [
				1,
				'...',
				totalPageNumber - 5,
				totalPageNumber - 4,
				totalPageNumber - 3,
				totalPageNumber - 2,
				totalPageNumber - 1,
				totalPageNumber,
			];
		}
		return [
			1,
			'...',
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
			'...',
			totalPageNumber,
		];
	};

	return (
		<div className='flex items-center'>
			<button
				onClick={handleClickFirstPageButton}
				className='transitions flex h-10 w-10 items-center justify-center hover:opacity-75'
			>
				<span className='i-ic-sharp-skip-previous'></span>
			</button>
			<button
				onClick={handleClickPreviousPageButton}
				className='transitions flex h-10 w-10 items-center justify-center hover:opacity-75'
			>
				<span className='i-ic-baseline-chevron-left'></span>
			</button>
			{generatePagination().map((page, index) =>
				typeof page === 'string' ? (
					<span key={index}>{page}</span>
				) : (
					<button
						key={index}
						className={
							currentPage === page
								? 'h-10 w-10 rounded-full bg-[#2196F3]'
								: 'h-10 w-10 rounded-full transition hover:opacity-75'
						}
						onClick={() => handleClickPageNumber(page)}
					>
						<Text color={currentPage === page ? 'white' : 'black'}>
							{page}
						</Text>
					</button>
				),
			)}
			<button
				onClick={handleClickNextPageButton}
				className='transitions flex h-10 w-10 items-center justify-center hover:opacity-75'
			>
				<span className='i-ic-baseline-chevron-right'></span>
			</button>
			<button
				onClick={handleClickLastPageButton}
				className='transitions flex h-10 w-10 items-center justify-center hover:opacity-75'
			>
				<span className='i-ic-baseline-skip-next'></span>
			</button>
		</div>
	);
};

export default Pagination;
