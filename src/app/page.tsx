import {
  FuturePostsSection,
  HeroSection,
  LatestPostsSection,
  LatestTeamSection,
} from '../widgets/landing'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <hr className="h-0.5" /> */}
      <div className="bg-[#fbfaf2] grid grid-cols-2 py-4 md:py-8 lg:py-12 xl:py-16 border-t border-black">
        <div className="text-black px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-16">
          <p className="text-2xl">Одоогийн улирал: Хүч чадал</p>
          <p className="text-3xl">1/18 - 3/29</p>
        </div>
        <div className="text-black border-l border-black px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-16">
          <p className="text-2xl">Шинэ улирал: Ховор</p>
          <p className="text-3xl">Тун удахгүй</p>
        </div>
      </div>
      <LatestPostsSection />
      <LatestTeamSection />
      <FuturePostsSection />
      <div className="bg-[#fbfaf2] grid grid-cols-2 py-4 md:py-8 lg:py-12 xl:py-16 border-t border-black">
        <p className="text-black px-4 md:px-8 lg:px-12 xl:px-16 text-4xl leading-16 tracking-wide">
          Бид бол сайн дураараа нэгдсэн шинжлэх ухаан, технологи, урлагт хайртай залуус. Монгол
          хэлнийхээ дархлааг хамгаалах зорилгоор бид &quot;ҮҮР&quot; товхимолыг үүсгэн байгуулсан.
          Бид шинжлэх ухаан, технологи, урлагийн талаарх мэдлэгийг монгол хэл дээр судалгаанд
          суурилсан, ойлгомжтой бөгөөд сонирхолтойгоор түгээхийг хичээж байна.
        </p>
      </div>
    </main>
  )
}
