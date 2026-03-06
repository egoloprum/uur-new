import { Button } from '@/src/shared/components'
import { MoveRight } from 'lucide-react'

const posts = [
  {
    name: 'Жазз',
    description:
      'Жазз хөгжмийг Луис Армстронгийн “​​What a Wonderful World” дуугүйгээр төсөөлөхийн аргагүй..',
    author: 'Цолмон',
    releaseDate: '14/03/2026',
  },
  {
    name: 'Жазз',
    description:
      'Жазз хөгжмийг Луис Армстронгийн “​​What a Wonderful World” дуугүйгээр төсөөлөхийн аргагүй..',
    author: 'Цолмон',
    releaseDate: '14/03/2026',
  },
  {
    name: 'Сүүний парадокс',
    description: 'Хүнийг сүү боловсруулдаг болгосон генийн мутаци гэж юу вэ?',
    author: 'Ундаръяа',
    releaseDate: '14/03/2026',
  },
  {
    name: 'Сүүний парадокс',
    description: 'Хүнийг сүү боловсруулдаг болгосон генийн мутаци гэж юу вэ?',
    author: 'Ундаръяа',
    releaseDate: '14/03/2026',
  },
]

export const CurrentSeasonPostsSection = ({}) => {
  return (
    <div className="bg-[#fbfaf2] space-y-8 font-advent-pro">
      <div className="flex flex-col lg:flex-row gap-8 justify-between px-4 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-black font-bold text-4xl uppercase">Энэ улиралын нийтлэлүүд</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-black"></span>
            <span className="text-black tracking-wide uppercase text-nowrap">Шинжлэх ухаан</span>
          </p>
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
            <span className="text-black tracking-wide uppercase text-nowrap">Технологи</span>
          </p>
          <p className="flex gap-2">
            <span className="h-4 w-4 aspect-square rounded-full bg-orange-400"></span>
            <span className="text-black tracking-wide uppercase text-nowrap">Урлаг</span>
          </p>

          <Button mode="primary" href="/posts" className="max-sm:mt-4">
            <span>Бүх нийтлэлүүд</span>
            <MoveRight />
          </Button>
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <li
            className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative"
            key={post.name + post.author + index}
          >
            <div className="absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)] w-full border-x border-gray-400 top-1/2 -translate-y-1/2 left-0" />
            <div className="absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full border-y border-gray-400 top-0 -translate-x-1/2 left-1/2" />
            <div className="space-y-4 z-10">
              <h3 className="text-2xl md:text-4xl font-semibold">{post.name}</h3>
              <p className="text-base md:text-xl">{post.description}</p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 tracking-wide mt-auto z-10">
              <div className="flex gap-2 md:gap-8">
                <span className="h-4 w-4 aspect-square rounded-full bg-indigo-400"></span>
                <p>{post.releaseDate}</p>
                <p className="uppercase">{post.author}</p>
              </div>
              <Button mode="primary" href="/" className="text-xs md:text-sm px-2! py-1!">
                <span>Цааш унших</span>
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
