export async function loginUser() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/logout`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to login');
	}

	return response;
}
