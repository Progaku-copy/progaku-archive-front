import { cookies } from 'next/headers';

import { Memo } from '@/Types';

export async function getMemos() {
	const cookieHeader = cookies().toString();
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Cookie: cookieHeader,
		},
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getMemos');
	}

	if (!response.ok) {
		if (response.status === 401) {
			console.log('401');
			return [];
		}
		throw new Error('Failed to getMemos');
	}

	const data: { memos: Memo[] } = await response.json();
	return data.memos;
}
