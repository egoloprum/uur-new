import { FilterDropdown, SortDropdown } from '@/src/features/posts'
import { FilterByTopicDropdown } from '@/src/features/posts/FilterByTopicDropdown'
import { TopicsList } from '@/src/shared/components'
import { HeroSection } from '@/src/widgets'
import { PostsList } from '@/src/widgets/posts'

export const Page = ({}) => {
  return (
    <main className="bg-[#fbfaf2] font-advent-pro">
      <HeroSection title="Нийтлэлүүд" />

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center">
          <div className="flex flex-wrap max-sm:flex-col gap-4">
            <FilterDropdown />
            <FilterByTopicDropdown />
            <SortDropdown />
          </div>
          <TopicsList />
        </div>
      </section>

      <PostsList />
    </main>
  )
}

export default Page
