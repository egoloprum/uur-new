'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

interface MemberStats {
	memberId: string
	count: number
}

interface TableRow {
	member: string
	interactions: number
	memberId?: string
}

export function MembersInteractionSection() {
	const { filters, members } = useApp()
	const [data, setData] = useState<MemberStats[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchMembers = async () => {
			setLoading(true)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/members?${params}`)
				if (!res.ok) throw new Error('Failed to fetch members data')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchMembers()
	}, [filters.seasonId])

	if (loading) {
		return (
			<div className="flex flex-col gap-4">
				<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
					<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
						Members Interactions
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
						Members Interactions
					</h2>
				</div>
				<div className="text-center text-red-600 py-16 bg-[#fff5c4] rounded-2xl">
					Error: {error}
				</div>
			</div>
		)
	}

	// Build per-member counts with names
	const memberCounts: {
		memberId: string
		memberName: string
		count: number
	}[] = []
	data.forEach(({ memberId, count }) => {
		const member = members.find(m => m.id === memberId)
		if (member) {
			memberCounts.push({
				memberId,
				memberName: member.name,
				count
			})
		}
	})

	// Sort descending by count
	memberCounts.sort((a, b) => b.count - a.count)

	// Prepare table data: limit to top N, group others
	const MAX_VISIBLE = 5
	let tableData: TableRow[] = []

	if (memberCounts.length === 0) {
		tableData = []
	} else if (memberCounts.length <= MAX_VISIBLE) {
		// Show all members
		tableData = memberCounts.map(item => ({
			member: item.memberName,
			interactions: item.count,
			memberId: item.memberId
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = memberCounts.slice(0, MAX_VISIBLE - 1)
		const othersItems = memberCounts.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableData = [
			...topItems.map(item => ({
				member: item.memberName,
				interactions: item.count,
				memberId: item.memberId
			})),
			{
				member: 'Others',
				interactions: othersSum
			}
		]
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="bg-[#fff5c4] rounded-xl px-4 py-1 md:px-4 md:py-2">
				<h2 className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
					Members Interactions
				</h2>
			</div>

			{tableData.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16 bg-[#fff5c4] rounded-2xl">
					No member interactions yet.
				</div>
			) : (
				<div className="overflow-x-auto bg-[#fff5c4] rounded-2xl">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-black/20">
								<th className="py-3 px-4 text-sm uppercase tracking-wide">#</th>
								<th className="py-3 px-4 text-sm uppercase tracking-wide">
									Member
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
											key={item.memberId || item.member}
											className="border-b border-black/10 hover:bg-black/5"
										>
											<td className="py-3 px-4">{index + 1}</td>

											<td className="py-3 px-4 font-medium">{item.member}</td>

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
