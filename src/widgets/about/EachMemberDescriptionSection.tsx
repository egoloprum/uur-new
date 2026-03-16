'use client'

import { useApp } from '@/src/entities'
import { RoleTypes } from '@/src/entities/user'
import { getSlugOfRole } from '@/src/shared'

export const EachMemberDescriptionSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()

  const member = getMemberBySlug(slug)

  if (!member) {
    return null
  }

  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center">
        <ul className="flex flex-wrap gap-2 md:gap-4">
          {member.role.map((role, index) => (
            <li
              key={role.type + index}
              className="text-black uppercase border rounded-full px-2 w-fit"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}>
              {getSlugOfRole(role.type as RoleTypes)}
            </li>
          ))}
        </ul>
        <p className="flex gap-2">
          <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
          <span
            className="text-base text-black tracking-wide uppercase text-nowrap"
            style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}>
            Энэ улиралын гишүүн
          </span>
        </p>
      </div>
    </section>
  )
}
