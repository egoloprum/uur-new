'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {
	ButtonHTMLAttributes,
	HTMLAttributeAnchorTarget,
	LinkHTMLAttributes
} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	LinkHTMLAttributes<HTMLAnchorElement> & {
		mode?: 'primary' | 'secondary' | 'clear'
		href?: string
		target?: HTMLAttributeAnchorTarget
		className?: string
		children?: React.ReactNode
	}

export const Button = ({
	mode,
	type = 'button',
	href,
	target = '_self',
	className,
	children,
	...rest
}: ButtonProps) => {
	const classNames = clsx([
		'flex gap-2 items-center w-fit h-fit',
		'cursor-pointer px-2 py-1 md:px-4 md:py-2 border md:border-2 rounded-full',
		'border-(--button-border)',
		'uppercase text-nowrap font-bold tracking-wide',
		'transition duration-300',
		mode === 'primary' &&
			'hover:bg-(--orange) focus:bg-(--orange-focus-bg) focus:border-(--orange-focus-border)',
		mode === 'secondary' &&
			'hover:bg-(--blue) focus:bg-(--blue-focus-bg) focus:border-(--blue-focus-border)',
		mode === 'clear' &&
			'text-(--clear-text) hover:bg-(--clear-hover-bg) hover:text-(--clear-hover-text)',
		className
	])

	if (href) {
		return (
			<Link className={classNames} href={href} target={target} {...rest}>
				{children}
			</Link>
		)
	}

	return (
		<button className={classNames} type={type} {...rest}>
			{children}
		</button>
	)
}
