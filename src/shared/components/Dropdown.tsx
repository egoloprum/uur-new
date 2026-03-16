'use client'

import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
	ReactNode
} from 'react'

import { Button } from '@/src/shared/components'

interface DropdownContextValue {
	isOpen: boolean
	setIsOpen: (open: boolean) => void
	close: () => void
	setSelectedItem: (id: string) => void
}

const DropdownContext = createContext<DropdownContextValue | undefined>(
	undefined
)

const useDropdown = () => {
	const context = useContext(DropdownContext)
	if (!context) throw new Error('useDropdown must be used within <Dropdown>')
	return context
}

interface DropdownProps {
	label?: string
	contents?: { id: string; name: string }[]
	setSelectedItem: (id: string) => void
	children?: ReactNode
	className?: string
}

export const Dropdown = ({
	label,
	contents,
	setSelectedItem,
	children,
	className
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false)
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [])

	const close = () => setIsOpen(false)

	if (children) {
		return (
			<DropdownContext.Provider
				value={{ isOpen, setIsOpen, close, setSelectedItem }}
			>
				<div
					className={clsx('relative max-sm:w-full', className)}
					ref={dropdownRef}
				>
					{children}
				</div>
			</DropdownContext.Provider>
		)
	}

	if (!label || !contents) {
		throw new Error('Dropdown with simple API requires label and contents')
	}

	return (
		<DropdownContext.Provider
			value={{ isOpen, setIsOpen, close, setSelectedItem }}
		>
			<div className="relative" ref={dropdownRef}>
				<DropdownTrigger>{label}</DropdownTrigger>

				<DropdownContent>
					{contents.map(item => (
						<DropdownItem key={item.id} value={item.id}>
							{item.name}
						</DropdownItem>
					))}

					<DropdownItem value="">Бүх гишүүд</DropdownItem>
				</DropdownContent>
			</div>
		</DropdownContext.Provider>
	)
}

interface DropdownTriggerProps {
	children: ReactNode
	className?: string
}

export const DropdownTrigger = ({
	children,
	className
}: DropdownTriggerProps) => {
	const { isOpen, setIsOpen } = useDropdown()

	return (
		<Button
			mode="primary"
			type="button"
			onClick={() => setIsOpen(!isOpen)}
			aria-expanded={isOpen}
			aria-haspopup="listbox"
			className={clsx('max-sm:w-full max-sm:justify-center', className)}
		>
			<span>{children}</span>

			<ChevronDown
				className={clsx(
					'transition-transform duration-200 w-5 h-5 md:w-6 md:h-6',
					isOpen && 'rotate-180'
				)}
			/>
		</Button>
	)
}

interface DropdownContentProps {
	className?: string
	children: ReactNode
}

export const DropdownContent = ({
	className,
	children
}: DropdownContentProps) => {
	const { isOpen } = useDropdown()

	if (!isOpen) return null

	return (
		<div
			className={clsx(
				'absolute left-0 mt-2 w-48 bg-[#fbfaf2] shadow-lg border border-black focus:outline-none z-50',
				'max-sm:w-full',
				className
			)}
			role="listbox"
		>
			<ul>{children}</ul>
		</div>
	)
}

interface DropdownItemProps {
	value: string
	children: ReactNode
	className?: string
	onClick?: () => void
}

export const DropdownItem = ({
	value,
	children,
	className,
	onClick
}: DropdownItemProps) => {
	const { close, setSelectedItem } = useDropdown()

	const classNames = clsx(
		'block w-full px-4 py-2 text-left text-black hover:bg-indigo-300 focus:bg-indigo-400 cursor-pointer',
		className
	)

	return (
		<li>
			<button
				className={classNames}
				style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
				role="option"
				aria-selected
				onClick={() => {
					onClick?.()
					setSelectedItem(value)
					close()
				}}
			>
				{children}
			</button>
		</li>
	)
}
