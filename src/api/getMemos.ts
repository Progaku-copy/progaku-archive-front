export async function getMemos() {
	const response = await fetch(`${process.env.API}/memos`, {
		method: 'GET',
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to getMemos');
	}

	return response;
}
