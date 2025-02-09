'use client';

import { Memo } from '@/Types';
import DateLabel from '@/components/DateLabel';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import Title from '@/components/Title';

type Props = {
	memo: Memo;
};

export function MemoDetail({ memo }: Props) {
	// NOTE:編集、削除は行わないため、一端コメントアウト
	// const onClickEditButton = (id: number) => {
	// 	console.log('edit id', { id });
	// };
	// const onClickDeleteButton = (id: number) => {
	// 	console.log('delete id', { id });
	// };

	return (
		<div className='mt-10 flex flex-col justify-center gap-8 px-48'>
			<div className='flex'>
				<div className='mr-auto'>
					<Text>{memo.poster}</Text>
				</div>
				{/*NOTE:編集、削除は行わないため、一端コメントアウト*/}
				{/*<div className='flex'>*/}
				{/*	<IconButton*/}
				{/*		label='編集'*/}
				{/*		size='s'*/}
				{/*		iconType='edit'*/}
				{/*		onClickHandler={() => onClickEditButton(memo.id)}*/}
				{/*	></IconButton>*/}
				{/*	<IconButton*/}
				{/*		label='削除'*/}
				{/*		size='s'*/}
				{/*		iconType='delete'*/}
				{/*		onClickHandler={() => onClickDeleteButton(memo.id)}*/}
				{/*	></IconButton>*/}
				{/*</div>*/}
			</div>
			<Title
				fontSize='l'
				isBold
			>
				{memo.title}
			</Title>
			<div className='flex flex-wrap'>
				{memo.tags?.map((tag) => {
					return (
						<div className='mb-1 mr-1'>
							<Tag key={tag.id}>{tag.name}</Tag>
						</div>
					);
				})}
			</div>
			<div className='flex space-x-2'>
				<DateLabel
					utcDateTimeString={memo.created_at}
					label='登録日時'
				/>
				<DateLabel
					utcDateTimeString={memo.updated_at}
					label='更新日時'
				/>
			</div>
			<div className='mt-3'>
				<Text>{memo.content}</Text>
			</div>
		</div>
	);
}
