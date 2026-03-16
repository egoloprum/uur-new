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
  writer_id?: string
  topic_id?: string
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
    'filter_used',
  ]),
  route: z.string(),
  post_id: z.string().optional(),
  writer_id: z.string().optional(),
  topic_id: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  ts: z.number(),
})

export const batchSchema = z.object({
  events: z.array(eventSchema).max(100),
})
