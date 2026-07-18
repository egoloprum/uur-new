import clsx from 'clsx'
import { ReactNode } from 'react'

export const TopicsList = ({
	className,
	children
}: {
	className?: string
	children?: ReactNode
}) => {
	return (
		<div
			className={clsx([
				'flex flex-wrap md:flex-row md:items-center gap-2 max-sm:gap-x-4 md:gap-x-8',
				className
			])}
		>
			<p className="flex gap-2">
				<span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-(--topic-black) dark:bg-(--topic-black)"></span>
				<span className="tracking-wide uppercase text-nowrap text-sm md:text-base">
					Шинжлэх ухаан
				</span>
			</p>
			<p className="flex gap-2">
				<span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-(--blue) dark:bg-(--blue)"></span>
				<span className="tracking-wide uppercase text-nowrap text-sm md:text-base">
					Технологи
				</span>
			</p>
			<p className="flex gap-2">
				<span className="h-3 w-3 md:h-4 md:w-4 aspect-square rounded-full bg-(--orange) dark:bg-(--orange)"></span>
				<span className="tracking-wide uppercase text-nowrap text-sm md:text-base">
					Урлаг
				</span>
			</p>

			{children}
		</div>
	)
}
