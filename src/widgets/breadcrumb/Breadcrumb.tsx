'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const routes: Record<string, string> = {
  posts: 'нийтлэлүүд',
  seasons: 'улиралууд',
  topics: 'сэдвүүд',
  about: 'бидний тухай',
  '/': 'нүүр',
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
      <ul className="flex items-center gap-2 text-black">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center capitalize text-xl tracking-wide">
            {index > 0 && <span className="mr-2 text-gray-400">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
