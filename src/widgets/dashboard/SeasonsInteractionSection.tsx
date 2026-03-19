'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

interface SeasonStats {
	seasonId: string
	count: number
}

export function SeasonsInteractionSection() {
	const { filters, seasons } = useApp()
	const [data, setData] = useState<SeasonStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSeasons = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/seasons?${params}`)
				if (!res.ok) throw new Error('Failed to fetch seasons data')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchSeasons()
	}, [filters.seasonId])

	if (loading) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Seasons Interactions
				</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Seasons Interactions
				</h2>
				<div className="text-red-500">Error: {error}</div>
			</div>
		)
	}

	// Build per-season counts with names (include all seasons, even zero counts)
	const seasonMap = new Map(seasons.map(s => [s.id, s.name]))
	const tableData: {
		season: string
		interactions: number
		seasonId: string
	}[] = []

	// First add seasons that have data
	data.forEach(({ seasonId, count }) => {
		const seasonName = seasonMap.get(seasonId)
		if (seasonName) {
			tableData.push({
				season: seasonName,
				interactions: count,
				seasonId
			})
		}
	})

	// Add seasons with zero interactions that are not already in tableData
	const existingSeasonIds = new Set(tableData.map(d => d.seasonId))
	seasons
		.filter(s => !existingSeasonIds.has(s.id))
		.forEach(s => {
			tableData.push({
				season: s.name,
				interactions: 0,
				seasonId: s.id
			})
		})

	// Sort alphabetically by season name
	tableData.sort((a, b) => a.season.localeCompare(b.season))

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Seasons Interactions</h2>

			{tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No season interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">#</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Season
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
											key={item.seasonId || item.season}
											className="border-b border-black/10 hover:bg-black/5"
										>
											<td className="py-3 px-4">{index + 1}</td>

											<td className="py-3 px-4 font-medium">{item.season}</td>

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
