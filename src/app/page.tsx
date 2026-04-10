import {
	CurrentSeasonPostsSection,
	DescriptionSection,
	HeroSection,
	PreviousSeasonPostsSection,
	CurrentSeasonTeamSection,
	AboutSection
} from '../widgets/landing'

export default function Home() {
	return (
		<main className="space-y-16 font-advent-pro-local">
			<HeroSection />
			<DescriptionSection />
			<CurrentSeasonPostsSection />
			<CurrentSeasonTeamSection />
			<PreviousSeasonPostsSection />
			<AboutSection />
		</main>
	)
}
