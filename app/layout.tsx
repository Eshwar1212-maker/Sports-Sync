
import Providers from './components/Providers'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import ThemeProviders from './context/ThemeProviders'
import ActiveStatus from './calender/components/ActiveStatus'
import { Inter, Roboto_Mono, PT_Sans, Josefin_Sans, Cedarville_Cursive} from 'next/font/google'
 
const inter = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: '700'

})
 
const roboto_mono = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: '600'
})
const cedarville_cursive = Cedarville_Cursive({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cedar',
  weight: '400'
})

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
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>

      <body className={inter.className}>

        <AuthContext>
        <ThemeProviders>
          <Providers>
            <ActiveStatus />
            {children}
          </Providers>
          </ThemeProviders>
          <ToasterContext />
        </AuthContext>


  
   

      </body>
    </html>
  )
}
