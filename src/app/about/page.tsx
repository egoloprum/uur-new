import { Button } from '@/src/shared/components'
import { Breadcrumb, Logo } from '@/src/widgets'
import { MembersSection } from '@/src/widgets/about'
import { ChevronDown } from 'lucide-react'

export const Page = ({}) => {
  return (
    <main className="bg-[#fbfaf2] font-advent-pro">
      <div className="bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-20 relative overflow-hidden">
        <Logo />
        <Breadcrumb />
        <h1 className="font-bold uppercase z-10 text-black text-6xl md:text-[8rem] tracking-wide mt-20">
          Багийн гишүүд
        </h1>
      </div>
      <section className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="border-y border-black py-4 md:py-8 lg:py-12 xl:py-16 flex gap-4 justify-between">
          <Button mode="primary" type="button">
            <span>Улиралууд</span>
            <ChevronDown />
          </Button>
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
            <span className="text-base text-black tracking-wide uppercase text-nowrap">
              Энэ улиралын гишүүд
            </span>
          </p>
        </div>
      </section>
      <MembersSection />
    </main>
  )
}

export default Page
