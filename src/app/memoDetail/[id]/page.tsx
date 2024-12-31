import { getMemoDetail } from '@/api/getMemoDetail';
import { MemoDetail } from '@/features/MemoDetail';
type Props = {
	params: {
		id: string; // URLパラメータを表す
	};
};
export default async function MemoDetailPage({ params }: Props) {
	const memo = await getMemoDetail(Number(params.id));
	return <MemoDetail memo={memo} />;
}
