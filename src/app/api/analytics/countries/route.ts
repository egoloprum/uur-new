import { NextRequest } from 'next/server'

import { createServerSupabaseWithoutAuth } from '@/src/shared/db/supabase'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabaseWithoutAuth()

		let query = supabase.from('events').select('country')
		if (seasonId) {
			query = query.eq('current_season_id', seasonId)
		}

		const { data, error } = await query
			.eq('event_type', 'page_view')
			.not('country', 'is', null)

		if (error) throw error

		const counts: Record<string, number> = {}
		data.forEach(({ country }) => {
			if (country) counts[country] = (counts[country] || 0) + 1
		})

		const result = Object.entries(counts).map(([country, count]) => ({
			country,
			count
		}))

		return Response.json(result)
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
