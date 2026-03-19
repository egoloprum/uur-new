'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

const MAX_VISIBLE = 5

interface SourceStats {
	postId: string
	count: number
}

interface DataItem {
	post: string
	interactions: number
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
			<div className="flex flex-col gap-4">
				<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
					<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
						Sources Interactions
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
						Sources Interactions
					</h2>
				</div>
				<div className="text-center text-red-600 py-16 bg-[#fff5c4] rounded-2xl">
					Error: {error}
				</div>
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

	let tableData: DataItem[] = []

	if (postCounts.length === 0) {
		tableData = []
	} else if (postCounts.length <= MAX_VISIBLE) {
		// Show all posts
		tableData = postCounts.map(item => ({
			post: item.postName,
			interactions: item.count,
			postId: item.postId
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = postCounts.slice(0, MAX_VISIBLE - 1)
		const othersItems = postCounts.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableData = [
			...topItems.map(item => ({
				post: item.postName,
				interactions: item.count,
				postId: item.postId
			})),
			{
				post: 'Others',
				interactions: othersSum
			}
		]
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
				<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl flex justify-between">
					<span>Sources Interactions</span>
					<span>
						{tableData.reduce((sum, item) => sum + item.interactions, 0)}
					</span>
				</h2>
			</div>

			{tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16 bg-[#fff5c4] rounded-2xl">
					No source interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto bg-[#fff5c4] rounded-2xl">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">#</th>
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
											key={item.post || item.postId}
											className="border-b border-black/10 hover:bg-black/5 max-sm:text-sm"
										>
											<td className="py-3 px-4">{index + 1}</td>

											<td className="py-3 px-4 font-medium">{item.post}</td>

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
