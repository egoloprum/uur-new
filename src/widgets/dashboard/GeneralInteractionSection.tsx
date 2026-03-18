'use client'

import { useEffect, useState } from 'react'
import { useApp } from '@/src/entities'

interface GeneralStats {
	pageViews: number
	uniqueUsers: number
	mostVisitedPage: string
	mostVisitedPost: string
	mostActiveDay: string
	filterUses: number
}

export function GeneralInteractionSection() {
	const { filters } = useApp()
	const [stats, setStats] = useState<GeneralStats | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchGeneralStats = async () => {
			setLoading(true)
			setError(null)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/general?${params}`)
				if (!res.ok) throw new Error('Failed to fetch general stats')
				const json = await res.json()
				setStats(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchGeneralStats()
	}, [filters.seasonId])

	return (
		<section className="bg-[#fff5c4] p-6 text-black rounded-2xl grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
			{loading ? (
				<>
					{[...Array(6)].map((_, i) => (
						<div
							key={i}
							className="p-4 bg-[#e1d9ae] rounded-xl space-y-4 animate-pulse"
						>
							<div className="h-4 bg-gray-400 rounded w-3/4"></div>
							<div className="h-8 bg-gray-400 rounded w-1/2"></div>
						</div>
					))}
				</>
			) : error ? (
				<div className="col-span-full text-center text-red-600 py-4">
					Error loading data
				</div>
			) : stats ? (
				<>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							All time page view
						</p>
						<p className="font-bold text-3xl tracking-wider">
							{stats.pageViews}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							Unique users
						</p>
						<p className="font-bold text-3xl tracking-wider">
							{stats.uniqueUsers}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							Most visited page
						</p>
						<p
							className="font-bold text-3xl tracking-wider truncate"
							title={stats.mostVisitedPage}
						>
							{stats.mostVisitedPage}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							Most visited post
						</p>
						<p
							className="font-bold text-3xl tracking-wider truncate"
							title={stats.mostVisitedPost}
						>
							{stats.mostVisitedPost}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							Most active day
						</p>
						<p className="font-bold text-3xl tracking-wider">
							{stats.mostActiveDay}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-base md:text-2xl uppercase font-medium tracking-wide">
							Filter uses
						</p>
						<p className="font-bold text-3xl tracking-wider">
							{stats.filterUses}
						</p>
					</div>
				</>
			) : null}
		</section>
	)
}
