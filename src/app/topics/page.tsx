import { FilterByTopicDropdown } from '@/src/features/topics'
import { HeroSection } from '@/src/widgets'
import { TopicsList } from '@/src/widgets/topics'
import clsx from 'clsx'

export const Page = ({}) => {
	return (
		<main className="font-montserrat-alternates-local">
			<HeroSection className="">
				<h1
					className={clsx(
						'font-bold uppercase z-10 tracking-wide leading-[1.1]',
						'text-[calc(8vw+0.5rem)] md:text-6xl lg:text-8xl'
					)}
				>
					Сэдвүүд
				</h1>
			</HeroSection>

			<section className="px-4 md:px-8 lg:px-12 xl:px-16">
				<div
					className={clsx(
						'border-y border-stone-400 dark:border-stone-500',
						'py-4 md:py-8 lg:py-12 xl:py-16',
						'flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center'
					)}
				>
					<FilterByTopicDropdown />
				</div>
			</section>

			<TopicsList />
		</main>
	)
}

export default Page
