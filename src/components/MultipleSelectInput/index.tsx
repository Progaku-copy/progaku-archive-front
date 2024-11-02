'use client';

import React, { useMemo, useRef, useState } from 'react';

import Text from '../Text';

type OptionType = {
	id: number | null;
	name: string;
};

type Props<T> = {
	placeholder: string;
	label?: string;
	selectOptions: T[];
	selectedChips: T[];
	setSelectedChips: (value: T[]) => void;
};

const MultipleSelectInput = <T extends OptionType>({
	placeholder,
	label = '',
	selectOptions,
	selectedChips,
	setSelectedChips,
}: Props<T>) => {
	const [inputValue, setInputValue] = useState('');
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickDeleteButton = (
		event: React.MouseEvent,
		chipToDelete: OptionType,
	) => {
		event.stopPropagation();
		setSelectedChips(selectedChips.filter((chip) => chip !== chipToDelete));
	};

	const handleChangeInputValue = (value: string) => {
		if (!isOpenMenu) {
			setIsOpenMenu(true);
		}
		setInputValue(value);
	};

	const handleClickMenuItem = (item: T) => {
		setSelectedChips(
			selectedChips.some((option) => option.id === item.id)
				? selectedChips.filter((option) => option.id !== item.id)
				: [...selectedChips, item],
		);
	};

	const handleMouseDown = (event: React.MouseEvent) => {
		event.preventDefault();
	};

	const handleFocusInput = () => {
		setIsOpenMenu(true);
		setIsFocus(true);
	};

	const handleClickForm = () => {
		setIsOpenMenu(true);
		setIsFocus(true);
		inputRef.current?.focus();
	};

	const handleBlurInput = () => {
		setInputValue('');
		setIsOpenMenu(false);
		setIsFocus(false);
	};

	const filteredOptions = useMemo(() => {
		if (!Array.isArray(selectOptions)) return [];
		return selectOptions.filter((option) => option.name.includes(inputValue));
	}, [selectOptions, inputValue]);

	return (
		<div>
			{!!label && <Text>{label}</Text>}
			<div
				onClick={handleClickForm}
				className='inline-flex h-11 w-full max-w-full flex-nowrap items-center overflow-hidden rounded-lg border-2 border-light-gray px-2'
			>
				{!isFocus && selectedChips.length > 0 && (
					<div className='flex flex-nowrap gap-2 overflow-x-auto scrollbar-thin'>
						{selectedChips.map((option) => (
							<div
								key={option.id}
								className='inline-flex flex-nowrap items-center rounded-full bg-gray-200 px-3 py-0.5'
							>
								<div className='max-w-[150px] truncate'>
									<Text>{option.name}</Text>
								</div>
								<button
									onClick={(e) => handleClickDeleteButton(e, option)}
									className='size-4 cursor-pointer rounded-full bg-gray-400 text-white transition hover:opacity-75'
								>
									<span className='i-ic-baseline-close mb-0.5' />
								</button>
							</div>
						))}
					</div>
				)}
				<div className='relative grow'>
					<input
						ref={inputRef}
						type='text'
						value={inputValue}
						onChange={(e) => handleChangeInputValue(e.target.value)}
						placeholder={selectedChips.length > 0 ? '' : placeholder}
						className='relative w-full min-w-[20px] border-none p-1 outline-none'
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
					/>
					<span
						className={`${isOpenMenu ? 'i-ic-baseline-arrow-drop-up' : 'i-ic-baseline-arrow-drop-down'} absolute right-3 size-8 text-black`}
					></span>
				</div>
			</div>
			{isOpenMenu && (
				<div className='max-h-96 overflow-auto rounded-lg border-2 border-light-gray py-2'>
					{filteredOptions.length > 0 ? (
						filteredOptions.map((option) => (
							<div
								key={option.id}
								onClick={() => handleClickMenuItem(option)}
								onMouseDown={handleMouseDown}
								className={`cursor-pointer border-gray-200 p-2 transition hover:opacity-75 ${
									selectedChips.some((chip) => chip.id === option.id)
										? 'bg-gray-200'
										: ''
								}`}
							>
								<Text>{option.name}</Text>
							</div>
						))
					) : (
						<div className='p-2'>
							<Text>データがありません</Text>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MultipleSelectInput;
