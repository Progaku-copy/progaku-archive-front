export async function updateMemo(
	title: string,
	content: string,
	poster: string,
	id: number,
) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos/${id}`, {
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

	// TODO: 異常時に返ってくるメッセージをフォームに表示

	return response;
}
