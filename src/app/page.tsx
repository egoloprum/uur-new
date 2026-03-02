import {
  FuturePostsSection,
  HeroSection,
  LatestPostsSection,
  LatestTeamSection,
} from '../widgets/landing'

export default function Home() {
  return (
    <main className="space-y-16 bg-[#fbfaf2]">
      <HeroSection />
      <div className="bg-[#fbfaf2] grid grid-cols-2">
        <div className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative">
          <div className="absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)] w-full border-x top-1/2 -translate-y-1/2 left-0" />
          <div className="absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full border-y top-0 -translate-x-1/2 left-1/2" />
          <p className="text-2xl">Одоогийн улирал: Хүч чадал</p>
          <p className="text-3xl">1/18 - 3/29</p>
        </div>
        <div className="text-black p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-16 relative">
          <div className="absolute h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] lg:h-[calc(100%-6rem)] xl:h-[calc(100%-8rem)] w-full border-x top-1/2 -translate-y-1/2 left-0" />
          <div className="absolute w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[calc(100%-8rem)] h-full border-y top-0 -translate-x-1/2 left-1/2" />
          <p className="text-2xl">Шинэ улирал: Ховор</p>
          <p className="text-3xl">Тун удахгүй</p>
        </div>
      </div>
      <LatestPostsSection />
      <LatestTeamSection />
      <FuturePostsSection />
      <div className="bg-indigo-300 grid lg:grid-cols-2 p-4 md:p-8 lg:p-12 xl:p-16 py-20 relative">
        <p className="text-gray-700 text-2xl sm:text-3xl md:text-4xl sm:leading-12 md:leading-16 tracking-wide z-10">
          Бид бол сайн дураараа нэгдсэн шинжлэх ухаан, технологи, урлагт хайртай залуус. Монгол
          хэлнийхээ дархлааг хамгаалах зорилгоор бид &quot;ҮҮР&quot; товхимолыг үүсгэн байгуулсан.
          Бид шинжлэх ухаан, технологи, урлагийн талаарх мэдлэгийг монгол хэл дээр судалгаанд
          суурилсан, ойлгомжтой бөгөөд сонирхолтойгоор түгээхийг хичээж байна.
        </p>
      </div>
    </main>
  )
}
