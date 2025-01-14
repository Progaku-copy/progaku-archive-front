import { cookies } from 'next/headers';

import { Tag } from '@/Types';

export async function getTags() {
	const cookieHeader = cookies().toString();
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Cookie: cookieHeader,
		},
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getTags');
	}
	const data: { tags: Tag[] } = await response.json();
	return data.tags;
}
