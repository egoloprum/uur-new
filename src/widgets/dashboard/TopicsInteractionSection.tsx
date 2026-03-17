'use client'

import { Pie, PieChart } from 'recharts'

import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/src/shared/shadcn/components/ui/chart'

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
		color: '#000'
	},
	tech: {
		label: 'Safari',
		color: '#a5b4fc'
	},
	art: {
		label: 'Firefox',
		color: '#fb923c'
	}
} satisfies ChartConfig

export function TopicsInteractionSection() {
	return (
		<div className="bg-[#fff5c4] flex flex-col gap-8 px-4 py-8 rounded-2xl">
			<h2 className="text-black md:text-2xl text-4xl">Topics Interactions</h2>
			<ChartContainer config={chartConfig} className="aspect-square pb-0">
				<PieChart>
					<ChartTooltip content={<ChartTooltipContent hideLabel />} />
					<Pie data={chartData} dataKey="interactions" label nameKey="topic" />
				</PieChart>
			</ChartContainer>
		</div>
	)
}
