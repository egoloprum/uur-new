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
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Members Interactions
				</h2>
				<div className="flex justify-center items-center h-64">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
				<h2 className="text-black md:text-2xl text-4xl">
					Members Interactions
				</h2>
				<div className="text-red-500">Error: {error}</div>
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
	let tableRows: TableRow[] = []
	let otherMembers: { memberName: string; count: number }[] = []

	if (memberCounts.length === 0) {
		tableRows = []
	} else if (memberCounts.length <= MAX_VISIBLE) {
		// Show all members
		tableRows = memberCounts.map(item => ({
			member: item.memberName,
			interactions: item.count,
			memberId: item.memberId
		}))
	} else {
		// Take top MAX_VISIBLE - 1, and group the rest as "Others"
		const topItems = memberCounts.slice(0, MAX_VISIBLE - 1)
		const othersItems = memberCounts.slice(MAX_VISIBLE - 1)
		const othersSum = othersItems.reduce((sum, item) => sum + item.count, 0)

		tableRows = [
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
		otherMembers = othersItems.map(item => ({
			memberName: item.memberName,
			count: item.count
		}))
	}

	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Members Interactions</h2>
			{tableRows.length === 0 || tableRows.every(d => d.interactions === 0) ? (
				<div className="text-center text-gray-600 py-16">
					No member interactions yet.
				</div>
			) : (
				<>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white rounded-lg overflow-hidden">
							<thead className="bg-gray-100">
								<tr>
									<th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
										Member
									</th>
									<th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">
										Interactions
									</th>
								</tr>
							</thead>
							<tbody>
								{tableRows.map((row, idx) => (
									<tr
										key={row.memberId || `others-${idx}`}
										className="border-b border-gray-200 hover:bg-gray-50"
									>
										<td className="px-4 py-2 text-sm text-gray-800">
											{row.member}
										</td>
										<td className="px-4 py-2 text-sm text-gray-800 text-right">
											{row.interactions}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{otherMembers.length > 0 && (
						<div className="mt-4 text-sm text-gray-700">
							<p className="font-semibold mb-2">
								Other members (included in "Others"):
							</p>
							<ul className="list-disc list-inside space-y-1">
								{otherMembers.map((p, i) => (
									<li key={i}>
										{p.memberName}: {p.count} interactions
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
