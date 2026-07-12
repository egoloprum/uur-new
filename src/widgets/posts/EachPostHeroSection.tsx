'use client'

import Link from 'next/link'

import { useApp } from '@/src/entities'
import { useTrackEvent } from '@/src/shared/lib'

import { HeroSection } from '../hero/Hero'

export const EachPostHeroSection = ({ slug }: { slug: string }) => {
	const { getPostBySlug, getMemberById } = useApp()
	const trackEvent = useTrackEvent()

	const post = getPostBySlug(slug)

	if (!post) {
		return (
			<HeroSection className="pb-20! md:pb-40! lg:pb-60!">
				<h1 className="font-bold uppercase z-10 tracking-wide text-4xl/10 md:text-5xl/14 lg:text-6xl/18 xl:text-7xl/20">
					Нийтлэл олдсонгүй
				</h1>
			</HeroSection>
		)
	}

	const member = getMemberById(post.writerId)

	return (
		<HeroSection className="pb-0!">
			<div className="flex flex-col items-center">
				<h1 className="font-bold uppercase tracking-wide text-4xl/10 md:text-5xl/14 lg:text-6xl/18 xl:text-7xl/20 z-10 md:text-center">
					{post.name || 'Нийтлэл олдсонгүй'}
				</h1>
				<p className="text-gray-800 dark:text-gray-300 mt-4 space-x-4 w-full md:w-[80%] xl:w-[60%] text-end italic">
					<Link
						href={`/about/${member?.slug}`}
						className="text-xl md:text-2xl underline hover:underline underline-offset-4"
						onClick={() =>
							trackEvent({
								type: 'member_visit',

								post_id: post.id,
								member_id: member?.id,
								metadata: {
									title: member?.name
								}
							})
						}
					>
						{member?.name}
					</Link>
					<span className="text-lg md:text-xl">{post.releaseDate}</span>
				</p>
			</div>
		</HeroSection>
	)
}
