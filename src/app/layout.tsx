import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchForm from '@/components/SearchForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Argha Mallick Photography',
  description: "Capturing life's essence through the art of photography, where every frame tells a unique story",
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} dark:bg-slate-950`}>
        <Header />
        <div className="container flex items-center justify-center">
          <SearchForm />
        </div>
        <div className="container flex flex-col md:flex-row">
          <SideMenu />
          <div className='w-full'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
