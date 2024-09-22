export async function deleteMemo(id: number) {
	const response = await fetch(`${process.env.API}/memos/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({
			id,
		}),
		credentials: 'include',
	});

	return response;
}
