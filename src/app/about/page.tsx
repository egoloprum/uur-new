import { FilterByRoleDropdown, FilterDropdown, SortDropdown } from '@/src/features/about'
import { HeroSection } from '@/src/widgets'
import { MembersList } from '@/src/widgets/about'

export const Page = ({}) => {
  return (
    <main className="bg-[#fbfaf2] font-advent-pro">
      <HeroSection title="Багийн гишүүд" />

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center">
          <div className="flex flex-wrap max-sm:flex-col gap-4">
            <FilterDropdown />
            <FilterByRoleDropdown />
            <SortDropdown />
          </div>
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
            <span
              className="text-base text-black tracking-wide uppercase text-nowrap"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Энэ улиралын гишүүд
            </span>
          </p>
        </div>
      </section>

      <MembersList />
    </main>
  )
}

export default Page
