'use client'

import { useApp } from '@/src/entities'
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger
} from '@/src/shared/components'

const sortingMethodsOfPosts = ['Oldest', 'Newest', 'A-Z', 'Z-A']

export const SortDropdown = ({}) => {
  const { selectedSortingMethodofPosts, setSelectedSortingMethodofPosts } =
    useApp()

  return (
    <Dropdown setSelectedItem={setSelectedSortingMethodofPosts}>
      <DropdownTrigger>
        {selectedSortingMethodofPosts
          ? selectedSortingMethodofPosts
          : 'Дугаарлах'}
      </DropdownTrigger>
      <DropdownContent>
        {sortingMethodsOfPosts.map((sort, index) => (
          <DropdownItem
            key={sort + index}
            value={sort}
            className={`${selectedSortingMethodofPosts === sort && 'bg-indigo-300'}`}>
            {sort}
          </DropdownItem>
        ))}
        <DropdownItem value="" className=" border-t">
          Болих
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
