'use client'

import { useApp } from '@/src/entities'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger
} from '@/src/shared/components'

export const FilterSection = ({}) => {
	const { seasons, getSeasonById, filters, setFilters } = useApp()

	const selectedSeasonId = filters.seasonId
	const season = getSeasonById(selectedSeasonId)

	const setSelectedSeasonId = (id: string) => {
		setFilters(f => ({ ...f, seasonId: id }))
	}

	return (
		<Dropdown setSelectedItem={setSelectedSeasonId} className="w-fit">
			<DropdownTrigger className="bg-[#fff5c4] max-sm:py-2 rounded-xl md:w-50! justify-between">
				{season ? season.name : 'Улиралууд'}
			</DropdownTrigger>
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
