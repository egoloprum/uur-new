import { NextRequest } from 'next/server'

import { createServerSupabase } from '@/src/shared/db/supabase'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		// Base query with optional season filter
		let query = supabase.from('events').select('*')
		if (seasonId) {
			query = query.eq('season_id', seasonId)
		}

		// 1. Total page views
		const { count: pageViews, error: pageViewsError } = await query.eq(
			'event_type',
			'page_view'
		)
		if (pageViewsError) throw pageViewsError

		// 2. Unique visitors
		const { data: visitors, error: visitorsError } = await query
			.select('visitor_id')
			.eq('event_type', 'page_view')
		if (visitorsError) throw visitorsError
		const uniqueUsers = new Set(visitors.map(v => v.visitor_id)).size

		// 3. Most visited page (route)
		const { data: routes, error: routesError } = await query
			.select('route')
			.eq('event_type', 'page_view')
		if (routesError) throw routesError
		const routeCounts: Record<string, number> = {}
		routes.forEach(({ route }) => {
			routeCounts[route] = (routeCounts[route] || 0) + 1
		})
		const mostVisitedPage =
			Object.entries(routeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

		// 4. Most visited post (by post_visit events)
		const { data: postVisits, error: postVisitsError } = await query
			.select('post_id')
			.eq('event_type', 'post_visit')
			.not('post_id', 'is', null)
		if (postVisitsError) throw postVisitsError
		const postCounts: Record<string, number> = {}
		postVisits.forEach(({ post_id }) => {
			if (post_id) postCounts[post_id] = (postCounts[post_id] || 0) + 1
		})
		const sortedPosts = Object.entries(postCounts).sort((a, b) => b[1] - a[1])
		const topPostId = sortedPosts[0]?.[0]

		let mostVisitedPost = 'N/A'
		if (topPostId) {
			// Fetch post title from posts table
			const { data: post } = await supabase
				.from('posts')
				.select('name')
				.eq('id', topPostId)
				.single()
			mostVisitedPost = post?.name || 'Unknown'
		}

		// 5. Most active day (by created_at date)
		const { data: days, error: daysError } = await query
			.select('created_at')
			.eq('event_type', 'page_view')
		if (daysError) throw daysError
		const dayCounts: Record<string, number> = {}
		days.forEach(({ created_at }) => {
			const day = new Date(created_at).toISOString().split('T')[0]
			dayCounts[day] = (dayCounts[day] || 0) + 1
		})
		const mostActiveDay =
			Object.entries(dayCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

		// 6. Filter uses
		const { count: filterUses, error: filterUsesError } = await query.eq(
			'event_type',
			'filter_used'
		)
		if (filterUsesError) throw filterUsesError

		return Response.json({
			pageViews,
			uniqueUsers,
			mostVisitedPage,
			mostVisitedPost,
			mostActiveDay,
			filterUses
		})
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
