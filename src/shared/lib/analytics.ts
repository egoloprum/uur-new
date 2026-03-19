'use client'

import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

import { AnalyticsEvent } from './types'

const BUFFER_LIMIT = 10
const FLUSH_INTERVAL = 10000

let buffer: AnalyticsEvent[] = []
let intervalId: ReturnType<typeof setInterval> | null = null

function flush() {
	if (buffer.length === 0) return

	const events = [...buffer]
	buffer = []

	const payload = { events }

	if (navigator.sendBeacon) {
		const blob = new Blob([JSON.stringify(payload)], {
			type: 'application/json'
		})
		navigator.sendBeacon('/api/analytics/batch', blob)
	} else {
		fetch('/api/analytics/batch', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			keepalive: true,
			credentials: 'same-origin'
		}).catch(() => {
			buffer.unshift(...events)
		})
	}
}

if (typeof window !== 'undefined') {
	intervalId = setInterval(flush, FLUSH_INTERVAL)

	window.addEventListener('visibilitychange', () => {
		if (document.visibilityState === 'hidden') {
			flush()
		}
	})

	window.addEventListener('beforeunload', () => {
		if (intervalId) clearInterval(intervalId)
		flush()
	})
}

export function useTrackEvent() {
	const pathname = usePathname()

	return useCallback(
		(event: Omit<AnalyticsEvent, 'ts' | 'route'>) => {
			if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
				return
			}

			const item: AnalyticsEvent = {
				...event,
				ts: Date.now(),
				route: pathname
			}

			buffer.push(item)
			if (buffer.length >= BUFFER_LIMIT) {
				flush()
			}
		},
		[pathname]
	)
}
