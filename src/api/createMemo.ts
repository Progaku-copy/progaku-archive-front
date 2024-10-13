export async function createMemo(
	title: string,
	content: string,
	poster: string,
	tagIds: number[],
) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/memos`, {
		method: 'POST',
		body: JSON.stringify({
			title,
			content,
			poster,
		}),
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート表示
	}

	return response;
}
