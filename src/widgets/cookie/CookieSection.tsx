'use client'

import { Cookie } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/src/shared/components'

export const CookieSection = ({ onAccept }: { onAccept: () => void }) => {
	const acceptCookies = () => {
		document.cookie = 'cookie_consent=true; path=/; max-age=31536000'
		onAccept()
	}

	return (
		<aside className="p-3 px-4 md:p-6 md:px-8 sm:max-w-96 max-sm:w-[calc(100%-2rem)] w-full fixed bg-black text-white bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 xl:bottom-16 xl:left-16 font-montserrat-alternates-local space-y-4 z-100 rounded-xl opacity-85">
			<p className="flex gap-2 items-center">
				<Cookie className="w-6 h-6" />
				<span className="text-xl md:text-3xl tracking-wide font-bold">
					Cookies consent
				</span>
			</p>
			<p className="text-sm md:text-xl">
				<span className="mr-1">
					This website uses cookie to help you have a superior and more
					admissable browsing experience on the website.
				</span>
				<Link href="/policies" className="underline underline-offset-2">
					Learn more
				</Link>
			</p>
			<div className="mt-4 md:mt-8">
				<Button
					mode="clear"
					className="w-full justify-center py-1! text-white border-white"
					onClick={acceptCookies}
				>
					Accept
				</Button>
			</div>
		</aside>
	)
}
