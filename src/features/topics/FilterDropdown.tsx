'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

export const FilterDropdown = ({}) => {
  const { topics, getTopicById, setSelectedTopicId, selectedTopicId } = useApp()

  const topic = getTopicById(selectedTopicId)

  return (
    <Dropdown setSelectedItem={setSelectedTopicId}>
      <DropdownTrigger>{topic ? topic.name : 'Сэдвүүд'}</DropdownTrigger>
      <DropdownContent>
        {topics.map(topic => (
          <DropdownItem
            key={topic.id}
            value={topic.id}
            className={`${selectedTopicId === topic.id && 'bg-indigo-300'}`}
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
