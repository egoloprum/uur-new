'use client'

import { useApp } from '@/src/entities'
import { LatestPostsScroll } from '@/src/features/landing'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const LatestPostsSection = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const { getPostsByLatest } = useApp()

  const posts = getPostsByLatest()
  const currentPost = posts[currentIndex]

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? posts.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === posts.length - 1 ? 0 : prev + 1))
  }

  const handleToggle = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, currentIndex])

  return (
    <div className="bg-indigo-300 h-fit md:min-h-screen p-4 md:p-8 lg:p-12 xl:p-16 gap-y-8 grid md:grid-cols-12 relative">
      <div className="md:col-span-6 flex flex-col gap-8">
        <p className="uppercase text-black text-lg">Сүүлчийн нийтлэлүүд</p>
        <div className="space-y-4">
          <h3 className="text-4xl text-black font-bold">{currentPost.name}</h3>
          <p className="text-black text-xl h-20 line-clamp-4">{currentPost.description}</p>
        </div>
        <Link
          href={`/posts/${currentPost.slug}`}
          className="p-4 py-2 border-2 rounded-full w-fit hover:bg-orange-400 focus:bg-orange-500 text-black hover:text-black font-bold tracking-widest"
        >
          Цааш унших
        </Link>
      </div>
      <div className="min-h-100 max-md:mb-20 md:col-start-8 md:col-span-5 xl:col-start-9 xl:col-span-4 relative">
        <Image
          src={currentPost.imageUrl}
          className="object-cover"
          fill
          alt={currentPost.imageAlt}
        />
      </div>
      <div className="mt-auto absolute bottom-4 md:bottom-8 lg:bottom-12 xl:bottom-16 left-4 md:left-8 lg:left-12 xl:left-16">
        <LatestPostsScroll
          onPrev={handlePrev}
          onNext={handleNext}
          onToggle={handleToggle}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  )
}
