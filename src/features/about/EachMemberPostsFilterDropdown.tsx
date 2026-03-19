'use client'

import { useApp } from '@/src/entities'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger
} from '@/src/shared/components'
import { useTrackEvent } from '@/src/shared/lib'

export const EachMemberPostsFilterDropdown = ({}) => {
	const { seasons, getSeasonById, filters, setFilters } = useApp()
	const trackEvent = useTrackEvent()

	const selectedSeasonId = filters.seasonId
	const season = getSeasonById(selectedSeasonId)

	const setSelectedSeasonId = (id: string) => {
		setFilters(f => ({ ...f, seasonId: id }))
	}

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
