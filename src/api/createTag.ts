export async function createTag(tagName: string) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags`, {
		method: 'POST',
		body: JSON.stringify({
			name: tagName,
		}),
		credentials: 'include',
	});

	return response;
}
