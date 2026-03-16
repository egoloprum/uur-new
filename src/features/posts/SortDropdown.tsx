'use client'

import { useApp } from '@/src/entities'
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger
} from '@/src/shared/components'

const sortMethods = ['Oldest', 'Newest', 'A-Z', 'Z-A']

export const SortDropdown = ({}) => {
	const { filters, setFilters } = useApp()

	const selectedSort = filters.memberSort

	const setSelectedSort = (value: string) => {
		setFilters(f => ({ ...f, memberSort: value }))
	}

	return (
		<Dropdown setSelectedItem={setSelectedSort}>
			<DropdownTrigger>
				{selectedSort ? selectedSort : 'Дугаарлах'}
			</DropdownTrigger>
			<DropdownContent>
				{sortMethods.map((sort, index) => (
					<DropdownItem
						key={sort + index}
						value={sort}
						className={`${selectedSort === sort && 'bg-indigo-300'}`}
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
