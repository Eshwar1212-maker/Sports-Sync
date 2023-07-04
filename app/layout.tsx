import Providers from './components/Providers'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BasketballFit',
  description: 'Workout/productvity app for basketball players',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
           {children}
        </Providers>
       <ToasterContext />
      </body>
    </html>
  )
}
