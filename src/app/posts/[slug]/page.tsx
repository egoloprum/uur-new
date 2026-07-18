import { EachPostHeroSection, EachArticleSection } from '@/src/widgets/posts'

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
		<main className="font-montserrat-alternates-local">
			<EachPostHeroSection slug={decodedTitle} />
			<EachArticleSection slug={decodedTitle} />
		</main>
	)
}

export default Page
