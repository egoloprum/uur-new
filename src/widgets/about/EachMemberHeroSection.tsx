'use client'

import { useApp } from '@/src/entities'

import { HeroSection } from '../hero/Hero'

export const EachMemberHeroSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()

  const member = getMemberBySlug(slug)

  return (
    <HeroSection className={member ? '' : 'pb-20! md:pb-40! lg:pb-60!'}>
      <h1
        className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
        style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
      >
        {member?.name || 'Гишүүн олдсонгүй'}
      </h1>
    </HeroSection>
  )
}
