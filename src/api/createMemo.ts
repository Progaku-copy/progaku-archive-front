export async function createMemo(title:string, content:string, poster:string) {
	const response = await fetch(`${process.env.API}/memos`, {
		method: 'POST',
		body: JSON.stringify({
			title,
			content,
			poster
		}),
		credentials:'include'
	});

	return response;
}
