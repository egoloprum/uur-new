'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { useApp } from '@/src/entities'

import { PostsList } from './PostsList'

export const TopicsList = ({}) => {
  const { getPostsByTopicId, getTopicsBySelectedTopicId } = useApp()

  const topics = getTopicsBySelectedTopicId()

  const pathname = usePathname()

  return (
    <ul className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
      {topics.map(topic => {
        const posts = getPostsByTopicId(topic.id)

        return (
          <li key={topic.id} className="my-16 space-y-4 md:space-y-8">
            <h2
              className={clsx([
                'flex gap-2',
                topic.name === 'Шинжлэх ухаан' && 'bg-black text-white',
                topic.name === 'Технологи' && 'bg-indigo-400',
                topic.name === 'Урлаг' && 'bg-orange-400'
              ])}>
              <span className="text-2xl">[0{topic.serial}]</span>
              <span className="font-bold text-4xl">{topic.name}</span>
            </h2>
            <p className="text-base md:text-2xl">{topic.description}</p>

            <div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
              <h3 className="text-2xl font-semibold">Сэдвийн нийтлэлүүд</h3>
            </div>
            <PostsList posts={posts} pathname={pathname} />
          </li>
        )
      })}
    </ul>
  )
}
