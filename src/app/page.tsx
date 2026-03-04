import {
  DescriptionSection,
  FuturePostsSection,
  HeroSection,
  LatestPostsSection,
  LatestTeamSection,
} from '../widgets/landing'

export default function Home() {
  return (
    <main className="space-y-16 bg-[#fbfaf2]">
      <HeroSection />
      <DescriptionSection />
      <FuturePostsSection />
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
