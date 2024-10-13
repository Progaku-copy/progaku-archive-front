import { getTags } from '@/api/getTags';
import { MemoCreate } from '@/features/MemoCreate';

export default async function MemoCreatePage() {
	const tags = await getTags();
	return <MemoCreate tags={tags} />;
}
