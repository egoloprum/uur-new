'use client'

import { useApp } from '@/src/entities'
import { HeroSection } from '../hero/Hero'

export const EachPostHeroSection = ({ slug }: { slug: string }) => {
  const { getPostBySlug } = useApp()

  const post = getPostBySlug(slug)

  return (
    <HeroSection
      title={post?.name || 'Нийтлэл олдсонгүй'}
      className={post ? '' : 'pb-20! md:pb-40! lg:pb-60!'}
    />
  )
}
