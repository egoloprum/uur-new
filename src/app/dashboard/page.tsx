import { Button } from '@/src/shared/components'
import {
	CountriesInteractionSection,
	FilterSection,
	GeneralInteractionSection,
	MembersInteractionSection,
	PagesInteractionSection,
	PostsInteractionSection,
	SeasonsInteractionSection,
	TopicsInteractionSection,
	SourcesInteractionSection
} from '@/src/widgets/dashboard'

export const Page = ({}) => {
	return (
		<main className="bg-[#14110F] min-h-screen font-advent-pro-local p-4 md:p-8 lg:p-12 xl:p-16 space-y-8">
			<div className="flex justify-between items-center mb-16">
				<h1 className="text-3xl md:text-6xl font-black uppercase tracking-wide text-[#fff5c4]">
					Uur Dashboard
				</h1>
				<Button mode="primary" className="bg-[#fff5c4]">
					Log out
				</Button>
			</div>
			<GeneralInteractionSection />
			<FilterSection />
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<TopicsInteractionSection />
				<SeasonsInteractionSection />
				<MembersInteractionSection />
				<CountriesInteractionSection />
				<PostsInteractionSection />
				<SourcesInteractionSection />
			</div>
			<PagesInteractionSection />
		</main>
	)
}

export default Page
