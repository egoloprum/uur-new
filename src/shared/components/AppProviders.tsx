'use client'

import { usePathname } from 'next/navigation'

import { AppProvider } from '@/src/entities'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()

	return <AppProvider key={pathname}>{children}</AppProvider>
}
