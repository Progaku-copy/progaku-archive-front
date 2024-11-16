'use client';

import { useState } from 'react';

import { Tag } from '@/Types';
import ColorButton from '@/components/ColorButton';
import Modal from '@/components/Modal';
import TagTable from '@/components/TagTable/tagTable';

type Props = {
	tags: Tag[];
	onClickEditIcon: (id: number) => void;
	onClickDeleteIcon: (id: number) => void;
	onClickSubmitButton: (tag: Tag) => void;
};

const TagUpdate = ({
	tags,
	onClickEditIcon,
	onClickDeleteIcon,
	onClickSubmitButton,
}: Props) => {
	const [tagName, setTagName] = useState('');
	const [tagId, setTagId] = useState<Tag['id']>(null);
	const [mode, setMode] = useState<'edit' | 'create' | undefined>();

	const createOnClickButton = () => {
		setMode('create');
		setTagId(null);
	};
	const editOnClickIcon = (id: number) => {
		setMode('edit');
		setTagId(id);
		onClickEditIcon(id);
	};
	const deleteOnClickIcon = (id: number) => {
		setTagId(id);
		onClickDeleteIcon(id);
	};
	const submitOnClickButton = () => {
		const tag: Tag = {
			id: tagId,
			name: tagName,
		};
		onClickSubmitButton(tag);
		setMode(undefined);
	};

	return (
		<div>
			<div className='mx-auto max-w-4xl flex-col py-10'>
				<div className='m-1 space-y-12 px-40 py-20'>
					<div className='flex justify-end'>
						<ColorButton
							label='タグを作成'
							color='blue'
							handleClickButton={createOnClickButton}
						></ColorButton>
					</div>
					<div className=''>
						<TagTable
							tags={tags}
							editOnClickIcon={editOnClickIcon}
							deleteOnClickIcon={deleteOnClickIcon}
						></TagTable>
					</div>
				</div>
			</div>
			<div
				className={`${mode !== undefined ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-10 z-10 items-center bg-white/50 transition-opacity duration-200`}
			>
				<Modal
					onClose={() => {
						setMode(undefined);
					}}
					onClickSubmitButton={submitOnClickButton}
					tagName={tagName}
					setTagName={setTagName}
					mode={mode}
				></Modal>
			</div>
		</div>
	);
};

export default TagUpdate;
