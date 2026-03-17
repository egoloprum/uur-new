import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import {
	AnalyticsProvider,
	AppProviders,
	LenisScrollProvider
} from '../shared/components'
import { Footer, Sidebar } from '../widgets'
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const adventProLocal = localFont({
	src: [
		{
			path: '../../public/fonts/AdventPro-Thin.ttf',
			weight: '100',
			style: 'thin'
		},
		{
			path: '../../public/fonts/AdventPro-ExtraLight.ttf',
			weight: '200',
			style: 'extralight'
		},
		{
			path: '../../public/fonts/AdventPro-Light.ttf',
			weight: '300',
			style: 'light'
		},
		{
			path: '../../public/fonts/AdventPro-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/AdventPro-Medium.ttf',
			weight: '500',
			style: 'medium'
		},
		{
			path: '../../public/fonts/AdventPro-SemiBold.ttf',
			weight: '600',
			style: 'semibold'
		},
		{
			path: '../../public/fonts/AdventPro-Bold.ttf',
			weight: '700',
			style: 'bold'
		},
		{
			path: '../../public/fonts/AdventPro-ExtraBold.ttf',
			weight: '800',
			style: 'extrabold'
		},
		{
			path: '../../public/fonts/AdventPro-Black.ttf',
			weight: '900',
			style: 'black'
		}
	],
	variable: '--font-advent-pro-local'
})

export const metadata: Metadata = {
	title: 'Үүр товхимол',
	description: 'Монгол хэл дээрх шинжлэх ухаан, технологи, урлагийн товхимол'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
			<body className={`${adventProLocal.variable} antialiased`}>
				<LenisScrollProvider>
					<AppProviders>
						<AnalyticsProvider />
						{children}
						<Footer />
						<Sidebar />
					</AppProviders>
				</LenisScrollProvider>
			</body>
		</html>
	)
}
