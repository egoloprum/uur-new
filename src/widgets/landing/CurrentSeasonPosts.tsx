'use client'

import { useApp } from '@/src/entities'
import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'
import clsx from 'clsx'
import { MoveRight } from 'lucide-react'

export const CurrentSeasonPostsSection = ({}) => {
  const { getPostsBySeasonId, getTopicById, getUserById, currentSeasonId } = useApp()

  const posts = getPostsBySeasonId(currentSeasonId)

  return (
    <div className="bg-[#fbfaf2] space-y-8">
      <div className="flex flex-col lg:flex-row gap-8 justify-between px-4 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-black font-bold text-4xl uppercase">Энэ улиралын нийтлэлүүд</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <div className="flex flex-col md:flex-row max-sm:flex-row md:items-center gap-2 max-sm:gap-4 md:gap-8">
            <p className="flex gap-2">
              <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-black"></span>
              <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
                Шинжлэх ухаан
              </span>
            </p>
            <p className="flex gap-2">
              <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-indigo-400"></span>
              <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
                Технологи
              </span>
            </p>
            <p className="flex gap-2">
              <span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-orange-400"></span>
              <span className="text-black tracking-wide uppercase text-nowrap text-sm md:text-base">
                Урлаг
              </span>
            </p>
          </div>

          <Button mode="primary" href="/posts" className="max-sm:mt-4">
            <span>Бүх нийтлэлүүд</span>
            <MoveRight />
          </Button>
        </div>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {!posts.length ? (
          <div className="text-black px-4 md:px-8 lg:px-12 xl:px-16 py-0">
            <p className="text-base md:text-2xl">Нийтлэл одоогоор байхгүй байна...</p>
          </div>
        ) : (
          posts.map((post, index) => {
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
                    'w-full border-gray-400 top-1/2 -translate-y-1/2 left-0',
                    index !== 0 && 'border-l',
                    index === posts.length - 1 && 'border-r',
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
                    <span
                      className={clsx(['h-4 w-4 aspect-square rounded-full'], topic?.color)}
                    ></span>
                    <p>{post.releaseDate}</p>
                    <p className="uppercase">{member?.name}</p>
                  </div>
                  <Button
                    mode="primary"
                    href={`/posts/${post.slug}`}
                    className="text-xs md:text-sm px-2! py-1!"
                    onClick={() =>
                      trackEvent({
                        type: 'post_visit',
                        route: '/',
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
          })
        )}
      </ul>
    </div>
  )
}
