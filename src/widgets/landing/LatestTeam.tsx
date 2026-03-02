'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import Link from 'next/link'

export const LatestTeamSection = ({}) => {
  const { currentSeasonId, getMembersBySeasonId } = useApp()

  const members = getMembersBySeasonId(currentSeasonId)

  return (
    <div className="bg-[#fbfaf2] min-h-screen p-4 md:p-8 lg:p-12 xl:p-16 space-y-12">
      <div className="flex flex-wrap gap-4 justify-between">
        <h2 className="text-black font-bold text-4xl uppercase">Энэ улиралын багийн гишүүд</h2>
        <Link
          href="/about"
          className="p-4 py-2 border-2 rounded-full w-fit text-black hover:bg-orange-400 focus:bg-orange-500 font-bold tracking-widest"
        >
          Бүх гишүүд
        </Link>
      </div>
      <ul>
        {members.map(member => (
          <li className="py-6 border-t border-gray-400 grid grid-cols-12" key={member.id}>
            <div className="space-y-2 col-span-6">
              <p className="text-black font-bold tracking-widest text-3xl">{member.name}</p>
              <ul className="flex flex-wrap gap-2">
                {member.role.map(role => (
                  <li
                    className="text-black uppercase border rounded-full px-1 text-nowrap text-sm md:text-base"
                    key={member.id + role.type}
                  >
                    {getSlugOfRole(role.type)}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-black tracking-widest col-start-10 text-xl text-nowrap self-center">
              {member.duration}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
