'use client';

import ColorButton from '@/components/ColorButton';
import TagTable from '@/components/TagTable/tagTable';
import Modal from '@/components/Modal';
import { useState } from 'react';

type Tag = {
	id: number;
	name: string;
	priority: number;
};

type OptionalIdTag = {
	id?: number;
	name: string;
	priority: number;
};

type Props = {
	tags?: Tag[];
	onClickEditIcon: (id: number) => void;
	onClickDeleteIcon: (id: number) => void;
	onClickSubmitButton: (tag: OptionalIdTag) => void;
};

const TagUpdate = ({
	tags,
	onClickEditIcon,
	onClickDeleteIcon,
	onClickSubmitButton,
}: Props) => {
	const [tagName, setTagName] = useState('');
	const [tagId, setTagId] = useState<number | undefined>(undefined);
	const [mode, setMode] = useState<'edit' | 'create' | undefined>(undefined);
	const createOnClickButton = () => {
		setTagId(undefined);
		setMode('create');
	};
	const editOnClickIcon = (id: number) => {
		setTagId(id);
		onClickEditIcon(id);
		setMode('edit');
	};
	const deleteOnClickIcon = (id: number) => {
		setTagId(id);
		onClickDeleteIcon(id);
	};
	const submitOnClickButton = () => {
		const tag: OptionalIdTag = {
			id: tagId,
			name: tagName,
			priority: 0,
		};
		onClickSubmitButton(tag);
		setMode(undefined);
	};

	return (
		<div>
			<div className='mx-auto max-w-4xl flex-col py-10'>
				<div className='m-1 space-y-12 px-40 py-20 pl-10 pr-10 pt-20'>
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
				className={`${mode !== undefined ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-10 z-10 items-center bg-white bg-opacity-50 transition-opacity duration-200`}
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
