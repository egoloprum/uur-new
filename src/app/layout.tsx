import type { Metadata } from 'next'
import { Montserrat, Advent_Pro } from 'next/font/google'
import './globals.css'
import { Footer, Sidebar } from '../widgets'
import { AppProvider } from '../entities'
import { LenisScrollProvider } from '../shared/components'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const adventPro = Advent_Pro({
  subsets: ['cyrillic'],
  variable: '--font-advent-pro',
})

export const metadata: Metadata = {
  title: 'Үүр товхимол',
  description: 'Монгол хэл дээрх шинжлэх ухаан, технологи, урлагийн товхимол',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${adventPro.variable} antialiased`}>
        <LenisScrollProvider>
          <AppProvider>
            {children}
            <Footer />
            <Sidebar />
          </AppProvider>
        </LenisScrollProvider>
      </body>
    </html>
  )
}
