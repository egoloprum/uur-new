'use client'

import { useApp } from '@/src/entities'
import Image from 'next/image'

export const MemberAboutSection = ({ slug }: { slug: string }) => {
  const { getMemberBySlug } = useApp()
  const member = getMemberBySlug(slug)

  if (!member) {
    return null
  }

  return (
    <section className="p-4 md:p-8 lg:p-12 xl:p-16 sm:grid sm:grid-cols-12 flex flex-col max-sm:space-y-12">
      <div className="relative sm:col-span-5 lg:col-span-4 max-sm:h-150 max-md:h-125 max-lg:h-125 lg:h-150 xl:h-175">
        <Image src={member.imageUrl} className="object-cover" fill alt={`${member.name}.jpg`} />
      </div>
      <div className="sm:col-start-7 sm:col-span-6 lg:col-start-6 lg:col-span-7 grid sm:grid-rows-2 gap-8 md:gap-8 lg:gap-12 xl:gap-16 text-black">
        <div className="flex flex-col justify-between space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
          <h2 className="text-2xl lg:text-4xl font-semibold sm:text-end">
            ҮҮР-ээс гадуур юу хийдэг вэ?
          </h2>
          <p className="text-base md:text-xl lg:text-2xl">{member.description}</p>
        </div>
        <div className="flex flex-col justify-between space-y-4 md:space-y-8 lg:space-y-12 xl:space-y-16">
          <h2 className="text-2xl lg:text-4xl font-semibold sm:text-end">
            Ойрд уншиж, үзэж буй зүйлс
          </h2>
          <p className="text-base md:text-xl lg:text-2xl">{member.recentActivity}</p>
        </div>
      </div>
    </section>
  )
}
