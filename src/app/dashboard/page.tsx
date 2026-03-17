import { Button } from '@/src/shared/components'
import {
	FilterSection,
	GeneralInteractionSection,
	MembersInteractionSection,
	PagesInteractionSection,
	SeasonsInteractionSection,
	TopicsInteractionSection
} from '@/src/widgets/dashboard'

export const Page = ({}) => {
	return (
		<main className="bg-[#14110F] min-h-screen font-advent-pro-local p-4 md:p-8 lg:p-12 xl:p-16 space-y-8">
			<div className="flex justify-between items-center mb-16">
				<h1 className="text-6xl font-black uppercase tracking-wide">
					Uur Dashboard
				</h1>
				<Button mode="primary" className="bg-orange-300">
					Log out
				</Button>
			</div>
			<GeneralInteractionSection />
			<FilterSection />
			<div className="grid grid-cols-3 gap-4">
				<TopicsInteractionSection />
				<SeasonsInteractionSection />
				<MembersInteractionSection />
			</div>
			<PagesInteractionSection />
		</main>
	)
}

export default Page
