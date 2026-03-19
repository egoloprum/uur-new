import { NextRequest } from 'next/server'
import { createServerSupabase } from '@/src/shared/db/supabase'

function detectDevice(userAgent: string | null): 'mobile' | 'desktop' | 'bot' {
	if (!userAgent) return 'desktop'
	const ua = userAgent.toLowerCase()
	if (/bot|crawler|spider/i.test(ua)) return 'bot'
	if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(ua))
		return 'mobile'
	return 'desktop'
}

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const seasonId = searchParams.get('seasonId')

		const supabase = createServerSupabase()

		let query = supabase.from('events').select('created_at, user_agent')
		if (seasonId) {
			query = query.eq('current_season_id', seasonId)
		}
		query = query.eq('event_type', 'page_view')

		const { data, error } = await query
		if (error) throw error

		const dailyMap: Record<string, { desktop: number; mobile: number }> = {}

		data.forEach(({ created_at, user_agent }) => {
			const day = new Date(created_at).toISOString().split('T')[0]
			const device = detectDevice(user_agent)
			if (device === 'bot') return // skip bots

			if (!dailyMap[day]) {
				dailyMap[day] = { desktop: 0, mobile: 0 }
			}
			if (device === 'desktop') {
				dailyMap[day].desktop += 1
			} else if (device === 'mobile') {
				dailyMap[day].mobile += 1
			}
		})

		const sorted = Object.entries(dailyMap)
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([date, counts]) => ({
				date,
				desktop: counts.desktop,
				mobile: counts.mobile
			}))

		return Response.json(sorted)
	} catch {
		return new Response('Internal Server Error', { status: 500 })
	}
}
