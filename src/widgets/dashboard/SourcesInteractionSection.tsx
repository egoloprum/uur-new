'use client'

import { useEffect, useState } from 'react'
import { useApp } from '@/src/entities'

const COLOR_PALETTE = [
	'#000',
	'#a5b4fc',
	'#fb923c',
	'#4ade80',
	'#f87171',
	'#c084fc',
	'#60a5fa',
	'#fbbf24',
	'#94a3b8'
]

const OTHERS_COLOR = '#9ca3af'
const MAX_VISIBLE = 5

interface SourceStats {
	postId: string
	count: number
}

interface ChartItem {
	post: string
	interactions: number
	fill: string
	postId?: string
}

export function SourcesInteractionSection() {
	const { filters, posts } = useApp()
	const [data, setData] = useState<SourceStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchSources = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/sources?${params}`)
				if (!res.ok) throw new Error('Failed to fetch sources data')
				const json = await res.json()
				setData(json.byPost || [])
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchSources()
	}, [filters.seasonId])

	if (loading) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Sources Interactions
				</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Sources Interactions
				</h2>
				<div className="text-red-500">Error: {error}</div>
			</div>
		)
	}

	const postCounts: { postId: string; postName: string; count: number }[] = []
	data.forEach(({ postId, count }) => {
		const post = posts.find(p => p.id === postId)
		if (post) {
			postCounts.push({
				postId,
				postName: post.name,
				count
			})
		}
	})

	postCounts.sort((a, b) => b.count - a.count)

	let chartData: ChartItem[] = []

	if (postCounts.length === 0) {
		chartData = []
	} else if (postCounts.length <= MAX_VISIBLE) {
		// Show all posts
		chartData = postCounts.map((item, index) => ({
			post: item.postName,
			interactions: item.count,
			fill: COLOR_PALETTE[index % COLOR_PALETTE.length],
			postId: item.postId
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = postCounts.slice(0, MAX_VISIBLE - 1)
		const othersItems = postCounts.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		chartData = [
			...topItems.map((item, index) => ({
				post: item.postName,
				interactions: item.count,
				fill: COLOR_PALETTE[index % COLOR_PALETTE.length],
				postId: item.postId
			})),
			{
				post: 'Others',
				interactions: othersSum,
				fill: OTHERS_COLOR
			}
		]
	}

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Sources Interactions</h2>

			{chartData.length === 0 || chartData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No source interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Post
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
								const total = chartData.reduce(
									(sum, item) => sum + item.interactions,
									0
								)

								return chartData.map((item, index) => {
									const percentage =
										total > 0
											? ((item.interactions / total) * 100).toFixed(1)
											: '0'

									return (
										<tr
											key={item.postId || item.post + index}
											className="border-b border-black/10"
										>
											<td className="py-3 px-4 font-medium">{item.post}</td>

											<td className="py-3 px-4">{item.interactions}</td>

											<td className="py-3 px-4">{percentage}%</td>
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
