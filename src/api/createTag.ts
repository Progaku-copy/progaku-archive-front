export async function createTag(tagName: string) {
	const response = await fetch(`${process.env.API}/tags`, {
		method: 'POST',
		body: JSON.stringify({
			name: tagName,
		}),
		credentials: 'include',
	});

	return response;
}
