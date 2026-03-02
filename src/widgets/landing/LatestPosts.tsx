'use client'

import { LatestPostsScroll } from '@/src/features/landing'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const posts = [
  {
    id: 1,
    title: 'Хиймэл оюун ухаан',
    description:
      'Хиймэл оюун ухаан нь анхандаа янз бүрийн дүрснүүдийг хооронд нь ялган таних, төрөл бүрийн хэл дээр ойлгох ярилцах, шинэ мэдээллүүдэд суралцан дэвших зэргийг гол зорилгоо болгож байв.',
    image: '/ai.jpg',
    slug: 'jazz',
  },
  {
    id: 2,
    title: 'Жазз',
    description:
      'Жазз хөгжмийг Луис Армстронгийн “​​What a Wonderful World” дуугүйгээр төсөөлөхийн аргагүй..',
    image: '/jazz.png',
    slug: 'jazz',
  },
  {
    id: 3,
    title: 'Сүүний парадокс',
    description: 'Хүнийг сүү боловсруулдаг болгосон генийн мутаци гэж юу вэ?',
    image: '/milk.jpg',
    slug: 'milk',
  },
]

export const LatestPostsSection = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

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
    <div className="bg-indigo-300 min-h-screen p-4 md:p-8 lg:p-12 xl:p-16 grid grid-cols-12">
      <div className="col-span-6 flex flex-col gap-8">
        <p className="uppercase text-black text-lg">Сүүлчийн нийтлэлүүд</p>
        <div className="space-y-4">
          <h3 className="text-4xl text-black font-bold">{currentPost.title}</h3>
          <p className="text-black text-xl">{currentPost.description}</p>
        </div>
        <Link
          href="/posts"
          className="p-4 py-2 border rounded-full w-fit hover:bg-white hover:text-black font-bold tracking-widest"
        >
          Цааш унших
        </Link>

        <div className="mt-auto">
          <LatestPostsScroll
            onPrev={handlePrev}
            onNext={handleNext}
            onToggle={handleToggle}
            isPlaying={isPlaying}
          />
        </div>
      </div>
      <div className="col-start-9 col-span-4 relative">
        <Image src={currentPost.image} className="object-cover" fill alt={currentPost.slug} />
      </div>
    </div>
  )
}
