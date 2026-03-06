'use client'

import { useApp } from '@/src/entities'
import { Button } from '@/src/shared/components'
import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { getActiveSeasons, setSelectedSeasonId } = useApp()
  const seasons = getActiveSeasons()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        mode="primary"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>Улиралууд</span>
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-[#fbfaf2] shadow-lg border border-black focus:outline-none z-50"
          role="listbox"
        >
          <ul className="">
            {seasons.map(season => (
              <li key={season.id}>
                <button
                  className="block w-full px-4 py-2 text-left text-black hover:bg-indigo-300 focus:bg-indigo-400 cursor-pointer"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                  role="option"
                  aria-selected
                  onClick={() => {
                    setIsOpen(false)
                    setSelectedSeasonId(season.id)
                  }}
                >
                  {season.name}
                </button>
              </li>
            ))}
            <li>
              <button
                className="block w-full px-4 py-2 text-left text-black hover:bg-indigo-300 focus:bg-indigo-400 cursor-pointer border-t"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                role="option"
                aria-selected
                onClick={() => {
                  setIsOpen(false)
                  setSelectedSeasonId('')
                }}
              >
                Бүх гишүүд
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
