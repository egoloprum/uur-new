'use client'

import { useEffect, useState } from 'react'

import { useApp } from '@/src/entities'

interface GeneralStats {
	pageViews: number
	uniqueUsers: number
	mostVisitedPage: string
	topPostId: string
	mostActiveDay: string
	filterUses: number
}

export function GeneralInteractionSection() {
	const { filters, getPostById } = useApp()
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
		<section className="text-black rounded-2xl grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
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
				<div className="p-4 bg-[#e1d9ae] col-span-full text-center font-black uppercase text-lg sm:text-xl md:text-2xl text-red-600 py-4 rounded-xl">
					Error loading data
				</div>
			) : stats ? (
				<>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Page view count
						</p>
						<p className="text-base md:text-xl tracking-wider">
							{stats.pageViews}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Unique users
						</p>
						<p className="text-base md:text-xl tracking-wider">
							{stats.uniqueUsers}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Most visited page
						</p>
						<p
							className="text-base md:text-xl tracking-wider truncate"
							title={stats.mostVisitedPage}
						>
							{stats.mostVisitedPage}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Most visited post
						</p>
						<p
							className="text-base md:text-xl tracking-wider truncate"
							title={stats.topPostId}
						>
							{getPostById(stats.topPostId)?.name || 'N/A'}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Most active day
						</p>
						<p className="text-base md:text-xl tracking-wider">
							{stats.mostActiveDay}
						</p>
					</div>
					<div className="p-4 bg-[#e1d9ae] rounded-xl space-y-4">
						<p className="text-black font-black uppercase text-lg sm:text-xl md:text-2xl">
							Filter uses
						</p>
						<p className="text-base md:text-xl tracking-wider">
							{stats.filterUses}
						</p>
					</div>
				</>
			) : null}
		</section>
	)
}
