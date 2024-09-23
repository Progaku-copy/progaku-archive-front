export async function updateTag(tagName: string, id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			name: tagName,
		}),
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to login');
	}

	return response;
}
