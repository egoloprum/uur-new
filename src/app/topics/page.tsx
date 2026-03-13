import { FilterDropdown } from '@/src/features/topics'
import { HeroSection } from '@/src/widgets'
import { TopicsList } from '@/src/widgets/topics'

export const Page = ({}) => {
  return (
    <main className="bg-[#fbfaf2] font-advent-pro-local">
      <HeroSection title="Сэдвүүд" />

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
          <FilterDropdown />
        </div>
      </section>

      <TopicsList />
    </main>
  )
}

export default Page
