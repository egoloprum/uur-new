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
		<aside className="p-3 px-4 md:p-6 md:px-8 sm:max-w-108 max-sm:w-[calc(100%-2rem)] w-full h-fit fixed bg-black text-white max-sm:top-10 right-4 sm:bottom-36 md:bottom-40 md:right-8 lg:bottom-42 lg:right-12 xl:bottom-42 xl:right-16 font-montserrat-alternates-local space-y-4 z-100 rounded-[24px] opacity-85">
			<p className="flex gap-2">
				<Cookie className="w-6 h-6 lg:w-20 lg:h-20" />
				<span className="text-xl md:text-3xl tracking-wide font-bold">
					Күүки ашиглах зөвшөөрөл
				</span>
			</p>
			<p className="text-sm md:text-xl">
				<span className="mr-1">
					Энэ вэбсайт нь танд илүү сайн, илүү тохиромжтой вэб үзэх туршлагыг
					олгохын тулд күүки ашигладаг.
				</span>
				<Link
					href="/policies"
					className="underline underline-offset-2 block mt-2"
				>
					Дэлгэрэнгүй
				</Link>
			</p>
			<div className="mt-4 md:mt-8">
				<Button
					mode="clear"
					className="w-full justify-center py-1! text-white border-white"
					onClick={acceptCookies}
				>
					Зөвшөөрөх
				</Button>
			</div>
		</aside>
	)
}
