import { NextRequest } from 'next/server'

import { createServerSupabase } from '@/src/shared/db/supabase'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		let query = supabase.from('events').select('post_id')
		if (seasonId) {
			query = query.eq('current_season_id', seasonId)
		}

		const { data, error } = await query
			.in('event_type', ['member_visit', 'post_visit'])
			.not('post_id', 'is', null)

		if (error) throw error

		const counts: Record<string, number> = {}
		data.forEach(({ post_id }) => {
			if (post_id) counts[post_id] = (counts[post_id] || 0) + 1
		})

		const result = Object.entries(counts).map(([postId, count]) => ({
			postId,
			count
		}))

		return Response.json(result)
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
