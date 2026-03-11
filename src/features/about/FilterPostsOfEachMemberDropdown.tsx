'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'

export const FilterPostsOfEachMemberDropdown = ({}) => {
  const { seasons, getSeasonById, setSelectedSeasonId, selectedSeasonId } = useApp()

  const season = getSeasonById(selectedSeasonId)

  return (
    <Dropdown className="max-sm:w-full" setSelectedItem={setSelectedSeasonId}>
      <DropdownTrigger className="max-sm:w-full max-sm:justify-center">
        {season ? season.name : 'Улиралууд'}
      </DropdownTrigger>
      <DropdownContent className="max-sm:w-full">
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
