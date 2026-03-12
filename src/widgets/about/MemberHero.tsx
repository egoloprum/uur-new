'use client'

import { useApp } from '@/src/entities'
import { HeroSection } from '../hero/Hero'

export const MemberHeroSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()

  const member = getMemberBySlug(slug)

  return <HeroSection title={member?.name || 'Гишүүн олдсонгүй'} />
}
