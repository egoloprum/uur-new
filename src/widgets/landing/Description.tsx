'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveRight } from 'lucide-react'
import { useRef, useLayoutEffect } from 'react'

import { Button } from '@/src/shared/components'
import { useTrackEvent } from '@/src/shared/lib'

gsap.registerPlugin(ScrollTrigger)

export const DescriptionSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const listRef = useRef<HTMLUListElement>(null)

	const trackEvent = useTrackEvent()

	useLayoutEffect(() => {
		const section = sectionRef.current
		const list = listRef.current
		if (!section || !list) return

		const items = gsap.utils.toArray<HTMLLIElement>(list.children)

		const ctx = gsap.context(() => {
			const getScrollDistance = () => list.scrollWidth - section.offsetWidth

			const horizontalTween = gsap.to(list, {
				x: () => -getScrollDistance(),
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom-=500',
					end: 'top top+=300',
					scrub: 1,
					invalidateOnRefresh: true
				}
			})

			items.forEach((_, index) => {
				ScrollTrigger.create({
					trigger: items[index],
					containerAnimation: horizontalTween,
					start: 'left center+=300',
					end: 'right center-=300',
					onEnter: () => {
						gsap.to(section, {
							'--section-bg': `var(--section-bg-${index})`,
							'--section-text': `var(--section-text-${index})`,
							duration: 0.2
						})
					},
					onEnterBack: () => {
						gsap.to(section, {
							'--section-bg': `var(--section-bg-${index})`,
							'--section-text': `var(--section-text-${index})`,
							duration: 0.2
						})
					}
				})
			})
		}, section)

		return () => ctx.revert()
	}, [])

	return (
		<div
			ref={sectionRef}
			className="relative w-full overflow-hidden description-section"
		>
			<ul ref={listRef} className="flex gap-16 font-bold tracking-widest">
				<li className="px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 min-w-screen flex justify-between items-center gap-8">
					<span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
						Шинжлэх ухаан
					</span>
					<Button
						mode="clear"
						className="text-xs sm:text-base md:text-xl text-orange-100 dark:text-black border-orange-100 dark:border-black hover:bg-orange-100 hover:dark:bg-black hover:dark:text-[#fffae0]"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',

								topic_id: '34aa259b-2506-4e56-9e1b-c2c520312524',
								metadata: {
									title: 'Шинжлэх ухаан'
								}
							})
						}
					>
						<span>Дэлгэрэнгүй</span>
						<MoveRight className="w-4 h-4 md:w-6 md:h-6" />
					</Button>
				</li>
				<li className="px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 min-w-screen flex justify-between items-center gap-8">
					<span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
						Технологи
					</span>
					<Button
						mode="primary"
						className="text-xs sm:text-base md:text-xl dark:text-black dark:border-black"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',

								topic_id: '6bbf7cbb-79e6-4475-adf9-adb68f60cd1e',
								metadata: {
									title: 'Технологи'
								}
							})
						}
					>
						<span>Дэлгэрэнгүй</span>
						<MoveRight className="w-4 h-4 md:w-6 md:h-6" />
					</Button>
				</li>
				<li className="px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 min-w-screen flex justify-between items-center gap-8">
					<span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
						Урлаг
					</span>
					<Button
						mode="secondary"
						className="text-xs sm:text-base md:text-xl dark:text-black dark:border-black"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',

								topic_id: '8c4fbc01-e7ea-4f51-995c-d869f409046d',
								metadata: {
									title: 'Урлаг'
								}
							})
						}
					>
						<span>Дэлгэрэнгүй</span>
						<MoveRight className="w-4 h-4 md:w-6 md:h-6" />
					</Button>
				</li>
			</ul>
		</div>
	)
}
