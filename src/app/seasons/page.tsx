import { FilterDropdown } from '@/src/features/seasons'
import { TopicsList } from '@/src/shared/components'
import { Breadcrumb, Logo } from '@/src/widgets'
import { SeasonsList } from '@/src/widgets/seasons'

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
          Улиралууд
        </h1>
      </div>

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
          <FilterDropdown />
          <TopicsList />
        </div>
      </section>
      <SeasonsList />
    </main>
  )
}

export default Page
