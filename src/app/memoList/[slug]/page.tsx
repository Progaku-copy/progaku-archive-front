import { getMemoDetail } from '@/api/getMemoDetail';
import { MemoDetail } from '@/features/MemoDetail';

export default async function MemoDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	const memo = await getMemoDetail(Number(slug));
	return <MemoDetail memo={memo} />;
}
