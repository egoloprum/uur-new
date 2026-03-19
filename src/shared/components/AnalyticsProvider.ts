'use client'

import { useEffect } from 'react'

import { useTrackEvent } from '@/src/shared/lib/analytics'

export function AnalyticsProvider() {
	const trackEvent = useTrackEvent()

	useEffect(() => {
		trackEvent({
			type: 'page_view'
		})
	}, [trackEvent])

	return null
}
