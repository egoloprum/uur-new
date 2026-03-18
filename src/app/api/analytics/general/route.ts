// Returns all-time stats for the top cards (page views, unique users, most visited page/post, most active day, filter uses)

import { createServerSupabase } from '@/src/shared/db/supabase'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url)
	const seasonId = searchParams.get('seasonId')

	const supabase = createServerSupabase()

	// Build base query with optional season filter
	let query = supabase.from('events').select('*')
	if (seasonId) {
		query = query.eq('season_id', seasonId)
	}

	// Get all-time page views
	const { count: pageViews } = await query.eq('event_type', 'page_view')

	// Unique visitors (by visitor_id)
	const { data: uniqueVisitors } = await query
		.select('visitor_id')
		.eq('event_type', 'page_view')
	const uniqueUsers = new Set(uniqueVisitors?.map(v => v.visitor_id)).size

	// Most visited page (route)
	const { data: routeCounts } = await query
		.select('route')
		.eq('event_type', 'page_view')

	const routeFrequency = routeCounts?.reduce((acc, { route }) => {
		acc[route] = (acc[route] || 0) + 1
		return acc
	}, {})

	const mostVisitedPage =
		Object.entries(routeFrequency || {}).sort((a, b) => b[1] - a[1])[0]?.[0] ||
		'N/A'

	// Most visited post (join with posts table or use metadata?)
	// Option 1: use post_visit events and join with posts table to get title
	const { data: postVisits } = await query
		.select('post_id')
		.eq('event_type', 'post_visit')
		.not('post_id', 'is', null)
	// Count per post_id, then fetch post titles in a second query
	// ... (similar logic)

	// Most active day (by created_at)
	const { data: dayCounts } = await query
		.select('created_at')
		.eq('event_type', 'page_view')
	const dayFrequency = dayCounts?.reduce((acc, { created_at }) => {
		const day = new Date(created_at).toISOString().split('T')[0]
		acc[day] = (acc[day] || 0) + 1
		return acc
	}, {})
	const mostActiveDay =
		Object.entries(dayFrequency || {}).sort((a, b) => b[1] - a[1])[0]?.[0] ||
		'N/A'

	// Filter uses
	const { count: filterUses } = await query.eq('event_type', 'filter_used')

	return Response.json({
		pageViews,
		uniqueUsers,
		mostVisitedPage,
		mostVisitedPost: '…', // implement similarly
		mostActiveDay,
		filterUses
	})
}
