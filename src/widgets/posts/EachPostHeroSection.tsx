'use client'

import { useApp } from '@/src/entities'
import { HeroSection } from '../hero/Hero'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/src/shared/lib'

export const EachPostHeroSection = ({ slug }: { slug: string }) => {
  const { getPostBySlug, getUserById } = useApp()

  const post = getPostBySlug(slug)

  const pathname = usePathname()

  if (!post) {
    return (
      <>
        <HeroSection className={post ? '' : 'pb-20! md:pb-40! lg:pb-60!'}>
          <h1
            className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
            style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
          >
            Нийтлэл олдсонгүй
          </h1>
        </HeroSection>
      </>
    )
  }

  const member = getUserById(post.writerId)

  return (
    <>
      <HeroSection className={post ? '' : 'pb-20! md:pb-40! lg:pb-60!'}>
        <h1
          className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
          style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
        >
          {post.name || 'Нийтлэл олдсонгүй'}
        </h1>
        <p className="text-gray-700 mt-4 space-x-4">
          <Link
            href={`/about/${member?.slug}`}
            className="text-base md:text-2xl hover:underline underline-offset-4"
            onClick={() =>
              trackEvent({
                type: 'member_visit',
                route: pathname,
                metadata: {
                  title: member?.name,
                },
              })
            }
          >
            {member?.name}
          </Link>
          <span className="text-sm md:text-xl">{post.releaseDate}</span>
        </p>
      </HeroSection>
    </>
  )
}
