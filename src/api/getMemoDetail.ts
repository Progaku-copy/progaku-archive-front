export async function getMemoDetail(id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos/${id}`, {
		method: 'GET',
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getMemoList');
	}

	return response;
}
