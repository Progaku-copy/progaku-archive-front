export type Tag = {
	id: number;
	name: string;
};

export type Comment = {
	id: number;
	memo_id: number;
	poster: string;
	content: string;
	slack_posted_at?: string;
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
	slack_posted_at?: string;
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
