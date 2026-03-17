'use client'

import clsx from 'clsx'
import { X } from 'lucide-react'
import { FC, InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	text?: string
	hasError?: boolean
	className?: string
	id?: string
	children?: React.ReactNode
	value?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<InputProps> = ({
	label,
	text,
	hasError,
	className,
	id,
	children,
	disabled,
	defaultValue = '',
	value: externalValue,
	onChange: externalOnChange,
	...rest
}) => {
	const [internalValue, setInternalValue] = useState<string>(
		defaultValue as string
	)
	const isControlled = externalValue !== undefined
	const currentValue = isControlled ? externalValue : internalValue

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isControlled) {
			setInternalValue(e.target.value)
		}
		externalOnChange?.(e)
	}

	const clearInput = () => {
		if (!disabled) {
			if (!isControlled) {
				setInternalValue('')
			} else {
				externalOnChange?.({
					target: { value: '' }
				} as React.ChangeEvent<HTMLInputElement>)
			}
		}
	}

	const containerClasses = clsx([
		'flex items-center rounded-full transition-colors duration-200',
		disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50',
		hasError
			? 'outline outline-2 outline-red-500 focus-within:ring-2 focus-within:ring-red-300'
			: 'outline outline-black focus-within:ring-2 focus-within:ring-orange-300 focus-within:outline-transparent',
		className
	])

	return (
		<div className="space-y-2 text-black">
			{label && (
				<label
					htmlFor={id}
					className="uppercase text-base md:text-xl tracking-wider"
				>
					{label}
				</label>
			)}
			<div className={containerClasses}>
				<input
					id={id}
					className="px-4 py-2 outline-0 grow text-xl bg-transparent disabled:cursor-not-allowed"
					value={currentValue}
					onChange={handleChange}
					disabled={disabled}
					{...rest}
				/>
				{children ? (
					children
				) : (
					<button
						type="button"
						className="mr-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						onClick={clearInput}
						disabled={disabled}
						aria-disabled={disabled}
						aria-label="Clear input"
					>
						<X className="w-4 h-4" />
					</button>
				)}
			</div>
			{text && <p className="text-sm md:text-base">{text}</p>}
		</div>
	)
}
