import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import {
	AnalyticsProvider,
	AppProviders,
	ConsentProvider,
	LenisScrollProvider,
	ThemeProvider
} from '../shared/components'
import { Footer, Sidebar } from '../widgets'

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

const robotoSerifLocal = localFont({
	src: [
		{
			path: '../../public/fonts/RobotoSerif-Thin.ttf',
			weight: '100',
			style: 'thin'
		},
		{
			path: '../../public/fonts/RobotoSerif-ExtraLight.ttf',
			weight: '200',
			style: 'extralight'
		},
		{
			path: '../../public/fonts/RobotoSerif-Light.ttf',
			weight: '300',
			style: 'light'
		},
		{
			path: '../../public/fonts/RobotoSerif-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/RobotoSerif-Medium.ttf',
			weight: '500',
			style: 'medium'
		},
		{
			path: '../../public/fonts/RobotoSerif-SemiBold.ttf',
			weight: '600',
			style: 'semibold'
		},
		{
			path: '../../public/fonts/RobotoSerif-Bold.ttf',
			weight: '700',
			style: 'bold'
		},
		{
			path: '../../public/fonts/RobotoSerif-ExtraBold.ttf',
			weight: '800',
			style: 'extrabold'
		},
		{
			path: '../../public/fonts/RobotoSerif-Black.ttf',
			weight: '900',
			style: 'black'
		}
	],
	variable: '--font-roboto-serif-local'
})

const robotoMonoLocal = localFont({
	src: [
		{
			path: '../../public/fonts/RobotoMono-Bold.ttf',
			weight: '700',
			style: 'bold'
		}
	],
	variable: '--font-roboto-mono-local'
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
		<html lang="en">
			<ThemeProvider>
				<body
					className={`${adventProLocal.variable} ${robotoSerifLocal.variable} ${robotoMonoLocal.variable} antialiased min-h-screen flex flex-col`}
				>
					<LenisScrollProvider>
						<AppProviders>
							<AnalyticsProvider />
							{children}
							<Footer />
							<Sidebar />
							<ConsentProvider />
						</AppProviders>
					</LenisScrollProvider>
				</body>
			</ThemeProvider>
		</html>
	)
}
