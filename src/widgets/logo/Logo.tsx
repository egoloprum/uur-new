import Link from 'next/link'

export const Logo = ({}) => {
  return (
    <Link href="/" className="font-bold uppercase z-10">
      <span className="block text-6xl md:text-8xl tracking-wide text-black">Үүр</span>
      <span className="block text-4xl md:text-6xl tracking-wide text-orange-500">Товхимол</span>
    </Link>
  )
}
