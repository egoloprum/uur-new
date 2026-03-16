'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'
import { usePathname } from 'next/navigation'

export const FilterDropdown = ({}) => {
  const { topics, getTopicById, setSelectedTopicId, selectedTopicId } = useApp()

  const topic = getTopicById(selectedTopicId)

  const pathname = usePathname()

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
                metadata: {
                  title: topic.name,
                  type: 'topic',
                },
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
