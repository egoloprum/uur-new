'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/src/shared/lib/analytics'

export function AnalyticsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    trackEvent({
      type: 'page_view',
      route: pathname,
    })
  }, [pathname])

  return null
}
