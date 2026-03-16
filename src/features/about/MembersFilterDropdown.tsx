'use client'

import { useApp } from '@/src/entities'
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'
import { usePathname } from 'next/navigation'

export const MembersFilterDropdown = ({}) => {
  const { seasons, getSeasonById, setSelectedSeasonId, selectedSeasonId } = useApp()

  const season = getSeasonById(selectedSeasonId)

  const pathname = usePathname()

  return (
    <Dropdown setSelectedItem={setSelectedSeasonId}>
      <DropdownTrigger>{season ? season.name : 'Улиралууд'}</DropdownTrigger>
      <DropdownContent>
        {seasons.map(season => (
          <DropdownItem
            key={season.id}
            value={season.id}
            className={`${selectedSeasonId === season.id && 'bg-indigo-300'}`}
            onClick={() => {
              trackEvent({
                type: 'filter_used',
                route: pathname,
                metadata: {
                  title: season.name,
                  type: 'season',
                },
              })
            }}
          >
            {season.name}
          </DropdownItem>
        ))}
        <DropdownItem
          value=""
          className=" border-t"
          onClick={() => {
            trackEvent({
              type: 'filter_used',
              route: pathname,
              metadata: {
                title: 'Бүх улиралууд',
                type: 'season',
              },
            })
          }}
        >
          Бүх улиралууд
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
