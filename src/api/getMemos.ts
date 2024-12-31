import { Memo } from '@/Types';
import { cookies } from 'next/headers';

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

	const data = await response.json();
	console.log(data);
	const memos: Memo[] = data.memos;
	return memos;
}
