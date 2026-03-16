'use client'

import { useApp } from '@/src/entities'
import { User } from '@/src/entities/user'
import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'
import clsx from 'clsx'
import { MoveRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

// TODO: add sorting for posts

export const EachMemberPostsList = ({ member }: { member: User }) => {
  const {
    getUserById,
    getTopicById,
    getPostsByContributerId,
    getPostsBySeasonId,
    selectedSeasonId,
  } = useApp()

  const filteredPosts = useMemo(() => {
    const contributorPosts = getPostsByContributerId(member.id)

    if (selectedSeasonId) {
      const seasonPosts = getPostsBySeasonId(selectedSeasonId)
      const seasonPostIds = new Set(seasonPosts.map(post => post.id))
      return contributorPosts.filter(post => seasonPostIds.has(post.id))
    }

    return contributorPosts
  }, [selectedSeasonId, member.id, getPostsByContributerId, getPostsBySeasonId])

  if (!filteredPosts.length) {
    return (
      <div className="text-black px-4 md:px-8 lg:px-12 xl:px-16 py-0">
        <p className="text-base md:text-2xl">Нийтлэл одоогоор байхгүй байна...</p>
      </div>
    )
  }

  const pathname = usePathname()

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 pb-16">
      {filteredPosts.map((post, index) => {
        const author = getUserById(post.writerId)
        const topic = getTopicById(post.topicId)

        return (
          <li
            className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative"
            key={post.name + post.writerId + index}
          >
            <div
              className={clsx([
                'absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)]',
                'w-full border-l max-sm:border-r border-gray-400 top-1/2 -translate-y-1/2 left-0',
                (index === filteredPosts.length - 1 || (index + 1) % 3 === 0) && 'lg:border-r',
                (index + 1) % 2 === 0 && 'max-lg:border-r',
                index + 1 === filteredPosts.length && 'max-lg:border-r',
              ])}
            />
            <div
              className={clsx([
                'absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full',
                'border-t border-gray-400 top-0 -translate-x-1/2 left-1/2',
                index >= filteredPosts.length - 3 && 'lg:border-b',
                index >= filteredPosts.length - 2 && 'max-lg:border-b',
                index === filteredPosts.length - 1 && 'max-sm:border-b max-sm:border-t-0',
              ])}
            />
            <div className="space-y-4 z-10">
              <h3 className="text-2xl md:text-4xl font-semibold">{post.name}</h3>
              <p className="text-base md:text-xl line-clamp-4">{post.description}</p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 tracking-wide mt-auto z-10">
              <div className="flex gap-2 md:gap-8">
                <span className={clsx(['h-4 w-4 aspect-square rounded-full'], topic?.color)}></span>
                <p>{post.releaseDate}</p>
                <p className="uppercase">{author?.name}</p>
              </div>
              <Button
                mode="primary"
                href={`/posts/${post.slug}`}
                className="text-xs md:text-sm px-2! py-1!"
                onClick={() =>
                  trackEvent({
                    type: 'post_visit',
                    route: pathname,
                    metadata: {
                      title: post.name,
                    },
                  })
                }
              >
                <span>Цааш унших</span>
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
