export async function deleteMemo(id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags/${id}`, {
		method: 'DELETE',
		credentials: 'include',
	});

	return response;
}
