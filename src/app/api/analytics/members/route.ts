import { createServerSupabase } from '@/src/shared/db/supabase'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		let query = supabase.from('events').select('member_id')
		if (seasonId) {
			query = query.eq('current_season_id', seasonId)
		}

		const { data, error } = await query
			.in('event_type', ['member_visit', 'post_visit'])
			.not('member_id', 'is', null)

		if (error) throw error

		const counts: Record<string, number> = {}
		data.forEach(({ member_id }) => {
			if (member_id) counts[member_id] = (counts[member_id] || 0) + 1
		})

		const result = Object.entries(counts).map(([memberId, count]) => ({
			memberId,
			count
		}))

		return Response.json(result)
	} catch (error) {
		console.error('Members stats error:', error)
		return new Response('Internal Server Error', { status: 500 })
	}
}
