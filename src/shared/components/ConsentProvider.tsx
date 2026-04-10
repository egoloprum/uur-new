'use client'

import { useEffect, useEffectEvent, useState } from 'react'

import { CookieSection } from '@/src/widgets'

export const ConsentProvider = () => {
	const [accepted, setAccepted] = useState<boolean | null>(null)

	const setConsent = useEffectEvent((hasConsent: boolean | null) => {
		setAccepted(hasConsent)
	})

	useEffect(() => {
		const hasConsent = document.cookie
			.split('; ')
			.some(row => row.startsWith('cookie_consent='))

		setConsent(hasConsent)
	}, [])

	if (accepted === null) return null
	if (accepted) return null

	return <CookieSection onAccept={() => setAccepted(true)} />
}
