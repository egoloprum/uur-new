'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

export const FilterPostsOfEachMemberDropdown = ({}) => {
  const { seasons, getSeasonById, setSelectedSeasonId, selectedSeasonId } = useApp()

  const season = getSeasonById(selectedSeasonId)

  return (
    <Dropdown setSelectedItem={setSelectedSeasonId}>
      <DropdownTrigger>{season ? season.name : 'Улиралууд'}</DropdownTrigger>
      <DropdownContent>
        {seasons.map(season => (
          <DropdownItem
            key={season.id}
            value={season.id}
            className={`${selectedSeasonId === season.id && 'bg-indigo-300'}`}
          >
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
