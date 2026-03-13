'use client'

import { useApp } from '@/src/entities'
import { EachMemberPostsList } from './EachMemberPostsList'

export const EachMemberPostsSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()

  const member = getMemberBySlug(slug)

  if (!member) {
    return null
  }

  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
      <div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
        <h3 className="text-2xl font-semibold">Гишүүний нийтлэлүүд</h3>
      </div>
      <EachMemberPostsList member={member} />
    </section>
  )
}
