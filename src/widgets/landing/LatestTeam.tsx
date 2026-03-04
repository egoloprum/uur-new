'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { MoveRight } from 'lucide-react'
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
          className="p-4 py-2 border-2 rounded-full w-fit uppercase text-black hover:bg-orange-400 focus:bg-orange-500 font-bold tracking-widest"
        >
          Бүх гишүүд
        </Link>
      </div>
      <ul>
        {members.map(member => (
          <li
            className="py-6 border-t border-gray-400 flex justify-between md:hover:bg-indigo-300 md:hover:px-12 transition-all duration-300 cursor-pointer"
            key={member.id}
          >
            <div className="space-y-2">
              <p className="text-black font-bold font-advent-pro text-3xl">{member.name}</p>
              <ul className="flex flex-wrap gap-2">
                {member.role.map(role => (
                  <li
                    className="text-black uppercase border rounded-full px-2 text-nowrap text-sm md:text-base font-advent-pro"
                    key={member.id + role.type}
                  >
                    {getSlugOfRole(role.type)}
                  </li>
                ))}
              </ul>
            </div>
            <button className="col-start-11 self-center w-fit flex gap-2 items-center px-2 py-2 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 border-black text-black font-advent-pro tracking-wider font-bold">
              <span>Дэлгэрэнгүй</span>
              <MoveRight />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
