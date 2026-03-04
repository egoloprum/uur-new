'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MoveRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const getBgColor = (index: number) => {
  const colors = ['#000', '#a5b4fc', '#fb923c']
  return colors[index]
}

const getTextColor = (index: number) => {
  const colors = ['#fff', '#000', '#000']
  return colors[index]
}

export const DescriptionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const list = listRef.current
    if (!section || !list) return

    const items = gsap.utils.toArray<HTMLLIElement>(list.children)

    const ctx = gsap.context(() => {
      const getScrollDistance = () => list.scrollWidth - section.offsetWidth

      const horizontalTween = gsap.to(list, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=300',
          end: 'top top+=300',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          containerAnimation: horizontalTween,
          start: 'left center',
          end: 'right center',
          onEnter: () =>
            gsap.to(section, {
              backgroundColor: getBgColor(index),
              color: getTextColor(index),
              duration: 0.4,
            }),
          onEnterBack: () =>
            gsap.to(section, {
              backgroundColor: getBgColor(index),
              color: getTextColor(index),
              duration: 0.4,
            }),
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      <ul ref={listRef} className="flex gap-16 font-advent-pro font-bold tracking-widest">
        <li className="p-4 md:p-8 lg:p-12 xl:p-16 min-w-screen flex justify-between items-center gap-8">
          <span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
            Шинжлэх ухаан
          </span>
          <button className="flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 uppercase hover:bg-white hover:text-black cursor-pointer rounded-full transition-colors border md:border-2 text-xs sm:text-base md:text-xl">
            <span>Дэлгэрэнгүй</span>
            <MoveRight />
          </button>
        </li>
        <li className="p-4 md:p-8 lg:p-12 xl:p-16 min-w-screen flex justify-between items-center gap-8">
          <span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
            Технологи
          </span>
          <button className="flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 uppercase hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border md:border-2 text-xs sm:text-base md:text-xl">
            <span>Дэлгэрэнгүй</span>
            <MoveRight />
          </button>
        </li>
        <li className="p-4 md:p-8 lg:p-12 xl:p-16 min-w-screen flex justify-between items-center gap-8">
          <span className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap uppercase">
            Урлаг
          </span>
          <button className="flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 uppercase hover:bg-indigo-400 focus:bg-indigo-500 cursor-pointer rounded-full transition-colors border md:border-2 text-xs sm:text-base md:text-xl">
            <span>Дэлгэрэнгүй</span>
            <MoveRight />
          </button>
        </li>
      </ul>
    </div>
  )
}
