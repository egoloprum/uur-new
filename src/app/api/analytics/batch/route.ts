import { cookies } from 'next/headers'
import { batchSchema } from '@/src/shared/lib'
import { createServerSupabase } from '@/src/shared/db/supabase'
import { geolocation } from '@vercel/functions'

type EventRow = {
  visitor_id: string
  session_id: string
  event_type: string
  route: string
  post_id: string | null
  writer_id: string | null
  topic_id: string | null
  metadata: Record<string, unknown>
  user_agent: string | null
  country: string | null
  city: string | null
  created_at: Date
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin')

  if (!origin) {
    return new Response('Forbidden', { status: 403 })
  }

  const originHost = new URL(origin).host

  const allowedHosts = [
    new URL(process.env.NEXT_PUBLIC_DOMAIN!).host,
    new URL(process.env.NEXT_PUBLIC_LOCAL_DOMAIN!).host,
  ]

  if (!allowedHosts.includes(originHost)) {
    return new Response('Forbidden', { status: 403 })
  }

  const ua = req.headers.get('user-agent') || ''
  if (/bot|crawler|spider/i.test(ua)) {
    return Response.json({ ok: true })
  }

  const json = await req.json()
  const parsed = batchSchema.safeParse(json)
  if (!parsed.success) return new Response('invalid payload', { status: 400 })

  const cookieStore = await cookies()
  const visitor_id = cookieStore.get('visitor_id')?.value

  // const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  // const identifier = visitor_id || ip

  // const redis = Redis.fromEnv()
  // const key = `rate:${identifier}`
  // const count = await redis.incr(key)
  // if (count === 1) await redis.expire(key, 60)
  // if (count > 60) return new Response('Too many requests', { status: 429 })

  const session_id = cookieStore.get('session_id')?.value
  if (!visitor_id || !session_id) {
    return new Response('missing identity', { status: 400 })
  }

  const { city, country } = geolocation(req)

  const rows: EventRow[] = parsed.data.events.map(event => ({
    visitor_id,
    session_id,
    event_type: event.type,
    route: event.route,
    post_id: event.post_id ?? null,
    writer_id: event.writer_id ?? null,
    topic_id: event.topic_id ?? null,
    metadata: event.metadata ?? {},
    user_agent: ua,
    country: country ?? null,
    city: city ?? null,
    created_at: new Date(event.ts),
  }))

  const supabase = createServerSupabase()

  const { error } = await supabase.from('events').insert(rows)

  if (error) {
    return new Response(error, { status: 500 })
  }

  return Response.json({ ok: true })
}
