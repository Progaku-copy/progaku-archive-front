import { Memo } from '@/Types';
import { cookies } from 'next/headers';

export async function getMemoDetail(id: number) {
	const cookieHeader = cookies().toString();
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Cookie: cookieHeader,
		},
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getMemoList');
	}
	const data = await response.json();
	const memo: Memo = data.memo; // `data.memo` の部分だけを取り出す
	return memo;
}
