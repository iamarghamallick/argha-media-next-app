import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <body className={inter.className}>
        <Header />
        <div className="container flex flex-col md:flex-row">
          <SideMenu />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
