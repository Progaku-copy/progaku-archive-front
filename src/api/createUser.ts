export async function createUser(
	name: string,
	password: string,
	passwordConfirmation: string,
) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/users`, {
		method: 'POST',
		body: JSON.stringify({
			account_name: name,
			password,
			password_confirmation: passwordConfirmation,
		}),
	});

	if (response.status === 500) {
		// TODO: アラート出す
		throw new Error('Failed to login');
	}

	// TODO: 異常時に返ってくるメッセージをフォームに表示

	return response;
}
