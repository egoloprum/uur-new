'use client'

import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/src/shared/shadcn/components/ui/chart'

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

const chartData = [
	{ topic: 'Шинжлэх ухаан', interactions: 275, fill: '#000' },
	{ topic: 'Технологи', interactions: 200, fill: '#a5b4fc' },
	{ topic: 'Урлаг', interactions: 187, fill: '#fb923c' }
]

const chartConfig = {
	interactions: {
		label: 'Interactions'
	},
	science: {
		label: 'Chrome',
		color: 'var(--chart-1)'
	},
	tech: {
		label: 'Safari',
		color: 'var(--chart-2)'
	},
	art: {
		label: 'Firefox',
		color: 'var(--chart-3)'
	}
} satisfies ChartConfig

export function CountriesInteractionSection() {
	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">
				Countries Interactions
			</h2>
			<ChartContainer config={chartConfig} className="aspect-square pb-0">
				<RadarChart data={chartData}>
					<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
					<PolarAngleAxis dataKey="month" />
					<PolarGrid />
					<Radar
						dataKey="desktop"
						fill="#000"
						fillOpacity={0.6}
						dot={{
							r: 4,
							fillOpacity: 1
						}}
					/>
				</RadarChart>
			</ChartContainer>
		</div>
	)
}
