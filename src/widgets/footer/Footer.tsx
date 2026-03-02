import Link from 'next/link'

export const Footer = ({}) => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 xl:px-16 py-8 space-y-8 bg-[#14110F]">
      <div className="flex justify-between">
        <p className="text-2xl tracking-widest">Үүртэй хамтрах</p>
        <div>
          <Link
            href="/"
            className="rounded-full border-2 p-4 hover:bg-orange-400 focus:bg-orange-500 hover:text-black"
          >
            IG
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-xl md:text-2xl leading-12 tracking-wider">
          © 2026 он. Бүх бичвэрүүд зохиогчийн эрхээр хамгаалагдсан. Бичвэр, дүрслэлийг ашиглахдаа
          заавал эш татна.
        </p>
      </div>
    </footer>
  )
}
