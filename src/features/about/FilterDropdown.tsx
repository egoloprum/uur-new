'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

export const FilterDropdown = ({}) => {
  const { seasons, setSelectedSeasonId } = useApp()

  return (
    <Dropdown setSelectedItem={setSelectedSeasonId}>
      <DropdownTrigger>Улиралууд</DropdownTrigger>
      <DropdownContent>
        {seasons.map(season => (
          <DropdownItem key={season.id} value={season.id}>
            {season.name}
          </DropdownItem>
        ))}
        <DropdownItem value="" className=" border-t">
          Бүх улиралууд
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
