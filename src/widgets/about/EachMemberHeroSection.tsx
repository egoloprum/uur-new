'use client'

import clsx from 'clsx'

import { useApp } from '@/src/entities'

import { HeroSection } from '../hero/Hero'

export const EachMemberHeroSection = ({ slug }: { slug: string }) => {
	const { getMemberBySlug } = useApp()

	const member = getMemberBySlug(slug)

	return (
		<HeroSection className="">
			<h1
				className={clsx(
					'font-bold uppercase z-10 tracking-wide leading-[1.1]',
					'text-[calc(8vw+0.5rem)] md:text-6xl lg:text-8xl'
				)}
			>
				{member?.name || 'Гишүүн олдсонгүй'}
			</h1>
		</HeroSection>
	)
}
