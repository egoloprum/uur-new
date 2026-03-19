import { NextRequest } from 'next/server'

import { createServerSupabase } from '@/src/shared/db/supabase'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		let query = supabase.from('events').select('season_id')
		if (seasonId) {
			query = query.eq('current_season_id', seasonId)
		}

		const { data, error } = await query
			.in('event_type', ['season_visit', 'filter_used'])
			.not('season_id', 'is', null)

		if (error) throw error

		const counts: Record<string, number> = {}
		data.forEach(({ season_id }) => {
			if (season_id) counts[season_id] = (counts[season_id] || 0) + 1
		})

		const result = Object.entries(counts).map(([seasonId, count]) => ({
			seasonId,
			count
		}))

		return Response.json(result)
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
