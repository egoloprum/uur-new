import { Button } from '@/src/shared/components'
import { Cookie } from 'lucide-react'
import Link from 'next/link'

export const CookieSection = ({}) => {
	return (
		<aside className="p-6 px-8 max-w-96 w-full fixed bg-black text-white bottom-16 left-16 font-advent-pro-local space-y-4 z-100 rounded-xl">
			<p className="flex gap-2 items-center">
				<Cookie className="w-6 h-6" />
				<span className="text-3xl tracking-wide font-bold">
					Cookies consent
				</span>
			</p>
			<p className="text-xl">
				<span className="mr-1">
					This website uses cookie to help you have a superior and more
					admissable browsing experience on the website.
				</span>
				<Link href="/policies" className="underline underline-offset-2">
					Learn more
				</Link>
			</p>
			<div className="mt-8">
				<Button
					mode="clear"
					className="w-full justify-center py-1! text-white border-white"
				>
					Accept
				</Button>
			</div>
		</aside>
	)
}
