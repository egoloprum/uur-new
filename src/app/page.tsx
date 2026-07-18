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
		<main className="space-y-16 font-montserrat-alternates-local">
			<HeroSection />
			<DescriptionSection />
			<CurrentSeasonPostsSection />
			<CurrentSeasonTeamSection />
			<PreviousSeasonPostsSection />
			<AboutSection />
		</main>
	)
}
