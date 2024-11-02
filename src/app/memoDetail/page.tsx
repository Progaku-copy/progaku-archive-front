import { useSearchParams } from 'next/navigation';

import { getMemoDetail } from '@/api/getMemoDetail';
import { MemoDetail } from '@/features/MemoDetail';

export default async function MemoDetailPage() {
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const memo = await getMemoDetail(Number(id));
	return <MemoDetail memo={memo} />;
}
