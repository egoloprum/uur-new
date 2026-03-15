import { Breadcrumb, Logo } from '@/src/widgets'
import clsx from 'clsx'
import { ReactNode } from 'react'

export const HeroSection = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={clsx([
        'bg-[#fbfaf2] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-20 relative overflow-hidden',
        className,
      ])}
    >
      <Logo />
      <Breadcrumb />
      <div>{children}</div>
    </div>
  )
}
