import Link from 'next/link'

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

export const FuturePostsSection = ({}) => {
  return (
    <div className="bg-[#fbfaf2] min-h-screen space-y-16">
      <div className="flex justify-between px-4 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-black font-bold text-4xl">Энэ улиралын нийтлэлүүд</h2>
        <div className="flex items-center gap-8">
          <p className="flex gap-2">
            <span className="h-4 w-4 rounded-full bg-red-400"></span>
            <span className="text-black tracking-widest uppercase">Шинжлэх ухаан</span>
          </p>
          <p className="flex gap-2">
            <span className="h-4 w-4 rounded-full bg-blue-400"></span>
            <span className="text-black tracking-widest uppercase">Технологи</span>
          </p>
          <p className="flex gap-2">
            <span className="h-4 w-4 rounded-full bg-green-400"></span>
            <span className="text-black tracking-widest uppercase">Урлаг</span>
          </p>

          <Link
            href="/about"
            className="p-4 py-2 border rounded-full w-fit text-black hover:bg-orange-400 font-bold tracking-widest"
          >
            Бүх гишүүд
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-3">
        {posts.map((post, index) => (
          <li
            className="text-black border p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16"
            key={post.name + post.author + index}
          >
            <div className="space-y-4">
              <h3 className="text-4xl">{post.name}</h3>
              <p className="text-xl">{post.description}</p>
            </div>

            <div className="flex gap-8 tracking-widest">
              <span className="h-4 w-4 rounded-full bg-red-400"></span>
              <p>{post.releaseDate}</p>
              <p className="uppercase">{post.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
