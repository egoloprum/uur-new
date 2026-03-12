import { Breadcrumb, Logo } from '@/src/widgets'

export const HeroSection = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-20 relative overflow-hidden">
      <Logo />
      <Breadcrumb />
      <h1
        className="font-bold uppercase z-10 text-black tracking-wide mt-20 leading-12"
        style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
      >
        {title}
      </h1>
    </div>
  )
}
