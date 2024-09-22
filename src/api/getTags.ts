export async function getTags(id: number) {
	const response = await fetch(`${process.env.API}/tags`, {
		method: 'GET',
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getTags');
	}

	return response;
}
