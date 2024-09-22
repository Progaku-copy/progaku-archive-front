export async function deleteMemo(id: number) {
	const response = await fetch(`${process.env.API}/tags/${id}`, {
		method: 'DELETE',
		credentials: 'include',
	});

	return response;
}
