'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Input } from '@/src/shared/components'
import { createSupabaseBrowserClient } from '@/src/shared/db/supabase'

const loginSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters')
})

type LoginFormData = z.infer<typeof loginSchema>

export const LoginForm = ({}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const router = useRouter()
	const supabase = createSupabaseBrowserClient()

	const onSubmit = async (data: LoginFormData) => {
		setIsLoading(true)
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password
			})

			if (error) {
				setError('root', {
					message: error.message || 'Invalid credentials. Please try again.'
				})
				return
			}

			router.push('/dashboard')
			router.refresh()
		} catch {
			setError('root', {
				message: 'Invalid credentials. Please try again.'
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-4 py-8 md:p-8 md:py-16 rounded-2xl w-120 flex flex-col gap-4 bg-indigo-300"
		>
			<h1 className="text-2xl md:text-4xl font-bold uppercase text-black">
				Uur dashboard
			</h1>
			<p className="text-xl text-black">
				By entering your information, you can see your own stats and
				interactions.
			</p>

			<Input
				label="email"
				id="email"
				type="email"
				placeholder="you@example.com"
				disabled={isLoading}
				hasError={!!errors.email}
				text={errors.email?.message}
				{...register('email')}
			/>

			<Input
				label="password"
				id="password"
				type={showPassword ? 'text' : 'password'}
				placeholder="••••••••"
				disabled={isLoading}
				hasError={!!errors.password}
				text={errors.password?.message}
				{...register('password')}
			>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="mr-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label={showPassword ? 'Hide password' : 'Show password'}
				>
					{showPassword ? (
						<EyeOff className="w-4 h-4" />
					) : (
						<Eye className="w-4 h-4" />
					)}
				</button>
			</Input>

			{errors.root && (
				<p className="text-base md:text-lg text-red-600">
					{errors.root.message}
				</p>
			)}

			<Button
				mode="primary"
				className="bg-orange-300 w-full justify-center mt-4"
				type="submit"
				disabled={isLoading}
			>
				{isLoading ? 'Signing in...' : 'Sign in'}
			</Button>
		</form>
	)
}
