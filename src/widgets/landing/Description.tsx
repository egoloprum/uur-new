'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRef, useLayoutEffect } from 'react'

import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

gsap.registerPlugin(ScrollTrigger)

const getBgColor = (index: number) => {
	const colors = ['#000', '#a5b4fc', '#fb923c']
	return colors[index]
}

const getTextColor = (index: number) => {
	const colors = ['#fff', '#000', '#000']
	return colors[index]
}

export const DescriptionSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null)
	const listRef = useRef<HTMLUListElement>(null)

	const pathname = usePathname()

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
					start: 'top bottom-=300',
					end: 'top top+=300',
					scrub: 1,
					invalidateOnRefresh: true
				}
			})

			items.forEach((item, index) => {
				ScrollTrigger.create({
					trigger: item,
					containerAnimation: horizontalTween,
					start: 'left center',
					end: 'right center',
					onEnter: () =>
						gsap.to(section, {
							backgroundColor: getBgColor(index),
							color: getTextColor(index),
							duration: 0.4
						}),
					onEnterBack: () =>
						gsap.to(section, {
							backgroundColor: getBgColor(index),
							color: getTextColor(index),
							duration: 0.4
						})
				})
			})
		}, section)

		return () => ctx.revert()
	}, [])

	return (
		<div ref={sectionRef} className="relative w-full overflow-hidden bg-black">
			<ul ref={listRef} className="flex gap-16 font-bold tracking-widest">
				<li className="px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 min-w-screen flex justify-between items-center gap-8">
					<span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
						Шинжлэх ухаан
					</span>
					<Button
						mode="clear"
						className="text-xs sm:text-base md:text-xl text-white border-white hover:bg-white hover:text-black"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',
								route: pathname,
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
						className="text-xs sm:text-base md:text-xl"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',
								route: pathname,
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
						className="text-xs sm:text-base md:text-xl"
						href="/topics"
						onClick={() =>
							trackEvent({
								type: 'topic_visit',
								route: pathname,
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
