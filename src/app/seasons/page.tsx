import { FilterBySeasonDropdown } from '@/src/features/seasons'
import { TopicsList } from '@/src/shared/components'
import { HeroSection } from '@/src/widgets'
import { SeasonsList } from '@/src/widgets/seasons'

export const Page = ({}) => {
	return (
		<main className="bg-[#fbfaf2] font-advent-pro-local">
			<HeroSection className="pb-20! md:pb-40! lg:pb-60!">
				<h1
					className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
					style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
				>
					Улиралууд
				</h1>
			</HeroSection>

			<section className="px-4 md:px-8 lg:px-12 xl:px-16">
				<div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
					<FilterBySeasonDropdown />
					<TopicsList />
				</div>
			</section>
			<SeasonsList />
		</main>
	)
}

export default Page
