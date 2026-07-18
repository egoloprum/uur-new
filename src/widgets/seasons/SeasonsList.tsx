'use client'

import { useMemo } from 'react'

import { useApp } from '@/src/entities'

import { MembersList } from './MembersList'
import { PostsList } from './PostsList'
import clsx from 'clsx'

export const SeasonsList = ({}) => {
	const { seasons, getMembersBySeasonId, getPostsBySeasonId, filters } =
		useApp()

	const selectedSeasonId = filters.seasonId

	const filteredSeasons = useMemo(() => {
		if (selectedSeasonId === '') {
			return seasons
		}
		return seasons.filter(season => season.id === selectedSeasonId)
	}, [seasons, selectedSeasonId])

	return (
		<ul className="px-4 md:px-8 lg:px-12 xl:px-16 pb-16">
			{filteredSeasons.map((season, index) => {
				const posts = getPostsBySeasonId(season.id)
				const members = getMembersBySeasonId(season.id)

				return (
					<li
						key={season.id}
						className={clsx(
							filteredSeasons.length - 1 === index ? 'my-0' : 'my-16',
							'space-y-4 md:space-y-8'
						)}
					>
						<h2 className="flex gap-2">
							<span className="text-sm sm:text-[calc(1.5vw+0.25rem)] lg:text-[calc(1.25vw+0.25rem)]">
								[0{season.serial}]
							</span>
							<span className="text-2xl sm:text-[calc(3vw+0.75rem)] lg:text-[calc(2.5vw+0.5rem)] leading-[1.1] font-semibold">
								{season.name}
							</span>
						</h2>
						<p className="text-base sm:text-[calc(1vw+0.75rem)] lg:text-[calc(1vw+0.5rem)] leading-tight">
							{season.description}
						</p>

						<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
							<h3 className="text-[1.375rem] sm:text-[calc(2vw+0.75rem)] lg:text-[calc(1.5vw+0.5rem)] leading-[1.1] font-semibold">
								Улирлын нийтлэлүүд
							</h3>
						</div>
						<PostsList posts={posts} />
						<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
							<h3 className="text-[1.375rem] sm:text-[calc(2vw+0.75rem)] lg:text-[calc(1.5vw+0.5rem)] leading-[1.1] font-semibold">
								Улирлын гишүүд
							</h3>
						</div>
						<MembersList members={members} />
					</li>
				)
			})}
		</ul>
	)
}
