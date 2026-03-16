'use client'

import { gsap } from 'gsap'
import { useRef, useLayoutEffect } from 'react'

export const HeroSection = () => {
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const elements = [
      text1Ref.current,
      text2Ref.current,
      text3Ref.current
    ].filter(Boolean)
    if (elements.length === 0) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        elements.forEach(el => {
          const xRange = 60
          const yRange = 60
          const duration = gsap.utils.random(4, 8)
          const delay = gsap.utils.random(0, 2)

          gsap
            .timeline({ repeat: -1, yoyo: true, delay })
            .to(el, {
              x: gsap.utils.random(-xRange, xRange),
              y: gsap.utils.random(-yRange, yRange),
              duration: duration / 2,
              ease: 'sine.inOut'
            })
            .to(el, {
              x: gsap.utils.random(-xRange, xRange),
              y: gsap.utils.random(-yRange, yRange),
              duration: duration / 2,
              ease: 'sine.inOut'
            })
        })

        return () => {}
      })
    }, elements)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-[#fbfaf2] lg:min-h-dvh p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col max-sm:gap-40 max-md:gap-60 max-lg:gap-80 relative overflow-hidden">
      <section className="flex flex-col justify-between">
        <h1 className="font-bold uppercase z-10">
          <span className="block text-8xl md:text-[10rem] tracking-wide text-black">
            Үүр
          </span>
          <span className="block text-6xl md:text-[6rem] tracking-wide text-orange-500">
            Товхимол
          </span>
        </h1>
      </section>

      <section className="grow flex flex-col justify-between gap-20">
        <div
          ref={text1Ref}
          className="text-black lg:absolute lg:top-40 lg:right-24 will-change-transform">
          <span className="text-xl md:text-2xl">[01]</span>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Нар мандахын өмнөх хэсэг үе
          </p>
        </div>

        <div
          ref={text2Ref}
          className="text-black lg:absolute lg:bottom-24 lg:left-24 will-change-transform ml-auto">
          <span className="text-xl md:text-2xl">[02]</span>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Амьтны орогнох оромж
          </p>
        </div>

        <div
          ref={text3Ref}
          className="text-black lg:absolute lg:bottom-24 lg:right-24 will-change-transform">
          <span className="text-xl md:text-2xl">[03]</span>
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Өнө мөнх
          </p>
        </div>
      </section>
    </div>
  )
}
