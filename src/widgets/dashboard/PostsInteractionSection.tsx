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

interface PostStats {
	postId: string
	count: number
}

interface TableRow {
	post: string
	interactions: number
	fill?: string // optional for styling
	postId?: string
}

export function PostsInteractionSection() {
	const { filters, posts } = useApp()
	const [data, setData] = useState<PostStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/posts?${params}`)
				if (!res.ok) throw new Error('Failed to fetch posts data')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchPosts()
	}, [filters.seasonId])

	if (loading) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">Posts Interactions</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">Posts Interactions</h2>
				<div className="text-red-500">Error: {error}</div>
			</div>
		)
	}

	// Build per-post counts with names
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

	// Sort descending by count
	postCounts.sort((a, b) => b.count - a.count)

	// Prepare table data: limit to top N, group others
	const MAX_VISIBLE = 5
	let tableRows: TableRow[] = []
	let otherPosts: { postName: string; count: number }[] = []

	if (postCounts.length === 0) {
		tableRows = []
	} else if (postCounts.length <= MAX_VISIBLE) {
		// Show all posts
		tableRows = postCounts.map(item => ({
			post: item.postName,
			interactions: item.count,
			postId: item.postId
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = postCounts.slice(0, MAX_VISIBLE - 1)
		const othersItems = postCounts.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableRows = [
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
		otherPosts = othersItems.map(item => ({
			postName: item.postName,
			count: item.count
		}))
	}

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Posts Interactions</h2>
			{tableRows.length === 0 || tableRows.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No post interactions yet.
				</div>
			) : (
				<>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white rounded-lg overflow-hidden">
							<thead className="bg-gray-100">
								<tr>
									<th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
										Post
									</th>
									<th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">
										Interactions
									</th>
								</tr>
							</thead>
							<tbody>
								{tableRows.map((row, idx) => (
									<tr
										key={row.postId || `others-${idx}`}
										className="border-b border-gray-200 hover:bg-gray-50"
									>
										<td className="px-4 py-2 text-sm text-gray-800">
											{row.post}
										</td>
										<td className="px-4 py-2 text-sm text-gray-800 text-right">
											{row.interactions}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{otherPosts.length > 0 && (
						<div className="mt-4 text-sm text-gray-700">
							<p className="font-semibold mb-2">
								Other posts (included in "Others"):
							</p>
							<ul className="list-disc list-inside space-y-1">
								{otherPosts.map((p, i) => (
									<li key={i}>
										{p.postName}: {p.count} interactions
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
