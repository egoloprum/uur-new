import { Breadcrumb, Logo } from '@/src/widgets'

export const Page = ({}) => {
  return (
    <main className="space-y-16 bg-[#fbfaf2]">
      <div className="bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-20 font-advent-pro relative overflow-hidden">
        <Logo />
        <Breadcrumb />
        <h1 className="font-bold uppercase z-10 text-black text-6xl md:text-[8rem] tracking-wide mt-20">
          Багийн гишүүд
        </h1>
      </div>
    </main>
  )
}

export default Page
