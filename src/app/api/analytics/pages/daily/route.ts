import { NextRequest } from 'next/server'

import { createServerSupabase } from '@/src/shared/db/supabase'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		let query = supabase.from('events').select('created_at')
		if (seasonId) {
			query = query.eq('season_id', seasonId)
		}

		const { data, error } = await query.eq('event_type', 'page_view')

		if (error) throw error

		const daily: Record<string, number> = {}
		data.forEach(({ created_at }) => {
			const day = new Date(created_at).toISOString().split('T')[0]
			daily[day] = (daily[day] || 0) + 1
		})

		// Sort by date ascending
		const sorted = Object.entries(daily)
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([date, count]) => ({ date, count }))

		return Response.json(sorted)
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
