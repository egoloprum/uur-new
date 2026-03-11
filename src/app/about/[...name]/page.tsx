import {
  FilterPostsOfEachMemberDropdown,
  SortPostsOfEachMemberDropdown,
} from '@/src/features/about'
import { TopicsList } from '@/src/shared/components'
import { Breadcrumb, Logo } from '@/src/widgets'
import { EachMemberPostsList } from '@/src/widgets/about'
import Image from 'next/image'

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
          Цолмон
        </h1>
      </div>
      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-sm:flex-col gap-4 sm:justify-between sm:items-center">
          <ul className="flex flex-wrap gap-2 md:gap-4">
            <li
              className="text-black uppercase border rounded-full px-2 w-fit"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Координатор
            </li>
            <li
              className="text-black uppercase border rounded-full px-2 w-fit"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Координатор
            </li>
            <li
              className="text-black uppercase border rounded-full px-2 w-fit"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Координатор
            </li>
            <li
              className="text-black uppercase border rounded-full px-2 w-fit"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Координатор
            </li>
          </ul>
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
            <span
              className="text-base text-black tracking-wide uppercase text-nowrap"
              style={{ fontSize: 'clamp(.875rem, 2vw, 1.25rem)' }}
            >
              Энэ улиралын гишүүн
            </span>
          </p>
        </div>
      </section>

      <section className="p-4 md:p-8 lg:p-12 xl:p-16 sm:grid sm:grid-cols-12 flex flex-col max-sm:space-y-12">
        <div className="relative sm:col-span-5 lg:col-span-4 max-sm:h-150 max-md:h-125 max-lg:h-125 lg:h-150 xl:h-175">
          <Image src="/members/member-1.jpg" className="object-cover" fill alt="qwe" />
        </div>
        <div className="sm:col-start-7 sm:col-span-6 lg:col-start-6 lg:col-span-7 grid sm:grid-rows-2 gap-8 md:gap-8 lg:gap-12 xl:gap-16 text-black">
          <div className="flex flex-col justify-between space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
            <h2 className="text-2xl lg:text-4xl font-semibold sm:text-end">
              ҮҮР-ээс гадуур юу хийдэг вэ?
            </h2>
            <p className="text-base md:text-xl lg:text-2xl">
              Нүүрсхүчлийн хийгээс онгоцны түлш гарган авч буй стартапд механикийн инженер, циркийн
              трапезийн анхлан суралцагч
            </p>
          </div>
          <div className="flex flex-col justify-between space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
            <h2 className="text-2xl lg:text-4xl font-semibold sm:text-end">
              Ойрд уншиж, үзэж буй зүйлс
            </h2>
            <p className="text-base md:text-xl lg:text-2xl">
              Ойрд түүх сонирхож байгаа. Жак Уэтерфордын Монголын Их Хатдын Нууц Товчоо: Чингис
              хааны эзэнт гүрнийг охид нь аварч хамгаалсан түүх ном, Wiser World дэлхийн түүхийн
              подкаст, The Prince гэсэн нэртэй Ши Жинпиний тухай подкаст
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-gray-400 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-md:flex-col gap-4 md:justify-between md:items-center">
          <div className="flex flex-wrap gap-4">
            <FilterPostsOfEachMemberDropdown />
            <SortPostsOfEachMemberDropdown />
          </div>
          <TopicsList className="flex-row flex-wrap max-sm:gap-x-4" />
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-12 xl:px-16 text-black pb-16">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
          <h3 className="text-2xl font-semibold">Гишүүний нийтлэлүүд</h3>
        </div>
        <EachMemberPostsList />
      </section>
    </main>
  )
}

export default Page
