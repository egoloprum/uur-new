import { redirect } from 'next/navigation'

import { LoginForm } from '@/src/features/dashboard'
import { createServerSupabase } from '@/src/shared/db/supabase'

export const Page = async ({}) => {
	const supabase = await createServerSupabase()
	const {
		data: { user }
	} = await supabase.auth.getUser()

	if (user) {
		redirect('/dashboard')
	}

	return (
		<main className="min-h-screen flex justify-center items-center font-advent-pro-local bg-[#14110F] px-4 sm:px-8">
			<LoginForm />
		</main>
	)
}

export default Page
