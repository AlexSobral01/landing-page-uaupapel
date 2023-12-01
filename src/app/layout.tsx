import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '700'] })

export const metadata: Metadata = {
  title: 'Uau papel',
  description: 'A loja que você está procurando em um único site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
