'use client'

import { CardSim, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/src/shared/components'

export const Footer = ({}) => {
	const pathname = usePathname()

	if (pathname.split('/').includes('dashboard')) {
		return null
	}

	return (
		<footer className="px-4 md:px-8 lg:px-12 xl:px-16 py-8 space-y-8 bg-[#14110F] font-advent-pro-local">
			<nav className="flex justify-between items-center">
				<p className="text-xl md:text-2xl tracking-wide">Үүртэй хамтрах</p>
				<div className="flex gap-2">
					<Button
						href="https://www.instagram.com/uur.mn"
						target="_blank"
						mode="clear"
						className="aspect-square text-white w-10! h-10! px-2! border-white relative"
					>
						<span className="absolute top-1/2 left-1/2 -translate-1/2">IG</span>
					</Button>
					<Button
						href="https://docs.google.com/forms/d/1Z1YYoo4KdJPMfHpAPw3Bpbpt9mrrsMeAjLS1htCBn34"
						target="_blank"
						mode="clear"
						className="aspect-square text-white w-10! h-10! px-2! border-white relative"
					>
						<CardSim className="absolute top-1/2 left-1/2 -translate-1/2 h-4 w-4" />
					</Button>
					<Button
						href="mailto:uur.mon.project@gmail.com"
						mode="clear"
						className="aspect-square text-white w-10! h-10! px-2! border-white relative"
					>
						<Mail className="absolute top-1/2 left-1/2 -translate-1/2 h-4 w-4" />
					</Button>
				</div>
			</nav>
			<hr className="border-gray-400" />
			<nav>
				<p className="text-sm md:text-xl tracking-wider">
					© 2026 он. Бүх бичвэрүүд зохиогчийн эрхээр хамгаалагдсан. Бичвэр,
					дүрслэлийг ашиглахдаа заавал эш татна.
				</p>
			</nav>
		</footer>
	)
}
