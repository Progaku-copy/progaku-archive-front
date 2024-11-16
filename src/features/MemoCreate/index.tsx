'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Tag } from '@/Types';
import { createMemo } from '@/api/createMemo';
import ColorButton from '@/components/ColorButton';
import Input from '@/components/Input';
import MultipleSelectInput from '@/components/MultipleSelectInput';
import TextArea from '@/components/TextArea';
import Title from '@/components/Title';

type Props = {
	tags: Tag[];
};

export function MemoCreate({ tags }: Props) {
	const [title, setTitle] = useState('');
	const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
	const [poster, setPoster] = useState('');
	const [content, setContent] = useState('');

	const router = useRouter();

	const handleClickSubmitButton = () => {
		const tagIds = selectedTags.map((tag) => tag.id ?? 0);
		void createMemo(title, content, poster, tagIds);
		router.push('/memoList');
	};

	return (
		<div className='flex h-screen flex-col justify-center gap-8 px-48'>
			<Title isBold>メモを作成</Title>
			<Input
				setInputValue={setPoster}
				inputValue={poster}
				placeholder='Slackのユーザー名'
			/>
			<Input
				setInputValue={setTitle}
				inputValue={title}
				placeholder='タイトル'
			/>
			<MultipleSelectInput<Tag>
				setSelectedChips={setSelectedTags}
				selectedChips={selectedTags}
				placeholder='タグ名を入力してください'
				label='タグ検索'
				selectOptions={tags}
			/>
			<TextArea
				inputValue={content}
				setInputValue={setContent}
				placeholder='本文'
			/>
			<div className='flex justify-end'>
				<ColorButton
					color='green'
					label='送信'
					handleClickButton={handleClickSubmitButton}
				></ColorButton>
			</div>
		</div>
	);
}
