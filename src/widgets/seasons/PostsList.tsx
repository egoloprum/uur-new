'use client'

import { useApp } from '@/src/entities'
import { Post } from '@/src/entities/post'
import { Button } from '@/src/shared/components'
import clsx from 'clsx'
import { MoveRight } from 'lucide-react'

export const PostsList = ({ seasonId }: { seasonId: string }) => {
  const { getPostsBySeasonId, getUserById, getTopicById } = useApp()

  const posts = getPostsBySeasonId(seasonId)

  if (!posts.length) {
    return (
      <div className="text-black p-4 md:p-8 lg:p-12 xl:p-16">
        <p className="text-base md:text-2xl">Нийтлэл одоогоор байхгүй байна...</p>
      </div>
    )
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        const member = getUserById(post.writerId)
        const topic = getTopicById(post.topicId)

        return (
          <li
            className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative"
            key={post.name + member?.name + index}
          >
            <div
              className={clsx([
                'absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)]',
                'w-full border-l max-sm:border-r border-gray-400 top-1/2 -translate-y-1/2 left-0',
                (index === posts.length - 1 || (index + 1) % 3 === 0) && 'lg:border-r',
                (index + 1) % 2 === 0 && 'max-lg:border-r',
                index + 1 === posts.length && 'max-lg:border-r',
              ])}
            />
            <div
              className={clsx([
                'absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full',
                'border-t border-gray-400 top-0 -translate-x-1/2 left-1/2',
                index >= posts.length - 3 && 'lg:border-b',
                index >= posts.length - 2 && 'max-lg:border-b',
                index === posts.length - 1 && 'max-sm:border-b max-sm:border-t-0',
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
                <p className="uppercase">{member?.name}</p>
              </div>
              <Button mode="primary" href="/" className="text-xs md:text-sm px-2! py-1!">
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
