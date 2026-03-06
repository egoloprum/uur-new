'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

export const FilterDropdown = ({}) => {
  const { topics, setSelectedTopicId } = useApp()

  return (
    <Dropdown setSelectedItem={setSelectedTopicId}>
      <DropdownTrigger>Сэдвүүд</DropdownTrigger>
      <DropdownContent>
        {topics.map(topic => (
          <DropdownItem key={topic.id} value={topic.id}>
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
