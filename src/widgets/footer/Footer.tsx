import { Button } from '@/src/shared/components'

export const Footer = ({}) => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 xl:px-16 py-8 space-y-8 bg-[#14110F] font-advent-pro">
      <nav className="flex justify-between items-center">
        <p className="text-xl md:text-2xl tracking-wide">Үүртэй хамтрах</p>
        <div>
          <Button
            href="/"
            mode="clear"
            className="aspect-square text-white w-10! h-10! px-2! border-2 border-white relative"
          >
            <span className="absolute top-1/2 left-1/2 -translate-1/2">IG</span>
          </Button>
        </div>
      </nav>
      <hr />
      <nav>
        <p className="text-sm md:text-xl tracking-wider">
          © 2026 он. Бүх бичвэрүүд зохиогчийн эрхээр хамгаалагдсан. Бичвэр, дүрслэлийг ашиглахдаа
          заавал эш татна.
        </p>
      </nav>
    </footer>
  )
}
