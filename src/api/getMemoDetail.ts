import { Memo } from '@/Types';

export async function getMemoDetail(id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getMemoList');
	}

	const data: Memo = await response.json();

	return data;
}
