export type Tag = {
	id: number | null;
	name: string;
};

export type Comment = {
	id: number;
	memo_id: number;
	content: string;
	created_at: string;
	updated_at: string;
};

export type Memo = {
	id: number;
	title: string;
	content: string;
	poster: string;
	created_at: string;
	updated_at: string;
	comments: Comment[];
};
