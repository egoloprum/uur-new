'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

export const MembersSection = ({}) => {
  const { selectedSeasonId, getMembersBySeasonId } = useApp()
  const users = getMembersBySeasonId(selectedSeasonId)

  return (
    <ul className="grid md:grid-cols-2 font-advent-pro pb-16">
      {users.map((member, index) => (
        <li
          className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex justify-between gap-4 relative group"
          key={member.name + index}
        >
          <div className="absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)] w-full border-x border-gray-400 top-1/2 -translate-y-1/2 left-0" />
          <div className="absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full border-y border-gray-400 top-0 -translate-x-1/2 left-1/2" />
          <div className="space-y-4 z-10 flex flex-col gap-4 md:min-h-70">
            <div className="space-y-2">
              <section className="flex justify-between items-center">
                <h2 className="text-black font-bold tracking-wide text-2xl md:text-3xl">
                  {member.name}
                </h2>
              </section>
              <ul className="flex flex-wrap gap-2">
                {member.role.map(role => (
                  <li
                    className="text-black uppercase border rounded-full px-2"
                    key={member.id + role.type}
                    style={{ fontSize: 'clamp(0.75rem, 2vw, .875rem)' }}
                  >
                    {getSlugOfRole(role.type)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto space-y-4">
              <p
                className="line-clamp-2 md:line-clamp-4"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                {member.description}
              </p>
              <Button
                mode="primary"
                href={`/about/${member.slug}`}
                className="text-xs md:text-sm px-2! py-1!"
              >
                <span>Дэлгэрэнгүй</span>
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative min-w-35 md:min-w-37.5 lg:min-w-40 max-md:min-h-60 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300">
            <Image src={member.imageUrl} fill alt={member.name} />
          </div>
        </li>
      ))}
    </ul>
  )
}
