import { FilterDropdown, SortDropdown } from '@/src/features/posts'
import { FilterByTopicDropdown } from '@/src/features/posts/FilterByTopicDropdown'
import { TopicsList } from '@/src/shared/components'
import { Breadcrumb, Logo } from '@/src/widgets'
import { PostsList } from '@/src/widgets/posts'

export const Page = ({}) => {
  return (
    <main className="bg-[#fbfaf2] font-advent-pro">
      <div className="bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-20 relative overflow-hidden">
        <Logo />
        <Breadcrumb />
        <h1
          className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
          style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
        >
          Нийтлэлүүд
        </h1>
      </div>

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-4">
            <FilterDropdown />
            <SortDropdown />
            <FilterByTopicDropdown />
          </div>
          <TopicsList />
        </div>
      </section>

      <PostsList />
    </main>
  )
}

export default Page
