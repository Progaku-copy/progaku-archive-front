export async function updateMemo(
	title: string,
	content: string,
	poster: string,
	id: number,
) {
	const response = await fetch(`${process.env.API}/memos/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			title,
			content,
			poster,
		}),
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to login');
	}

	return response;
}
