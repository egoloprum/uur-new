'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { trackEvent } from '@/src/shared/lib/analytics'

export function AnalyticsProvider() {
	const pathname = usePathname()

	useEffect(() => {
		trackEvent({
			type: 'page_view',
			route: pathname
		})
	}, [pathname])

	return null
}
