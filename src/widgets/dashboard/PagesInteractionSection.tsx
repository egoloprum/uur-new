'use client'

import * as React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { useApp } from '@/src/entities'
import { Button } from '@/src/shared/components'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/src/shared/shadcn/components/ui/chart'

interface DailyData {
	date: string
	desktop: number
	mobile: number
}

export function PagesInteractionSection() {
	const { filters } = useApp()
	const [data, setData] = React.useState<DailyData[]>([])
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState<string | null>(null)
	const [activeChart, setActiveChart] = React.useState<'desktop' | 'mobile'>(
		'desktop'
	)

	React.useEffect(() => {
		const fetchDaily = async () => {
			setLoading(true)
			setError(null)
			try {
				const params = new URLSearchParams()
				if (filters.seasonId) params.set('seasonId', filters.seasonId)
				const res = await fetch(`/api/analytics/pages/daily?${params}`)
				if (!res.ok) throw new Error('Failed to fetch daily page views')
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		fetchDaily()
	}, [filters.seasonId])

	const totals = React.useMemo(
		() => ({
			desktop: data.reduce((acc, curr) => acc + curr.desktop, 0),
			mobile: data.reduce((acc, curr) => acc + curr.mobile, 0)
		}),
		[data]
	)

	const chartConfig = {
		desktop: {
			label: 'Desktop',
			color: '#818cf8'
		},
		mobile: {
			label: 'Mobile',
			color: '#fbbf24'
		}
	} satisfies ChartConfig

	if (loading) {
		return (
			<div className="p-4 bg-[#fff5c4] text-black rounded-2xl">
				<div className="animate-pulse space-y-4">
					<div className="h-8 bg-gray-400 rounded w-1/3"></div>
					<div className="h-64 bg-gray-400 rounded"></div>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="p-4 bg-[#fff5c4] text-black rounded-2xl">
				<div className="text-red-600">Error: {error}</div>
			</div>
		)
	}

	return (
		<div className="p-4 bg-[#fff5c4] text-black rounded-2xl">
			<header className="flex flex-wrap justify-between gap-4">
				<div className="flex flex-col justify-center">
					<h2 className="text-2xl font-medium uppercase">Page interactions</h2>
					<p className="text-xl">
						{filters.seasonId
							? `Daily page views for selected season`
							: 'Daily page views (all time)'}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Button
						mode={activeChart === 'desktop' ? 'primary' : 'secondary'}
						className={activeChart === 'desktop' ? 'bg-orange-300' : ''}
						onClick={() => setActiveChart('desktop')}
					>
						<span>Desktop</span>
						<span className="ml-2 font-bold">{totals.desktop}</span>
					</Button>
					<Button
						mode={activeChart === 'mobile' ? 'primary' : 'secondary'}
						className={activeChart === 'mobile' ? 'bg-orange-300' : ''}
						onClick={() => setActiveChart('mobile')}
					>
						<span>Mobile</span>
						<span className="ml-2 font-bold">{totals.mobile}</span>
					</Button>
				</div>
			</header>
			<div className="py-8">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-100 w-full"
				>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{ left: 12, right: 12 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={value => {
								const date = new Date(value)
								return date.toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric'
								})
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-40 bg-white"
									labelFormatter={value => {
										return new Date(value).toLocaleDateString('en-US', {
											month: 'short',
											day: 'numeric',
											year: 'numeric'
										})
									}}
								/>
							}
						/>
						<Line
							dataKey={activeChart}
							type="monotone"
							stroke={`${activeChart === 'desktop' ? '#f43f5e' : '#8b5cf6'}`}
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</div>
		</div>
	)
}
