export type Tag = {
	id: number;
	name: string;
};

export type Comment = {
	id: number;
	memo_id: number;
	poster: string;
	content: string;
	created_at: string;
	updated_at: string;
};

export type MemoResponse = {
	memos: Memo[];
	total_page: number;
};

export type Memo = {
	id: number;
	title: string;
	content: string;
	poster: string;
	created_at: string;
	updated_at: string;
	comments: Comment[];
	tags: Tag[];
};

export type User = {
	accountName: string;
};

export type AuthContextType = {
	user: User | undefined;
	login: (user: User, sessionId: string) => void;
	logout: () => void;
};
