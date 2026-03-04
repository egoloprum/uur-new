'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import clsx from 'clsx'
import { MoveRight } from 'lucide-react'

export const CurrentSeasonTeamSection = ({}) => {
  const { currentSeasonId, getMembersBySeasonId } = useApp()

  const members = getMembersBySeasonId(currentSeasonId)

  return (
    <div className="bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 space-y-8 font-advent-pro">
      <div className="flex flex-wrap gap-4 justify-between">
        <h2 className="text-black font-bold text-4xl uppercase">Энэ улиралын багийн гишүүд</h2>
        <Button mode="primary" href="/about" className="max-sm:mt-4">
          <span>Бүх гишүүд</span>
          <MoveRight />
        </Button>
      </div>

      <ul>
        {members.map((member, index) => (
          <li
            className={clsx([
              'py-6 border-t border-gray-400 flex max-sm:flex-col sm:items-center sm:justify-between md:hover:bg-indigo-300 md:hover:px-12 transition-all duration-300 cursor-pointer',
              members.length - 1 === index && 'border-b',
            ])}
            key={member.id}
          >
            <div className="space-y-2">
              <p className="text-black font-bold text-2xl md:text-3xl">{member.name}</p>
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

            <Button mode="primary" href="/" className="text-xs md:text-sm px-2! py-1! max-sm:mt-4">
              <span>Дэлгэрэнгүй</span>
              <MoveRight className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
