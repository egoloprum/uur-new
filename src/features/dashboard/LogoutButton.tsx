'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/src/shared/components'
import { createSupabaseBrowserClient } from '@/src/shared/db/supabase'

export const LogoutButton = () => {
	const router = useRouter()
	const supabase = createSupabaseBrowserClient()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleLogout = async () => {
		try {
			setIsLoading(true)
			await supabase.auth.signOut()
			router.push('/dashboard/login')
			router.refresh()
		} catch {
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Button
			mode="primary"
			className="bg-[#fff5c4] px-4"
			onClick={handleLogout}
			disabled={isLoading}
		>
			{isLoading ? 'Log out...' : 'Log out'}
		</Button>
	)
}
