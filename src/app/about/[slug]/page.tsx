import {
	EachMemberAboutSection,
	EachMemberDescriptionSection,
	EachMemberHeroSection,
	EachMemberFilterSection,
	EachMemberPostsSection
} from '@/src/widgets/about'

interface PageProps {
	params: {
		slug: string
	}
}

export const Page = async ({
	params
}: {
	params: Promise<PageProps['params']>
}) => {
	const resolvedParams = await params
	const { slug } = resolvedParams
	const decodedTitle = decodeURIComponent(slug)

	return (
		<main className="font-advent-pro-local">
			<EachMemberHeroSection slug={decodedTitle} />
			<EachMemberDescriptionSection slug={decodedTitle} />
			<EachMemberAboutSection slug={decodedTitle} />
			<EachMemberFilterSection slug={decodedTitle} />
			<EachMemberPostsSection slug={decodedTitle} />
		</main>
	)
}

export default Page
