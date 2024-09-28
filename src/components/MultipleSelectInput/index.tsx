'use client';

import React, { useRef, useState } from 'react';
import Text from '../Text';

type OptionType = {
	id: number;
	name: string;
};

type Props<T> = {
	placeholder: string;
	label: string;
	selectOptions: T[];
};

const MultipleSelectInput = <T extends OptionType>({
	placeholder,
	label,
	selectOptions,
}: Props<T>) => {
	const [chips, setChips] = useState<OptionType[]>([]);
	const [inputValue, setInputValue] = useState('');
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickDeleteButton = (
		event: React.MouseEvent,
		chipToDelete: OptionType,
	) => {
		event.stopPropagation();
		setChips(chips?.filter((chip) => chip !== chipToDelete));
	};

	const handleChangeInputValue = (value: string) => {
		if (!isOpenMenu) {
			setIsOpenMenu(true);
		}
		setInputValue(value);
	};

	const handleClickMenuItem = (item: OptionType) => {
		setChips(
			chips.some((option) => option.id === item.id)
				? chips.filter((option) => option.id !== item.id)
				: [...chips, item],
		);
	};

	const handleMouseDown = (event: React.MouseEvent) => {
		event.preventDefault();
	};

	const handleFocusInput = () => {
		setIsOpenMenu(true);
		setIsFocus(true);
	};

	const handleClickForm = (event: React.MouseEvent) => {
		console.log(inputRef);
		setIsOpenMenu(true);
		setIsFocus(true);
		inputRef.current?.focus();
	};

	const handleBlurInput = () => {
		setInputValue('');
		setIsOpenMenu(false);
		setIsFocus(false);
	};

	const filteredOptions = selectOptions.filter((option) =>
		option.name.includes(inputValue),
	);

	return (
		<>
			{!!label && <Text>{label}</Text>}
			<div
				onClick={handleClickForm}
				className='inline-flex h-11 w-full max-w-full flex-nowrap items-center overflow-hidden rounded-lg border-2 border-light-gray pl-2 pr-2'
			>
				{!isFocus && chips.length > 0 && (
					<div className='flex flex-nowrap gap-2 overflow-x-auto scrollbar-thin'>
						{chips.map((option) => (
							<div
								key={option.id}
								className='inline-flex flex-nowrap items-center rounded-full bg-gray-200 px-3 py-0.5'
							>
								<div className='max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap'>
									<Text>{option.name}</Text>
								</div>
								<button
									onClick={(e) => handleClickDeleteButton(e, option)}
									className='h-4 w-4 cursor-pointer rounded-full bg-gray-400 text-white transition hover:opacity-75'
								>
									<span className='i-ic-baseline-close mb-0.5' />
								</button>
							</div>
						))}
					</div>
				)}
				<div className='flex-grow'>
					<input
						ref={inputRef}
						type='text'
						value={inputValue}
						onChange={(e) => handleChangeInputValue(e.target.value)}
						placeholder={chips.length > 0 ? undefined : placeholder}
						className='relative w-full min-w-[20px] border-none p-1 outline-none'
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
					/>
					<span
						className={`${isOpenMenu ? 'i-ic-baseline-arrow-drop-up' : 'i-ic-baseline-arrow-drop-down'} absolute right-6 h-8 w-8 text-black`}
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
									chips.some((chip) => chip.id === option.id)
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
		</>
	);
};

export default MultipleSelectInput;
