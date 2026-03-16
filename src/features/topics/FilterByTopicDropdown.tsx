'use client'

import { usePathname } from 'next/navigation'

import { useApp } from '@/src/entities'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger
} from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

export const FilterByTopicDropdown = ({}) => {
	const { topics, getTopicById, filters, setFilters } = useApp()

	const selectedTopicId = filters.topicId
	const topic = getTopicById(selectedTopicId)

	const pathname = usePathname()

	const setSelectedTopicId = (id: string) => {
		setFilters(f => ({ ...f, topicId: id }))
	}
	return (
		<Dropdown setSelectedItem={setSelectedTopicId}>
			<DropdownTrigger>{topic ? topic.name : 'Сэдвүүд'}</DropdownTrigger>
			<DropdownContent>
				{topics.map(topic => (
					<DropdownItem
						key={topic.id}
						value={topic.id}
						className={`${selectedTopicId === topic.id && 'bg-indigo-300'}`}
						onClick={() => {
							trackEvent({
								type: 'filter_used',
								route: pathname,
								topic_id: topic.id,
								metadata: {
									title: topic.name,
									type: 'topic'
								}
							})
						}}
					>
						{topic.name}
					</DropdownItem>
				))}
				<DropdownItem value="" className=" border-t">
					Бүх сэдвүүд
				</DropdownItem>
			</DropdownContent>
		</Dropdown>
	)
}
