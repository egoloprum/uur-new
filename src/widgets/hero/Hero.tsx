import clsx from 'clsx'
import { ReactNode } from 'react'

import { Breadcrumb } from '@/src/widgets'
import Link from 'next/link'

export const HeroSection = ({
	className,
	children
}: {
	className?: string
	children: ReactNode
}) => {
	return (
		<div
			className={clsx([
				'p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-10 md:gap-20 relative overflow-hidden',
				className
			])}
		>
			<Link
				href="/"
				className="font-bold uppercase z-10 mt-10 md:text-6xl text-[calc(8vw+0.5rem)] leading-[0.9]"
			>
				<span className="block">Үүр</span>
				<span className="block text-(--orange)">Товхимол</span>
			</Link>
			<Breadcrumb />
			<div className="">{children}</div>
		</div>
	)
}
