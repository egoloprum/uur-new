'use client'

import { useApp } from '@/src/entities'
import { LatestPostsScroll } from '@/src/features/landing'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useEffectEvent, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export const LatestPostsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)

  const { getPostsByLatest } = useApp()
  const posts = getPostsByLatest()
  const currentPost = posts[currentIndex]

  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animatingRef = useRef(false)

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext()
      }, 5000)
    }
  }

  const handlePrev = () => {
    if (animatingRef.current) return

    setCurrentIndex(prev => (prev === 0 ? posts.length - 1 : prev - 1))

    resetTimer()
  }

  const handleNext = () => {
    if (animatingRef.current) return

    setCurrentIndex(prev => (prev === posts.length - 1 ? 0 : prev + 1))

    resetTimer()
  }

  const handleToggle = () => {
    setIsPlaying(prev => !prev)
  }

  const onNext = useEffectEvent(handleNext)

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      onNext()
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  useLayoutEffect(() => {
    if (!textRef.current || !imageRef.current) return

    animatingRef.current = true
    setIsDisabled(true)

    const tl = gsap.timeline({
      onComplete: () => {
        animatingRef.current = false
        setIsDisabled(false)
      },
    })

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
    )

    tl.fromTo(
      textRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
      },
      '-=0.5'
    )
  }, [currentIndex])

  return (
    <div className="bg-indigo-300 h-fit md:min-h-screen p-4 md:p-8 lg:p-12 xl:p-16 gap-y-8 grid md:grid-cols-12 relative">
      <div ref={textRef} className="md:col-span-6 flex flex-col gap-8">
        <p className="uppercase text-black text-lg">Сүүлчийн нийтлэлүүд</p>

        <div className="space-y-4">
          <h3 className="text-4xl text-black font-bold">{currentPost.name}</h3>
          <p className="text-black text-xl h-20 line-clamp-4">{currentPost.description}</p>
        </div>

        <Link
          href={`/posts/${currentPost.slug}`}
          className="p-4 py-2 border-2 rounded-full w-fit hover:bg-orange-400 focus:bg-orange-500 uppercase text-black font-bold tracking-widest"
        >
          Цааш унших
        </Link>
      </div>

      <div
        ref={imageRef}
        className="min-h-100 max-md:mb-20 md:col-start-8 md:col-span-5 xl:col-start-9 xl:col-span-4 relative"
      >
        <Image
          key={currentPost.id}
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
          isDisabled={isDisabled}
        />
      </div>
    </div>
  )
}
