import { NextRequest } from 'next/server'

import { createServerSupabaseWithoutAuth } from '@/src/shared/db/supabase'

type QueryWithEq<T> = {
	eq: (column: string, value: unknown) => T
}

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabaseWithoutAuth()

		// Helper to build base filter
		const baseFilter = <T extends QueryWithEq<T>>(query: T): T => {
			return seasonId ? query.eq('current_season_id', seasonId) : query
		}

		// 1. Total page views
		let pageViewsQuery = supabase
			.from('events')
			.select('*', { count: 'exact', head: true })
			.eq('event_type', 'page_view')
		pageViewsQuery = baseFilter(pageViewsQuery)
		const { count: pageViews, error: pageViewsError } = await pageViewsQuery
		if (pageViewsError) throw pageViewsError

		// 2. Unique visitors
		let visitorsQuery = supabase
			.from('events')
			.select('visitor_id')
			.eq('event_type', 'page_view')
		visitorsQuery = baseFilter(visitorsQuery)
		const { data: visitors, error: visitorsError } = await visitorsQuery
		if (visitorsError) throw visitorsError
		const uniqueUsers = new Set(visitors.map(v => v.visitor_id)).size

		// 3. Most visited page (route)
		let routesQuery = supabase
			.from('events')
			.select('route')
			.eq('event_type', 'page_view')
		routesQuery = baseFilter(routesQuery)
		const { data: routes, error: routesError } = await routesQuery
		if (routesError) throw routesError
		const routeCounts: Record<string, number> = {}
		routes.forEach(({ route }) => {
			routeCounts[route] = (routeCounts[route] || 0) + 1
		})
		const mostVisitedPage =
			Object.entries(routeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

		// 4. Most visited post
		let postVisitsQuery = supabase
			.from('events')
			.select('post_id')
			.eq('event_type', 'post_visit')
			.not('post_id', 'is', null)
		postVisitsQuery = baseFilter(postVisitsQuery)
		const { data: postVisits, error: postVisitsError } = await postVisitsQuery
		if (postVisitsError) throw postVisitsError
		const postCounts: Record<string, number> = {}
		postVisits.forEach(({ post_id }) => {
			if (post_id) postCounts[post_id] = (postCounts[post_id] || 0) + 1
		})
		const sortedPosts = Object.entries(postCounts).sort((a, b) => b[1] - a[1])
		const topPostId = sortedPosts[0]?.[0]

		// 5. Most active day
		let daysQuery = supabase
			.from('events')
			.select('created_at')
			.eq('event_type', 'page_view')
		daysQuery = baseFilter(daysQuery)
		const { data: days, error: daysError } = await daysQuery
		if (daysError) throw daysError
		const dayCounts: Record<string, number> = {}
		days.forEach(({ created_at }) => {
			const day = new Date(created_at).toISOString().split('T')[0]
			dayCounts[day] = (dayCounts[day] || 0) + 1
		})
		const mostActiveDay =
			Object.entries(dayCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

		// 6. Filter uses
		let filterUsesQuery = supabase
			.from('events')
			.select('*', { count: 'exact', head: true })
			.eq('event_type', 'filter_used')
		filterUsesQuery = baseFilter(filterUsesQuery)
		const { count: filterUses, error: filterUsesError } = await filterUsesQuery
		if (filterUsesError) throw filterUsesError

		return Response.json({
			pageViews: pageViews || 0,
			uniqueUsers: uniqueUsers || 0,
			mostVisitedPage,
			topPostId,
			mostActiveDay,
			filterUses: filterUses || 0
		})
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
