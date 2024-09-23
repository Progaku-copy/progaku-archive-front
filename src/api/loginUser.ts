export async function loginUser(username: string, password: string) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			session: {
				account_name: username,
				password,
			},
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
