'use client'

import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'Menu' | 'Search'>('Menu')

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
        <div className="flex flex-col gap-2 z-20 p-4 py-8 bg-orange-400">
          <button
            onClick={() => toggleSidebar('Menu')}
            className="p-4 hover:bg-indigo-400 rounded-full text-black"
          >
            {isOpen && mode === 'Menu' ? <X /> : <Menu />}
          </button>

          <button
            onClick={() => toggleSidebar('Search')}
            className="p-4 hover:bg-indigo-400 rounded-full text-black"
          >
            {isOpen && mode === 'Search' ? <X /> : <Search />}
          </button>
        </div>
      </aside>

      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/40 z-40 pointer-events-none"
      />

      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-screen w-fit bg-orange-400 z-50 pr-22 flex items-center"
      >
        <div className="p-4 px-8 w-fit md:w-100 h-[calc(100%-6rem)] border-r-2 border-black flex justify-center">
          {mode === 'Menu' && (
            <nav className="flex flex-col gap-4 text-black w-full">
              <Link
                href="#"
                className="hover:underline underline-offset-4 text-4xl tracking-widest leading-16"
              >
                Нийтлэлүүд
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-4 text-4xl tracking-widest leading-16"
              >
                Улиралууд
              </Link>
              <Link
                href="#"
                className="hover:underline underline-offset-4 text-4xl tracking-widest leading-16"
              >
                Бидний тухай
              </Link>
            </nav>
          )}

          {mode === 'Search' && (
            <form className="flex flex-col gap-4 w-fit md:w-full">
              <input
                type="text"
                placeholder="Хайлт"
                className="outline-none w-full text-black text-4xl"
              />
              <ul>
                <li className="text-gray-700 text-4xl tracking-widest">Багийн гишүүн</li>
                <li className="text-gray-700 text-4xl tracking-widest">Нийтлэл</li>
                <li className="text-gray-700 text-4xl tracking-widest">Улирал</li>
              </ul>
              <button
                className="mt-auto border-2 border-black rounded-full w-fit px-8 py-2 uppercase text-2xl text-black flex items-center gap-2 cursor-pointer hover:bg-indigo-300 focus:bg-indigo-400"
                type="submit"
              >
                <span>Хайх</span>
                <Search />
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
