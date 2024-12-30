'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import Cookies from 'js-cookie';

import { AuthContextType, User } from '@/Types';

const AuthContext = createContext<AuthContextType>({
	user: undefined,
	login: () => {},
	logout: () => {},
});

const secureMode = process.env.AUTH_MODE === 'TRUE' ? true : false;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		// AUTH_MODEがTRUEのとき認証する。開発時はFALSEにする。
		if (process.env.AUTH_MODE) {
			const sessionId = Cookies.get('sessionId');
			const verifySession = async () => {
				try {
					const response = await fetch('/api/verify-session', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ sessionId }),
					});
					if (!response.ok) {
						setUser(undefined);
					}
				} catch (error) {
					console.error('認証失敗', error);
					setUser(undefined);
				}
			};
			verifySession();
		} else {
			// 開発時のみ有効
			setUser({
				accountName: 'adminUser',
			});
			Cookies.set('sessionId', 'devOnly');
		}
	}, []);

	const login = (user: User, sessionId: string) => {
		Cookies.set('sessionId', sessionId, { secure: secureMode });
		setUser(user);
	};

	const logout = () => {
		Cookies.remove('sessionId');
		setUser(undefined);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
