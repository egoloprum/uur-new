'use client'

import { useApp } from '@/src/entities'
import { HeroSection } from '../hero/Hero'

export const EachMemberHeroSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()

  const member = getMemberBySlug(slug)

  return (
    <HeroSection
      title={member?.name || 'Гишүүн олдсонгүй'}
      className={member ? '' : 'pb-20! md:pb-40! lg:pb-60!'}
    />
  )
}
