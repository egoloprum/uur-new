'use client'

import { usePathname } from 'next/navigation'

import { useApp } from '@/src/entities'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger
} from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

export const FilterSection = ({}) => {
	const { seasons, getSeasonById, filters, setFilters } = useApp()

	const selectedSeasonId = filters.seasonId
	const season = getSeasonById(selectedSeasonId)

	const pathname = usePathname()

	const setSelectedSeasonId = (id: string) => {
		setFilters(f => ({ ...f, seasonId: id }))
	}

	return (
		<Dropdown setSelectedItem={setSelectedSeasonId} className="w-fit">
			<DropdownTrigger className="bg-[#fff5c4]">
				{season ? season.name : 'Улиралууд'}
			</DropdownTrigger>
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
								season_id: season.id,
								metadata: {
									title: season.name,
									type: 'season'
								}
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
								type: 'season'
							}
						})
					}}
				>
					Бүх улиралууд
				</DropdownItem>
			</DropdownContent>
		</Dropdown>
	)
}
