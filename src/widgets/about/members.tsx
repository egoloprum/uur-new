'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

export const MembersSection = ({}) => {
  const { users } = useApp()

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-2 font-advent-pro">
      {users.map((member, index) => (
        <li
          className="text-black p-4 md:p-8 lg:p-12 xl:p-16 grid grid-cols-12 gap-4 relative"
          key={member.name + index}
        >
          <div className="absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)] w-full border-x border-gray-400 top-1/2 -translate-y-1/2 left-0" />
          <div className="absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full border-y border-gray-400 top-0 -translate-x-1/2 left-1/2" />
          <div className="space-y-4 z-10 col-span-9 flex flex-col gap-8 h-75">
            <div className="space-y-2">
              <section className="flex justify-between items-center">
                <p className="text-black font-bold tracking-wide text-2xl md:text-3xl">
                  {member.name}
                </p>
              </section>
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
            <div className="mt-auto space-y-4">
              <p className="text-base md:text-xl line-clamp-4">{member.description}</p>
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
          <div className="relative col-start-10 col-span-3">
            <Image src={member.imageUrl} fill alt={member.name} />
          </div>
        </li>
      ))}
    </ul>
  )
}
