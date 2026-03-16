'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { useApp } from '@/src/entities'

import { MembersList } from './MembersList'
import { PostsList } from './PostsList'

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

	const pathname = usePathname()

	return (
		<ul className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
			{filteredSeasons.map(season => {
				const posts = getPostsBySeasonId(season.id)
				const members = getMembersBySeasonId(season.id)

				return (
					<li key={season.id} className="my-16 space-y-4 md:space-y-8">
						<h2 className="flex gap-2">
							<span className="text-2xl">[0{season.serial}]</span>
							<span className="font-bold text-4xl">{season.name}</span>
						</h2>
						<p className="text-base md:text-2xl">{season.description}</p>

						<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
							<h3 className="text-2xl font-semibold">Улиралын нийтлэлүүд</h3>
						</div>
						<PostsList posts={posts} pathname={pathname} />
						<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
							<h3 className="text-2xl font-semibold">Улиралын гишүүд</h3>
						</div>
						<MembersList members={members} pathname={pathname} />
					</li>
				)
			})}
		</ul>
	)
}
