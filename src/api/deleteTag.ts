export async function deleteTag(id: number) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tags/${id}`, {
		method: 'DELETE',
		credentials: 'include',
	});

	return response;
}
