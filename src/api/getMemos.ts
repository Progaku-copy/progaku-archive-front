import { cookies } from 'next/headers';

import { MemoResponse } from '@/Types';

export async function getMemos(queryParams?: string): Promise<MemoResponse> {
	const queryString = queryParams ? `?${queryParams}` : '';
	const cookieHeader = cookies().toString();

	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos${queryString}`, {
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

			return { memos: [], total_page: 0 };
		}
		throw new Error('Failed to getMemos');
	}

	const data: MemoResponse = await response.json();
	return data;
}
