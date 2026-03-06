'use client'

import { Menu, MoveRight, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/src/shared/components'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'Menu' | 'Search'>('Menu')

  const pathname = usePathname()

  console.log({ pathname })

  const panelRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const toggleSidebar = (type: 'Menu' | 'Search') => {
    if (!isOpen) {
      setMode(type)
      setIsOpen(true)
      return
    }

    if (type === mode) {
      setIsOpen(false)
      return
    }

    setMode(type)
  }

  useLayoutEffect(() => {
    const panel = panelRef.current
    const overlay = overlayRef.current
    if (!panel || !overlay) return

    if (isOpen) {
      gsap.set(panel, { xPercent: 100 })
      gsap.set(overlay, { opacity: 0, pointerEvents: 'none' })

      gsap.to(panel, {
        xPercent: 0,
        duration: 0.45,
        ease: 'power3.out',
      })

      gsap.to(overlay, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(panel, {
        xPercent: 100,
        duration: 0.4,
        ease: 'power3.in',
      })

      gsap.to(overlay, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.25,
        ease: 'power2.in',
      })
    }
  }, [isOpen])

  return (
    <>
      <aside className="fixed top-0 right-0 z-100">
        <div className="flex flex-col gap-2 z-20 px-1 py-8 bg-[#fb923c] border-l border-b md:border-l-2 md:border-b-2 border-black">
          <Button onClick={() => toggleSidebar('Menu')} className="p-2! md:p-4! border-none">
            {isOpen && mode === 'Menu' ? <X /> : <Menu />}
          </Button>
          <Button onClick={() => toggleSidebar('Search')} className="p-2! md:p-4! border-none">
            {isOpen && mode === 'Search' ? <X /> : <Search />}
          </Button>
        </div>
      </aside>

      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/40 z-40 pointer-events-none"
      />

      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-dvh w-fit bg-[#fb923c] z-50 pr-12 md:pr-16 flex items-center font-advent-pro"
      >
        <div className="py-20 px-4 md:py-4 md:px-8 w-fit md:w-100 h-[calc(100vh-6rem)] border-r md:border-r-2 border-black flex justify-center">
          {mode === 'Menu' && (
            <nav className="flex flex-col gap-4 w-fit md:w-full text-black text-2xl md:text-4xl tracking-wide font-medium underline underline-offset-8">
              <Link
                href="/posts"
                className="w-60 flex text-nowrap items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <span>Нийтлэлүүд</span>
                <MoveRight className="w-6 h-6" />
              </Link>
              <Link
                href="seasons"
                className="w-60 flex text-nowrap items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <span>Улиралууд</span>
                <MoveRight className="w-6 h-6" />
              </Link>
              <Link
                href="topics"
                className="w-60 flex text-nowrap items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <span>Сэдвүүд</span>
                <MoveRight className="w-6 h-6" />
              </Link>
              <Link
                href="about"
                className="w-60 flex text-nowrap items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <span>Бидний тухай</span>
                <MoveRight className="w-6 h-6" />
              </Link>
              {pathname !== '/' && (
                <Link
                  href="/"
                  className="w-60 flex text-nowrap items-center gap-4"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Нүүр</span>
                  <MoveRight className="w-6 h-6" />
                </Link>
              )}
            </nav>
          )}

          {mode === 'Search' && (
            <form className="flex flex-col gap-4 w-fit md:w-full">
              <input
                type="text"
                placeholder="Хайлт"
                className="outline-none w-60 text-black text-2xl md:text-4xl"
              />
              <ul className="text-2xl md:text-4xl tracking-wide font-medium w-60">
                <li className="text-gray-700">Багийн гишүүн</li>
                <li className="text-gray-700">Нийтлэл</li>
                <li className="text-gray-700">Улирал</li>
              </ul>
              <Button type="submit" mode="secondary" className="mt-auto px-4!">
                <span>Хайх</span>
                <Search className="w-4 h-4 md:w-6 md:h-6" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
