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
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Countries Interactions
				</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Countries Interactions
				</h2>
				<div className="text-red-500">Error: {error}</div>
			</div>
		)
	}

	// Sort descending by count
	const sorted = [...data].sort((a, b) => b.count - a.count)

	// Prepare table data: limit to top N, group others
	const MAX_VISIBLE = 5
	let tableRows: TableRow[] = []
	let otherCountries: { country: string; count: number }[] = []

	if (sorted.length === 0) {
		tableRows = []
	} else if (sorted.length <= MAX_VISIBLE) {
		// Show all countries
		tableRows = sorted.map(item => ({
			country: item.country,
			interactions: item.count,
			key: item.country
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = sorted.slice(0, MAX_VISIBLE - 1)
		const othersItems = sorted.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableRows = [
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
		otherCountries = othersItems.map(item => ({
			country: item.country,
			count: item.count
		}))
	}

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">
				Countries Interactions
			</h2>
			{tableRows.length === 0 || tableRows.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No country interactions yet.
				</div>
			) : (
				<>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white rounded-lg overflow-hidden">
							<thead className="bg-gray-100">
								<tr>
									<th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
										Country
									</th>
									<th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">
										Interactions
									</th>
								</tr>
							</thead>
							<tbody>
								{tableRows.map((row, idx) => (
									<tr
										key={row.key || idx}
										className="border-b border-gray-200 hover:bg-gray-50"
									>
										<td className="px-4 py-2 text-sm text-gray-800">
											{row.country}
										</td>
										<td className="px-4 py-2 text-sm text-gray-800 text-right">
											{row.interactions}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{otherCountries.length > 0 && (
						<div className="mt-4 text-sm text-gray-700">
							<p className="font-semibold mb-2">
								Other countries (included in "Others"):
							</p>
							<ul className="list-disc list-inside space-y-1">
								{otherCountries.map((p, i) => (
									<li key={i}>
										{p.country}: {p.count} interactions
									</li>
								))}
							</ul>
						</div>
					)}
				</>
			)}
		</div>
	)
}
