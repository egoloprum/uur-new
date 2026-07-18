import {
	FilterBySeasonDropdown,
	FilterByTopicDropdown
} from '@/src/features/posts'
import { TopicsList } from '@/src/shared/components'
import { HeroSection } from '@/src/widgets'
import { PostsList } from '@/src/widgets/posts'

export const Page = ({}) => {
	return (
		<main className="font-montserrat-alternates-local">
			<HeroSection className="pb-20!">
				<h1
					className="font-bold uppercase z-10 tracking-wide mt-20 leading-12"
					style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
				>
					Нийтлэлүүд
				</h1>
			</HeroSection>

			<section className="px-4 md:px-8 lg:px-12 xl:px-16">
				<div className="border-y border-stone-400 dark:border-stone-500 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center">
					<div className="flex flex-wrap max-sm:flex-col gap-4">
						<FilterBySeasonDropdown />
						<FilterByTopicDropdown />
						{/* <SortDropdown /> */}
					</div>
					<TopicsList />
				</div>
			</section>

			<PostsList />
		</main>
	)
}

export default Page
