'use client'

import clsx from 'clsx'
import { gsap } from 'gsap'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { useRef, useLayoutEffect, useState } from 'react'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

export const CurrentSeasonTeamSection = () => {
	const { currentSeasonId, getMembersBySeasonId } = useApp()
	const members = getMembersBySeasonId(currentSeasonId)

	const containerRef = useRef<HTMLUListElement | null>(null)
	const imageRef = useRef<HTMLDivElement | null>(null)

	const [activeImage, setActiveImage] = useState<string | null>(null)

	useLayoutEffect(() => {
		const container = containerRef.current
		const image = imageRef.current
		if (!container || !image) return

		const isDesktop = window.matchMedia('(min-width: 1024px)').matches
		if (!isDesktop) return

		const xTo = gsap.quickTo(image, 'x', { duration: 0.25, ease: 'power3' })
		const yTo = gsap.quickTo(image, 'y', { duration: 0.25, ease: 'power3' })
		const rTo = gsap.quickTo(image, 'rotation', {
			duration: 0.35,
			ease: 'power3'
		})

		let lastX = 0
		let lastY = 0
		let activeItem: HTMLElement | null = null

		const moveImage = (e: PointerEvent) => {
			if (!activeItem) return
			const x = e.clientX + 24
			const y = e.clientY + 24

			xTo(x)
			yTo(y)

			const dx = e.clientX - lastX
			const dy = e.clientY - lastY
			const velocity = Math.sqrt(dx * dx + dy * dy)

			const rotation = gsap.utils.clamp(-15, 15, dx * 0.2 + velocity * 0.05)

			rTo(rotation)

			lastX = e.clientX
			lastY = e.clientY
		}

		const hideImage = () => {
			activeItem = null
			gsap.to(image, {
				opacity: 0,
				scale: 0.8,
				rotation: 0,
				duration: 0.2
			})

			window.removeEventListener('pointermove', moveImage)
		}

		const pointerOver = (e: PointerEvent) => {
			const li = (e.target as HTMLElement).closest(
				'li[data-member]'
			) as HTMLElement | null
			if (!li || li === activeItem) return

			activeItem = li

			const memberImage = li.dataset.image
			if (memberImage) setActiveImage(memberImage)

			gsap.to(image, {
				opacity: 1,
				scale: 1,
				duration: 0.25
			})

			window.addEventListener('pointermove', moveImage)
		}

		const pointerOut = (e: PointerEvent) => {
			const related = e.relatedTarget as HTMLElement | null
			if (!related || !container.contains(related)) {
				hideImage()
			}
		}

		container.addEventListener('pointerover', pointerOver)
		container.addEventListener('pointerout', pointerOut)

		return () => {
			window.removeEventListener('pointermove', moveImage)
			container.removeEventListener('pointerover', pointerOver)
			container.removeEventListener('pointerout', pointerOut)
		}
	}, [])

	return (
		<div className="bg-[#fbfaf2] px-4 md:px-8 lg:px-12 xl:px-16 space-y-8 relative">
			<div className="flex flex-wrap gap-4 justify-between">
				<h2 className="text-black font-bold text-4xl uppercase">
					Энэ улиралын багийн гишүүд{' '}
				</h2>
				<Button mode="primary" href="/about" className="max-sm:mt-4">
					<span>Бүх гишүүд</span>
					<MoveRight />
				</Button>
			</div>
			<ul ref={containerRef}>
				{members.map((member, index) => (
					<li
						key={member.id}
						data-member
						data-image={member.imageUrl}
						className={clsx(
							'py-4 md:py-6 border-t border-gray-400 flex max-sm:flex-col sm:items-center sm:justify-between',
							'md:hover:bg-indigo-300 md:hover:px-12 transition-all duration-300 relative',
							members.length - 1 === index && 'border-b'
						)}
					>
						<div className="space-y-2">
							<p className="text-black font-bold text-2xl md:text-3xl">
								{member.name}
							</p>

							<ul className="flex flex-wrap gap-2">
								{member.role.map(role => (
									<li
										className="text-black uppercase border rounded-full px-2 text-nowrap text-xs sm:text-sm md:text-base"
										key={member.id + role.type}
									>
										{getSlugOfRole(role.type)}
									</li>
								))}
							</ul>
						</div>

						<Button
							mode="primary"
							href={`/about/${member.slug}`}
							className="text-xs md:text-sm px-2! py-1! max-sm:mt-4"
							onClick={() =>
								trackEvent({
									type: 'member_visit',
									route: '/',
									member_id: member.id,
									metadata: {
										title: member.name
									}
								})
							}
						>
							<span>Дэлгэрэнгүй</span>
							<MoveRight className="h-4 w-4" />
						</Button>
					</li>
				))}
			</ul>
			<div
				ref={imageRef}
				className="fixed top-0 left-0 pointer-events-none opacity-0 scale-75 z-50 will-change-transform"
			>
				{activeImage && (
					<Image
						src={activeImage}
						width={170}
						height={170}
						alt="member preview"
						className="object-contain select-none"
					/>
				)}
			</div>
		</div>
	)
}
