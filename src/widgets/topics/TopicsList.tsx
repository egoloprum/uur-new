'use client'

import clsx from 'clsx'
import { useMemo } from 'react'

import { useApp } from '@/src/entities'

import { PostsList } from './PostsList'

export const TopicsList = ({}) => {
	const { getPostsByTopicId, topics, filters } = useApp()

	const selectedTopicId = filters.topicId
	const filteredTopics = useMemo(() => {
		if (selectedTopicId === '') {
			return topics
		}
		return topics.filter(topic => topic.id === selectedTopicId)
	}, [topics, selectedTopicId])

	return (
		<ul className="px-4 md:px-8 lg:px-12 xl:px-16 pb-16">
			{filteredTopics.map((topic, index) => {
				const posts = getPostsByTopicId(topic.id)

				return (
					<li
						key={topic.id}
						className={clsx(
							filteredTopics.length - 1 === index ? 'my-0' : 'my-16',
							'space-y-4 md:space-y-8'
						)}
					>
						<h2
							className={clsx([
								'flex gap-2',
								topic.name === 'Шинжлэх ухаан' &&
									'bg-(--topic-black) dark:bg-(--topic-black) text-white dark:text-black',
								topic.name === 'Технологи' &&
									'bg-(--blue) dark:bg-(--blue) dark:text-black',
								topic.name === 'Урлаг' &&
									'bg-(--orange) dark:bg-(--orange) dark:text-black'
							])}
						>
							<span className="text-sm sm:text-[calc(1.5vw+0.25rem)] lg:text-[calc(1.25vw+0.25rem)]">
								[0{topic.serial}]
							</span>
							<span className="text-2xl sm:text-[calc(3vw+0.75rem)] lg:text-[calc(2.5vw+0.5rem)] leading-[1.1] font-semibold">
								{topic.name}
							</span>
						</h2>
						<p className="text-base sm:text-[calc(1vw+0.75rem)] lg:text-[calc(1vw+0.5rem)] leading-tight">
							{topic.description}
						</p>

						<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
							<h3 className="text-[1.375rem] sm:text-[calc(2vw+0.75rem)] lg:text-[calc(1.5vw+0.5rem)] leading-[1.1] font-semibold">
								Сэдвийн нийтлэлүүд
							</h3>
						</div>
						<PostsList posts={posts} />
					</li>
				)
			})}
		</ul>
	)
}
