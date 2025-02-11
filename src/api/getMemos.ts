import { cookies } from 'next/headers';

import { MemoResponse } from '@/Types';

// NOTE: メモ一覧を取得するAPI、クエリパラメータによって取得条件を変える
export async function getMemos(params: {
	[key: string]: string | undefined;
}): Promise<MemoResponse> {
	const cookieHeader = cookies().toString();

	// NOTE: undefinedのパラメータはクエリパラメータから除外する
	const validParams: Record<string, string> = {};
	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined) {
			validParams[key] = value;
		}
	});

	const queryString = new URLSearchParams(validParams).toString();

	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos?${queryString}`, {
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
