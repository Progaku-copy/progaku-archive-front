export async function loginUser(username: string, password: string) {
	const requestBody = {
		session: {
			account_name: username,
			password,
		},
	};

	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
		credentials: 'include',
	});

	// レスポンスヘッダーをログ出力
	console.log('Response headers:', Object.fromEntries(response.headers));
	console.log('Response status:', response.status);

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		console.log('Login error response:', errorData);

		if (response.status === 401) {
			throw new Error(
				errorData.message || 'ユーザー名またはパスワードが正しくありません',
			);
		}

		throw new Error('ログインに失敗しました');
	}

	return response;
}
