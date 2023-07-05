import Providers from './components/Providers'
import AuthContext from './context/AuthContext'
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
        <AuthContext>
          <Providers>
            {children}
          </Providers>
          <ToasterContext />
        </AuthContext>

      </body>
    </html>
  )
}
