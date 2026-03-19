import { z } from 'zod'

export type AnalyticsEventType =
	| 'page_view'
	| 'source_visit'
	| 'post_visit'
	| 'topic_visit'
	| 'season_visit'
	| 'member_visit'
	| 'filter_used'

export type AnalyticsEvent = {
	type: AnalyticsEventType
	route: string
	post_id?: string
	member_id?: string
	topic_id?: string
	season_id?: string
	metadata?: Record<string, unknown>
	ts: number
}

const eventSchema = z.object({
	type: z.enum([
		'page_view',
		'source_visit',
		'post_visit',
		'topic_visit',
		'season_visit',
		'member_visit',
		'filter_used'
	]),
	route: z.string(),
	post_id: z.string().optional(),
	member_id: z.string().optional(),
	topic_id: z.string().optional(),
	season_id: z.string().optional(),
	metadata: z.record(z.string(), z.unknown()).optional(),
	ts: z.number()
})

export const batchSchema = z.object({
	events: z.array(eventSchema).max(100)
})

export const routes: Record<string, string> = {
	posts: 'Нийтлэлүүд',
	seasons: 'Улиралууд',
	topics: 'Сэдвүүд',
	about: 'Бидний тухай',
	'/': 'Нүүр',
	'Bidnii-anzaardaggui-AI-iin-nuutsuud': 'Бидний анзаардаггүй AI-ын нууцууд',
	Jazz: 'Жазз',
	'Suunii-paradoks': 'Сүүний парадокс',
	Tsolmon: 'Цолмон',
	Undariya: 'Ундаръяа',
	Minjinsor: 'Минжинсор',
	'Munkh-Orgil': 'Мөнх-Оргил',
	'Bat-Ireedui': 'Бат-Ирээдүй',
	Ankhmandakh: 'Aнхмандах',
	Amar: 'Aмар',
	Ganbayar: 'Ганбаяр',
	'Gan-Erdene': 'Ган-Эрдэнэ'
}
