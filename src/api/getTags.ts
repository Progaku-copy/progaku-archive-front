import { Tag } from '@/Types';

export async function getTags() {
	// TODO: メモIDをリクエストする
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags`, {
		method: 'GET',
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getTags');
	}
	const data: Tag[] = await response.json();
	return data;
}
