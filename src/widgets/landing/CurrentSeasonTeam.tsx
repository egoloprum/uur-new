'use client'

import clsx from 'clsx'
import { MoveRight } from 'lucide-react'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import { useTrackEvent } from '@/src/shared/lib'

export const CurrentSeasonTeamSection = () => {
	const { currentSeasonId, getMembersBySeasonId } = useApp()
	const trackEvent = useTrackEvent()

	const members = getMembersBySeasonId(currentSeasonId)

	return (
		<div className="px-4 md:px-8 lg:px-12 xl:px-16 space-y-8 relative">
			<div className="flex flex-wrap gap-4 justify-between">
				<h2 className="font-bold text-[calc(4vw+0.75rem)] md:text-4xl leading-[1.1] uppercase">
					Энэ улирлын багийн гишүүд
				</h2>
				<Button
					mode="primary"
					href="/about"
					className="text-sm md:text-base max-sm:mt-4"
				>
					<span>Бүх гишүүд</span>
					<MoveRight />
				</Button>
			</div>
			<ul>
				{members.map((member, index) => (
					<li
						key={member.id}
						data-member
						data-image={member.imageUrl}
						className={clsx(
							'py-4 md:py-6 border-t border-stone-400 dark:border-stone-500 flex max-sm:flex-col sm:items-center sm:justify-between',
							'md:hover:bg-(--blue) md:hover:px-12 transition-normal duration-300',
							members.length - 1 === index && 'border-b'
						)}
					>
						<div className="space-y-4">
							<p className="text-xl sm:text-[calc(2vw+0.5rem)] lg:text-[calc(1.25vw+0.5rem)] leading-[1.1] font-semibold">
								{member.name}
							</p>

							<ul className="flex flex-wrap gap-2">
								{member.role.map(role => (
									<li
										className="uppercase border rounded-full px-2 text-nowrap text-xs sm:text-sm md:text-base"
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
							className="text-xs md:text-sm px-2! py-1! max-sm:mt-4 transition-none"
							onClick={() =>
								trackEvent({
									type: 'member_visit',
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
		</div>
	)
}
