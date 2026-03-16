import { FilterByTopicDropdown } from '@/src/features/topics'
import { HeroSection } from '@/src/widgets'
import { TopicsList } from '@/src/widgets/topics'

export const Page = ({}) => {
	return (
		<main className="bg-[#fbfaf2] font-advent-pro-local">
			<HeroSection className="pb-20! md:pb-40! lg:pb-60!">
				<h1
					className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
					style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
				>
					Сэдвүүд
				</h1>
			</HeroSection>

			<section className="px-4 md:px-8 lg:px-12 xl:px-16">
				<div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
					<FilterByTopicDropdown />
				</div>
			</section>

			<TopicsList />
		</main>
	)
}

export default Page
