'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const routes: Record<string, string> = {
  posts: 'Нийтлэлүүд',
  seasons: 'Улиралууд',
  topics: 'Сэдвүүд',
  about: 'Бидний тухай',
  '/': 'Нүүр',
  'Bidnii-anzaardaggui-AI-iin-nuutsuud': 'Бидний анзаардаггүй AI-ын нууцууд',
  Jazz: 'Жазз',
  'Suunii-paradoks': 'Сүүний парадокс',
  Tsolmon: 'Цолмон',
  Undariya: 'Ундаръяа',
  Minjinsor: 'Минжинсор',
  'Munkh-Orgil': 'Мөнх-Оргил',
  'Bat-Ireedui': 'Бат-Ирээдүй',
  Ankhmandakh: 'Aнхмандах',
  Amar: 'Aмар',
  Ganbayar: 'Ганбаяр',
  'Gan-Erdene': 'Ган-Эрдэнэ',
}

export const Breadcrumb = () => {
  const pathname = usePathname()

  const segments = pathname.split('/').filter(segment => segment !== '')

  const breadcrumbs = [{ href: '/', label: routes['/'] }]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    const label = routes[segment] || segment
    breadcrumbs.push({ href: currentPath, label })
  }

  return (
    <nav aria-label="Breadcrumb">
      <ul className="gap-2 text-black">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="inline-flex text-xl tracking-wide">
            {index > 0 && <span className="mr-2 text-gray-400">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline inline mr-2">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
