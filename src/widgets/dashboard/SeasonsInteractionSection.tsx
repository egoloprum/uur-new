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
			{tableData.length === 0 || tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No season interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white rounded-lg overflow-hidden">
						<thead className="bg-gray-100">
							<tr>
								<th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
									Season
								</th>
								<th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">
									Interactions
								</th>
							</tr>
						</thead>
						<tbody>
							{tableData.map(row => (
								<tr
									key={row.seasonId}
									className="border-b border-gray-200 hover:bg-gray-50"
								>
									<td className="px-4 py-2 text-sm text-gray-800">
										{row.season}
									</td>
									<td className="px-4 py-2 text-sm text-gray-800 text-right">
										{row.interactions}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}
