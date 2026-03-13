'use client'

import { useApp } from '@/src/entities'
import { PostsList } from './PostsList'
import { MembersList } from './MembersList'

export const SeasonsList = ({}) => {
  const { getSeasonsBySelectedSeasonId, getMembersBySeasonId, getPostsBySeasonId } = useApp()

  const seasons = getSeasonsBySelectedSeasonId()

  return (
    <ul className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
      {seasons.map(season => {
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
            <PostsList seasonId={season.id} />
            <div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
              <h3 className="text-2xl font-semibold">Улиралын гишүүд</h3>
            </div>
            <MembersList members={members} />
          </li>
        )
      })}
    </ul>
  )
}
