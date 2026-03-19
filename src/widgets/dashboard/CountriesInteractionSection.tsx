'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

interface CountryStats {
	country: string
	count: number
}

interface TableRow {
	country: string
	interactions: number
	key?: string
}

export function CountriesInteractionSection() {
	const [data, setData] = useState<CountryStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const { filters } = useApp()

	useEffect(() => {
		const fetchCountries = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters?.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/countries?${params}`)
				if (!res.ok) throw new Error('Failed to fetch countries data')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchCountries()
	}, [filters?.seasonId])

	if (loading) {
		return (
			<div className="flex flex-col gap-4">
				<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
					<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
						Countries Interactions
					</h2>
				</div>
				<div className="text-center text-gray-600 py-16 bg-[#fff5c4] rounded-2xl">
					Loading...
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex flex-col gap-4">
				<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
					<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
						Countries Interactions
					</h2>
				</div>
				<div className="text-center text-red-600 py-16 bg-[#fff5c4] rounded-2xl">
					Error: {error}
				</div>
			</div>
		)
	}

	// Sort descending by count
	const sorted = [...data].sort((a, b) => b.count - a.count)

	// Prepare table data: limit to top N, group others
	const MAX_VISIBLE = 5
	let tableData: TableRow[] = []

	if (sorted.length === 0) {
		tableData = []
	} else if (sorted.length <= MAX_VISIBLE) {
		// Show all countries
		tableData = sorted.map(item => ({
			country: item.country,
			interactions: item.count,
			key: item.country
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = sorted.slice(0, MAX_VISIBLE - 1)
		const othersItems = sorted.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableData = [
			...topItems.map(item => ({
				country: item.country,
				interactions: item.count,
				key: item.country
			})),
			{
				country: 'Others',
				interactions: othersSum,
				key: 'others'
			}
		]
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
				<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
					Countries Interactions
				</h2>
			</div>

			{tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16 bg-[#fff5c4] rounded-2xl">
					No topic interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto bg-[#fff5c4] rounded-2xl">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">#</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Country
								</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Interactions
								</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Share
								</th>
							</tr>
						</thead>

						<tbody>
							{(() => {
								const total = tableData.reduce(
									(sum, item) => sum + item.interactions,
									0
								)

								const sorted = [...tableData].sort(
									(a, b) => b.interactions - a.interactions
								)

								return sorted.map((item, index) => {
									const percentage =
										total > 0
											? ((item.interactions / total) * 100).toFixed(1)
											: '0'

									return (
										<tr
											key={item.key || item.country}
											className="border-b border-black/10 hover:bg-black/5 max-sm:text-sm"
										>
											<td className="py-3 px-4">{index + 1}</td>

											<td className="py-3 px-4 font-medium">{item.country}</td>

											<td className="py-3 px-4">{item.interactions}</td>

											<td className="py-3 px-4">{percentage} %</td>
										</tr>
									)
								})
							})()}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}
