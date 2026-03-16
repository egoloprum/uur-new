'use client'

import clsx from 'clsx'
import { MoveRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { useApp } from '@/src/entities'
import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

export const PostsList = () => {
  const {
    posts,
    getUserById,
    getTopicById,
    getPostsByTopicId,
    getPostsBySeasonId,
    selectedTopicId,
    selectedSeasonId,
    selectedSortingMethodofPosts
  } = useApp()

  const filteredPosts = useMemo(() => {
    if (selectedSeasonId && selectedTopicId) {
      const seasonPosts = getPostsBySeasonId(selectedSeasonId)
      const topicPosts = getPostsByTopicId(selectedTopicId)
      const topicPostSet = new Set(topicPosts)
      return seasonPosts.filter(post => topicPostSet.has(post))
    } else if (selectedSeasonId) {
      return getPostsBySeasonId(selectedSeasonId)
    } else if (selectedTopicId) {
      return getPostsByTopicId(selectedTopicId)
    }
    return posts
  }, [
    posts,
    selectedSeasonId,
    selectedTopicId,
    getPostsBySeasonId,
    getPostsByTopicId
  ])

  const sortedPosts = useMemo(() => {
    if (!selectedSortingMethodofPosts) return filteredPosts

    const sorted = [...filteredPosts]
    switch (selectedSortingMethodofPosts) {
      case 'Newest':
        return sorted.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
      case 'Oldest':
        return sorted.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate))
      case 'A-Z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'Z-A':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      default:
        return filteredPosts
    }
  }, [filteredPosts, selectedSortingMethodofPosts])

  const pathname = usePathname()

  if (!sortedPosts.length) {
    return (
      <div className="text-black p-4 md:p-8 lg:p-12 xl:p-16 py-16">
        <p className="text-base md:text-2xl">Нийтлэл олдсонгүй...</p>
      </div>
    )
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 pb-16">
      {sortedPosts.map((post, index) => {
        const author = getUserById(post.writerId)
        const topic = getTopicById(post.topicId)

        return (
          <li
            className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative"
            key={post.name + post.writerId + index}>
            <div
              className={clsx([
                'absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)]',
                'w-full border-gray-400 top-1/2 -translate-y-1/2 left-0',
                index !== 0 && 'border-l',
                index === sortedPosts.length - 1 && 'border-r'
              ])}
            />
            <div
              className={clsx([
                'absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)]',
                'h-full border-b border-gray-400 top-0 -translate-x-1/2 left-1/2'
              ])}
            />
            <div className="space-y-4 z-10">
              <h3 className="text-2xl md:text-4xl font-semibold">
                {post.name}
              </h3>
              <p className="text-base md:text-xl line-clamp-4">
                {post.description}
              </p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 tracking-wide mt-auto z-10">
              <div className="flex gap-2 md:gap-8">
                <span
                  className={clsx(
                    ['h-4 w-4 aspect-square rounded-full'],
                    topic?.color
                  )}></span>
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
                    post_id: post.id,
                    topic_id: topic?.id,
                    member_id: author?.id,
                    metadata: {
                      title: post.name
                    }
                  })
                }>
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
