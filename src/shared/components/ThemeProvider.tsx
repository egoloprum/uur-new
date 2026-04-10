'use client'

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	useEffectEvent
} from 'react'

type ThemeType = 'dark' | 'light'

interface ThemeContextType {
	theme: ThemeType
	setTheme: (form: ThemeType) => void
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeType>('dark')

	const setEventTheme = useEffectEvent((initialTheme: ThemeType) => {
		setTheme(initialTheme)
	})

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as ThemeType | null
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
		setEventTheme(initialTheme)
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
