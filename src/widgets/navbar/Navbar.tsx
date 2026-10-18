'use client'

import clsx from 'clsx'
import { Lightbulb, LightbulbOff, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Button, useTheme } from '@/src/shared/components'

const NAV_LINKS = [
	{ href: '/posts', label: 'Нийтлэлүүд' },
	{ href: '/seasons', label: 'Улирлууд' },
	{ href: '/topics', label: 'Сэдвүүд' },
	{ href: '/about', label: 'Бидний тухай' }
]

const THEME_STORAGE_KEY = 'theme'

export const Navbar = () => {
	const { theme, toggleTheme } = useTheme()
	const [toggleNavbar, setToggleNavbar] = useState<boolean>(false)

	const pathname = usePathname()
	const ref = useRef<HTMLHeadElement>(null)
	const themeRef = useRef(theme)

	useEffect(() => {
		themeRef.current = theme
	}, [theme])

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		const syncToSystem = (isDark: boolean) => {
			if (localStorage.getItem(THEME_STORAGE_KEY)) return

			const systemTheme = isDark ? 'dark' : 'light'
			if (themeRef.current !== systemTheme) toggleTheme()
		}

		syncToSystem(mq.matches)

		const handler = (e: MediaQueryListEvent) => syncToSystem(e.matches)
		mq.addEventListener('change', handler)
		return () => mq.removeEventListener('change', handler)
	}, [toggleTheme])

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (!ref.current?.contains(e.target as Node)) {
				setToggleNavbar(false)
			}
		}

		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [])

	return (
		<>
			<div
				onClick={() => setToggleNavbar(false)}
				className={clsx(
					'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 sm:hidden',
					toggleNavbar
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				)}
			/>
			<header
				className={clsx(
					'fixed bottom-5 right-4 sm:bottom-20 md:right-8 lg:right-12 xl:right-16',
					'border border-(--border-black)',
					'rounded-full p-1 text-sm md:text-base lg:text-lg',
					'font-montserrat-alternates-local flex z-100',
					'backdrop-blur-xl',
					'bg-white/10 dark:bg-black/30',
					'shadow-lg shadow-black/5 dark:shadow-white/5'
				)}
				ref={ref}
			>
				<div className="flex flex-col gap-1">
					<Button
						onClick={toggleTheme}
						className="p-2! md:p-4! text-white dark:text-black bg-(--topic-black)"
						aria-label="Toggle theme"
					>
						{theme === 'dark' ? <Lightbulb /> : <LightbulbOff />}
					</Button>

					<Button
						onClick={() => setToggleNavbar(prev => !prev)}
						className="p-2! md:p-4! sm:hidden text-white dark:text-black bg-(--topic-black)"
						aria-label="Toggle navigation menu"
					>
						{toggleNavbar ? <X /> : <Menu />}
					</Button>
				</div>

				<nav
					className={clsx(
						'absolute bottom-full -right-1 mb-2 w-[calc(100vw-36px)] flex flex-col gap-1',
						'p-1 sm:hidden transition-all duration-300 ease-out',
						'border-none',
						toggleNavbar
							? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
							: 'opacity-0 translate-y-2 scale-95 pointer-events-none'
					)}
				>
					{NAV_LINKS.map(link => (
						<Button
							key={link.href}
							mode="clear"
							href={link.href}
							onClick={() => setToggleNavbar(false)}
							className={clsx(
								'p-4! text-base w-full bg-(--white) dark:text-black justify-center',
								toggleNavbar
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-2'
							)}
						>
							{link.label}
						</Button>
					))}

					{pathname !== '/' && (
						<Button
							mode="clear"
							href="/"
							onClick={() => setToggleNavbar(false)}
							className="p-4! text-base w-full bg-(--white) dark:text-black justify-center"
						>
							Нүүр
						</Button>
					)}
				</nav>

				<nav className="flex max-sm:hidden items-center">
					{NAV_LINKS.map(link => (
						<Button
							key={link.href}
							mode="clear"
							className="border-none p-2! md:p-4!"
							href={link.href}
						>
							{link.label}
						</Button>
					))}
					{pathname !== '/' && (
						<Button mode="clear" className="border-none p-2! md:p-4!" href="/">
							Нүүр
						</Button>
					)}
				</nav>
			</header>
		</>
	)
}
