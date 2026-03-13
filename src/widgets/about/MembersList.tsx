'use client'

import { useApp } from '@/src/entities'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import clsx from 'clsx'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'

export const MembersList = ({}) => {
  const {
    users,
    selectedSeasonId,
    getMembersBySeasonId,
    selectedRole,
    getMembersByRole,
    selectedSortingMethodofMembers,
  } = useApp()

  const filteredMembers = useMemo(() => {
    if (selectedSeasonId && selectedRole) {
      const seasonMembers = getMembersBySeasonId(selectedSeasonId)
      const roleMembers = getMembersByRole(selectedRole)
      const roleMemberSet = new Set(roleMembers)
      return seasonMembers.filter(member => roleMemberSet.has(member))
    } else if (selectedSeasonId) {
      return getMembersBySeasonId(selectedSeasonId)
    } else if (selectedRole) {
      return getMembersByRole(selectedRole)
    }
    return users
  }, [users, selectedSeasonId, selectedRole, getMembersBySeasonId, getMembersByRole])

  const sortedMembers = useMemo(() => {
    if (!selectedSortingMethodofMembers) return filteredMembers

    const sorted = [...filteredMembers]
    switch (selectedSortingMethodofMembers) {
      // case 'Newest':
      //   return sorted.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
      // case 'Oldest':
      //   return sorted.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''))
      case 'A-Z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'Z-A':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      default:
        return filteredMembers
    }
  }, [filteredMembers, selectedSortingMethodofMembers])

  if (!sortedMembers.length) {
    return (
      <div className="text-black p-4 md:p-8 lg:p-12 xl:p-16">
        <p className="text-base md:text-2xl">Гишүүн олдсонгүй...</p>
      </div>
    )
  }

  return (
    <ul className="grid md:grid-cols-2 2xl:grid-cols-3 font-advent-pro pb-16">
      {sortedMembers.map((member, index) => (
        <li
          className="text-black p-4 md:p-8 lg:p-12 xl:p-16 max-md:flex max-md:justify-between max-xl:grid max-xl:grid-cols-12 xl:flex xl:justify-between gap-4 relative group"
          key={member.name + index}
        >
          <div
            className={clsx([
              'absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)]',
              'w-full border-l max-sm:border-r border-gray-400 top-1/2 -translate-y-1/2 left-0',
              (index === sortedMembers.length - 1 || (index + 1) % 3 === 0) && 'lg:border-r',
              (index + 1) % 2 === 0 && 'max-lg:border-r',
              index + 1 === sortedMembers.length && 'max-lg:border-r',
            ])}
          />
          <div
            className={clsx([
              'absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full',
              'border-b border-gray-400 top-0 -translate-x-1/2 left-1/2',
              index >= sortedMembers.length - 3 && 'lg:border-b',
              index >= sortedMembers.length - 2 && 'max-lg:border-b',
              index === sortedMembers.length - 1 && 'max-sm:border-b max-sm:border-t-0',
            ])}
          />
          <div className="space-y-4 z-10 flex flex-col gap-4 md:min-h-70 md:col-span-6 lg:col-span-8">
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
                className="line-clamp-2 md:line-clamp-3 lg:line-clamp-4"
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
          <div className="relative min-w-35 md:min-w-37.5 lg:min-w-40 max-md:min-h-60 md:col-span-6 lg:col-span-4 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:brightness-100 transition-all duration-300">
            <Image src={member.imageUrl} className="object-cover" fill alt={member.name} />
          </div>
        </li>
      ))}
    </ul>
  )
}
