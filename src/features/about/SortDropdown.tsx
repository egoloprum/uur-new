'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

const sortingMethodsOfMembers = ['Oldest', 'Newest', 'A-Z', 'Z-A']

export const SortDropdown = ({}) => {
  const { selectedSortingMethodofMembers, setSelectedSortingMethodofMembers } = useApp()

  return (
    <Dropdown setSelectedItem={setSelectedSortingMethodofMembers}>
      <DropdownTrigger>
        {selectedSortingMethodofMembers ? selectedSortingMethodofMembers : 'Дугаарлах'}
      </DropdownTrigger>
      <DropdownContent>
        {sortingMethodsOfMembers.map((sort, index) => (
          <DropdownItem
            key={sort + index}
            value={sort}
            className={`${selectedSortingMethodofMembers === sort && 'bg-indigo-300'}`}
          >
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
