import { EachMemberPostsFilterDropdown, EachMemberPostsSortDropdown } from '@/src/features/about'
import { TopicsList } from '@/src/shared/components'
import {
  EachMemberPostsList,
  EachMemberAboutSection,
  EachMemberDescriptionSection,
  EachMemberHeroSection,
} from '@/src/widgets/about'

interface PageProps {
  params: {
    slug: string
  }
}

export const Page = async ({ params }: { params: Promise<PageProps['params']> }) => {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const decodedTitle = decodeURIComponent(slug)

  return (
    <main className="bg-[#fbfaf2] font-advent-pro">
      <EachMemberHeroSection slug={decodedTitle} />
      <EachMemberDescriptionSection slug={decodedTitle} />
      <EachMemberAboutSection slug={decodedTitle} />

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-md:flex-col gap-4 md:justify-between md:items-center">
          <div className="flex flex-wrap gap-4">
            <EachMemberPostsFilterDropdown />
            <EachMemberPostsSortDropdown />
          </div>
          <TopicsList className="flex-row flex-wrap max-sm:gap-x-4" />
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
          <h3 className="text-2xl font-semibold">Гишүүний нийтлэлүүд</h3>
        </div>
        <EachMemberPostsList slug={decodedTitle} />
      </section>
    </main>
  )
}

export default Page
