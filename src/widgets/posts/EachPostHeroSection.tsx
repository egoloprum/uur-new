'use client'

import clsx from 'clsx'
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
			<HeroSection className="">
				<h1
					className={clsx(
						'font-bold uppercase z-10 tracking-wide leading-[1.1]',
						'text-[calc(8vw+0.5rem)] md:text-6xl lg:text-8xl'
					)}
				>
					Нийтлэл олдсонгүй
				</h1>
			</HeroSection>
		)
	}

	const member = getMemberById(post.writerId)

	return (
		<HeroSection className="">
			<div className="flex flex-col items-center">
				<h1
					className={clsx(
						'font-bold uppercase z-10 tracking-wide leading-[1.1] text-center',
						'text-[calc(8vw+0.5rem)] md:text-6xl lg:text-8xl',
						'pb-10 md:pb-15 lg:pb-20'
					)}
				>
					{post.name}
				</h1>
				<p
					className={clsx(
						'text-gray-800 dark:text-gray-300 text-[calc(1vw+0.75rem)] md:text-xl',
						'text-end italic',
						'mt-4 space-x-4 w-full md:w-[80%] xl:w-[60%]'
					)}
				>
					<Link
						href={`/about/${member?.slug}`}
						className="underline hover:underline underline-offset-4"
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
					<span className="">{post.releaseDate}</span>
				</p>
			</div>
		</HeroSection>
	)
}
