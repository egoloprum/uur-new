import { createServerSupabase } from '@/src/shared/db/supabase'
import { NextRequest } from 'next/server'

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
			.eq('event_type', 'source_visit')
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

		const total = result.reduce((acc, cur) => acc + cur.count, 0)

		return Response.json({ total, byPost: result })
	} catch (error) {
		console.error('Sources stats error:', error)
		return new Response('Internal Server Error', { status: 500 })
	}
}
