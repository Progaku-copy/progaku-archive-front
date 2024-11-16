'use client';
import React from 'react';
import { useAuth } from '@/context/authContext';
import { Header as ProgakuHeader } from '@/components/Header';

const Header = () => {
	const { user } = useAuth();
	const isAdmin = user?.isAdmin ?? false;

	return <ProgakuHeader isAdmin={isAdmin}></ProgakuHeader>;
};

export default Header;
