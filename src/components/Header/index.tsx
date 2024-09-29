"use client";
import React, { useState } from 'react';

interface HeaderProps {
  isAdmin: boolean;
  onSearch?: (query: string) => void;
  onTagManagement?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isAdmin,
  onSearch,
  onTagManagement
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch && onSearch(searchQuery);
  };

  if (isAdmin) {
    return (
      <header className="bg-blue text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Progaku Archive</h1>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center ">

      <div className="flex-1"></div>

        <div className="flex-1 flex justify-center">
          <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
            <input
              type="text"
              placeholder="キーワードを入力してください"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </form>
        </div>

        <div className="flex-1 flex items-center justify-end space-x-40">
          <button
            onClick={onTagManagement}
            className="text-white hover:underline"
          >
            タグ作成・編集
          </button>
          <span className="i-ic-baseline-account-circle text-2xl"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;