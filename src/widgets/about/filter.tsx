import { FilterDropdown } from '@/src/features/about'

export const FilterSection = ({}) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap gap-4 justify-between items-center">
        <FilterDropdown />
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
  )
}
