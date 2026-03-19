'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

interface TopicStats {
	topicId: string
	count: number
}

interface ChartItem {
	topic: string
	interactions: number
	topicId?: string
}

export function TopicsInteractionSection() {
	const { filters, topics } = useApp()
	const [data, setData] = useState<TopicStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchTopics = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/topics?${params}`)
				if (!res.ok) throw new Error('Failed to fetch topics data')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchTopics()
	}, [filters.seasonId])

	if (loading) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">Topics Interactions</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">Topics Interactions</h2>
				<div className="text-red-500">Error: {error}</div>
			</div>
		)
	}

	// Build per-topic counts with names (include all topics, even zero counts)
	const topicMap = new Map(topics.map(t => [t.id, t.name]))
	const tableData: ChartItem[] = []

	// First add topics that have data
	data.forEach(({ topicId, count }) => {
		const topicName = topicMap.get(topicId)
		if (topicName) {
			tableData.push({
				topic: topicName,
				interactions: count,
				topicId
			})
		}
	})

	// Add topics with zero interactions that are not already in tableData
	const existingTopicIds = new Set(tableData.map(d => d.topicId))
	const zeroTopics = topics
		.filter(t => !existingTopicIds.has(t.id))
		.map(t => ({
			topic: t.name,
			interactions: 0,
			topicId: t.id
		}))
	tableData.push(...zeroTopics)

	// Sort alphabetically by topic name (optional)
	tableData.sort((a, b) => a.topic.localeCompare(b.topic))

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Topics Interactions</h2>

			{tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No topic interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">#</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Topic
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
											key={item.topicId || item.topic}
											className="border-b border-black/10 hover:bg-black/5"
										>
											<td className="py-3 px-4">{index + 1}</td>

											<td className="py-3 px-4 font-medium">{item.topic}</td>

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
